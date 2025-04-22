import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div className="flex w-full items-center gap-2 rounded-full px-2 text-xs ring-[1.5px] ring-gray-500 md:w-auto">
      <Image src="/search.png" width={20} height={20} alt="search" />
      <input
        type="text"
        placeholder="Search...SSSS"
        className="w-[222px] border-none bg-transparent p-2 outline-none"
      />
    </div>
  );
};

export default TableSearch;
