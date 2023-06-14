import React from 'react';
import { useForm } from 'react-hook-form';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
    const {createUser, updateUserProfile}=useAuth();
    const [axiosSecure]=useAxiosSecure();
    const navigate=useNavigate();
  const { register, handleSubmit, formState: { errors } , getValues, reset} = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const {name, email, address, gender, password, phoneNumber, photoURL, role}=data;

    createUser(email, password)
    .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser);
        updateUserProfile(name, photoURL)
        .then(()=>{
            const SaveUserOnDatabase={name, email, address, gender, password, phoneNumber, photoURL, role};
            axiosSecure.post('/users',SaveUserOnDatabase)
            .then(data=>{
                console.log('database', data);
                if(data.data.insertedId){
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully',
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/');
                }
            })
        })
    })


  };

  return (
   <>
   <Helmet>
               <title>LanguageLadder | SignUp</title>
       
             </Helmet>
     
      <form className='registration-form mx-20 my-8' onSubmit={handleSubmit(onSubmit)}>
        <div className='text-3xl font-semibold'>Welcome To Our Registration Page</div>
        <div className="divider text-4xl text-blue-500">-</div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10'>
        <div>
        <div className="form-group">
        <label className='label'>Name:</label>
        
        <input className='border-slate-700 ' type="text" {...register('name', { required: true })} />
        {errors.name && <span className='error'>This field is required.</span>}
      </div>
      
      <div className="form-group">
        <label className='label'>Email:</label>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <span className='error'>This field is required.</span>}
      </div>
        </div>
      
          <div>
          <div className="form-group">
        <label className='label'>Password:</label>
        <input 
          type="password"
          {...register('password', {
            required: true,
            minLength: 6,
            pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).*$/,
          })}
        />
        {errors.password?.type === 'required' && <span className='error'>This field is required.</span>}
        {errors.password?.type === 'minLength' && (
          <span className='error'>Password must be at least 6 characters long.</span>
        )}
        {errors.password?.type === 'pattern' && (
          <span className='error'>
            Password must have at least one capital letter, one digit, and one special character.
          </span>
        )}
      </div>
      
      <div className="form-group">
        <label className='label'>Confirm Password:</label>
        <input 
          type="password"
          {...register('confirmPassword', {
            required: true,
            validate: (value) => value === getValues('password') || 'The passwords do not match.',
          })}
        />
        {errors.confirmPassword?.type === 'required' && <span className='error'>This field is required.</span>}
        {errors.confirmPassword?.message && <span className='error'>{errors.confirmPassword.message}</span>}
      </div>
          </div>
      
       <div>

       <div className="form-group">
        <label className='label'>Photo URL:</label>
        <input type="text" {...register('photoURL')} />
      </div>
      
      <div className="form-group">
        <label className='label'>Gender:</label>
        <input type="text" {...register('gender')} />
      </div>
       </div>
      
     <div>
     <div className="form-group">
        <label className='label'>Phone Number:</label>
        <input type="text" {...register('phoneNumber')} />
      </div>
      
      <div className="form-group">
        <label className='label'>Address:</label>
        <input type="text" {...register('address')} />
      </div>
      <div className="form-group hidden">
        <label className='label'>Role</label>
        <input defaultValue='student' type="text" {...register('role')} />
      </div>
     </div>
        </div>
      
      <button className="submit-button" type="submit">SignUp</button>
      <p >Already have an account? <Link to='/login'><span className='text-blue-600'>Please login<FaArrowRight className='inline ml-2'></FaArrowRight></span></Link></p>
    </form>
   
   </>
  );
};

export default SignUp;
