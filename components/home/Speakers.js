import Image from "next/image";
import React from "react";

export default function Speakers() {
  return (
    <section className="mx-auto my-8 flex max-w-6xl flex-col-reverse gap-8 overflow-hidden p-8 md:flex-row md:items-center">
      <div className="w-full md:w-1/2 md:py-8">
        <header className="mb-4">
          <h2 className="mb-4 text-lg font-semibold text-gray-600 sm:text-xl">
            Resources created and curated by <br />
            <span className="text-2xl text-indigo-500 sm:text-3xl">
              Youth leaders & social entrepreneurs
            </span>
          </h2>
          <p className="text-gray-600">
            From up-and-coming SDG world leaders to educators to simply students
            like you - Apogee Academy is a place for everyone. Resources on our
            site are meticulously curated by ourselves and contributors alike;
            establishing a one-and-only digitalized educational experience
            centered around the SDGs.
          </p>
          <button className="mt-8 rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-700 hover:bg-indigo-100">
            Learn more →
          </button>
        </header>
      </div>
      <div className="flex h-80 justify-center md:relative md:flex-auto">
        <div className="left-0 h-full w-[512px] flex-none md:absolute md:max-w-none">
          <div className="relative h-full w-full">
            <div className="absolute top-0 left-0 h-56 w-72 overflow-hidden rounded-2xl border-2 border-gray-400 shadow-md">
              <div className="relative h-full w-full bg-white">
                <Image
                  src="/images/speaker-1.jpg"
                  alt="Speaker 1"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-2 right-2 rounded-full bg-black/75 px-2 py-1 text-xs font-medium text-white">
                  Speaker Name
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 h-56 w-72 overflow-hidden rounded-2xl border-2 border-gray-400 shadow-md">
              <div className="relative h-full w-full bg-white">
                <Image
                  src="/images/speaker-2.jpg"
                  alt="Speaker 2"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-2 left-2 rounded-full bg-black/75 px-2 py-1 text-xs font-medium text-white">
                  Speaker Name
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
