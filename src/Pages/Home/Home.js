import React from 'react';
import Banner from './Banner';
import Offer from './Offer';
import SecondaryBanner from './SecondaryBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <SecondaryBanner></SecondaryBanner>
        </div>
    );
};

export default Home;