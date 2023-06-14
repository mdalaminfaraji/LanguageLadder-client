import React from 'react';
import Slider from './Slider/Slider';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import CountUp from './CountUp/CountUps';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            
            <PopularClass></PopularClass>
            <CountUp></CountUp>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;