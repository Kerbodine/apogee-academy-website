import React from "react";
import StreakIcon from "../images/lightning.svg";

export default function Streak() {
  const streak = 12;
  const longestStreak = 15;
  const videosCompleted = 32;

  return (
    <div className="flex w-full gap-4">
      <div className="grid h-24 w-24 flex-none place-items-center rounded-full border-8 border-gray-200 text-gray-700">
        <div className="flex items-center gap-1">
          <p className="text-3xl font-semibold tracking-tight">{streak}</p>
          <StreakIcon className="h-6 w-4" />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-1">
        <h3 className="text-lg font-semibold leading-5 sm:text-xl">
          You're on a {streak} day streak!
        </h3>
        <p className="leading-5 text-gray-700">
          Longest streak: {longestStreak} | Videos completed: {videosCompleted}
        </p>
      </div>
    </div>
  );
}
