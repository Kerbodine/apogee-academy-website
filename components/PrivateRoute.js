import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children }) {
  const { user, username, userData } = useAuth();
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (!username && pathname !== "/username") {
      router.push("/username");
    }
    if (pathname === "/admin") {
      const isAdmin = userData.roles.includes("admin");
      if (!isAdmin) {
        router.push("/home");
      }
    }
  }, [router, user]);

  return <>{user && children}</>;
}
