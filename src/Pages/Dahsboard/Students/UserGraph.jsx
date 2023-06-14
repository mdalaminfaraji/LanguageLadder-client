import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import useSelectclass from '../../../Hooks/useSelectclass';
import usePayment from '../../../Hooks/usePayment';



const UserGraph = () => {
    const [refetch, selectClass]=useSelectclass();
    const [userData]=usePayment();
    console.log(selectClass);
    const selectClassLength=selectClass.length;
    const userDataLength=userData.length;
    const data = [
        { name: 'Total Enrolled Course', value: selectClassLength },
        { name: 'TotalEnrolled Length', value: userDataLength },
        { name: 'PayMent', value: userDataLength },
      ];
      const colors = ['#8884d8', '#82ca9d', '#ffc658'];
    return (
        <PieChart width={400} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip></Tooltip>
        <Legend />
      </PieChart>
    );
};

export default UserGraph;