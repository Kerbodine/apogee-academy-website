import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiCube } from "react-icons/bi";

export default function SidebarCard({ len, title, url, index }) {
  const router = useRouter();
  const { courseId, contentId } = router.query;

  return (
    <li>
      <div className="relative pb-6">
        {index !== len - 1 ? (
          <span
            className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
        ) : null}
        <Link href={`/courses/${courseId}/${url}`}>
          <div className="group relative -m-2 flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-gray-100">
            <div
              className={`${
                contentId === url ? "bg-gray-600" : "bg-gray-400"
              } flex h-10 w-10 flex-none items-center justify-center rounded-lg`}
            >
              <BiCube className="text-2xl text-white" />
              {/* icon */}
            </div>
            <p className="three-line text leading-5 text-gray-500">{title}</p>
          </div>
        </Link>
      </div>
    </li>
  );
}
