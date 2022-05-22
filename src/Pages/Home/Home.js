import React from 'react';
import Banner from './Banner';
import BussinessSummery from './BussinessSummery';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className='lg:px-12 w-full'>
            <Banner></Banner>
            <Parts></Parts>
            <BussinessSummery></BussinessSummery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;