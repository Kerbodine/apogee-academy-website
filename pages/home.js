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
      </div>
    </>
  );
}
