import React from 'react';
import Banner1 from '../../assets/images/Banner1.png';

const SecondaryBanner = () => {
    return (
        <div  style={{
            background: `url(${Banner1})`
        }} className="hero bg-no-repeat bg-cover px-12">
            <div  className="hero-content  flex-col lg:flex-row-reverse">
                <div  className='p-18 w-50 text-white lg:ml-96 h-96'>
                    <h1  className="text-5xl font-bold text-accent">Raise Your Hand</h1>
                    <h1  className="text-5xl font-bold text-white">Product your self from dangerous virus <span className='text-accent'>(And Flues)</span></h1>
                    <p  className="py-4 font-semibold">You can choose how you will receive and consume information about the outbreak. Another way to care for yourself.</p>
                    <button  className="btn btn-primary font-bold uppercase text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-primary to-secondary">Get Started</button>
                </div>
                <div  className="max-w-sm w-50 lg:mr-48 h-96 rounded-lg shadow-2xl m-12" >a</div>
            </div>
        </div>
    );
};

export default SecondaryBanner;