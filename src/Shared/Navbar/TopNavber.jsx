import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaMoon, FaPhone, FaSun } from 'react-icons/fa';
import useToggle from '../../Hooks/useToggle';

const TopNavber = ({toggleTheme, darkMode}) => {
 
 
    return (
        <div>
            <div >
          <div className="mx-auto -mt-7 grid w-full max-w-full grid-cols-4 gap-6 py-2 px-6 text-sm text-slate-500 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-2 relative items-start md:col-span-4 lg:col-span-6">
              <div className='inline-flex items-center absolute left-0'>
                <FaPhone className='mr-2'></FaPhone>
                 01709876546
              </div>
              
            </div>
            <div className="col-span-2 items-center justify-end gap-6 md:col-span-4 lg:col-span-6">
              <div className="flex items-center  justify-end gap-4">
               
              <FaFacebook></FaFacebook>
              <FaInstagram></FaInstagram>
              <FaLinkedin></FaLinkedin>
              
              <button className='btn btn-xs ' onClick={toggleTheme}>
                {darkMode?<FaSun></FaSun>:<FaMoon></FaMoon>}
                
              </button>
              
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default TopNavber;