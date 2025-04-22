import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between p-4 text-gray-500">
      <button className="tet-sm rounded-md bg-slate-200 px-4 py-2 font-semibold disabled:cursor-not-allowed disabled:opacity-50">
        Prev
      </button>
      <div className="gapgap-2 flex items-center text-sm">
        <button className="rounded-md bg-sky px-2">1</button>
        <button className="rounded-md px-2">2</button>
        <button className="rounded-md px-2">3</button>
        ...
        <button className="rounded-md px-2">10</button>
      </div>
      <button className="tet-sm rounded-md bg-slate-200 px-4 py-2 font-semibold disabled:cursor-not-allowed disabled:opacity-50">
        Next
      </button>
    </div>
  );
};

export default Pagination;
