import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';

const usePayment = () => {
    const {user, loading}=useAuth();
    const [userData, setUserData] = useState([]);
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
    return [userData];
};

export default usePayment;