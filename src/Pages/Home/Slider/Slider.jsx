import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../Images/banner1.png';
import banner2 from '../../../Images/banner2.png';
import banner3 from '../../../Images/banner3.png';
import banner4 from '../../../Images/banner4.png';
import banner5 from '../../../Images/banner5.png';
import banner11 from '../../../Images/banner11.png';

const Slider = () => {
    return (
        <Carousel>
             
                <div className='opacity-200'>
                    <img src={banner11} />
                    
                </div>
                <div>
                    <img src={banner2} />
                   
                </div>
                <div>
                    <img src={banner3} />
                   
                </div>
                <div>
                    <img src={banner4} />
                  
                </div>
                <div>
                    <img src={banner5} />
                   
                </div>
                <div>
                    <img src={banner1} />
                   
                </div>
            </Carousel>
    );
};

export default Slider;