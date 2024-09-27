'use client';
import React from 'react';
import EventCalendar from '@/components/EventCalendar';
import Anonuncments from '@/components/Anonuncments';
import BigCalendar from '@/components/BigCalendar';

const ParentPage = () => {
  return (
    <div className=" flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        <div className="h- w-full bg-white p-4 rounded-lg">
          <h1 className="text-xl font-semibold">Schedule Alex Chinnoto 7B</h1>
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

export default ParentPage;
