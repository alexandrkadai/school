import Link from 'next/link';

const Homepage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[400px] h-[450px] flex flex-col justify-center items-center gap-4">
        <Link className='uppercase bg-purple-500 rounded-md text-white p-2' href="/admin"> Admin Dashboard</Link>
        <Link className='uppercase bg-purple-500 rounded-md text-white p-2' href="/list/teachers/1"> Teacher Dashboard</Link>
        <Link className='uppercase bg-purple-500 rounded-md text-white p-2' href="/list/students/1"> Student Dashboard</Link>
        <Link className='uppercase bg-purple-500 rounded-md text-white p-2' href="/list/teachers"> Teachers List</Link>
      </div>
    </div>
  );
};

export default Homepage;
