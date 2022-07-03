import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { BiLoaderAlt, BiPlus } from "react-icons/bi";
import AdminCard from "../components/course/AdminCard";
import Navbar from "../components/Navbar";

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
          <div className="mx-auto mt-8 flex w-full max-w-6xl flex-wrap gap-8 pb-32">
            <AdminCard />
            <button className="grid h-24 w-24 place-items-center rounded-2xl border-2 border-dashed border-gray-200 text-2xl transition-all hover:border-solid hover:border-gray-300 hover:bg-gray-100">
              <BiPlus />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
