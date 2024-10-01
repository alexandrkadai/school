'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username is required and must contain at least 3 characters :)' })
    .max(20, { message: 'Username must less than 20 characters :)' }),
  email: z.string().email({ message: 'Please check ypur email adress' }),
  password: z
    .string()
    .min(8, { message: 'Passwordis required and must contain at least 8 characters :)' }),
  firstName: z
    .string()
    .min(3, { message: 'Firstname is required and must contain at least 3 characters :)' }),
  lastName: z
    .string()
    .min(3, { message: 'Lastname is required and must contain at least 3 characters :)' }),
  phone: z
    .number()
    .min(7, { message: 'Phone is required and must contain at least 10 characters :)' }),
  adress: z
    .string()
    .min(3, { message: 'Lastname is required and must contain at least 3 characters :)' }),
  birthday: z
    .string()
    .min(3, { message: 'Lastname is required and must contain at least 3 characters :)' }),
});

const TeacherForm = ({ type, data }: { type: 'create' | 'update'; data?: any }) => {
  return <form action=""> </form>;
};

export default TeacherForm;
