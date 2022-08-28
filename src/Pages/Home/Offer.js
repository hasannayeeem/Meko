import React from 'react';
import OfferCard from './OfferCard';
import offer1 from '../../assets/images/offer1.png'
import offer2 from '../../assets/images/offer2.webp'
import offer3 from '../../assets/images/offer3.png'
// import { Link } from 'react-router-dom';
const Offer = () => {
    return (
        <div className='grid grid-cols-1 py-12 mx-auto px-8 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div style={{
                background: `url(${offer1})`
            }}
                className={`card lg:card-side bg-base-100 shadow-xl`}>
                <div className="card-body text-white">
                    <h1 className="text-3xl text-black font-bold">20% Off</h1>
                    <h1 className="text-4xl text-white font-bold">Hand Wipes</h1>
                    <p className='mb-5 text-xl'>Dont miss your chance to be the first !</p>
                    <a href="/products" className='text-xl'>Shop Now</a>
                </div>
            </div>
            <div style={{
                background: `url(${offer2})`
            }}
                className={`card lg:card-side  shadow-xl`}>
                <div className="card-body text-white">
                    <h1 className="card-title text-5xl text-black">Save 20%</h1>
                    <h1 className='text-primary text-3xl'>On Every Order</h1>
                    <p className='text-black mb-5 text-xl'>Medical Supplies and Equipment</p>
                    <a href='/products' className=' text-white bg-gradient-to-l from-secondary to-primary hover:bg-gradient-to-r from-primary to-secondary text-xl inline-block p-3 rounded-full w-40 text-center'>Shop Now</a>
                </div>
            </div>
            <div style={{
                background: `url(${offer3})`
            }}
                className={`lg:card-side h-96 rounded-xl shadow-xl`}>
                <div className="card-body text-white">
                    <h1 className="text-3xl text-black font-bold">Big Sale</h1>
                    <h1 className="text-4xl text-white font-bold">Babe Diabers</h1>
                    <p className='mb-5 text-xl'>Save upto 20%</p>
                    <a href="/products" className='text-xl'>Shop Now</a>
                </div>
            </div>
        </div>
    );
};

export default Offer;