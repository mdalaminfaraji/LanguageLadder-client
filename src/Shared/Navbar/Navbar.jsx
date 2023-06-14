

import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import logo1 from "../../Images/logo1.png";
import useSelectclass from "../../Hooks/useSelectclass";



const Navbar = () => {
    const [isAdmin]=useAdmin();
    const [isInstructor]=useInstructor();
    const {user, logOut}=useAuth();
    console.log(user);
    const [refetch, selectClass]=useSelectclass();
    const selectClassLength=selectClass.length;
    refetch();
    let link=`studentHome`;
    if(isAdmin){
        link=`adminHome`;
    }else if(isInstructor){
        link=`instructorHome`;
    }

    const handleLogOut=()=>{
        logOut()
        .then(() => { })
        .catch(error => console.log(error));
    }
   const navOptions =<>
   <li><Link className="text-lg" to='/'>Home</Link></li>
   <li><Link className="text-lg" to='/instructor'>Instructors</Link></li>
   <li><Link className="text-lg" to='/classes'>Classes</Link></li>
   
   
   </>

    return (
        <>
    
        <div className="navbar shadow bg-opacity-100 sticky top-0 z-10 ">
      <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52">
      {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost btn-md normal-case text-xl hidden md:flex"><img src={logo1} className="w-10 shadow-xl rounded-full"/>LanguageLadder</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navOptions}
    </ul>
  </div>
  <div className="navbar-end">

    {
        user?
        <>
      
      <NavLink to={`/dashboard/${link}`} title={link}   className='text-lg mr-2'>Dashboard {isAdmin ||isInstructor?'' : <span className="badge badge-secondary">+{selectClassLength}</span>} </NavLink>
          
    <img src={user?.photoURL} title={user?.displayName} className="hidden sm:flex rounded-full w-10 h-auto mx-2"/>
    <button onClick={handleLogOut} className="btn btn-sm">LogOut</button>
        </>:<>  <Link className="btn btn-sm"to="/login">Login</Link></>
    }


 
  </div>
        </div>
       
      </>
    );
};

export default Navbar;