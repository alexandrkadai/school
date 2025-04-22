"use client";
import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 2227,
    fill: "white",
  },
  {
    name: "Grade A",
    count: 300,
    fill: "#c3e",
  },
  {
    name: "Boys",
    count: 1123,
    fill: "#c3ebfa",
  },
  {
    name: "Girls",
    count: 1104,
    fill: "#fae27c",
  },
];

const CircleChart = () => {
  return (
    <div className="h-full w-full rounded-xl bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Students</h2>
        <Image src="/moreDark.png" width={20} height={20} alt="studentsimage" />
      </div>
      <div className="relative h-[75%] w-full">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="iconMale"
          width={50}
          height={50}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* Bottom Legend */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="h-5 w-5 rounded-full bg-sky" />
          <h1 className="font-bold">1,123</h1>
          <h2 className="text-sm text-gray-300">52%</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="h-5 w-5 rounded-full bg-low" />
          <h1 className="font-bold">1,104</h1>
          <h2 className="text-sm text-gray-300">48%</h2>
        </div>
      </div>
    </div>
  );
};

export default CircleChart;
