import React from 'react';
import TableSearch from '@/components/TableSearch';
import Image from 'next/image';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import Link from 'next/link';
import { role, announcementsData } from '@/lib/data';

type Announcement = {
  id: number;
  title: string;
  class: number;
  date: string;
};

const columns = [
  {
    header: 'Title',
    accessor: 'title',
  },

  {
    header: 'Class',
    accessor: 'class',
  },
  {
    header: 'Date',
    accessor: 'date',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'action',
  },
];

const AnnouncemetsList = () => {
  const renderRow = (item: Announcement) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-blue-100 text-sm hover:bg-purple-100">
      <td className="flex items-center gap-4 p-4">
        {/* <Image
          src={item.photo}
          width={40}
          height={40}
          alt="Teacher Photo"
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        /> */}
        <div className="flex flex-col ">
          <h3 className="font-semibold text-gray-500 ">{item.title}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell ">{item.class}</td>
      <td className="hidden md:table-cell ">{item.date}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/ist/teachers/${item.id}`} />
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky">
            <Image src="/edit.png" width={16} height={16} alt="editlesson" />
          </button>
          {role === 'admin' && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-400">
              <Image src="/delete.png" width={16} height={16} alt="viewprofile" />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-xl flex-1 m-4 mt-0">
      {/* First */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold text-center">All Announcemets</h1>

        <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-4 mt-4">
          <TableSearch />
          <div className="flex justify-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center rounded-full bg-low justify-center">
              <Image src="/filter.png" width={14} height={14} alt="filterbutton" />
            </button>

            <button className="w-8 h-8 flex items-center rounded-full bg-low justify-center">
              <Image src="/sort.png" width={14} height={14} alt="sortbutton" />
            </button>

            {role === 'admin' && (
              <button className="w-8 h-8 flex items-center rounded-full bg-low justify-center">
                <Image src="/plus.png" width={14} height={14} alt="addbutton" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Table*/}
      <Table columns={columns} renderRow={renderRow} data={announcementsData} />

      <Pagination />
    </div>
  );
};

export default AnnouncemetsList;
