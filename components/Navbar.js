import Link from "next/link";
import Logo from "../images/logo.svg";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
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
      href: "/about",
      label: "About",
    },
    {
      href: "/contact",
      label: "Contact",
    },
    {
      href: "/login",
      label: "Login",
    },
    {
      href: "/signup",
      label: "Sign Up",
    },
  ];

  return (
    <>
      <nav className="sticky top-0 z-10 h-16 w-full border-b-2 border-gray-200 bg-white shadow-lg">
        <div className="mx-auto flex h-full max-w-6xl items-center px-6">
          <div className="flex h-10 items-center gap-2">
            <Logo className="w-12" />
            <h3 className="w-full text-lg font-semibold text-black">
              Apogee Academy
            </h3>
          </div>
          <ul className="ml-auto hidden items-center gap-4 font-medium md:flex">
            {links.slice(0, -1).map((link) => {
              return (
                <Link href={link.href} key={link.href}>
                  <button className="decoration-2 hover:underline">
                    {link.label}
                  </button>
                </Link>
              );
            })}
            <Link href="/signup">
              <button className="h-10 rounded-lg bg-indigo-500 px-3 text-white ring-indigo-600 ring-offset-2 hover:bg-indigo-600 active:ring-2">
                Sign Up
              </button>
            </Link>
          </ul>
          <button
            className="-mr-2 ml-auto grid h-10 w-10 place-items-center rounded-lg text-2xl text-black hover:bg-gray-100 md:hidden"
            onClick={toggleMenu}
          >
            <BiMenu />
          </button>
        </div>
      </nav>
      {/* Mobile Navbar */}
      {isOpen && (
        <div className="sticky top-16 z-10 flex h-12 w-full items-center border-b-2 border-gray-200 bg-gray-100 shadow-lg md:hidden">
          <div className="mx-auto flex items-center gap-3 font-medium">
            {links.map((link) => {
              return (
                <Link href={link.href} key={link.href}>
                  <button className="text-sm decoration-2 hover:underline">
                    {link.label}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
