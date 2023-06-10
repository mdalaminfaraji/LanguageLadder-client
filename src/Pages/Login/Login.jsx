import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Login.css'; // Import the CSS file for the component
import { FaEye, FaEyeSlash, FaGoogle} from 'react-icons/fa';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signIn, googleSignIn}=useAuth();
    const [axiosSecure]=useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } , reset} = useForm();

  const onSubmit = (data) => {
    const {email, password}=data;
    console.log(data);
    signIn(email, password)
    .then(result=>{
        const user=result.user;
        console.log(user);
        reset();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login Success',
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from, { replace: true });
    })
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleGoogleLogin=()=>{
      googleSignIn()
      .then(result=>{
        const loggedInUser=result.user;
        console.log(loggedInUser);
        const {displayName, email, photoURL}=loggedInUser;
        console.log(photoURL);
        const SaveUserOnDatabase={name:displayName, email, photoURL};
        axiosSecure.post('/users', SaveUserOnDatabase)
        .then(data=>{
            console.log('database', data);
            if(data.data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login successful',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(from, { replace: true });
            }
        })
      })
  }

  return (
    <div className="login-container grid sm:grid-cols-1  md:grid-cols-3 gap-10 md:px-20 md:h-screen">
     <div>
     <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text-3xl font-semibold'>Login</h2>
        
        <div className="form-group">
          <label className='block text-start text-2xl'>Email:</label>
          <input placeholder='Enter your Email Address' type="email" {...register('email', { required: true })} />
          {errors.email && <span className="error">This field is required.</span>}
        </div>
        
        <div className='form-group relative'>
          <label className='block text-start text-2xl'>Password:</label>
          <div className=''>
            <input placeholder='Enter your Register Password'
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: true })}
            />
            <p type=" " className='block absolute cursor-pointer right-5 top-14' onClick={togglePasswordVisibility}>
              {showPassword ? (
                <FaEye />
              ) : (
                <FaEyeSlash />
              )}
            </p>
          </div>
          {errors.password && <span className='error'>This field is required.</span>}
        </div>
        
        <button type="submit" className="login-button">Login</button>
        
        <div className="register-link">
          <p>Don't have an account? <Link to="/signup"><span className='text-blue-500'>SignUp</span></Link></p>
        </div>
        
 
      </form>

     </div>
     <div className="social-login bg-white p-4 rounded-lg">
          <p className='font-bold'>Login with Google</p>
         <div className="divider">  </div>
          <button onClick={handleGoogleLogin} className='btn btn-primary'><FaGoogle></FaGoogle></button>
        </div>
     <div>
     <Player
        src='https://assets9.lottiefiles.com/packages/lf20_L7YrbxFm46.json'
        className="player"
        loop
        autoplay
        style={{ height: '400px', width: '400px' }}
        />
     </div>
    </div>
  );
};

export default Login;
