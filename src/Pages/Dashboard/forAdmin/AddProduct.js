import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://ancient-bayou-13762.herokuapp.com/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(inserted => {
                if(inserted.insertedId){
                    toast.success('Product added successfully')
                    reset();
                }
                else{
                    toast.error('Failed to add the Product');
                    reset();
                }
            })
    };

    return (
        <div className='w-full '>
            <div className='lg:w-4/12 border shadow-md lg:mx-40 mx-2 my-4 px-8 py-5'>
            <h2 className='text-xl font-semibold text-accent'>Please Add Your Product</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Product Name"
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
                    <input
                        type="number"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price?.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input
                        type="number"
                        placeholder="Minimum Order Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minimumOrderQuantity", {
                            required: {
                                value: true,
                                message: 'minimum quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.minimumOrderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrderQuantity?.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input
                        type="number"
                        placeholder="Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: 'quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity?.message}</span>}
                    </label>
                </div>
                
                <div className="form-control w-full max-w-xs">
                    <input
                        type="text"
                        placeholder='PHOTO URL'
                        className="input input-bordered w-full max-w-xs"
                        {...register("img", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img?.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <textarea
                        type="text"
                        placeholder='Description'
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'description is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description?.message}</span>}
                    </label>
                </div>
                <input className="btn w-full max-w-xs text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-primary to-secondary" type="submit" value="Add Product" />
            </form>
        </div>
        </div>
    );
};

export default AddProduct;