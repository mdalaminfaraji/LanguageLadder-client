import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import { FaBook, FaHome, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import TopNavber from '../../Shared/Navbar/TopNavber';
import useAdmin from '../../Hooks/useAdmin';

const Dashboards = () => {
    const [isAdmin]=useAdmin();
    const isInstructor=false;
    const isStudent=false;
    let ComponentToRender=null;
    if(isAdmin){
            ComponentToRender = <>
            <li><NavLink to="/dashboard/adminHome"><FaWallet></FaWallet>Admin home</NavLink></li>
            <li><NavLink to="/dashboard/manageClass"><FaUsers></FaUsers> Manage class</NavLink></li>
            <li><NavLink to="/dashboard/ManageUsers"><FaUsers></FaUsers> Manage Users</NavLink></li>
            
            </>
    }else if(isInstructor){
           ComponentToRender=<>
           
           <li><NavLink to="/dashboard/instructorHome"><FaHome></FaHome>Instructor Home</NavLink></li>
            <li><NavLink to="/dashboard/AddClass"> <FaUtensils></FaUtensils>Add class</NavLink></li>
            <li><NavLink to="/dashboard/myclass"><FaWallet></FaWallet> My classes</NavLink></li>
           </>
    }else {
        ComponentToRender=<>
            <li><NavLink to="/dashboard/studentHome"><FaHome></FaHome>Users Home</NavLink></li>
            <li><NavLink to="/dashboard"> <FaUtensils></FaUtensils>My Selected class</NavLink></li>
            <li><NavLink to="/dashboard/myEnrollClass"><FaWallet></FaWallet> My Enrolled class</NavLink></li>
            <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet> Payment</NavLink></li>
            <li><NavLink to="/dashboard/paymentHistory"><FaUsers></FaUsers> Payment History</NavLink></li>
           </>
    }
    return (
        <>
        <TopNavber></TopNavber>
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            
            <Outlet></Outlet>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 h-full bg-[#00FFCA] bg-opacity-90 text-base-content">
   
        
            {ComponentToRender}



            <div className="divider border-8"> </div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/menu"> Classes</NavLink></li>
                    <li><NavLink to="/order/salad">Instructor</NavLink></li>
            </ul>
        
        </div>
        </div>
       
        </>

    );
};

export default Dashboards;