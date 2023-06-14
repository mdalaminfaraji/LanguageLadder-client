import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const MyEnrolledClasses = () => {
    const {user, loading}=useAuth();
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://summer-camp-server-flame.vercel.app/payments/${user?.email}`);
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
              <Helmet>
    <title>LanguageLadder |MyEnrolmentClass</title>
   </Helmet>
             <h2 className='text-4xl mt-3'>My Enrolled Class </h2>
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
        <th>InstructorName</th>
        <th>InstructorEmail</th>
        <th>EnrolmentStatus</th>
        
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
        <td>{data.instructorName}</td>
        <th>
         {data.instructorEmail}
        </th>
        <th>
          Successful
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

export default MyEnrolledClasses;