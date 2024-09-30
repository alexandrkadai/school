'use client';

import Image from 'next/image';
import React from 'react';

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

  return (
    <>
      <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`} >
        <Image  src={`/${type}.png`} alt="buttonicon" width={16} height={16} className=''/>
      </button>
    </>
  );
};

export default FormModal;
