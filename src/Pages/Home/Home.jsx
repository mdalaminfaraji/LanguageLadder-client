import React from 'react';
import Slider from './Slider/Slider';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import CountUp from './CountUp/CountUps';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
             <Helmet>
               <title>LanguageLadder | Home</title>
       
             </Helmet>
            <Slider></Slider>
            
            <PopularClass></PopularClass>
            <CountUp></CountUp>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;