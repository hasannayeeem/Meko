import React from 'react';
import OfferCard from './OfferCard';
import offer1 from '../../assets/images/offer1.png'
import offer2 from '../../assets/images/offer2.webp'
import offer3 from '../../assets/images/offer3.png'
// import { Link } from 'react-router-dom';
const Offer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div style={{
                background: `url(${offer1})`
            }}
            className={`card lg:card-side bg-base-100 shadow-xl`}>
                <div className="card-body text-white">
                    <h2 className="card-title">20% OFF</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div style={{
                background: `url(${offer2})`
            }}
            className={`card lg:card-side  shadow-xl`}>
                <div className="card-body text-white">
                    <h2 className="card-title">Save 20%</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div style={{
                background: `url(${offer3})`
            }}
                className={` h-96 shadow-xl`}>
                <div className="card-body text-white">
                    <h2 className="text-5xl text-black font-bold">Big Sale</h2>
                    <h2 className="text-5xl text-white font-bold">Babe Diabers</h2>
                    <p>save upTo 20%</p>
                    <a href="#">Shop Now</a>
                </div>
            </div>
        </div>
    );
};

export default Offer;