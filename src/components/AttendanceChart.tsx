'use client';

import Image from 'next/image';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 70,
    absent: 30,
  },
  {
    name: 'Tue',
    present: 90,
    absent: 10,
  },
  {
    name: 'Wed',
    present: 95,
    absent: 5,
  },
  {
    name: 'Thu',
    present: 99,
    absent: 1,
  },
  {
    name: 'Fri',
    present: 100,
    absent: 0,
  },
];

const AttendanceChart = () => {
  return (
    <div className="w-full h-[450px] bg-white rounded-xl  py-4 px-4">
      <div className="flex justify-between items-center pb-3">
        <h2 className="font-semibold text-lg">Attendance</h2>
        <Image src="/moreDark.png" width={20} height={20} alt="breadcrumbs" />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={false} tickLine={false}/>
          <YAxis axisLine={false} tickLine={false}/>
          <Tooltip cursor={{ fill:'lightblue' }}/>
          <Legend />
          <Bar
            legendType="circle"
            dataKey="absent"
            fill="#fae27c"
            activeBar={<Rectangle fill="yellow" stroke="yellow" />}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            legendType="circle"
            dataKey="present"
            fill="#c3ebfa"
            activeBar={<Rectangle fill="pink" stroke="pink" />}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
