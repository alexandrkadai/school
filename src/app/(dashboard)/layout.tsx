// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Lama Dev School Management Dashboard",
//   description: "Next.js School Management System",
// };

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <div className="w-[15%] overflow-scroll md:w-[8%] lg:w-[15%] xl:w-[17%]">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 p-4 lg:justify-start"
        >
          <Image width={32} height={32} src="/logo.png" alt="logo" />
          <span className="hidden lg:block">School Dashboard</span>
        </Link>
        <Menu />
      </div>
      {/* Right Side */}
      <div className="w-[85%] overflow-scroll bg-[#f7f8fa] md:w-[92%] lg:w-[85%] xl:w-[83%]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
