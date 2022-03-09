import { useRouter } from "next/router";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/globals.css";

const noAuthPages = [
  "/",
  "/about",
  "/contact",
  "/login",
  "/signup",
  "/reset-password",
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AuthProvider>
      {noAuthPages.includes(router.pathname) ? (
        <PublicRoute>
          <Component {...pageProps} />
        </PublicRoute>
      ) : (
        <PrivateRoute>
          <Component {...pageProps} />
        </PrivateRoute>
      )}
    </AuthProvider>
  );
}

export default MyApp;
