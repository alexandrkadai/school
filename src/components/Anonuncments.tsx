import React from "react";

const Anonuncments = () => {
  return (
    <div className="rounded-lg bg-white p-4">
      <div className="flex items-center justify-between pb-2">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="cursor-pointer text-sm text-gray-300">View All</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="rounded-md bg-sky p-4">
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-lg font-semibold">Attention all workers </h2>
            <span className="rounded-lg bg-white p-1 text-xs text-gray-600">
              2024-10-10
            </span>
          </div>
          <p className="text-sm">
            Some descriptions about the announcement. Super Class
          </p>
        </div>
      </div>
    </div>
  );
};

export default Anonuncments;
