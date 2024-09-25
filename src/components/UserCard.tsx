import Image from 'next/image';
import React from 'react';

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-purl even:bg-low p-4 flex-1 min-w-[130px] flex-wrap">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2024/10</span>
        <Image src="/more.png" width={20} height={20} alt="more" className='cursor-pointer'/>
      </div>

      <h1 className="text-2xl font-semibold my-4">3,434</h1>
      <h2 className="capitalize text-small font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default UserCard;
