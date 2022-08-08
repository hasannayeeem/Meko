import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useOrders from '../hooks/useOrders';
import useProductDetail from '../hooks/useProductDetail';
import useUser from '../hooks/useUser';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product] = useProductDetail(productId);
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useUser(user);
    const { role, name: admin } = profile;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { _id, img, description, availableQuantity, minimumOrderQuantity, name, pName, price } = product;
    const [orderQuantity, setOrderQuantity] = useState(minimumOrderQuantity);
    const navigate = useNavigate();
    useEffect(() => {
        setOrderQuantity(minimumOrderQuantity);
    }, [user, _id]);
    const increaseOrderQuantity = (event) => {
        event.preventDefault();
        setOrderQuantity(parseInt(orderQuantity) + 1);
        reset({
            data: "quantity",
        });
    };
    const decreaseOrderQuantity = (event) => {
        event.preventDefault();
        setOrderQuantity(parseInt(orderQuantity) - 1);
        reset({
            data: "quantity",
        });
    };

    const onSubmit = data => {
        if (role === 'admin') {
            reset();
            return alert(`Hello ${admin ? admin : 'mister'}! You are Admin so it's not for you`);

        }
        const url = `http://localhost:1010/order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);


                if (result.success) {
                    alert('your order is successfully done plz pay for deliver');
                    reset();
                    navigate('/dashboard/orders');
                }
                else {
                    alert('try another');
                    reset();
                }
            })

    };

    return (
        <div className="hero min-h-screen bg-base-200 py-12">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className="card-body">
                    <img className='w-72 h-72 hidden  lg:block rounded-xl' src={img} alt={img} />
                    <input type="text" name='uName' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" {...register("email")} />
                    <img className='lg:hidden w-80 h-48 rounded-xl' src={img} alt={img} />
                </div>
                <div className="mt-8">
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <p className="w-6/12 my-1">{description}</p>
                    <p className="my-1">In Stock: {availableQuantity}</p>
                    <p className="">Min-order: {minimumOrderQuantity}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex py-3 items-center'>
                            <FontAwesomeIcon onClick={decreaseOrderQuantity} className='bg-primary p-2 rounded text-white' icon={faMinus}></FontAwesomeIcon>
                            <input type="number" min={minimumOrderQuantity} max={availableQuantity} className="text-center border-none p-1" defaultValue={orderQuantity} placeholder='100' {...register("quantity")} />
                            <button onClick={increaseOrderQuantity}><FontAwesomeIcon className='bg-primary p-2 rounded text-white' icon={faPlus}></FontAwesomeIcon></button>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Your Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address?.message}</span>}
                            </label>
                        </div>
                        <input className='opacity-0 absolute' type="text" defaultValue={name} {...register("pName")} />
                        <input className='opacity-0 absolute' type="email" defaultValue={user.email}  {...register("customer")} />
                        <input className='opacity-0 absolute' type="text" defaultValue={user?.displayName}  {...register("customerName")} />
                        <input className='opacity-0 absolute' type="number" defaultValue={price}  {...register("price")} />
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="number"
                                placeholder="Phone Number"
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone Number is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone?.message}</span>}
                            </label>
                        </div>

                        <input type="submit" className="btn btn-primary rounded w-6/12 font-bold uppercase text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-primary to-secondary" value="checkoout"></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;