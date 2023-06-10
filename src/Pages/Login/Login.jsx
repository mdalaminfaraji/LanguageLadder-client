import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Login.css'; // Import the CSS file for the component
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Perform login logic here
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container ">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        
        <div className="form-group">
          <label>Email:</label>
          <input type="email" {...register('email', { required: true })} />
          {errors.email && <span className="error">This field is required.</span>}
        </div>
        
        <div className='form-group '>
          <label>Password:</label>
          <div className=''>
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: true })}
            />
            <button type="button" className='' onClick={togglePasswordVisibility}>
              {showPassword ? (
                <FaEye />
              ) : (
                <FaEyeSlash />
              )}
            </button>
          </div>
          {errors.password && <span className='error'>This field is required.</span>}
        </div>
        
        <button type="submit" className="login-button">Login</button>
        
        <div className="register-link">
          <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
        
        <div className="social-login">
          <p>Login with:</p>
          <i className="social-icon fab fa-facebook"></i>
          <i className="social-icon fab fa-twitter"></i>
          <i className="social-icon fab fa-google"></i>
        </div>
      </form>
    </div>
  );
};

export default Login;
