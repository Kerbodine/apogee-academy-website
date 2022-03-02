import React from "react";

export default function Footer() {
  return (
    <div className="mt-16 bg-gray-100 w-full h-48">
      <div className="w-full max-w-6xl -translate-y-16 mx-auto px-6">
        <section className="border-2 border-gray-200 bg-white shadow-lg p-6 rounded-2xl w-full flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 lg:w-2/3">
            <h3 className="text-xl md:text-2xl font-semibold">
              Sign up for the waiting list
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Stay up to date with the newest changes, and get early access to
              our members only platform.
            </p>
            <p className="text-xs md:text-sm mt-2 text-gray-700 font-medium">
              No spam guaranteed, unsubscribe at any time
            </p>
          </div>
          <div className="w-full md:w-0 flex-auto mt-4 md:p-4 md:mt-0 flex gap-2">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-auto min-w-0 h-10 outline-none px-2 focus:border-indigo-600 rounded-lg border-2 border-gray-200"
            />
            <button className="h-10 flex items-center px-4 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-2 ring-indigo-600 ring-offset-2">
              Register
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
