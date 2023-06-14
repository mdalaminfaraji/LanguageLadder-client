import React, { useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../Images/banner1.png';
import banner2 from '../../../Images/banner2.png';
import banner3 from '../../../Images/banner3.png';
import banner4 from '../../../Images/banner4.png';
import banner5 from '../../../Images/banner5.png';
import banner15 from '../../../Images/banner15.png';
import banner14 from '../../../Images/banner14.png';
import banner16 from '../../../Images/banner16.jpg';
import banner17 from '../../../Images/banner17.jpg';
import { Player } from '@lottiefiles/react-lottie-player';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper";
const Slider = () => {
    return (
        <>
        <div className=''>
      
             <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>{<img src={banner17}/>}</SwiperSlide>
        <SwiperSlide>{<img src={banner16}/>}</SwiperSlide>
        <SwiperSlide>{<img src={banner4}/>}</SwiperSlide>
        <SwiperSlide>{<img src={banner2}/>}</SwiperSlide>
        <SwiperSlide>{<img src={banner3}/>}</SwiperSlide>
        <SwiperSlide>{<img src={banner14}/>}</SwiperSlide>
        <SwiperSlide>{<img src={banner1}/>}</SwiperSlide>
        <SwiperSlide>{<img src={banner15}/>}</SwiperSlide>
        <SwiperSlide>{<img src={banner5}/>}</SwiperSlide>
       
      </Swiper>



        </div>
        </>
    );
};

export default Slider;