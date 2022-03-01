import Link from "next/link";
import Logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-white border-b-2 border-gray-200">
      <div className="h-full max-w-6xl mx-auto px-6 flex items-center">
        <div className="flex items-center h-10 gap-2">
          <Logo className="w-12" />
          <h3 className="text-lg font-semibold text-black w-full">
            Apogee Academy
          </h3>
        </div>
        <div className="ml-auto flex items-center">
          <Link href="/">
            <button className="h-10 rounded-lg hover:text-white text-indigo-600 px-3 border-2 border-indigo-500 hover:bg-indigo-500">
              Log In
            </button>
          </Link>
          <div className="mx-2 h-8 w-0.5 bg-gray-300"></div>
          <Link href="/">
            <button className="h-10 rounded-lg text-white px-3 border-2 border-indigo-500 bg-indigo-500">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
