'use client';
import Image from 'next/image';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    expenses: 4000,
    income: 2400,
    benfits: 2400,
  },
  {
    name: 'Feb',
    expenses: 3000,
    income: 1398,
    benfits: 2210,
  },
  {
    name: 'Mar',
    expenses: 2000,
    income: 9800,
    benfits: 2290,
  },
  {
    name: 'Apr',
    expenses: 2780,
    income: 3908,
    benfits: 2000,
  },
  {
    name: 'May',
    expenses: 1890,
    income: 4800,
    benfits: 2181,
  },
  {
    name: 'Jun',
    expenses: 2390,
    income: 3800,
    benfits: 2500,
  },
  {
    name: 'Jul',
    expenses: 3490,
    income: 4300,
    benfits: 2100,
  },
  {
    name: 'Aug',
    expenses: 3490,
    income: 4300,
    benfits: 2100,
  },
  {
    name: 'Sep',
    expenses: 3490,
    income: 4300,
    benfits: 2100,
  },
  {
    name: 'Oct',
    expenses: 3490,
    income: 4300,
    benfits: 2100,
  },
  {
    name: 'Nov',
    expenses: 2000,
    income: 9800,
    benfits: 2290,
  },
  {
    name: 'Dec',
    expenses: 3000,
    income: 1398,
    benfits: 2210,
  },
];

const FinanceChart = () => {
  return (
    <div className="w-full h-[450px] bg-white rounded-xl  py-4 px-4">
      <div className="flex justify-between items-center pb-3">
        <h2 className="font-semibold text-lg">Finance</h2>
        <Image
          src="/moreDark.png"
          width={20}
          height={20}
          alt="breadcrumbs"
          className="cursor-pointer"
        />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={10} />
          <YAxis axisLine={false} tickLine={false} tickMargin={10} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#8884d8"
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#82ca9d"
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
