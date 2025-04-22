import React from "react";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { role, subjectsData } from "@/lib/data";
import FormModal from "@/components/FormModal";

type Subject = {
  id: number;
  name: string;
  teachers: string[];
};

const columns = [
  {
    header: "Subject id",
    accessor: "Parent Name",
  },
  {
    header: "Subject Name",
    accessor: "subject Name",
    className: "hidden md:table-cell",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const SubjectsList = () => {
  const renderRow = (item: Subject) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 text-sm even:bg-blue-100 hover:bg-purple-100"
    >
      <td className="flex items-center gap-4 p-4">
        {/* <Image
          src={item.photo}
          width={40}
          height={40}
          alt="Teacher Photo"
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        /> */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-500">{item.id}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.name}</td>
      <td className="hidden md:table-cell">{item.teachers.join(", ")}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/ist/teachers/${item.id}`} />
          <button className="flex h-7 w-7 items-center justify-center rounded-full bg-sky">
            <Image src="/edit.png" width={16} height={16} alt="edit subject" />
          </button>
          {role === "admin" && (
            <>
              <FormModal table="subject" type="update" data={item} />
              <FormModal table="subject" type="delete" id={item.id} />
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
          All Subjects
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

            {role === "admin" && <FormModal table="teacher" type="create" />}
          </div>
        </div>
      </div>

      {/* Table*/}
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />

      <Pagination />
    </div>
  );
};

export default SubjectsList;
