import React from 'react';
import Review from './Review';
import Testimonials from './Testimonials';
import Banner from './Banner';
import BusinessSummury from './BusinessSummury';
import Offer from './Offer';
import Product from './Product';
import Products from './Products';
import SecondaryBanner from './SecondaryBanner';
import Subscribe from './Subscribe';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Products></Products>
            <SecondaryBanner></SecondaryBanner>
            {/* <Projects></Projects> */}
            <Testimonials></Testimonials>
            <Subscribe></Subscribe>
            <BusinessSummury></BusinessSummury>
        </div>
    );
};

export default Home;