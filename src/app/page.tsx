import Link from "next/link";

const Homepage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-[450px] w-[400px] flex-col items-center justify-center gap-4">
        <Link
          className="rounded-md bg-purple-500 p-2 uppercase text-white"
          href="/admin"
        >
          {" "}
          Admin Dashboard
        </Link>
        <Link
          className="rounded-md bg-purple-500 p-2 uppercase text-white"
          href="/list/teachers/1"
        >
          {" "}
          Teacher Dashboard
        </Link>
        <Link
          className="rounded-md bg-purple-500 p-2 uppercase text-white"
          href="/list/students/1"
        >
          {" "}
          Student Dashboard
        </Link>
        <Link
          className="rounded-md bg-purple-500 p-2 uppercase text-white"
          href="/list/teachers"
        >
          {" "}
          Teachers List
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
