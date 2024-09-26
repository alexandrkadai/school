import Image from 'next/image';
import React from 'react';

type SchoolEvent = {
  id: number;
  title: string;
  time: string;
  description: string;
};
interface SchoolEvents {
  events: SchoolEvent[];
}

const EventsShedule: React.FC<SchoolEvents> = ({ events }) => {
  return (
    <div >
        <div className='flex justify-between items-center'>
            <h1 className="text-xl font-semibold my-4">Events</h1>
            <Image src="/moreDark.png" alt="more" width={20} height={20} />
        </div>
    <div className="flex flex-col gap-4">
      {events.map((event) => (
        <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-sky even:border-low' key={event.id}>
          <div className="flex items-center justify-between pb-2">
            <h1 className='text-lg font-semibold'>{event.title}</h1>
            <span className="text-lg font-semibold">{event.time}</span>
          </div>
          <p className="text-sm">{event.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default EventsShedule;
