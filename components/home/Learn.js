import React from "react";

export default function Learn() {
  return (
    <section className="mx-auto my-16 flex max-w-6xl p-8">
      <div className="w-full md:w-1/2">
        <header className="mb-4">
          <h2 className="mb-4 text-lg font-semibold text-gray-600 sm:text-xl">
            Learn & share with a community of <br />
            <span className="text-2xl text-indigo-500 sm:text-3xl">
              Like-minded students
            </span>
          </h2>
          <p className="text-gray-600">
            We, at Apogee Academy, fully believe that collaboration is the key
            to success; making the world a better place is no less than a team
            effort. By communicating with like-minded individuals that share the
            same ideals, working towards these goals will be made easier.
          </p>
        </header>
      </div>
      <div className="flex-auto"></div>
    </section>
  );
}
