import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="min-w-[130px] flex-1 flex-wrap rounded-2xl p-4 odd:bg-purl even:bg-low">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-white px-2 py-1 text-[10px] text-green-600">
          2024/10
        </span>
        <Image
          src="/more.png"
          width={20}
          height={20}
          alt="more"
          className="cursor-pointer"
        />
      </div>

      <h1 className="my-4 text-2xl font-semibold">3,434</h1>
      <h2 className="text-small font-medium capitalize text-gray-500">
        {type}
      </h2>
    </div>
  );
};

export default UserCard;
