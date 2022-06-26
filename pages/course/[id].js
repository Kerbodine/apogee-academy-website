import React from "react";
import { useRouter } from "next/router";
import CourseNavbar from "../../components/CourseNavbar";
import Head from "next/head";
import SidebarCard from "../../components/course/SidebarCard";
import SidebarHeader from "../../components/course/SidebarHeader";
import { BiBookmark, BiCommentDetail, BiLike } from "react-icons/bi";

export default function Course() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Courses | Apogee Academy</title>
      </Head>
      <CourseNavbar />
      <div className="mx-auto flex h-[calc(100vh-66px)] w-full max-w-6xl overflow-hidden">
        <div className="flex h-full w-80 flex-none flex-col gap-2 overflow-y-auto p-4">
          <SidebarHeader title="Basics" />
          <SidebarCard />
          <SidebarCard />
          <SidebarHeader title="Worksheet" />
          <SidebarCard />
          <SidebarCard />
          <SidebarCard />
        </div>
        <div className="h-full w-full overflow-y-auto border-x-2 border-gray-200">
          <div className="aspect-video w-full border-b-2 border-gray-200 bg-gray-700"></div>
          <div className="p-8">
            <h1 className="text-3xl font-bold tracking-tight">
              1 - Dart in 100 Seconds
            </h1>
            <h2 className="text-xl text-gray-600">
              Learn the fundamentals of Dart in 100 Seconds
            </h2>
            <hr className="my-4 border border-dashed" />
            <div className="flex">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gray-200 text-xl font-bold">
                  J
                </div>
                <div>
                  <p className="-mb-1.5 font-semibold">John Doe</p>
                  <p className="text-gray-600">Instructor title</p>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-gray-200 text-2xl text-gray-600 transition-colors hover:bg-gray-200">
                  <BiLike />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-gray-200 text-2xl text-gray-600 transition-colors hover:bg-gray-200">
                  <BiBookmark />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-gray-200 text-2xl text-gray-600 transition-colors hover:bg-gray-200">
                  <BiCommentDetail />
                </button>
              </div>
            </div>
            <hr className="my-4 border border-dashed" />
            <p className="pb-16 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              officia exercitationem fugit eligendi modi consequatur. Autem
              temporibus rem ullam exercitationem non? Est qui sunt eveniet,
              tempora voluptates perspiciatis laboriosam molestias consequatur,
              earum perferendis dolorem ipsa possimus at saepe fugiat? Voluptas,
              at sint eos dolorem eius laborum dignissimos fugit aspernatur
              doloribus possimus quidem id praesentium molestiae. Eius quod ipsa
              similique aliquid laudantium nostrum officia tempora quos,
              cupiditate, accusantium eligendi facilis quidem corporis
              voluptatum facere doloribus magni harum in totam exercitationem
              id.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
