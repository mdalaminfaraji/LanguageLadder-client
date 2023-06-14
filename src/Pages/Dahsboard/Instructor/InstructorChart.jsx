import React from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useInstructorClasses from '../../../Hooks/useInstructorClasses';
const InstructorChart = () => {
    const [refetch, classes]=useInstructorClasses();
    const TotalPrice=classes.reduce((sum, item)=>sum+item.price, 0);
    const AvailableSeats=classes.reduce((sum, item)=>sum+item.availableSeats, 0);
    const classesLength=classes.length;
    const data = [
        { name: 'Instructor Classes', value: classesLength},
        { name: 'Total Price', value: TotalPrice },
        { name: 'availableSeats', value: AvailableSeats },
       
      ];
      console.log(classes);
    return (
            <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <Tooltip />
                
                <Area type="monotone" dataKey="value" fill="#8884d8" />
            </AreaChart>
            </ResponsiveContainer>
    );
};

export default InstructorChart;