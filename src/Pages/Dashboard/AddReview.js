import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:1010/reviews`;
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
        <div className='w-100 mx-auto py-5'>
            <h2 className='text-xl mb-2 font-semibold text-accent'>Add Your Review</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
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
                    <input
                        type="text"
                        placeholder="Your Address"
                        className="input input-bordered w-full max-w-xs"
                        {...register("location", {
                            required: {
                                value: true,
                                message: 'Address is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location?.message}</span>}
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
                        placeholder='write your review'
                        className="input input-bordered w-full max-w-xs"
                        {...register("review", {
                            required: {
                                value: true,
                                message: 'description is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review?.message}</span>}
                    </label>
                </div>
                <input className="btn w-full max-w-xs bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-primary to-secondary text-white" type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;