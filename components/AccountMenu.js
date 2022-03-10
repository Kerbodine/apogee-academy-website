import React, { Fragment } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Menu, Transition } from "@headlessui/react";
import { BiUserCircle, BiCog, BiLogOut } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

export default function AccountMenu() {
  const { user, logout } = useAuth();

  const menuItems = [
    {
      label: "My account",
      icon: <BiUserCircle />,
    },
    {
      label: "Settings",
      icon: <BiCog />,
    },
  ];

  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button
          className={`${
            !user.photoURL && "bg-gray-500 text-lg font-medium text-white"
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
            {menuItems.map((item) => (
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active && "bg-gray-100"
                    } group flex w-full cursor-pointer items-center rounded-md px-1.5 py-1.5 text-sm font-medium text-gray-700`}
                  >
                    <Link href="/">
                      <>
                        <span className="mr-1 text-2xl">{item.icon}</span>
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
  );
}
