import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden items-center gap-2 rounded-full px-2 text-xs ring-[1.5px] ring-gray-300 md:flex">
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input
          type="text"
          placeholder="Search... "
          className="w-[200px] bg-transparent p-2"
        />
      </div>
      <div className="flex w-full items-center justify-end gap-5">
        <div className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white">
          <Image src="/message.png" alt="message" width={20} height={20} />
        </div>
        <div className="relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white">
          <Image src="/announcement.png" alt="message" width={20} height={20} />
          <div className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-xs text-white">
            77
          </div>
        </div>
        <div className="flex flex-col">
          <Link href="/admin/">
            <span className="leadnig-3 text-xs font-medium">Alex Chinotto</span>
          </Link>
          <span className="text-right text-[10px] text-gray-500">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
