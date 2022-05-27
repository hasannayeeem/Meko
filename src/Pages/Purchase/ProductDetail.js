import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useProductDetail from '../hooks/useProductDetail';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product] = useProductDetail(productId);
    const [user] = useAuthState(auth);
    const { _id, name, description, availableQuantity, minimumOrderQuantity, price } = product;
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-6">{description}</p>
                    <p className="py-6">In Stock: {availableQuantity}</p>
                    <p className="py-6">Min-order{minimumOrderQuantity}</p>
                    <div className='flex'>
                    <button className="btn btn-default"><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
                           <input type="number" min="100" name="quantity" className="text-center" value={minimumOrderQuantity}/>
                           <button className="btn btn-default"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                    </div>
                   
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div> */}
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email'  disabled value={user?.email || ''} placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;