import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const PaymentHistory = () => {
    const {user, loading}=useAuth();
    const [userData, setUserData] = useState([]);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
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
      console.log(userData);
    return (
        <div>
            <h2>My Enrolled classes</h2>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>ClassImage</th>
        <th>ClassName</th>
        <th className='text-center'>Date</th>
       
        <th>TransactionId</th>
        
        
      </tr>
    </thead>
    <tbody>
      {
        userData.map((data, index)=> <tr
        key={data._id}
        >
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={data.classImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
          {data.className}
         
        </td>
        <td>{new Date(data.date).toLocaleString('en-US', options)}</td>
   
        <th>
         {data.transactionId}
        </th>
      </tr>)
      }
     

    </tbody>

    
  </table>
</div>
            </div>
        </div>
    );
};

export default PaymentHistory;