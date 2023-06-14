
import useAuth from '../../../Hooks/useAuth';
import useClasses from '../../../Hooks/useClasses';
import useUsers from '../../../Hooks/useUsers';

import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MyChart from './MyChart';
import { Helmet } from 'react-helmet-async';

const AdminHome = () => {
    <Helmet>
    <title>LanguageLadder |AdminHome</title>
   </Helmet>
    const {user}=useAuth();
    const [classes]=useClasses();
    const [users]=useUsers();
    return (
        <div>
            <h2 className='text-4xl mt-5'>Admin Home </h2>
            <p className='divider text-4xl'>-</p>
            <div className="stats shadow-md gap-6 border-4">
  
  <div className="stat place-items-center ">
    <div className="text-black font-bold">Total Class</div>
    <div className="stat-value">{classes.length}</div>
    <div className="stat-desc">From January 1st to june 1st</div>
  </div>
  
  <div className="stat place-items-center  ">
    <div className="text-black font-bold">Users</div>
    <div className="stat-value text-secondary">{users.length}</div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="text-black font-bold">New Registers</div>
    <div className="stat-value">20</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
       <div className='mx-auto w-1/2 mt-5'>
       <MyChart></MyChart>
       </div>

        </div>
    );
};

export default AdminHome;