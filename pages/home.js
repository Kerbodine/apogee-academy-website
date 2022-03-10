import Head from "next/head";
import React from "react";
import CourseNavbar from "../components/CourseNavbar";
import Streak from "../components/Streak";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Apogee Academy</title>
      </Head>
      <CourseNavbar />
      <div className="mx-auto mt-8 mb-16 max-w-6xl overflow-hidden p-6 sm:p-8">
        <Streak />
        <section className="mt-8">
          <h2 className="mb-2 text-2xl font-semibold">
            Pick up where you left off
          </h2>
          <div className="h-80 w-full rounded-2xl bg-gray-100"></div>
        </section>
        <section className="mt-8">
          <h2 className="mb-2 text-2xl font-semibold">Continue learning</h2>
          <div className="flex h-64 w-full gap-4">
            <div className="h-full w-full rounded-2xl bg-gray-100"></div>
            <div className="h-full w-full rounded-2xl bg-gray-100"></div>
            <div className="h-full w-full rounded-2xl bg-gray-100"></div>
            <div className="h-full w-full rounded-2xl bg-gray-100"></div>
          </div>
        </section>
        <section className="mt-8">
          <h2 className="mb-2 text-2xl font-semibold">Recommended for you</h2>
          <div className="flex h-64 w-full gap-4">
            <div className="h-full w-full rounded-2xl bg-gray-100"></div>
            <div className="h-full w-full rounded-2xl bg-gray-100"></div>
            <div className="h-full w-full rounded-2xl bg-gray-100"></div>
            <div className="h-full w-full rounded-2xl bg-gray-100"></div>
          </div>
        </section>
      </div>
    </>
  );
}
