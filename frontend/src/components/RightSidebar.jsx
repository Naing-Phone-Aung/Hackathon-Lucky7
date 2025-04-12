import { React, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import communityList from "../data/community";
import { MdGroups } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiCakeLight } from "react-icons/pi";
import { PiGlobeHemisphereWestThin } from "react-icons/pi";
import { CiLock, CiSaveDown2 } from "react-icons/ci";
import Avvvatars from "avvvatars-react";
import { CiBookmarkPlus } from "react-icons/ci";
import { PiBowlFoodLight } from "react-icons/pi";

const RightSidebar = () => {
  const location = useLocation();
  const showSidebar = location.pathname.startsWith("/community-detail-page");

  const showSidebar2 = location.pathname.startsWith("/weekly-plan-page");

  const showSidebar3 = location.pathname.startsWith("/recipes-page");

  const { id } = useParams();
  const communityData = communityList.find((el) => el.id == id);

  const [activeTab, setActiveTab] = useState("allTime");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <aside
      id="default-sidebar"
      className="font-schisted shadow-sm fixed top-0 right-0 w-80 h-screen overflow-y-auto transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
        {showSidebar && (
          <ul className="mt-12 text-gray-800">
            <div className="flex gap-2 items-center text-gray-800">
              <button
                type="button"
                className=" flex items-center gap-1 border border-gray-600 hover:shadow-sm  focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full  px-3 py-1 text-center dark:bg-secOrange dark:hover:bg-orange dark:focus:ring-sebg-secOrange"
              >
                <IoAdd className="size-5" />
                Create Post
              </button>

              <button
                type="button"
                className="flex items-center gap-1 border border-gray-600 hover:shadow-sm  focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full  px-3 py-1 text-center dark:bg-secOrange dark:hover:bg-orange dark:focus:ring-sebg-secOrange"
              >
                Joined
              </button>

              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="flex items-center gap-1 border border-gray-600 hover:shadow-sm  focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full p-2 text-center dark:bg-secOrange dark:hover:bg-orange dark:focus:ring-sebg-secOrange"
                type="button"
              >
                <BsThreeDotsVertical />
              </button>
              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <li className="text-gray-800 py-3">
              <div className="flex items-center py-2 rounded-lg dark:text-white  group">
                <span className="flex items-center text-sm font-medium text-gray-800 dark:text-white me-3">
                  <span className="flex w-2.5 h-2.5 bg-gray-600 rounded-full me-1.5 shrink-0"></span>
                  {communityData?.groupName}
                </span>
              </div>
              <p className="text-sm">{communityData?.description}</p>
            </li>
            <li className="flex items-center gap-2 pb-3">
              <span className="text-sm text-gray-800">Invitation Code :</span>
              <span className="text-sm">{communityData.code}</span>
            </li>

            <li className="flex items-center gap-2">
              <PiCakeLight className="size-5" />
              <span className="text-sm">
                {communityData.community_create_date}
              </span>
            </li>

            {communityData?.type == "public" ? (
              <li className="flex items-center gap-2 text-sm py-3">
                <PiGlobeHemisphereWestThin className="size-5 text-gray-800" />
                <span>{communityData?.type}</span>
              </li>
            ) : (
              <li className="flex items-center gap-2 text-sm py-3">
                <CiLock className="size-5" />
                <span>{communityData?.type}</span>
              </li>
            )}
            <div className="flex space-x-8 text-sm text-gray-600 border-b py-5 border-gray-300">
              {/* Members */}
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold text-gray-800">
                  {communityData?.members}
                </span>
                <span>Members</span>
              </div>

              {/* Online */}
              <div className="flex flex-col items-start">
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-semibold text-gray-800">
                    {communityData?.online}
                  </span>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
                <span>Online</span>
              </div>

              {/* Rank */}
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold text-gray-800">
                  {communityData.ranking}
                </span>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:underline flex items-center"
                >
                  Rank by size
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 3h7m0 0v7m0-7L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="py-5 text-gray-800">
              <p className="text-center text-base">LEADERBOARDS</p>
              <div className="w-full bg-white rounded-lg shadow-md dark:bg-neutral-800">
                <div className="border-b border-gray-200 px-4 dark:border-neutral-700">
                  <nav
                    className="flex gap-x-2"
                    aria-label="Tabs"
                    role="tablist"
                    aria-orientation="horizontal"
                  >
                    <button
                      onClick={() => handleTabChange("allTime")}
                      type="button"
                      className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-sm whitespace-nowrap focus:outline-none
              ${
                activeTab === "allTime"
                  ? "font-semibold border-gray-600 text-gray-600 dark:text-white"
                  : "border-transparent text-gray-500 hover:text-gray-600 dark:text-neutral-400 dark:hover:text-gray-300"
              }`}
                      role="tab"
                      aria-selected={activeTab === "allTime"}
                    >
                      All time Top
                    </button>
                    <button
                      onClick={() => handleTabChange("weekly")}
                      type="button"
                      className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-sm whitespace-nowrap focus:outline-none
              ${
                activeTab === "weekly"
                  ? "font-semibold border-gray-600 text-gray-600 dark:text-white"
                  : "border-transparent text-gray-500 hover:text-gray-600 dark:text-neutral-400 dark:hover:text-gray-300"
              }`}
                      role="tab"
                      aria-selected={activeTab === "weekly"}
                    >
                      Weekly Top
                    </button>
                  </nav>
                </div>

                {/* Tab Content */}
                <div className="mt-3 p-4">
                  {activeTab === "allTime" && (
                    <div role="tabpanel">
                      <div className="flex items-center gap-2 pb-5 text-gray-800 dark:text-white">
                        <Avvvatars value="Chen" />
                        <p>Chen Myae Kay Khaing</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-800 dark:text-white">
                        <Avvvatars value="Su" />
                        <p>Su Su</p>
                      </div>
                    </div>
                  )}

                  {activeTab === "weekly" && (
                    <div role="tabpanel">
                      <div className="flex items-center gap-2 text-gray-800 dark:text-white">
                        <Avvvatars value="John" />
                        <p>John Doe</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ul>
        )}

        {showSidebar2 && (
          <ul className="mt-12 text-gray-800">
            <li>
              <button
                type="button"
                className=" flex items-center gap-1 border border-gray-600 hover:shadow-sm  focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full  px-3 py-1 text-center dark:bg-secOrange dark:hover:bg-orange dark:focus:ring-sebg-secOrange"
              >
                <IoAdd className="size-5" />
                Shopping List
              </button>
            </li>
            <li className="mt-3">
              <button
                type="button"
                className=" flex items-center gap-1 border border-gray-600 hover:shadow-sm  focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full  px-3 py-1 text-center dark:bg-secOrange dark:hover:bg-orange dark:focus:ring-sebg-secOrange"
              >
                <CiBookmarkPlus className="size-5" />
                General Cook Book
              </button>
            </li>

            <ol className="relative my-8 ms-4  text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Set Your Goals</h3>
                <p className="text-sm">What are you planning for this week?</p>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">
                  Select Meal Templates
                </h3>
                <p className="text-sm">
                  Choose from pre-made or custom meal types:
                </p>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">
                  Add Meals to Calendar
                </h3>
                <p className="text-sm">
                  Drag meals or click to assign them to each day:
                </p>
              </li>
              <li className="ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">
                  Generate Grocery List
                </h3>
                <p className="text-sm">
                  Auto-generate a shopping list based on your plan:
                </p>
              </li>
            </ol>

            <li className="text-gray-800 py-3 border-t border-gray-300">
              <div className="flex items-center py-2 rounded-lg dark:text-white  group">
                <span className="flex items-center text-sm font-medium text-gray-800 dark:text-white me-3">
                  <span className="flex w-2.5 h-2.5 bg-gray-600 rounded-full me-1.5 shrink-0"></span>
                  Recommanded
                </span>
              </div>
              <p className="text-sm">{communityData?.description}</p>
            </li>

            <li className="flex items-center gap-2 text-sm py-2">
              <PiBowlFoodLight className="size-5 text-gray-800" />
              <span>Pasta Primavera</span>
            </li>
            <li className="flex items-center gap-2 text-sm py-2">
              <PiBowlFoodLight className="size-5 text-gray-800" />
              <span>Grilled Chicken & Strawberry Salad</span>
            </li>
            <li className="flex items-center gap-2 text-sm py-2">
              <PiBowlFoodLight className="size-5 text-gray-800" />
              <span>Lemon Herb Roast Salmon</span>
            </li>
            <li className="flex items-center gap-2 text-sm py-2">
              <PiBowlFoodLight className="size-5 text-gray-800" />
              <span>Mint Soup</span>
            </li>

            <div className="flex space-x-8 text-sm text-gray-600 border-b py-5 border-gray-300">
              {/* Members */}
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold text-gray-800">11M</span>
                <span>Members</span>
              </div>

              {/* Online */}
              <div className="flex flex-col items-start">
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-semibold text-gray-800">
                    78
                  </span>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
                <span>Online</span>
              </div>

              {/* Rank */}
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold text-gray-800">
                  Top 1%
                </span>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:underline flex items-center"
                >
                  Rank by size
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 3h7m0 0v7m0-7L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </ul>
        )}

        {showSidebar3 && (
          <ul className="mt-12 text-gray-800">
            <div className="flex gap-2 items-center text-gray-800">
              <button
                type="button"
                className=" flex items-center gap-1 border border-gray-600 hover:shadow-sm  focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full  px-3 py-1 text-center dark:bg-secOrange dark:hover:bg-orange dark:focus:ring-sebg-secOrange"
              >
                <IoAdd className="size-5" />
                Create Post
              </button>

              <button
                type="button"
                className="flex items-center gap-1 border border-gray-600 hover:shadow-sm  focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full  px-3 py-1 text-center dark:bg-secOrange dark:hover:bg-orange dark:focus:ring-sebg-secOrange"
              >
                Saved
              </button>

              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="flex items-center gap-1 border border-gray-600 hover:shadow-sm  focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full p-2 text-center dark:bg-secOrange dark:hover:bg-orange dark:focus:ring-sebg-secOrange"
                type="button"
              >
                <BsThreeDotsVertical />
              </button>
              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="mt-5  text-gray-800">
            <li className="text-gray-800 py-3 border-t border-gray-300">
              <div className="flex items-center py-2 rounded-lg dark:text-white  group">
                <span className="flex items-center text-sm font-medium text-gray-800 dark:text-white me-3">
                  <span className="flex w-2.5 h-2.5 bg-gray-600 rounded-full me-1.5 shrink-0"></span>
                  Calculate Calories
                </span>
              </div>
            
            </li>
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li className="text-sm">
                  500 ml water or chicken broth — 15 kcal
                </li>
                <li className="text-sm">
                  200 g shrimp (peeled and deveined) — 170 kcal
                </li>
                <li className="text-sm">
                  1 stalk lemongrass (smashed) — 5 kcal
                </li>
                <li className="text-sm">
                  3 kaffir lime leaves (torn) — 1 kcal
                </li>
                <li className="text-sm">
                  2 slices galangal (or ginger) — 2 kcal
                </li>
                <li className="text-sm">2 Thai chilies (smashed) — 10 kcal</li>
                <li className="text-sm">100 g mushrooms (halved) — 2 kcal</li>
              </ul>
            </ul>
          </ul>
        )}
      </div>
    </aside>
  );
};

export default RightSidebar;
