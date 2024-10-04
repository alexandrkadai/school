'use client';
import Anonuncments from '@/components/Anonuncments';
import BigCalendar from '@/components/BigCalendar';
import FormModal from '@/components/FormModal';
import PerformanceChart from '@/components/PerfomanceChart';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleTeacherPage = () => {
  const data = {
    id: 1,
    username: 'deanguerrero',
    email: 'deanguerrero@gmail.com',
    password: 'password',
    firstName: 'Dean',
    lastName: 'Guerrero',
    phone: '+1 234 567 89',
    address: '1234 Main St, Anytown, USA',
    bloodType: 'A+',
    dateOfBirth: '2000-01-01',
    sex: 'male',
    img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200',
  };
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* user info Card */}
          <div className="bg-sky py-6 px-4 rounded-xl flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="profile Image"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>

            <div className="w-2/3 flex flex-col justify-between gap-4 ">
              <h1 className="text-xl font-semibold ">Alexandr Chinotto</h1>
              <FormModal table="teacher" type="update" data={data} />
              <p className="text-sm text-gray-500">
                I`m teacher and teacher must love his work beacause teaching kids is the future of
                an America
              </p>

              <div className="flex items-center justify-center gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="icon prof" width={14} height={14} />
                  <span>A+</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="icon prof" width={14} height={14} />
                  <span>1 January 1990</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="icon prof" width={14} height={14} />
                  <span>A.Chinnoto@gmail.com</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="icon prof" width={14} height={14} />
                  <span>+37834561</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small Cards */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">99%</h1>
                <span className="text-sm text-gray-500">Attendance</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleBranch.png" alt="" width={24} height={24} className="w-6 h-6" />
              <div>
                <h1 className="text-xl font-semibold">3</h1>
                <span className="text-sm text-gray-500">Branches</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6" />
              <div>
                <h1 className="text-xl font-semibold">7</h1>
                <span className="text-sm text-gray-500">Lessons</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleClass.png" alt="" width={24} height={24} className="w-6 h-6" />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-500">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-4 bg-white rounded-md p-4 h-[750px]">
          <h1>SCHEDULE</h1>
          <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-xl ">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-yellow-200" href="/">
              Teacher&apos;s Classes
            </Link>
            <Link className="p-3 rounded-md bg-purl" href="/">
              Teacher&apos;s Students
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">
              Teacher&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-low" href="/">
              Teacher&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-sky" href="/">
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        <PerformanceChart />
        <Anonuncments />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
