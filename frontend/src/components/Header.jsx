import React from "react";
import logo from "../../public/K-connect.png";
import profile from "../../public/avator_christmas_girl.jpg";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="font-schisted sticky top-0 z-10 bg-white">
      <section className="flex items-center justify-between shadow-md py-2 px-4">
        <img src={logo} className="w-28" alt="" />

        <form className="w-md">
          <label
            htmlFor="default-search"
            className="text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="Search Community"
            />
            {/* <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2 bg-orange hover:bg-secOrange focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-secOrange dark:hover:bg-orange dark:focus:ring-sebg-secOrange"
            >
              Search
            </button> */}
          </div>
        </form>

        <div className="flex gap-5 items-center">
          <Link to={"/login-page"}
            type="button"
            className="text-white flex items-center gap-2 bg-orange hover:bg-secOrange focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full  px-4 py-1.5 text-center dark:bg-secOrange dark:hover:bg-orange dark:focus:ring-sebg-secOrange"
          >
            <CiLogout className="size-7" />
            Log out
          </Link>
          <img src={profile} className="w-10 rounded-full" alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
