import React, { useEffect, useState } from 'react';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import useSelectclass from '../../Hooks/useSelectclass';

const ClassCard = ({item}) => {
  const [refetch, selectClass]=useSelectclass()
  const {user}=useAuth();
  const [isAdmin]=useAdmin();
  const [isInstructor]=useInstructor();
const studentEmail=user?.email;
  const handleSelect = (item) => {
    const {_id,availableSeats,classImage, className,instructorName,price, instructorEmail, status, totalEnrolment}=item;
    const selectClass={studentEmail,selectClassid:_id,availableSeats,classImage, className,instructorName,price, instructorEmail, status, totalEnrolment}
    if (!user) {
      Swal.fire({
        position: 'center',
        // icon: 'success',
        title: 'Please Login Before Selecting The Course.',
        showConfirmButton: false,
        timer: 2000
      })
      return;
    }
    console.log(selectClass);
    fetch('https://summer-camp-server-flame.vercel.app/selectClass', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selectClass, _id, studentEmail}),
    })
    .then(res=>{
      refetch();
      if(res.ok){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Selected successful',
          showConfirmButton: false,
          timer: 2000
        })
      }
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
  };
    return (
        <div className={`card  card-side shadow-xl  ${item.availableSeats===0?'bg-red-600':''}`}>
                     <figure><img src={item.classImage} className='w-60' alt="Movie"/></figure>
                     <div className="card-body">
                       <h2 className="text-xl font-bold text-start"><span></span>{item.className}!</h2>
                       <p className='text-start'><span className='text-start'>Instructor: </span>{item.instructorName}</p>
                       <p className='text-start'><span>AvailableSeats:</span> {item.availableSeats}</p>
                       <p className='text-start'>Price: ${item.price}</p>
                       <div className="card-actions justify-end">
                         <button disabled={isAdmin|| isInstructor|| item.availableSeats===0} onClick={()=>handleSelect(item)} className="btn btn-primary">Select Course</button>
                       </div>
                     </div>
                   </div>
    );
};

export default ClassCard;