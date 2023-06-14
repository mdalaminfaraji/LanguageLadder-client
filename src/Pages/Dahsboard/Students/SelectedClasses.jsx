import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useSelectclass from '../../../Hooks/useSelectclass';
import { Helmet } from 'react-helmet-async';

const SelectedClasses = () => {
    const {user, loading}=useAuth();
    const [axiosSecure]=useAxiosSecure();
    const [refetch, selectClass]=useSelectclass();
    const selectClassLength=selectClass.length;
 
    console.log(selectClass);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-flame.vercel.app/selectClass/${id}`, {
                    method: 'DELETE',
                  })
                    .then((response) => {
                      if (response.ok) {
                        refetch();
                        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                      } else {
                        Swal.fire('Failed!', 'Something went wrong!', 'error');
                      }
                    })
                    .catch((error) => {
                      console.log('Network error:', error);
                    });
                  
          
            }
          })
       
        }
    return (
        <div>
                <Helmet>
    <title>LanguageLadder | SelectedClass</title>
   </Helmet>
             <h2 className='text-4xl mt-3'>Your Selected Class </h2>
            <p className='divider text-4xl'>-</p>
            <div>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className='text-lg text-black'>
                <tr>
                    <th>#</th>
                    <th>ClassName</th>
                    <th>InstructorEmail</th>
                    <th>Price</th>
                    <th>Delete</th>
                    <th>Pay</th>
                </tr>
                </thead>
                <tbody>
                {
                    selectClass?.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.className}</td>
                                <td>{item.instructorEmail}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>{
                                        handleDelete(item._id);
                                    }}>Delete</button>
                                </td>
                                <td>
                                    <Link to={`/dashboard/payment/${item._id}`} className="btn btn-primary"
                                    >Pay</Link>
                                </td>
                            </tr>
                        )
                    })
                }
                
                </tbody>
            </table>
            </div>
            </div>
        </div>
    );
};

export default SelectedClasses;