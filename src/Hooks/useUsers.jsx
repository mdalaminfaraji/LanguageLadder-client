import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    const {user, loading}=useAuth();
    const [axiosSecure]=useAxiosSecure();
    const {refetch, data:users=[]}=useQuery({
        queryKey:['users'],
        enabled:!loading,
        queryFn: async ()=>{
            const res=await axiosSecure(`/users`);
            console.log('axios',res);
            return res.data;
        },
    })
    return[users, refetch];
};

export default useUsers;