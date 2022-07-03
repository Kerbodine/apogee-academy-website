import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import CourseNavbar from "../../../components/CourseNavbar";
import SidebarCard from "../../../components/course/SidebarCard";
import { BiBookmark, BiCommentDetail, BiCube, BiLike } from "react-icons/bi";
import { getContent, getCourses, getPaths } from "../../../config/firebase";

export default function Course({ contents, courseData }) {
  const router = useRouter();
  const { courseId, contentId } = router.query;

  const timeline = [
    {
      id: 1,
      content: "Applied to",
      target: "Front End Developer",
      date: "Sep 20",
    },
    {
      id: 2,
      content: "Advanced to phone screening by",
      target: "Bethany Blake",
      date: "Sep 22",
    },
    {
      id: 3,
      content: "Completed phone screening with",
      target: "Martha Gardner",
      date: "Sep 28",
    },
    {
      id: 4,
      content: "Advanced to interview by",
      target: "Bethany Blake",
      date: "Sep 30",
    },
    {
      id: 5,
      content: "Completed interview with",
      target: "Katherine Snyder",
      date: "Oct 4",
    },
  ];

  return (
    <>
      <Head>
        <title>{courseData.title} | Apogee Academy</title>
      </Head>
      <div className="flex h-screen w-full flex-col">
        <CourseNavbar />
        <div className="mx-auto flex h-full w-full max-w-6xl overflow-hidden">
          <div className="flex h-full w-72 flex-none flex-col gap-2 overflow-y-auto p-4">
            <ul role="list">
              {contents.map((content, index) => (
                <SidebarCard
                  key={content.id}
                  url={content.url}
                  title={content.title}
                  len={contents.length}
                  index={index}
                />
              ))}
            </ul>
          </div>
          <div className="h-full w-full overflow-y-auto border-x-2 border-gray-200">
            <div className="aspect-video w-full border-b-2 border-gray-200 bg-gray-700"></div>
            <div className="p-8">
              <h1 className="text-3xl font-bold tracking-tight">
                {courseData.title}
              </h1>
              <h2 className="text-xl text-gray-600">{courseData.subtitle}</h2>
              <hr className="my-4 border border-dashed" />
              <div className="flex">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gray-200 text-xl font-bold">
                    J
                  </div>
                  <div>
                    <p className="-mb-1.5 font-semibold">
                      {courseData.author.name}
                    </p>
                    <p className="text-gray-600">{courseData.author.title}</p>
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
              <p className="pb-16 text-gray-600">{courseData.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const allPaths = await getPaths();

  const paths = allPaths[0].contentId.map((contentId) => {
    return {
      params: {
        courseId: allPaths[0].courseId,
        contentId: contentId,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { courseId, contentId } }) {
  const contents = await getCourses(courseId);

  const courseData = await getContent(courseId, contentId);

  return {
    props: { contents, courseData },
  };
}
