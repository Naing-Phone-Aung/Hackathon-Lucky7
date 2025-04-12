import React from "react";
import { CiHome } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";
import Avvvatars from "avvvatars-react";
import communityList from "../data/community";

const Sidebar = () => {
  return (
    <aside
      id="default-sidebar"
      className="font-schisted shadow-sm fixed top-0 left-0 w-64 h-screen overflow-y-auto transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="px-3 py-4 overflow-y-auto dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className=" bg-gray-100 py-2 w-full text-center">
                BACKEND PROJECTS
              </span>
            </a>
          </li>
          <li>
            <Link
              to={"/"}
              className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <CiHome className="shrink-0 font-schisted text-sm size-6 transition duration-75 dark:text-zinc-400 group-hover dark:group-hover:text-white" />
              <span className="ms-3">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/recipes-page"}
              href="../course-create-list.php"
              className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <CiBookmark className="shrink-0 size-6 transition duration-75 dark:text-zinc-400 group-hover dark:group-hover:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">Recipes</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/weekly-plan-page"}
              href="../batch-list.php"
              className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <CiCalendarDate className="shrink-0 size-6 transition duration-75 dark:text-zinc-400 group-hover dark:group-hover:text-white" />

              <span className="flex-1 ms-3 whitespace-nowrap">Weekly Plan</span>
            </Link>
          </li>
          <li className=" border-y border-gray-200">
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <span className="flex-1 text-left rtl:text-right whitespace-nowrap">
                COMMUNITIES
              </span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
              <li>
                <Link
                  to={"/create-community-page"}
                  href="../batch-list.php"
                  className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <IoAdd className="shrink-0 size-6 transition duration-75 dark:text-zinc-400 group-hover dark:group-hover:text-white" />

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Create Community
                  </span>
                </Link>
              </li>
              {communityList.map((el) => (
                <li key={el.id}>
                  <Link
                    to={`/community-detail-page/${el.id}`}
                    className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <Avvvatars
                      value={el.groupName}
                      className="shrink-0 size-6 transition duration-75 dark:text-zinc-400 group-hover dark:group-hover:text-white"
                    />

                    <span className="flex-1 ms-3 whitespace-nowrap">
                      {el.groupName}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="">
            <form className="flex items-center max-w-sm mx-auto ">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  placeholder="Invitation Code"
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ms-2 text-sm font-medium text-white bg-orange rounded-lg   hover:bg-secOrange focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              >
                <IoAdd className="shrink-0 size-6 transition duration-75 dark:text-zinc-400 group-hover dark:group-hover:text-white" />
                <span className="sr-only">Type Invitation Code</span>
              </button>
            </form>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
