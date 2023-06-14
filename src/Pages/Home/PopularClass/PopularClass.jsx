import React, { useEffect, useState } from 'react';
import useClasses from '../../../Hooks/useClasses';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const PopularClass = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [classes, setClasses] = useState([]);
 
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    useEffect(() => {
    
     setTimeout(() => {
      
       fetch('http://localhost:5000/Classes')
         .then((response) => response.json())
         .then((data) => {
           setClasses(data);
           setIsLoading(false);
         })
         .catch((error) => console.log(error));
     }, 500); 
   }, []);
    console.log(classes.slice(0,6));
    return (
        <div>
            <h2 className='text-4xl font-semibold'>Our Popular Classes</h2>
            <div className='divider w-1/2 mx-auto text-4xl'>-</div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    classes.slice(0, 6).map(classItem=><div
                    key={classItem._id} data-aos="flip-right"
                    className="card shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={classItem.classImage} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Class:{classItem.className}!</h2>
                      <p>Instructor: {classItem.instructorName}</p>
                      <p>{classItem.instructorEmail}</p>
                      <div className="card-actions">
                        <Link to="/classes" className="btn btn-sm btn-primary">Visit Classes</Link>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default PopularClass;