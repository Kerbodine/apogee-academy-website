import React from "react";

export default function Tag({ text = "Tag item" }) {
  return (
    <button className="rounded-lg border-2 border-gray-300 px-1.5 py-0.5 text-sm font-semibold text-gray-500 hover:border-gray-500">
      {text}
    </button>
  );
}
