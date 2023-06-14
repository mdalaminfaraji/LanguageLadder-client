import React, { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import useUsers from '../../../Hooks/useUsers';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ManageUsers = () => {
    const {user, loading}=useAuth();
    const [axiosSecure]=useAxiosSecure();
    const [users, refetch]=useUsers();
    // console.log(users);
    // const [usersData, setUsersData]=useState();

    const handleMakeInstructor=(id)=>{
        try{
           axiosSecure.patch(`/users/admin/${id}`,{role:'instructor'})
           .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Make instructor successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            
           })
          
        }catch(error){
            console.log('Error updating user role:', error);
        }
        
    }
    const handleMakeAdmin=(id)=>{
        try{
           axiosSecure.patch(`/users/admin/${id}`,{role:'admin'})
           .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Make Admin successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            
           })
        }catch(error){
            console.log('Error updating user role:', error);
        }
        
    }
    return (
        <div className="overflow-x-auto">
              <Helmet>
         <title>LanguageLadder | ManageUsers</title>
         </Helmet>
        <h2 className=' text-2xl'>Users Management</h2>
        <div className="divider  text-7xl">-</div>
        <table className="table">
          <thead className='text-lg font-semibold text-black'>
            <tr>
              <th>User Photo</th>
           
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td><img src={user.photoURL} className='w-12 rounded-full'/></td>
                
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
                <td>
                  {/* {user.role === 'student' && ( */}
                    <div className='flex'>
                      <button
                      className="btn btn-secondary btn-xs text-xs"
                        onClick={() => handleMakeInstructor(user._id)}
                        disabled={user.role !== 'student'&& user.role == 'instructor'}
                      >
                        Make Instructor
                      </button>
                      <button
                      className="btn btn-primary btn-xs text-xs"
                        onClick={() => handleMakeAdmin(user._id)}
                        disabled={user.role !== 'student'&& user.role== 'admin'}
                      >
                        Make Admin
                      </button>
                    </div>
                  {/* )} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ManageUsers;