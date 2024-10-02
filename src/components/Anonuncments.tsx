import React from 'react';

const Anonuncments = () => {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center pb-2">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-sm text-gray-300 cursor-pointer">View All</span>
      </div>
      <div className="flex flex-col gap-4">
      <div className="bg-sky rounded-md p-4">
    <div className='flex justify-between items-center pb-2'>
        <h2 className='text-lg font-semibold'>Attention all workers </h2>
        <span className='text-xs text-gray-600 bg-white rounded-lg p-1'>2024-10-10</span>
    </div>
    <p className='text-sm'>Some descriptions about the announcement. Super Class</p>
      </div>
      </div>
    </div>
  );
};

export default Anonuncments;
