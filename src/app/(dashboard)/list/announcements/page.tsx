import React from "react";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
// import Link from 'next/link';
import { role, announcementsData } from "@/lib/data";
import FormModal from "@/components/FormModal";

type Announcement = {
  id: number;
  title: string;
  class: number;
  date: string;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },

  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const AnnouncemetsList = () => {
  const renderRow = (item: Announcement) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 text-sm even:bg-blue-100 hover:bg-purple-100"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-500">{item.title}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="announcement" type="update" data={item} />
              <FormModal table="announcement" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="m-4 mt-0 flex-1 rounded-xl bg-white p-4">
      {/* First */}
      <div className="flex items-center justify-between">
        <h1 className="hidden text-center text-lg font-semibold md:block">
          All Announcemets
        </h1>

        <div className="mt-4 flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
          <TableSearch />
          <div className="flex justify-center gap-4 self-end">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-low">
              <Image
                src="/filter.png"
                width={14}
                height={14}
                alt="filterbutton"
              />
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-low">
              <Image src="/sort.png" width={14} height={14} alt="sortbutton" />
            </button>

            {role === "admin" && (
              <FormModal table="announcement" type="create" />
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
