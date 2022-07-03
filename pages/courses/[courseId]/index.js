import Head from "next/head";
import React from "react";
import { BiFile, BiHeart, BiInfinite, BiMobile, BiVideo } from "react-icons/bi";
import CourseNavbar from "../../../components/CourseNavbar";

export default function index() {
  return (
    <>
      <Head>
        <title> | Apogee Academy</title>
      </Head>
      <div className="flex h-screen w-full flex-col">
        <CourseNavbar />
        <div className="mx-auto h-full w-full max-w-6xl">
          <div className="p-4">
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
                <div className="p-2">
                  <p className="font-medium">This Course Includes:</p>
                  <ul className="mt-1.5 space-y-0.5 text-gray-500">
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
              <div className="mt-auto ml-[352px]">
                <h1 className="text-4xl font-bold text-white">Course Title</h1>
                <p className="leading-5 text-gray-300">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                  placeat necessitatibus voluptatibus nobis a fuga distinctio
                  commodi iusto nihil explicabo, debitis sed blanditiis, harum
                  minima enim ipsa consequatur doloribus accusamus?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
