import React from 'react';
import notFouond from '../../assets/images/notfound.png'
const NotFound = () => {
    return (
        <div>
            <h2 className='text-red-500 font-bold'>The page you are looking For is Not Available </h2>
            {/* <img src={notFouond} width="50%" height="50%" alt=''></img> */}

            <div className="carousel carousel-center rounded-box">
                <div className="carousel-item">
                    <img src={notFouond} alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src={notFouond} alt="Pizza" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;