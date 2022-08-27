import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://cdn.shopify.com/s/files/1/0046/1769/9457/files/bg1.jpg?v=1594367238" className="max-w-full h-96" alt='' />
                <div className='absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2'>
                    <div className='mx-auto w-full'>
                        <div className='w-6/12 lg:pl-32 mx-auto'>
                            <h1 className='lg:text-6xl text-2xl font-sans text-end font-bold text-accent ml-5'><span className='lg:my-6 '>Doctors Prescribe</span> <br /> <span className='lg:my-6 inline-block'>Meko Products</span></h1>
                            <p className='lg:text-xl text-accent lg:mb-6 ml-5'>Browse through a variety of Products from MEKO</p>
                            <a href='/' className='transition duration-0 hover:duration-700 ease-in-out text-white bg-gradient-to-l from-secondary to-primary hover:bg-gradient-to-r from-primary to-secondary ml-5 bg-primary rounded-full lg:p-3 p-1 mt-1 px-5 inline-block '>More Details</a>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle  text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-primary to-secondary">❮</a>
                    <a href="#slide2" className="btn btn-circle  text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-primary to-secondary">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://cdn.shopify.com/s/files/1/0046/1769/9457/files/bg3.jpg?v=1594367308" className="max-w-full" />
                <div className='absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2'>
                    <div className='mx-auto w-full'>
                        <div className='w-6/12 lg:pl-32 mx-auto'>
                            <h1 className='lg:text-6xl font-sans text-end font-bold text-accent ml-5'><span className='lg:my-6 '>Virus Protection </span> <br /> <span className='lg:my-6 inline-block'>Gears @15% Off </span></h1>
                            <p className='lg:text-xl text-accent lg:mb-6 my-2 ml-5'> Get the basic testing set @ $7.99  </p>
                            <a href='/' className='transition duration-0 hover:duration-700 ease-in-out text-white bg-gradient-to-l from-secondary to-primary hover:bg-gradient-to-r from-primary to-secondary ml-5 bg-primary rounded-full lg:p-3 p-1 mt-1 px-5 inline-block '>More Details</a>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle  text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-primary to-secondary">❮</a>
                    <a href="#slide3" className="btn btn-circle  text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-primary to-secondary">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="	https://cdn.shopify.com/s/files/1/0046/1769/9457/files/bg2.jpg?v=1594367295" className="w-full" />
                <div className='absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2'>
                    <div className='mx-auto text-center w-full'>
                        <div className='w-8/12 mx-auto'>
                            <h1 className='lg:text-5xl text-2xl font-sans font-bold text-accent'><span className='lg:my-6'>Oximeter @ Special </span> <br /> <span className='lg:my-6 inline-block'>Price  </span></h1>
                            <p className='text-xl text-accent mb-6'>Browse through a variety of Products from MEKO </p>
                            <a href='/' className='transition duration-0 hover:duration-700 ease-in-out text-white bg-gradient-to-l from-secondary to-primary hover:bg-gradient-to-r from-primary to-secondary ml-5 bg-primary rounded-full lg:p-3 p-1 mt-1 px-5 inline-block '>More Details</a>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle  text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-primary to-secondary">❮</a>
                    <a href="#slide4" className="btn btn-circle  text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-primary to-secondary">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://cdn.shopify.com/s/files/1/0046/1769/9457/files/bg4.jpg?v=1594367493" className="max-w-full" />
                <div className='absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/2'>
                    <div className='lg:mr-auto w-full'>
                        <div className='w-8/12 lg:pl-32'>
                            <h1 className='lg:text-6xl font-sans text-end font-bold text-accent ml-5'><span className='lg:my-6 '>Clinical Equipments </span> <br /> <span className='lg:my-6 inline-block'>Stellar Price</span></h1>
                            <p className='lg:text-xl text-accent mb-6 ml-5'>Dual Frequency Stethoscope Starts from $12.99  </p>
                            <a href='/' className='transition duration-0 hover:duration-700 ease-in-out text-white bg-gradient-to-l from-secondary to-primary hover:bg-gradient-to-r from-primary to-secondary ml-5 bg-primary rounded-full lg:p-3 p-1 mt-1 px-5 inline-block '>More Details</a>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle  text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-primary to-secondary">❮</a>
                    <a href="#slide1" className="btn btn-circle  text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-primary to-secondary">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;