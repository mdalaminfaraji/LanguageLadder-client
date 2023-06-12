import React, { useState } from 'react';
import useClasses from '../../../Hooks/useClasses';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
const ManageClasses = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [showModal, setShowModal] = useState(false);
    const [Id, setId]=useState('');
    const [classes, refetch]=useClasses();
    const [axiosSecure]=useAxiosSecure();
    const handleApprove=(id)=>{
        try{
           axiosSecure.patch(`/classes/admin/${id}`,{status:'approved'})
           .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class Approved successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            
           })
          
        }catch(error){
            console.log('Error updating user role:', error);
        }
        
    }
  
    const handleDeny=(id)=>{
        try{
           axiosSecure.patch(`/classes/admin/${id}`,{status:'denied'})
           .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class Denied successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            
           })
          
        }catch(error){
            console.log('Error updating user role:', error);
        }
        
    }
  
        const handleFeedBack=(id)=>{
            setId(id);
            setShowModal(true);
        }
        const onSubmit=(data)=>{
            console.log(data);
            const {feedback, id}=data;
            try{
                axiosSecure.patch(`/classes/admin/${id}`,{feedback:feedback})
                .then(res=>{
                 console.log(res.data);
                 if(res.data.modifiedCount>0){
                     refetch();
                     reset();
                     Swal.fire({
                         position: 'top-end',
                         icon: 'success',
                         title: 'Class Feedback successful',
                         showConfirmButton: false,
                         timer: 1500
                       })
                 }
                 
                })
               
             }catch(error){
                 console.log('Error updating user role:', error);
             }
             
            setShowModal(false);
        }
 
    return (
        <div className="overflow-x-auto">
            <h1 className='text-4xl my-2 font-semibold'>Manage Class </h1>
            <div className='divider text-6xl'>-</div>
  <table className="table border-4">
    {/* head */}
    <thead className='text-md'>
      <tr>
        <th>
        Class Image
        </th>
        <th>Class Name</th>
        <th>Instructor Name</th>
        <th>Instructor email</th>
        <th>Available seat</th>
        <th>Price</th>
        <th>Status</th>
        <th>Button</th>
      </tr>
    </thead>
    <tbody>
      {
         classes.map(item=>  <tr key={item._id}>
       
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.classImage} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
              {item.className}
            </td>
            <td>
             {item.instructorName}
            </td>
            <td>{item.instructorEmail}</td>
            <td>{item.availableSeats}</td>
            <td>{item.price}</td>
            <td>{item.status}</td>
            <td>
              <button disabled={item.status!=='pending'} onClick={()=>handleApprove(item._id)} className="btn btn-primary my-1 btn-xs">Approve</button>
              <button onClick={()=>handleDeny(item._id)} disabled={item.status!=='pending'} className="btn btn-primary btn-xs">Deny</button>
              <button onClick={()=>handleFeedBack(item._id)} className="btn btn-primary my-1 btn-xs">feedback</button>
              
            </td>
          </tr> )
      }
    
 
     
    </tbody>

    
  </table>
  {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Please Write FeedBack</h3>
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
            
                  <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">

                    <input  placeholder='Please write feedback' {...register('feedback')}   className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <input defaultValue={Id} {...register('id')} className="hidden shadow appearance-none border rounded w-full py-2 px-1 text-black" ></input>
                    <button className="text-white mt-5 bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="submit">Add FeedBack</button>
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
 
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
</div>
    );
};

export default ManageClasses;