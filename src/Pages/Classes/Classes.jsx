import React, { useEffect, useState } from 'react';

import useClasses from '../../Hooks/useClasses';
import ClassCard from './ClassCard';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';

const Classes = () => {
    const {user}=useAuth();
    const [isLoading, setIsLoading] = useState(true);
   const [classes, setClasses] = useState([]);

 
   useEffect(() => {
   
    setTimeout(() => {
     
      fetch('http://localhost:5000/approvedClass')
        .then((response) => response.json())
        .then((data) => {
          setClasses(data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }, 500); 
  }, []);
    
    //   if(Load){
    //     return <progress className="progress w-full"></progress>
    //   }
    return (
        <div>
            <h1 className='text-4xl my-5'>All Classes data</h1>
            <p className='divider text-green-800 text-5xl w-1/2 mx-auto'>-</p>
            {isLoading? <span className="loading loading-spinner loading-xs"></span> : null}

            <div className='grid my-5 grid-cols-1 md:grid-cols-2 gap-10'>

                {
                     classes.map((item, index) => <ClassCard key={item._id} item={item}></ClassCard>
                   
                     )
                }
            </div>
        </div>
    );
};

export default Classes;