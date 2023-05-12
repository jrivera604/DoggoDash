import React from "react";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const logo = { name: "DOGGO DASH", href: "/", current: false };

const url = "https://dev-fgoqn1efup3417h1.us.auth0.com/u/signup?state=hKFo2SBJQ1BVU2F6U05SNm1SSXdzTl9aWXhFc0NrZXRPMzQ0SKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGRRVlItTXZyd2t5ekhfZUxxU2Y3c3ZQS0F4aTZOeEYxo2NpZNkgZUVkbm42cDNPNVZXTjZOU0laanhGdzRaZmtod3dkMHA"
const signedOutNavigationRight = [
  { name: "Sign In", href: "/api/auth/login", current: false },
  { name: "Sign Up", href: `${url}`, current: false},
];

const signedOutNavigationLeft = [
  { name: "Search", href: "/search", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-start">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://www.vhv.rs/dpng/d/100-1000776_white-dog-silhouette-png-transparent-png.png"
                    alt="Your Company"
                    href=" / "
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://www.vhv.rs/dpng/d/100-1000776_white-dog-silhouette-png-transparent-png.png"
                    alt="Your Company"
                    href=" / "
                  />
                </div> */}

              <div className="flex flex-1 items-center sm:items-stretch justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 ">
                    <a
                      key={logo.name}
                      href={logo.href}
                      className=" text-white rounded-md px-3 py-2 text-sm font-medium"
                      aria-current={logo.current ? "page" : undefined}
                    >
                      {logo.name}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 items-center sm:items-stretch justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 " id="signedOutNavigationLeft">
                    {signedOutNavigationLeft.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white absolute right-0 "
                            : "text-gray-300 hover:bg-gray-700 hover:text-white  ",
                          "rounded-md px-3 py-2 text-sm font-medium bg-gray-700"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-1 items-center sm:items-stretch justify-end">
                <div className="hidden sm:ml-6 sm:block">
                  <div
                    className="flex space-x-10" id="signedOutNavigationRight"
                  >
                    {signedOutNavigationRight.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white absolute right-0 "
                            : "text-gray-300 hover:bg-gray-700 hover:text-white  ",
                          "rounded-md px-3 py-2 text-sm font-medium bg-gray-700"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* NOTIFICATION ICON */}
                {/* <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {signedOutNavigationRight.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
