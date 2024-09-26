'use client';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EventsShedule from './EventsShedule';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type SchoolEvent = {
  id: number;
  title: string;
  time: string;
  description: string;
};

const events: SchoolEvent[] = [
  {
    id: 1,
    title: 'Morning Assembly',
    time: '08:00',
    description:
      'School-wide assembly in the auditorium. Important announcements and the national anthem.',
  },
  {
    id: 2,
    title: 'Math Class',
    time: '09:00',
    description: 'Algebra class focusing on quadratic equations. Bring calculators and notebooks.',
  },
  {
    id: 3,
    title: 'English Literature',
    time: '10:00',
    description: "Discussing Shakespeare's 'Macbeth'. Please read Act 2 before class.",
  },
  {
    id: 4,
    title: 'Science Lab',
    time: '11:00',
    description: 'Chemistry lab session on chemical reactions. Safety goggles are required.',
  },
  {
    id: 5,
    title: 'Lunch Break',
    time: '12:00',
    description: 'Students are free to eat lunch in the cafeteria or outside in the courtyard.',
  },
  {
    id: 6,
    title: 'History Class',
    time: '13:00',
    description: 'Learning about World War II. Please bring your history textbook.',
  },
  {
    id: 7,
    title: 'Physical Education',
    time: '14:00',
    description: 'Outdoor sports activities. Wear appropriate sports attire.',
  },
  {
    id: 8,
    title: 'School Day Ends',
    time: '15:00',
    description:
      'End of the school day. Students are free to go home or attend after-school programs.',
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white rounded-lg p-4">
      <Calendar onChange={onChange} value={value} />
      <EventsShedule events={events} />
    </div>
  );
};

export default EventCalendar;
