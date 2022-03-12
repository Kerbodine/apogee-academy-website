import Link from "next/link";
import Logo from "../images/logo.svg";
import { BiMenu, BiSearch } from "react-icons/bi";
import { useState } from "react";
import AccountMenu from "./AccountMenu";

const CourseNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/courses",
      label: "Courses",
    },
    {
      href: "/saved",
      label: "Saved",
    },
  ];

  return (
    <>
      <div className="sticky top-0 z-10 h-16 w-full border-b-2 border-gray-200 bg-white shadow-lg">
        <div className="mx-auto flex h-full max-w-6xl items-center px-6">
          <div className="flex h-10 items-center gap-2">
            <Logo className="w-12" />
            <h3 className="w-full text-lg font-semibold text-black">
              Apogee Academy
            </h3>
          </div>
          {/* Links */}
          <ul className="hidden flex-auto items-center gap-4 font-medium md:flex">
            <div className="mx-auto flex gap-4">
              {links.map((link) => {
                return (
                  <Link href={link.href} key={link.href}>
                    <li className="cursor-pointer decoration-2 hover:underline">
                      {link.label}
                    </li>
                  </Link>
                );
              })}
            </div>
            {/* Searchbar */}
            <div className="max-w-36 flex h-9 items-center gap-2 rounded-lg bg-gray-100 px-2 text-gray-700 ring-gray-400 focus-within:ring-2">
              <span className="text-xl text-gray-400">
                <BiSearch />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="group bg-transparent placeholder:text-gray-400 focus:outline-none"
              />
            </div>
            {/* Account */}
            <AccountMenu />
          </ul>
          {/* Mobile menu icon */}
          <button
            className="-mr-2 ml-auto grid h-10 w-10 place-items-center rounded-lg text-2xl text-black hover:bg-gray-100 md:hidden"
            onClick={toggleMenu}
          >
            <BiMenu />
          </button>
        </div>
      </div>
      {/* Mobile Navbar */}
      {isOpen && (
        <div className="sticky top-16 z-10 flex h-16 w-full items-center border-b-2 border-gray-200 bg-gray-100 shadow-lg md:hidden">
          <div className="mx-auto flex items-center gap-3 font-medium">
            <Link href="/">
              <p className="cursor-pointer decoration-2 hover:underline">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className="cursor-pointer decoration-2 hover:underline">
                About
              </p>
            </Link>
            <Link href="/contact">
              <p className="cursor-pointer decoration-2 hover:underline">
                Contact
              </p>
            </Link>
            <div className="h-8 w-0.5 bg-gray-200"></div>
            <Link href="/login">
              <p className="cursor-pointer decoration-2 hover:underline">
                Login
              </p>
            </Link>
            <Link href="/signup">
              <p className="cursor-pointer decoration-2 hover:underline">
                Signup
              </p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseNavbar;
