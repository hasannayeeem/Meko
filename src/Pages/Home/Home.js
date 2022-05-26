import React from 'react';
import Banner from './Banner';
import BusinessSummury from './BusinessSummury';
import Offer from './Offer';
import Product from './Product';
import Products from './Products';
import SecondaryBanner from './SecondaryBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Products></Products>
            <SecondaryBanner></SecondaryBanner>
            <BusinessSummury></BusinessSummury>
        </div>
    );
};

export default Home;