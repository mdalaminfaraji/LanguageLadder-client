import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructorClasses = () => {
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
    return [refetch, classes];
};

export default useInstructorClasses;