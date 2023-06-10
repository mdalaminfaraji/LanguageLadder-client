import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../Images/banner1.png';
import banner2 from '../../../Images/banner2.png';
import banner3 from '../../../Images/banner3.png';
import banner4 from '../../../Images/banner4.png';
import banner5 from '../../../Images/banner5.png';
import banner15 from '../../../Images/banner15.png';
import banner14 from '../../../Images/banner14.png';
import { Player } from '@lottiefiles/react-lottie-player';

const Slider = () => {
    return (
        <>
        <div className=''>
            {/* <div className='w-1/2' style={{backgroundImage:`url(${banner11})`,backgroundSize:'cover'}}> */}
            <Carousel>
             
             <div className='opacity-200'>
                 <img src={banner4} />
                 
             </div>
             <div>
                 <img src={banner2} />
                
             </div>
             <div>
                 <img src={banner3} />
                
             </div>
             <div>
                 <img src={banner14} />
               
             </div>
             <div>
                 <img src={banner5} />
                
             </div>
             <div>
                 <img src={banner1} />
                
             </div>
         </Carousel>
            
            {/* </div> */}
            {/* <div>
            <Player
        src='https://assets3.lottiefiles.com/packages/lf20_7p6kyzmg.json'
        className="player w-1/2]"
        loop
        autoplay
       
        />
            </div> */}
        </div>
        </>
    );
};

export default Slider;