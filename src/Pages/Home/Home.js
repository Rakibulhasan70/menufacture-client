import React from 'react';
import Banner from './Banner';
import BussinessSummery from './BussinessSummery';
import EidOffer from './EidOffer';
import Parts from './Parts';
import Query from './Query';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='lg:px-12 w-full'>
                <Parts></Parts>
                <BussinessSummery></BussinessSummery>
                <Reviews></Reviews>
                <Query></Query>
                <EidOffer></EidOffer>
            </div>
        </div>
    );
};

export default Home;