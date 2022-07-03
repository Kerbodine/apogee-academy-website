import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function SidebarCard({ url, title, description, time }) {
  const router = useRouter();
  const { courseId, contentId } = router.query;

  return (
    <Link href={`/courses/${courseId}/${url}`}>
      <div
        className={`${
          contentId === url && "!bg-gray-100"
        } flex w-full cursor-pointer gap-3 rounded-lg border-2 border-gray-200 p-3 transition-colors hover:bg-gray-100`}
      >
        <div>
          <button className="h-7 w-7 rounded-lg border-2 border-gray-300 transition-colors hover:border-gray-600"></button>
        </div>
        <div>
          <h3 className="text font-semibold">{title}</h3>
          <p className="leading-5 text-gray-600">{description}</p>
          <div className="mt-1 flex gap-2">
            <span className="rounded-md bg-gray-200 px-1.5 py-0.5 text-sm font-semibold">
              3:15{time}
            </span>
            <span className="rounded-md bg-green-300 px-1.5 py-0.5 text-sm font-semibold">
              Free
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
