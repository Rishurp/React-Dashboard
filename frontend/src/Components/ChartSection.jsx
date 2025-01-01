import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";



const ChartSection = ({users}) => {


   
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={users} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="day"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="mockData" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartSection;
