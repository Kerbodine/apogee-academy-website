import Head from "next/head";
import React from "react";
import CourseNavbar from "../components/CourseNavbar";

export default function Courses() {
  return (
    <>
      <Head>
        <title>Courses | Apogee Academy</title>
      </Head>
      <CourseNavbar />
    </>
  );
}
