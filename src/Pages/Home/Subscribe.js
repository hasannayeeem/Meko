import React from 'react';

const Subscribe = () => {
    return (
        <div className='bg-gray-50 flex-col align-middle justify-center w-full text-center py-28'>
            <h1 className='text-3xl text-black font-semibold tracking-widest'>SUBSCRIBE NEWSLETTER</h1>
            <p className='py-10 text-black'>Subscribe and get in touch with us and get regular updates from us</p>
            <div className='lg:flex lg:gap-5 text-center mx-auto justify-center'>
                <input type="text" className='bg-white p-2  lg:w-64 border border-black' placeholder='Enter your email.'/>
                <button className='btn btn-primary    sm:block rounded-none font-bold uppercase text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-secondary to-primary'>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;