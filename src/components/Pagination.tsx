import React from 'react';

const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button className="py-2 px-4 rounded-md bg-slate-200 tet-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Prev
      </button>
      <div className='flex items-center gapgap-2 text-sm'>
        <button className="px-2 rounded-md bg-sky">1</button>
        <button className="px-2 rounded-md ">2</button>
        <button className="px-2 rounded-md ">3</button>
        ...
        <button className="px-2 rounded-md ">10</button>
      </div>
      <button className="py-2 px-4 rounded-md bg-slate-200 tet-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
};

export default Pagination;
