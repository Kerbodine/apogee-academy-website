import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import Layout from "../components/Layout";
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
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PublicRoute>
      ) : (
        <PrivateRoute>
          <Layout>
            <Component {...pageProps} />
            <Toaster />
          </Layout>
        </PrivateRoute>
      )}
    </AuthProvider>
  );
}

export default MyApp;
