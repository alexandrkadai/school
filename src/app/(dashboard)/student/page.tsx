"use client";
import React from "react";
import EventCalendar from "@/components/EventCalendar";
import Anonuncments from "@/components/Anonuncments";
import BigCalendar from "@/components/BigCalendar";

const StudentPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full w-full rounded-lg bg-white p-4">
          <h1 className="text-xl font-semibold">Schedule 7B Class</h1>
          <div className="mt-7 h-[750px]">
            <BigCalendar />
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3">
        <EventCalendar />
        <Anonuncments />
      </div>
    </div>
  );
};

export default StudentPage;
