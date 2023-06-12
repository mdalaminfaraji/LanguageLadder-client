import React, { useEffect, useState } from 'react';
import useUsers from '../../Hooks/useUsers';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Instructors = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [instructors, setInstructors] =useState([]);
    // const [axiosSecure]=useAxiosSecure();
    // const {refetch, data:instructors=[]}=useQuery({
    //     queryKey:['users'],
    //     enabled:!loading,
    //     queryFn: async ()=>{
    //         const res=await axiosSecure(`/instructors`);
    //         console.log('axios',res);
    //         return res.data;
    //     },
    // })
    
    useEffect(() => {
        // Fetch the approved classes data from the backend
        setTimeout(()=>{
         fetch('http://localhost:5000/instructors')
          .then((response) => response.json())
          .then((data) => {
            setInstructors(data);
            setIsLoading(false);
        })
          .catch((error) => console.log(error));

        },1000)
       
      }, []);
   
    return (
        <div>
            <p>Instructor Page</p>

               { isLoading ?<span className="loading loading-spinner loading-md"></span>:null}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mb-5'>
            {
                instructors.map(person=><div key={person._id} className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={person.photoURL} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Name: {person.name}!</h2>
                  <p>Email: {person.email}</p>
                  <p className='capitalize'>Role: {person.role}</p>
                  <p className='capitalize'>Address: {person.address}</p>
                
                </div>
              </div>
              )
            }


            </div>

        
        </div>
    );
};

export default Instructors;