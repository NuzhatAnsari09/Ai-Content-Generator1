"use client";
import {
  Cog,
  History,
  Home,
  IndianRupee,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";

function SideNav() {
  const router = useRouter(); // Initialize useRouter
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "HistoryPage",
      icon: History,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: IndianRupee,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Cog,
      path: "/dashboard/setting",
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="h-screen p-5 shadow-sm border">
      {/* Logo section */}
      <div className="flex justify-center border-b">
        <div
          className="flex items-center space-x-3 cursor-pointer" // Add cursor pointer
          onClick={() => router.push('/')} // Navigate to root route on click
        >
          <div className="flex">
            <div className="w-6 h-6 rounded-full bg-blue-500" />
            <div className="w-6 h-6 rounded-full bg-violet-500 -ml-2" />
            <div className="w-6 h-6 rounded-full bg-purple-500 -ml-2" />
            <div className="w-6 h-6 rounded-full bg-pink-500 -ml-2" />
          </div>
          <span className="font-bold text-xl text-slate-800">AIContent</span>
        </div>
      </div>
      <hr className="my-6 border" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <div
            key={index}
            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${path === menu.path ? "bg-primary text-white" : ""}`}
            onClick={() => router.push(menu.path)} // Navigate on click
          >
            <menu.icon className="h-6 w-6" />
            <h2 className="text-lg">{menu.name}</h2>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
