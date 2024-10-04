'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import TeacherForm from './forms/TeacherForm';

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | 'teacher'
    | 'student'
    | 'parent'
    | 'subject'
    | 'class'
    | 'lesson'
    | 'exam'
    | 'assignment'
    | 'result'
    | 'attendance'
    | 'event'
    | 'announcement';
  type: 'create' | 'update' | 'delete';
  data?: any;
  id?: number;
}) => {
  const size = type === 'create' ? 'w-8 h-8' : 'w-7 h-7';
  const bgColor = type === 'create' ? 'bg-yellow-300' : 'bg-purple-300';
  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === 'delete' && id ? (
      <form action="" className='p-4 flex flex-col gap-4 '>
        
        <span className='text-center font-medium'>Are You Sure U Want To Delete Item {table} ? </span>
        <button className=' w-max self-center bg-red-700 text-white rounded-md p-2  border-none'>Delete</button>
      </form>
    ) : (
     <TeacherForm type='create'/>
    );
  };
  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}>
        <Image src={`/${type}.png`} alt="buttonicon" width={16} height={16} className="" />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-xl relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <span>{data}</span>
            
            <div className="absolute cursor-pointer top-4 right-4" onClick={() => setOpen(false)}>
              <Image src="/close.png" alt="close icon" width={14} height={14} className="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
