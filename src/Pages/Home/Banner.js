import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://cdn.shopify.com/s/files/1/0046/1769/9457/files/bg1.jpg?v=1594367238" className="w-full"/> 
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://cdn.shopify.com/s/files/1/0046/1769/9457/files/bg3.jpg?v=1594367308" className="w-full"/> 
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="	https://cdn.shopify.com/s/files/1/0046/1769/9457/files/bg2.jpg?v=1594367295" className="w-full"/> 
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://cdn.shopify.com/s/files/1/0046/1769/9457/files/bg4.jpg?v=1594367493" className="w-full"/> 
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
            </div>
        </div>
    );
};

export default Banner;