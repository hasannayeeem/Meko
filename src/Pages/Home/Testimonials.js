import React, { useState } from 'react';
import quote from '../../assets/icons/quote.svg'
import useReviews from '../hooks/useRevews';
import Review from './Review';
const Testimonials = () => {
    const [reviews] = useReviews();
    
    return (
        <section  className='my-28 lg:px-20 px-10'>
            <div  className='flex justify-between'>
                <div>
                    <h4  className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2  className='text-3xl'>What Our Clients say</h2>
                </div>
                <div>
                    <img src={quote}  className="w-24 lg:w-48" alt=""></img>
                </div>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;