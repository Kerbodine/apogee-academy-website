import React from "react";
import { useAuth } from "../contexts/AuthContext";
import CourseNavbar from "../components/CourseNavbar";

export default function Courses() {
  const { user, logout } = useAuth();

  return (
    <>
      <CourseNavbar />
    </>
  );
}
