import React from 'react';
import Banner1 from '../../assets/images/Banner1.png';

const SecondaryBanner = () => {
    return (
        <div  style={{
            background: `url(${Banner1})`
        }} className="hero max-h-max px-12">
            <div  className="hero-content flex-col lg:flex-row-reverse">
                <div  className="max-w-sm w-50 h-auto rounded-lg shadow-2xl m-12" ></div>
                <div  className='p-18'>
                    <h1  className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p  className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button  className="btn btn-primary font-bold uppercase text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default SecondaryBanner;