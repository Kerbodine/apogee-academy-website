import Link from "next/link";
import Logo from "../images/logo.svg";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sticky top-0 w-full h-16 bg-white border-b-2 shadow-lg border-gray-200 z-10">
        <div className="h-full max-w-6xl mx-auto px-6 flex items-center">
          <div className="flex items-center h-10 gap-2">
            <Logo className="w-12" />
            <h3 className="text-lg font-semibold text-black w-full">
              Apogee Academy
            </h3>
          </div>
          <div className="hidden md:flex ml-auto gap-4 font-medium items-center">
            <Link href="/blog">
              <p className="hover:underline cursor-pointer decoration-2">
                Blog
              </p>
            </Link>
            <Link href="/about">
              <p className="hover:underline cursor-pointer decoration-2">
                About
              </p>
            </Link>
            <Link href="/contact">
              <p className="hover:underline cursor-pointer decoration-2">
                Contact
              </p>
            </Link>
            <div className="w-0.5 h-8 bg-gray-200"></div>
            <Link href="/login">
              <p className="hover:underline cursor-pointer decoration-2">
                Login
              </p>
            </Link>
            <Link href="/signup">
              <button className="h-10 rounded-lg text-white px-3 bg-indigo-500 hover:bg-indigo-600 active:ring-2 ring-indigo-600 ring-offset-2">
                Sign Up
              </button>
            </Link>
          </div>
          <button
            className="grid md:hidden -mr-2 w-10 h-10 rounded-lg hover:bg-gray-100 place-items-center ml-auto text-black text-2xl"
            onClick={toggleMenu}
          >
            <BiMenu />
          </button>
        </div>
      </div>
      {/* Mobile Navbar */}
      {isOpen && (
        <div className="sticky top-16 md:hidden h-16 w-full bg-gray-100 flex items-center border-b-2 border-gray-200 shadow-lg z-10">
          <div className="flex mx-auto gap-3 font-medium items-center">
            <Link href="/blog">
              <p className="hover:underline cursor-pointer decoration-2">
                Blog
              </p>
            </Link>
            <Link href="/about">
              <p className="hover:underline cursor-pointer decoration-2">
                About
              </p>
            </Link>
            <Link href="/contact">
              <p className="hover:underline cursor-pointer decoration-2">
                Contact
              </p>
            </Link>
            <div className="w-0.5 h-8 bg-gray-200"></div>
            <Link href="/login">
              <p className="hover:underline cursor-pointer decoration-2">
                Login
              </p>
            </Link>
            <Link href="/signup">
              <p className="hover:underline cursor-pointer decoration-2">
                Signup
              </p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
