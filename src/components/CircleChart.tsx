'use client';
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 2227,
        fill: 'white',
      },
      {
        name: 'Grade A',
        count: 300,
        fill: '#c3e',
      },
  {
    name: 'Boys',
    count: 1123,
    fill: '#c3ebfa',
  },
  {
    name: 'Girls',
    count: 1104,
    fill: '#fae27c',
  },
  
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const CircleChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h2 className='text-lg font-semibold'>Students</h2>
        <Image src="/moreDark.png" width={20} height={20} alt="studentsimage" />
      </div>
      <div className='relative w-full h-[75%]'>
      <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            
            background
            dataKey="count"
          />
          
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src="/maleFemale.png" alt="iconMale" width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
      </div>
      {/* Bottom Legend */}
      <div className=" flex justify-center gap-16">
        <div className="flex flex-col gap-1">
            <div className='w-5 h-5 bg-sky rounded-full' />
                <h1 className='font-bold '>1,123</h1>
                <h2 className='text-sm text-gray-300'>52%</h2>
            </div>
            <div className="flex flex-col gap-1">
            <div className='w-5 h-5 bg-low rounded-full' />
                <h1 className='font-bold '>1,104</h1>
                <h2 className='text-sm text-gray-300'>48%</h2>
            </div>
      </div>
    </div>
  );
};

export default CircleChart;
