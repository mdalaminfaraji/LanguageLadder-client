import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const MyClasses = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
 
    const [updatedClass, setUpdatedClass] = useState(null);
    
    const [showModal, setShowModal] = useState(false);
    const {user, loading}=useAuth();
    const [axiosSecure]=useAxiosSecure();
    const {refetch, data:classes=[]}=useQuery({
        queryKey:['users', user?.email],
        enabled:!loading,
        queryFn: async ()=>{
            const res=await axiosSecure(`/classes/${user?.email}`);
            console.log('axios',res);
            return res.data;
        },
    })
    const handleUpdate= (Id) => {
       setUpdatedClass({});
        const specificClass=classes.filter(item=>item._id==Id);
        
        console.log(specificClass[0]);
        setUpdatedClass(specificClass[0]);
        setShowModal(true);
       
      };
 
      const onSubmit = data => {
        console.log(data)
        const {availableSeats, classImage, className, price, id }=data;
        const updateClass={availableSeats:parseFloat(availableSeats), classImage, className, price:parseFloat(price)};
        console.log(updateClass);
        axiosSecure.patch(`/classes/${id}`,updateClass)
        .then(res=>{
            console.log(res.data);
           
            if(res.data.modifiedCount > 0){
                setUpdatedClass(null);
                setShowModal(false);
                refetch();
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'class Update successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    };


     
    return (
        <div >
            <div >
      <h2 className='text-3xl py-5 font-semibold'>My Classes</h2>
       <div className='divider text-6xl'> - </div>
      {classes.length === 0 ? (
        <p>No classes available</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table border-4">
          <thead className='text-lg'>
            <tr>
              <th>Class Name</th>
              <th>Status</th>
              <th>Total Enrolled Students</th>
              <th className='text-center'>Feedback</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem._id}>
                <td>{classItem.className}</td>
                <td>{classItem.status}</td>
                <td className='text-center'>{classItem?.totalEnrolledStudents==null?0:classItem.totalEnrolledStudents}</td>
                <td className='text-center'>{classItem.status === 'denied' ? classItem.feedback : '-'}</td>
                <td>
                    <button onClick={()=>handleUpdate(classItem._id)} className='btn btn-primary btn-sm'>Update</button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        
      )}
  



    </div>

    {/* <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button> */}
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Update Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                   {

                   }
                  <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Class Name
                    </label>
                    <input   {...register("className")} placeholder='Enter Course Name' className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Image Url
                    </label>
                    <input placeholder='Enter Image url' {...register("classImage")}   className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Course Fee
                    </label>
                    <input placeholder='Enter course price'{...register("price")}  className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                    Available Seats
                    </label>
                    <input placeholder='Enter available set' {...register('availableSeats')}   className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <input defaultValue={updatedClass._id} {...register('id')} className="hidden shadow appearance-none border rounded w-full py-2 px-1 text-black" ></input>
                    <button className="text-white mt-5 bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="submit">Update Class</button>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {/* <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    

        </div>
    );
};

export default MyClasses;