import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
const data = [
  { name: 'Total Class', value: 10 },
  { name: 'New Register', value: 20 },
  { name: 'Users', value: 15 },
];



const MyChart = () => {
  return (

<BarChart width={400} height={300} data={data}>
    <XAxis dataKey="name" />
    <Bar dataKey="value" fill="#8884d8" />
  </BarChart>

  );
};

export default MyChart;