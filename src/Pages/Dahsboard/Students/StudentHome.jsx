import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useSelectclass from '../../../Hooks/useSelectclass';
import usePayment from '../../../Hooks/usePayment';
import UserGraph from './UserGraph';

const StudentHome = () => {
    const{user}=useAuth();
    const [refetch, selectClass]=useSelectclass();
    const [userDatas, setUserData] = useState([]);
    const [userData]=usePayment();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:5000/payments/${user?.email}`);
            const data = await response.json();
            setUserData(data);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
        
        fetchData();
      }, [user?.email]);
   
    return (
        <div>
            <h2 className='text-4xl mt-5'>Welcome back, {user?.displayName} </h2>
            <p className='divider text-4xl'>-</p>
            <div className="stats shadow">
  
  <div className="stat ">
    <div className="stat-figure text-primary ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title text-black font-bold">Total Enrolled Course</div>
    <div className="stat-value text-primary">{userDatas.length}</div>
    
  </div>
  
  <div className="stat">
    <div className="stat-figure text-black">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title text-black font-bold" >Selected Class Quantity</div>
    <div className="stat-value text-secondary">{selectClass.length}</div>
    
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </div>
    </div>
    <div className="font-bold">Your Successful PayMent</div>
    <div className="stat-title">{userData.length}</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
 
  
</div>
<div className='w-1/2 mx-auto'>
    <UserGraph></UserGraph>
    
    </div>
     
        </div>
    );
};

export default StudentHome;