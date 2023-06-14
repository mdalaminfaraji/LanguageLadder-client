import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const InsructorHome = () => {
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
    const TotalPrice=classes.reduce((sum, item)=>sum+item.price, 0);
    const AvailableSeats=classes.reduce((sum, item)=>sum+item.availableSeats, 0);
    console.log(classes);
    return (
        <div>
                <Helmet>
                <title>LanguageLadder |InstructorHome</title>
                </Helmet>
            <h2 className='text-4xl pt-5'>Welcome Back {user.displayName}</h2>
            <p className='divider text-4xl'>-</p>

        <div className="stats bg-primary text-primary-content">
        
        <div className="stat">
            <div className="stat-title">Instructor Classes</div>
            <div className="stat-value">{classes.length}</div>
            <div className="stat-actions">
            <Link to="/dashboard/AddClass" className="btn btn-sm btn-success">Add Classes</Link>
            </div>
        </div>
        <div className="stat">
            <div className="stat-title">AvailableSeats</div>
            <div className="stat-value">{AvailableSeats}</div>
            <div className="stat-actions">
            <Link to="/dashboard/AddClass" className="btn btn-sm btn-success">Add Seats</Link>
            </div>
        </div>
        
        <div className="stat">
            <div className="stat-title">All classes Price</div>
            <div className="stat-value">${TotalPrice}</div>
            <div className="stat-actions">
            <button className="btn btn-sm btn-neutral">Withdrawal</button> 
            <button className="btn btn-sm btn-neutral">deposit</button>
            </div>
        </div>
        
        </div>
            
        </div>
    );
};

export default InsructorHome;