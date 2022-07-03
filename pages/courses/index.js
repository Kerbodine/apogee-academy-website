import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import CourseNavbar from "../../components/CourseNavbar";
import { goals } from "../../config/goals";

export default function Courses() {
  const [courseSearch, setCourseSearch] = useState("");

  return (
    <>
      <Head>
        <title>Courses | Apogee Academy</title>
      </Head>
      <CourseNavbar />
      <div className="mx-auto mt-8 mb-16 max-w-6xl overflow-hidden p-6 sm:p-8">
        <section>
          <h2 className="text-2xl font-semibold">Your courses</h2>
          <p className="text-lg text-gray-500">
            Lessons that you have started recently
          </p>
          <div className="mt-4 flex h-64 w-full gap-4">
            <div className="h-full w-full rounded-2xl bg-gray-100"></div>
            <div className="h-full w-full rounded-2xl bg-gray-100"></div>
            <div className="h-full w-full rounded-2xl bg-gray-100"></div>
            <div className="h-full w-full rounded-2xl bg-gray-100"></div>
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Popular courses</h2>
          <p className="text-lg text-gray-500">
            Popular with our users in the last month
          </p>
          <div className="mt-4 flex h-64 w-full gap-4">
            <div className="h-full w-full rounded-2xl bg-gray-100"></div>
            <div className="h-full w-full rounded-2xl bg-gray-100"></div>
            <div className="h-full w-full rounded-2xl bg-gray-100"></div>
            <div className="h-full w-full rounded-2xl bg-gray-100"></div>
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Browse all topics</h2>
          <p className="text-lg text-gray-500">
            Discover lessons from all the 17 SDGs
          </p>
          <div className="relative mt-4 flex w-full flex-col gap-4 rounded-2xl bg-gray-100 p-2 sm:p-4 md:flex-row">
            <div className="grid w-full grid-cols-6 flex-wrap gap-1 sm:gap-2 md:w-2/3">
              {goals.map((goal) => (
                <Link href={`/goal-${goal.id}`} key={goal.id}>
                  <div className="relative aspect-square h-full w-full cursor-pointer overflow-hidden rounded-md ring-indigo-500 ring-offset-2 sm:hover:ring-4">
                    <Image
                      src={goal.src}
                      alt={`Goal ${goal.id}`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </Link>
              ))}
              <div className="relative aspect-square h-full w-full">
                <Image
                  src="/images/goals/sdg-wheel.png"
                  alt="SDG Wheel"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="flex min-h-[200px] flex-col gap-2 md:w-1/3 md:gap-4">
              <div className="flex h-9 items-center gap-2 rounded-lg bg-gray-200 px-2 text-gray-700 ring-gray-400 focus-within:ring-2">
                <span className="text-xl text-gray-500">
                  <BiSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search for courses..."
                  value={courseSearch}
                  onChange={(e) => setCourseSearch(e.target.value)}
                  className="group bg-transparent placeholder:text-gray-500 focus:outline-none"
                />
              </div>
              <div className="w-full flex-auto rounded-lg bg-gray-200"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
