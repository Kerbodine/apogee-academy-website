import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BiMenu, BiX, BiUserCircle, BiCog, BiLogOut } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";
import Image from "next/image";
import LogoSmall from "../images/logo-small.svg";
import LogoWide from "../images/logo-wide.svg";

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

const menuItems = [
  {
    label: "My account",
    icon: <BiUserCircle />,
    href: "/",
  },
  {
    label: "Settings",
    icon: <BiCog />,
    href: "/",
  },
];

export default function CourseNavbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <Disclosure as="nav" className="border-b-2 border-gray-200 bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <LogoSmall className="block h-8 w-auto lg:hidden" />
                  <LogoWide className="hidden h-8 w-auto lg:block" />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {links.map((link, index) => (
                    <Link key={index} href={link.href}>
                      <div
                        className={`${
                          router.pathname === link.href
                            ? "border-indigo-500 text-gray-900"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        } inline-flex cursor-pointer items-center border-b-2 border-indigo-500 px-1 pt-1 font-medium`}
                      >
                        {link.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <div>
                    <Menu.Button
                      className={`${
                        !user.photoURL &&
                        "bg-gray-500 text-lg font-medium text-white"
                      } relative grid h-[34px] w-[34px] flex-none place-items-center overflow-hidden rounded-lg ring-gray-200 hover:ring-2`}
                    >
                      {user.photoURL ? (
                        <Image src={user.photoURL} alt="pfp" layout="fill" />
                      ) : (
                        user.displayName[0]
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-7 w-40 origin-top-right divide-y-2 divide-gray-200 rounded-lg border-2 border-gray-200 bg-white shadow-lg focus:outline-none">
                      <div className="p-2">
                        {menuItems.map((item, index) => (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <div
                                className={`${
                                  active && "bg-gray-100"
                                } group flex w-full cursor-pointer items-center rounded-md px-1.5 py-1.5 text-sm font-medium text-gray-700`}
                              >
                                <Link href="/">
                                  <>
                                    <span className="mr-1 text-2xl">
                                      {item.icon}
                                    </span>
                                    {item.label}
                                  </>
                                </Link>
                              </div>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                      <div className="p-2">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active && "bg-gray-100"
                              } group flex w-full items-center rounded-md px-1.5 py-1.5 text-sm font-medium text-gray-700`}
                              onClick={logout}
                            >
                              <span className="mr-1 text-2xl">
                                <BiLogOut />
                              </span>
                              Log out
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
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

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
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
            <div className="border-t-2 border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <div className="relative h-10 w-10 rounded-lg">
                    <Image src={user.photoURL} alt="pfp" layout="fill" />
                  </div>
                </div>
                <div className="ml-3 w-full truncate">
                  <div className="text-base font-medium text-gray-800">
                    {user.displayName}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {user.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                {menuItems.map((item, index) => (
                  <Disclosure.Button as="div" key={index}>
                    <Link href={item.href}>
                      <div
                        className={`${
                          router.pathname === item.href
                            ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                        } block cursor-pointer border-l-4 py-2 pl-3 pr-4 font-medium`}
                      >
                        {item.label}
                      </div>
                    </Link>
                  </Disclosure.Button>
                ))}
                <Disclosure.Button as="div">
                  <button
                    className="block w-full px-4 py-2 text-left text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    onClick={logout}
                  >
                    Log Out
                  </button>
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
