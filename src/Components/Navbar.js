import React from "react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div>
      <nav class="bg-white  dark:bg-gray-900 border-b-2 h-20 sticky">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div class="flex items-center">
            <span class="self-center text-3xl font-bold dark:text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              SmartScribbles
            </span>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="bg-slate-500">Open main menu</span>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-500 relative hover:text-blue-500 hover:after:block hover:after:w-full hover:after:h-1 hover:after:bg-gradient-to-r hover:after:from-blue-500 hover:after:via-purple-500 hover:after:to-pink-500 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-500 relative hover:text-blue-500 hover:after:block hover:after:w-full hover:after:h-1 hover:after:bg-gradient-to-r hover:after:from-blue-500 hover:after:via-purple-500 hover:after:to-pink-500 "
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-500 relative hover:text-blue-500 hover:after:block hover:after:w-full hover:after:h-1 hover:after:bg-gradient-to-r hover:after:from-blue-500 hover:after:via-purple-500 hover:after:to-pink-500 "
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-500 relative hover:text-blue-500 hover:after:block hover:after:w-full hover:after:h-1 hover:after:bg-gradient-to-r hover:after:from-blue-500 hover:after:via-purple-500 hover:after:to-pink-500 "
                >
                  Contact
                </a>
              </li>
              <li class="relative group">
                <a
                  href="#"
                  class="block mt-[2px] py-2 pl-3 pr-4 text-gray-500 rounded group-hover:bg-gray-200"
                >
                  <CgProfile className="text-2xl" />
                </a>
                <ul class="absolute hidden group-hover:block mt-2 space-y-1 bg-white text-gray-500 py-1 rounded shadow-lg">
                  <li>
                    <a href="#">Sign Up</a>
                  </li>
                  <li>
                    <a href="#">Log In</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
