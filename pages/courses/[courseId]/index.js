import Head from "next/head";
import React from "react";
import {
  BiCalendar,
  BiFile,
  BiGlobe,
  BiHeart,
  BiInfinite,
  BiMobile,
  BiUserCircle,
  BiVideo,
} from "react-icons/bi";
import SidebarCard from "../../../components/course/SidebarCard";
import Tag from "../../../components/course/Tag";
import CourseNavbar from "../../../components/CourseNavbar";

export default function index() {
  const dummyData = [
    {
      title: "Introduction",
      url: "/",
    },
    {
      title: "Video 2",
      url: "/",
    },
    {
      title: "Video 3",
      url: "/",
    },
    {
      title: "Conclusion",
      url: "/",
    },
  ];

  return (
    <>
      <Head>
        <title> | Apogee Academy</title>
      </Head>
      <div className="flex h-screen w-full flex-col">
        <CourseNavbar />
        <div className="mx-auto mt-8 h-full w-full max-w-6xl px-8 pb-32">
          <div className="relative flex h-72 w-full rounded-2xl bg-gray-900 p-8">
            <div className="absolute h-auto w-[320px] space-y-2 rounded-2xl border-2 border-gray-200 bg-white p-2 shadow-lg">
              <div className="aspect-video w-full rounded-lg bg-gray-500"></div>
              <div className="flex gap-2">
                <button className="flex h-10 w-full items-center justify-center rounded-lg border-2 border-accent font-semibold text-accent transition-colors hover:bg-accent hover:text-white">
                  Enroll
                </button>
                <button className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border-2 border-accent text-2xl text-accent transition-colors hover:bg-accent hover:text-white">
                  <BiHeart />
                </button>
              </div>
              <div className="flex flex-wrap gap-1">
                <Tag />
                <Tag />
                <Tag />
              </div>
              <div className="p-2">
                <ul className="my-1 space-y-0.5 text-gray-500">
                  <li className="flex gap-1.5">
                    <BiUserCircle className="text-2xl" /> Created by John Doe
                  </li>
                  <li className="flex gap-1.5">
                    <BiCalendar className="text-2xl" /> Last updated 10/10/2021
                  </li>
                  <li className="flex gap-1.5">
                    <BiGlobe className="text-2xl" /> English
                  </li>
                </ul>
                <h3 className="mt-3 font-medium">This Course Includes:</h3>
                <ul className="my-1 space-y-0.5 text-gray-500">
                  <li className="flex gap-1.5">
                    <BiVideo className="text-2xl" /> 44 Videos
                  </li>
                  <li className="flex gap-1.5">
                    <BiFile className="text-2xl" /> 10 Downloadable resources
                  </li>
                  <li className="flex gap-1.5">
                    <BiInfinite className="text-2xl" /> Unlimited lifetime
                    access
                  </li>
                  <li className="flex gap-1.5">
                    <BiMobile className="text-2xl" /> Access on mobile
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto ml-[calc(320px+32px)]">
              <h1 className="mb-2 text-4xl font-bold text-white">
                Course Title
              </h1>
              <p className="leading-5 text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                placeat necessitatibus voluptatibus nobis a fuga distinctio
                commodi iusto nihil explicabo, debitis sed blanditiis, harum
                minima enim ipsa consequatur doloribus accusamus?
              </p>
            </div>
          </div>
          <div className="ml-[352px] w-auto p-4 pr-8">
            <div className="w-full rounded-lg border-2 border-gray-200 p-4">
              <h2 className="text-xl font-semibold">Course content:</h2>
              <ul typeof="list" className="mt-4 -mb-6">
                {dummyData.map((item, index) => (
                  <SidebarCard
                    key={index}
                    len={dummyData.length}
                    title={item.title}
                    index={index}
                    url={item.url}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
