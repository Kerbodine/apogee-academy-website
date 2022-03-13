import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { BiMenu, BiX } from "react-icons/bi";
import LogoSmall from "../images/logo-small.svg";
import LogoWide from "../images/logo-wide.svg";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

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
      label: "Signup",
    },
  ];

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-20 border-b-2 border-gray-200 bg-white"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex w-full">
                <div className="flex flex-shrink-0 items-center">
                  <LogoSmall className="block h-8 w-auto lg:hidden" />
                  <LogoWide className="hidden h-8 w-auto lg:block" />
                </div>
                <div className="hidden items-center sm:ml-auto sm:flex sm:space-x-2">
                  {links.slice(0, 3).map((link, index) => (
                    <Link key={index} href={link.href}>
                      <div
                        className={`${
                          router.pathname === link.href
                            ? "bg-gray-100"
                            : "hover:border-gray-200"
                        } inline-flex cursor-pointer items-center rounded-lg border-2 border-transparent px-2 py-1 font-medium`}
                      >
                        {link.label}
                      </div>
                    </Link>
                  ))}
                  <div className="h-8 w-0.5 bg-gray-200"></div>
                  <Link href="/login">
                    <div
                      className={`${
                        router.pathname === "/login"
                          ? "bg-gray-100"
                          : "hover:border-gray-200"
                      } inline-flex cursor-pointer items-center rounded-lg border-2 border-transparent px-2 py-1 font-medium`}
                    >
                      Log in
                    </div>
                  </Link>
                  <Link href="/login">
                    <div
                      className={`${
                        router.pathname === "/signup" && "bg-indigo-500"
                      } inline-flex cursor-pointer items-center rounded-lg border-2 border-indigo-500 bg-indigo-500 px-2 py-1 font-medium text-white ring-indigo-600 ring-offset-2 hover:border-indigo-600 hover:bg-indigo-600 active:ring-2`}
                    >
                      Sign up
                    </div>
                  </Link>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <BiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <BiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="absolute inset-x-0 top-[66px] border-b-2 border-gray-200 bg-white sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {links.map((link, index) => (
                <Disclosure.Button as="div" key={index}>
                  <Link href={link.href}>
                    <div
                      className={`${
                        router.pathname === link.href
                          ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                      } block cursor-pointer border-l-4 py-2 pl-3 pr-4 font-medium`}
                    >
                      {link.label}
                    </div>
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
