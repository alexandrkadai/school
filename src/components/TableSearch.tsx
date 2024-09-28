import Image from 'next/image';
import React from 'react';

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full px-2 ring-[1.5px] ring-gray-500">
      <Image src="/search.png" width={20} height={20} alt="search" />
      <input type="text" placeholder="Search...SSSS" className='w-[222px] p-2 bg-transparent border-none outline-none' />
    </div>
  );
};

export default TableSearch;
