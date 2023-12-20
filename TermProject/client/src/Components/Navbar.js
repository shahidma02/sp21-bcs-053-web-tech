import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import SideNav from "./SideNav";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const Navbar = () => {
  const [side, setSide] = useState(false);

  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/auth/logout", {
        withCredentials: true,
      });

      setUser(null);
      navigate("/login");
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log("name:",username)
 

  const showSide = () => {
    setSide(!side);
  };

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 border-b-2 h-24 sticky">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <span className="self-center text-3xl font-bold dark:text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text p-3">
              SmartScribbles
            </span>
          </div>

          <div
            className="hidden w-full md:block md:w-auto pr-10 py-3"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                {user ? (
                  <Link
                    to="dashboard"
                    className="block py-2 pl-1 pr-4 text-gray-500 relative hover:text-blue-500 hover:after:block hover:after:w-full hover:after:h-1 hover:after:bg-gradient-to-r hover:after:from-blue-500 hover:after:via-purple-500 hover:after:to-pink-500 "
                    aria-current="page"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    to="/"
                    className="block py-2 pl-1 pr-4 text-gray-500 relative hover:text-blue-500 hover:after:block hover:after:w-full hover:after:h-1 hover:after:bg-gradient-to-r hover:after:from-blue-500 hover:after:via-purple-500 hover:after:to-pink-500 "
                    aria-current="page"
                  >
                    Home
                  </Link>
                )}
              </li>
              <li>
                {user ? (
                  <Link
                  to={"/myblogs/"+user._id}
                    className="block py-2 pl-1 pr-4 text-gray-500 relative hover:text-blue-500 hover:after:block hover:after:w-full hover:after:h-1 hover:after:bg-gradient-to-r hover:after:from-blue-500 hover:after:via-purple-500 hover:after:to-pink-500 "
                  >
                    My Blogs
                  </Link>
                ) : (
                  <Link
                    to="dashboard"
                    className="block py-2 pl-1 pr-4 text-gray-500 relative hover:text-blue-500 hover:after:block hover:after:w-full hover:after:h-1 hover:after:bg-gradient-to-r hover:after:from-blue-500 hover:after:via-purple-500 hover:after:to-pink-500 "
                  >
                    Blogs
                  </Link>
                )}
              </li>
              <li>
                {user ? (
                  <Link
                    to="write"
                    className="block py-2 pl-1 pr-4 text-gray-500 relative hover:text-blue-500 hover:after:block hover:after:w-full hover:after:h-1 hover:after:bg-gradient-to-r hover:after:from-blue-500 hover:after:via-purple-500 hover:after:to-pink-500 "
                  >
                    Write
                  </Link>
                ) : (
                  <Link
                    to="/about"
                    className="block py-2 pl-1 pr-4 text-gray-500 relative hover:text-blue-500 hover:after:block hover:after:w-full hover:after:h-1 hover:after:bg-gradient-to-r hover:after:from-blue-500 hover:after:via-purple-500 hover:after:to-pink-500 "
                  >
                    About Us
                  </Link>
                )}
              </li>

              <li>
                {user ? null : (
                  <Link
                    to="/contact"
                    className="block py-2 pl-1 pr-4 text-gray-500 relative hover:text-blue-500 hover:after:block hover:after:w-full hover:after:h-1 hover:after:bg-gradient-to-r hover:after:from-blue-500 hover:after:via-purple-500 hover:after:to-pink-500"
                  >
                    Contact Us
                  </Link>
                )}
              </li>
              <li x-data="{ isOpen: false }" className="relative group">
              <CgProfile className="text-2xl block mt-[5px]  text-gray-500 rounded group-hover:bg-gray-200 relative" />
                {user ? (
                  <ul
                    className="absolute group-hover:block hidden w-32 mt-2 space-y-1 bg-white text-gray-500 py-1 rounded shadow-lg left-0"
                    x-data="{ isOpen: false }"
                    mouseenter="isOpen = true"
                    mouseleave="isOpen = false"
                  >
                    <li className="block text-black px-4 py-2 text-sm font-bold">
                      {user.name}
                    </li>
                    <li>
                      <Link
                        to={`/profile/${user._id}`}
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        My Profile
                      </Link>
                    </li>
                    <li
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={handleLogout}
                    >
                      Log Out
                    </li>
                  </ul>
                ) : (
                  <ul
                    className="absolute group-hover:block hidden w-24 mt-2 space-y-1 bg-white text-gray-500 py-1 rounded shadow-lg left-0"
                    x-data="{ isOpen: false }"
                    mouseenter="isOpen = true"
                    mouseleave="isOpen = false"
                  >
                    <li>
                      <Link
                        to="/signup"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Sign Up
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/LogIn"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Log In
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div onClick={showSide} className="md:hidden flex justify-end">
            <p className="cursor-pointer relative">
              <FaBars />
            </p>
            {side && <SideNav />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
