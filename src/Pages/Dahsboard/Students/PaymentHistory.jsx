import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import usePayment from '../../../Hooks/usePayment';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
    const {user, loading}=useAuth();
    const [userData] = usePayment();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
;
    return (
        <div>
              <Helmet>
            <title>LanguageLadder | PaymentHistory</title>
          </Helmet>
             <h2 className='text-4xl mt-3'>Your Payment History </h2>
            <p className='divider text-4xl'>-</p>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='text-lg text-black'>
      <tr>
        <th>
          #
        </th>
        <th>ClassImage</th>
        <th>ClassName</th>
        <th className='text-center'>Date</th>
       
        <th className='text-center'>TransactionId</th>
        
        
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