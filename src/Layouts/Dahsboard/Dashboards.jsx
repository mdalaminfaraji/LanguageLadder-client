import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import { FaAccessibleIcon, FaBook, FaHome, FaUser, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import TopNavber from '../../Shared/Navbar/TopNavber';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';
import useSelectclass from '../../Hooks/useSelectclass';

const Dashboards = () => {
    const [isAdmin]=useAdmin();
    const [isInstructor]=useInstructor();
    const [refetch, selectClass]=useSelectclass();
    const selectClassLength=selectClass.length;
    let ComponentToRender=null;
    if(isAdmin){
            ComponentToRender = <>
            <li className='border-4 shadow-md my-2 text-white text-xl rounded-2xl'><NavLink to="/dashboard/adminHome"><FaWallet></FaWallet>Admin home</NavLink></li>
            <li className='border-4 shadow-md my-2 text-white text-xl rounded-2xl'><NavLink to="/dashboard/manageClass"><FaUsers></FaUsers> Manage class</NavLink></li>
            <li className='border-4 shadow-md my-2 text-white text-xl rounded-2xl'><NavLink to="/dashboard/ManageUsers"><FaUsers></FaUsers> Manage Users</NavLink></li>
            
            </>
    }else if(isInstructor){
           ComponentToRender=<>
           
           <li className='border-4 shadow-md my-2 text-white text-xl rounded-2xl'><NavLink to="/dashboard/instructorHome"><FaHome></FaHome>Instructor Home</NavLink></li>
            <li className='border-4 shadow-md my-2 text-white text-xl rounded-2xl'><NavLink to="/dashboard/AddClass"> <FaUtensils></FaUtensils>Add class</NavLink></li>
            <li className='border-4 shadow-md my-2 text-white text-xl rounded-2xl'><NavLink to="/dashboard/myclass"><FaWallet></FaWallet> My classes</NavLink></li>
           </>
    }else {
        ComponentToRender=<>
            <li className='border-4 shadow-md my-2 text-white text-xl rounded-2xl'><NavLink to="/dashboard/studentHome"><FaHome></FaHome>Users Home</NavLink></li>
            <li className='border-4 my-2 shadow-md text-white text-xl rounded-2xl'><NavLink to="/dashboard/selectedclass"> <FaUtensils></FaUtensils>My Selected class <span className="badge badge-secondary">+{selectClassLength}</span></NavLink></li>
            <li className='border-4 shadow-md text-white text-xl rounded-2xl mb-2'><NavLink to="/dashboard/myEnrollClass"><FaWallet></FaWallet> My Enrolled class</NavLink></li>
            {/* <li className='border-4 my-2 shadow-md text-white text-xl rounded-2xl'><NavLink to="/dashboard/payment"><FaWallet></FaWallet> Payment</NavLink></li> */}
            <li className='border-4 shadow-md text-white text-xl rounded-2xl'><NavLink to="/dashboard/paymentHistory"><FaUsers></FaUsers> Payment History</NavLink></li>
           </>
    }
    return (
        <div className='bg-base-100'>
            <div className='bg-[#19243A]'>
                 <TopNavber></TopNavber>
            </div>
       
        
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  mx-10 ">
            
            <Outlet></Outlet>
            <label htmlFor="my-drawer-2" className="btn btn-primary w-3/4 drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80  shadow-lg h-full bg-[#19243A] bg-opacity-90 text-base-content">
   
        
            {ComponentToRender}



            <div className="divider "> -</div>
                    <li className='border-4  shadow-md my-2 text-white text-xl rounded-2xl'><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li className='border-4 shadow-md my-2 text-white text-xl rounded-2xl'><NavLink to="/classes"><FaAccessibleIcon></FaAccessibleIcon> Classes</NavLink></li>
                    <li className='border-4 shadow-md my-2 text-white text-xl inline-flex rounded-2xl'><NavLink to="/instructor"><FaUser></FaUser>Instructor</NavLink></li>
            </ul>
        
        </div>
        </div>
        <div className='bg-[#19243A] text-white'>
            <Footer></Footer>
        </div>
       
        </div>

    );
};

export default Dashboards;