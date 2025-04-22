import Anonuncments from "@/components/Anonuncments";
import AttendanceChart from "@/components/AttendanceChart";
import CircleChart from "@/components/CircleChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      <div className="flex w-full flex-col gap-8 lg:w-2/3">
        <div className="flex justify-between gap-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* Middle Chart */}
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="h-[450px] w-full lg:w-1/3">
            <CircleChart />
          </div>

          <div className="h-[450px] w-full lg:w-2/3">
            <AttendanceChart />
          </div>
        </div>
        <FinanceChart />
      </div>

      <div className="flex w-full flex-col gap-8 lg:w-1/3">
        <EventCalendar />
        <Anonuncments />
      </div>
    </div>
  );
};

export default AdminPage;
