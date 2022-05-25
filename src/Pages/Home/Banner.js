import React from 'react';

const Banner = () => {
    return (
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <img src="https://cdn.shopify.com/s/files/1/0046/1769/9457/files/bg1.jpg?v=1594367238" class="w-full"/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src="https://cdn.shopify.com/s/files/1/0046/1769/9457/files/bg3.jpg?v=1594367308" class="w-full"/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img src="	https://cdn.shopify.com/s/files/1/0046/1769/9457/files/bg2.jpg?v=1594367295" class="w-full"/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
                <img src="https://cdn.shopify.com/s/files/1/0046/1769/9457/files/bg4.jpg?v=1594367493" class="w-full"/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
            </div>
        </div>
    );
};

export default Banner;