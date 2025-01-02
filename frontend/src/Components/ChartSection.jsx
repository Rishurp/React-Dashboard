import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartSection = ({ users }) => {
  
  const usersArray = Object.values(users);

      console.log(usersArray)


  const processedData = Object.values(
    usersArray.reduce((acc, user) => {
      const role = user.role;
      if (!acc[role]) {
        acc[role] = { role, count: 0 };
      }
     
      acc[role].count += 1;
     
      return acc;
    }, {})
  );
  console.log(processedData)

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={processedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="username" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartSection;
