import React from "react";

export default function Footer() {
  return (
    <div className="mt-32 h-48 w-full bg-gray-100">
      <div className="mx-auto w-full max-w-6xl -translate-y-16 px-6">
        <section className="flex w-full flex-col items-center rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-lg md:flex-row">
          <div className="w-full md:w-1/2 lg:w-2/3">
            <h3 className="text-xl font-semibold md:text-2xl">
              Sign up for the waiting list
            </h3>
            <p className="text-sm text-gray-600 md:text-base">
              Stay up to date with the newest changes, and get early access to
              our members only platform.
            </p>
            <p className="mt-2 text-xs font-medium text-gray-700 md:text-sm">
              No spam guaranteed, unsubscribe at any time
            </p>
          </div>
          <div className="mt-4 flex w-full flex-auto gap-2 md:mt-0 md:w-0 md:p-4">
            <input
              type="email"
              placeholder="Enter your email..."
              className="h-10 min-w-0 flex-auto rounded-lg border-2 border-gray-200 px-2 outline-none focus:border-indigo-600"
            />
            <button className="flex h-10 items-center rounded-lg bg-indigo-500 px-4 text-white ring-indigo-600 ring-offset-2 hover:bg-indigo-600 focus:ring-2">
              Register
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
