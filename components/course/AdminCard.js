import React from "react";
import {
  BiCalendar,
  BiDotsVerticalRounded,
  BiUserCircle,
} from "react-icons/bi";

export default function AdminCard({ course }) {
  return (
    <div className="w-72 rounded-2xl border-2 border-gray-200 p-2 transition-shadow hover:shadow-lg">
      <div className="relative aspect-video w-full rounded-lg bg-gray-500">
        <button className="absolute top-2 right-2 grid h-8 w-8 place-items-center rounded-lg bg-gray-200 text-2xl text-gray-600 hover:bg-gray-300">
          <BiDotsVerticalRounded />
        </button>
      </div>
      <div className="mt-2 p-2">
        <h1 className="text-lg font-medium leading-5">{course?.title}</h1>
        <ul className="mt-2 space-y-0.5 text-gray-500">
          <li className="flex gap-1.5">
            <BiUserCircle className="text-2xl" /> Students: {course?.students}
          </li>
          <li className="flex gap-1.5">
            <BiCalendar className="text-2xl" /> Last updated:{" "}
            {course?.lastUpdated?.toDate().toLocaleString().split(",")[0]}
          </li>
        </ul>
      </div>
    </div>
  );
}
