import React, { useEffect, useState } from 'react';
import { FaAddressBook, FaEnvelope } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
const PopularInstructor = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [Instructors, setInstructor] = useState([]);
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  
    useEffect(() => {
    
     setTimeout(() => {
      
       fetch('http://localhost:5000/instructors')
         .then((response) => response.json())
         .then((data) => {
           setInstructor(data);
           setIsLoading(false);
         })
         .catch((error) => console.log(error));
     }, 1000); 
   }, []);
// console.log(Instructors);
    return (
        <div>
             <h2 className='text-4xl font-semibold mt-10'>Our Popular Instructor</h2>
            <div className='divider w-1/2 mx-auto text-4xl'>-</div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    Instructors.slice(0,6).map(instructor=><div
                    key={instructor._id} data-aos="zoom-in-up"
                    className="card  shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={instructor.photoURL} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Name: {instructor.name}!</h2>
                      <p className='inline-flex items-center'>Address: {instructor.address}</p>
                      <p className='inline-flex items-center'>Email: {instructor.email}</p>
                      
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;