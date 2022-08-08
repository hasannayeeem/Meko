import React from 'react';

const Review = ({review}) => {
    return (
        <div  className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div  className="card-body">
                <p>{review.review}</p>
                <p className='font-semibold'>Rating: {review.rating}</p>
                <div  className="card-actions items-center mt-6">
                    <div  className="avatar ">
                        <div  className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                            <img src={review.img} alt=""/>
                        </div>
                    </div>
                    <div  className=''>
                        <h4  className='text-xl'>{review.name}</h4>
                        <p><small>{review.location}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;