import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
const AddClass = () => {
    const {user}=useAuth();
  const [axiosSecure]=useAxiosSecure();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
      // Perform submission logic here
      
      const {instructorName,className, classImage, instructorEmail,availableSeats , price, status, totalEnrolment}=data;
      const AddClassData={instructorName,className,classImage,instructorEmail,availableSeats:parseFloat(availableSeats),price:parseFloat(price),status, totalEnrolment:parseFloat(totalEnrolment)};
      console.log(AddClassData);
      axiosSecure.post('/addClasses', AddClassData)
      .then(result=>{
        if(result.data.insertedId){
            reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'class added successful',
                showConfirmButton: false,
                timer: 1500
              })
        }
      })
    };
    return (
        <div>
              <Helmet>
              <title>LanguageLadder | AddClass</title>
            </Helmet>
            <h1 className='text-4xl pb-6 font-semibold'>Add Classes</h1>
            <div className='divider text-6xl'> -</div>
             <form className='border-2 p-12 bg-slate-200' onSubmit={handleSubmit(onSubmit)}>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
             <div>
            <div>
        <label className='block text-start font-semibold'>Add your Class Name</label>
        <input placeholder='Add your Class Name' type="text" {...register('className', { required: true })} />
        {errors.className && <span className='text-red-500'>This field is required.</span>}
      </div>

      <div>
        <label className='block text-start font-semibold'>Class Image</label>
        <input placeholder='Enter your class image' type="text" {...register('classImage')} />
      </div>

      <div>
        <label className='block text-start font-semibold'>Instructor name</label>
        <input value={user?.displayName} type="text" {...register('instructorName')} readOnly />
      </div>
            </div>

       <div>
       <div>
        <label className='block text-start font-semibold'>Instructor email</label>
        <input value={user?.email} type="email" {...register('instructorEmail')} readOnly />
      </div>

      <div>
        <label className='block text-start font-semibold'>Available seats</label>
        <input placeholder='Total available set ' type="text" {...register('availableSeats', { required: true, min: 1 })} />
        {errors.availableSeats && <span className='text-red-500'>This field is required and must be at least 1.</span>}
      </div>

      <div>
        <label className='block text-start font-semibold'>Add your Course fee</label>
        <input placeholder='Enter your course fee' type="text" {...register('price', { required: true, min: 0 })} />
        {errors.price && <span className='text-red-500'>This field is required and must be a non-negative number.</span>}
      </div>
       </div>
             </div>
      <input type='hidden' value="pending" {...register('status')}></input>
      <input type='hidden' value='0' {...register('totalEnrolment')}></input>

      <button className='btn btn-primary w-1/2' type="submit">Add Class</button>
    </form>
        </div>
    );
};

export default AddClass;