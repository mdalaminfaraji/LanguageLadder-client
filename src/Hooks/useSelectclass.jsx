import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useSelectclass = () => {
    const {user, loading}=useAuth();
    const [axiosSecure]=useAxiosSecure();
    const {refetch, data:selectClass=[]}=useQuery({
        queryKey:['selectClass', user?.email],
        enabled:!loading,
        queryFn: async ()=>{
            const res=await axiosSecure(`/selectClass/student/${user?.email}`);
            console.log('axios',res);
            return res.data;
        },
    })
    return [refetch, selectClass];
};

export default useSelectclass;