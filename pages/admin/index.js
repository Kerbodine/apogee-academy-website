import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiLoaderAlt, BiPlus } from "react-icons/bi";
import AdminCard from "../../components/course/AdminCard";
import Navbar from "../../components/Navbar";

export default function Admin() {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onSnapshot(
      collection(getFirestore(), "Courses"),
      (snapshot) => {
        setLoading(false);
        setCourses(snapshot.docs.map((doc) => doc.data()));
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Admin | Apogee Academy</title>
      </Head>
      {loading ? (
        <div className="grid h-screen w-full place-items-center">
          <span className="animate-spin text-2xl text-gray-500">
            <BiLoaderAlt />
          </span>
        </div>
      ) : (
        <div className="flex h-screen w-full flex-col">
          <Navbar />
          <div className="mx-auto mt-8 w-full max-w-6xl px-8 pb-32">
            <div className="flex flex-wrap gap-4">
              {courses.map((course) => (
                <AdminCard key={course.url} course={course} />
              ))}
            </div>
            <Link href={"/admin/new-course"}>
              <button className="mt-4 rounded-lg border-2 border-accent px-3 py-2 font-semibold text-accent transition-colors hover:bg-accent hover:text-white">
                New course
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
