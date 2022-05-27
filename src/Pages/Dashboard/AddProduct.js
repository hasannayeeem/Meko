import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:1010/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        reset();
    };
    return (
        <div className='w-50 mx-auto py-5'>
            <h2 className='about-h'>Please Add Your Product</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Min-Order Quantity' type="number" {...register("minimumOrderQuantity")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("availableQuantity")} />
                <div className="form-control w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                    </label>
                </div>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                    </label>
                </div>
                <input className="btn w-full max-w-xs text-white" type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;