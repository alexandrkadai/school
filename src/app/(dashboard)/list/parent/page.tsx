import React from 'react';
import TableSearch from '@/components/TableSearch';
import Image from 'next/image';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import Link from 'next/link';
import { role, parentsData } from '@/lib/data';

type Parent = {
  id: number;
  name: string;
  students: string[];
  email: string;
  phone: string;
  address: string;
};

const columns = [
  {
    header: 'Parent Name',
    accessor: 'Parent Name',
  },
  {
    header: 'Kids',
    accessor: 'parentID',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Email',
    accessor: 'addreemailss',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Phone',
    accessor: 'phone',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Address',
    accessor: 'address',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'action',
  },
];

const ParentsList = () => {
  const renderRow = (item: Parent) => (
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
          <h3 className="font-semibold text-gray-500 ">{item.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell ">{item.students.join(', ')}</td>
      <td className="hidden md:table-cell ">{item.email}</td>
      <td className="hidden md:table-cell ">{item.phone}</td>
      <td className="hidden md:table-cell ">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/ist/teachers/${item.id}`} />
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky">
            <Image src="/view.png" width={16} height={16} alt="viewprofile" />
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
        <h1 className="hidden md:block text-lg font-semibold text-center">All Parents</h1>

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
      <Table columns={columns} renderRow={renderRow} data={parentsData} />

      <Pagination />
    </div>
  );
};

export default ParentsList;
