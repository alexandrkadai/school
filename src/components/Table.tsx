import React from 'react';
// import { TeacherType } from '@/types/types';

const Table = ({
  columns, renderRow, data
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode; //item:teacheType, studentType ... etc.
  data: any[];
  
}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className='text-sm text-gray-500 text-left'>
            {columns.map(col => (
                <th key={col.accessor} className={col.className}>{col.header}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => renderRow(item))}
      </tbody>
    </table>
  );
};

export default Table;
