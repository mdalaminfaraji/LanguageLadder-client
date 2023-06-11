import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
const useClasses = () => {
    const {user, loading}=useAuth();
    const [axiosSecure]=useAxiosSecure();
    const {refetch, data:classes=[]}=useQuery({
        queryKey:['classes'],
        enabled:!loading,
        queryFn: async ()=>{
            const res=await axiosSecure(`/classes`);
            console.log('axios',res);
            return res.data;
        },
    })
    return[classes, refetch];
  
};

export default useClasses;