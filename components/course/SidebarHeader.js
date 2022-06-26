import React from "react";

export default function SidebarHeader({ title }) {
  return (
    <span className="mt-2 -mb-1 text-sm font-bold uppercase text-gray-600">
      {title}
    </span>
  );
}
