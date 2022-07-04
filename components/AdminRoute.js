import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function AdminRoute({ children }) {
  const router = useRouter();

  const { userData } = useAuth();

  const isAdmin = userData.roles?.includes("admin");
  if (!isAdmin) {
    router.push("/home");
  }

  return <div>{isAdmin && children}</div>;
}
