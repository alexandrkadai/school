import CircleChart from '@/components/CircleChart';
import UserCard from '@/components/UserCard';
import React from 'react';

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">

      <div className="w-full lg:w-2/3 flex flex-col gap-8">
      <div className='flex gap-4 justify-between'>
        <UserCard type='student'/>
        <UserCard type='teacher'/>
        <UserCard type='parent'/>
        <UserCard type='staff'/>
      </div>
      {/* Middle Chart */}
      <div className='flex gap-4 flex-col lg:flex-row'>
        
        <div className="w-full lg:w-1/3 h-[450px] ">
        <CircleChart />
        </div>

        <div className="w-full lg:w-2/3 h-[450px] "></div>
      </div>
      </div>

      <div className="w-full lg:w-1/3">
      </div>
    </div>
  );
};

export default AdminPage;
