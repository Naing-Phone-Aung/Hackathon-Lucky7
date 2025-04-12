import React from "react";
import tomyanSoup from "../../public/tomyan-soup.png";
import curry from "../../public/curry.png";
import salad from "../../public/salad.png";
import { IoAdd } from "react-icons/io5";

const WeeklyPlanPage = () => {
  return (
    <section className="p-4 sm:ml-64 sm:mr-80 font-schisted">
      <div className="grid grid-cols-7 gap-5 text-gray-800">
        <div className="col-span-1 flex justify-center items-center"></div>

        <div className="col-span-2">
          <p className="text-center font-medium border-b border-gray-300 pb-2">
            BREAKFAST
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-center font-medium border-b border-gray-300 pb-2">
            LUNCH
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-center font-medium border-b border-gray-300 pb-2">
            DINNER
          </p>
        </div>

        <div className="col-span-1 flex justify-center items-center">
          <div className="flex flex-col items-center ">
            <p className="text-xs">APR</p>
            <p className="text-2xl font-medium">12</p>
            <p className="text-xs">SAT</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="relative">
            <img
              src={tomyanSoup}
              className="aspect-square rounded-2xl"
              alt=""
            />
            <p className="absolute bottom-2 left-2 text-sm text-white line-clamp-2">
              Spicy Thai Tom Yum Soup with Prawns
            </p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="relative">
            <img src={salad} className="aspect-square rounded-2xl" alt="" />
            <p className="absolute bottom-2 left-2 text-sm text-white line-clamp-2">
              Crisp Garden Salad with Mixed Greens, Cherry Tomatoes, and
              Lemon-Honey Vinaigrette
            </p>
          </div>
        </div>
        <div className="col-span-2 items-center justify-center flex">
          <div className="flex justify-center items-center p-4 rounded-full bg-gray-100">
            <IoAdd className="text-3xl " />
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          {" "}
          <div className="flex flex-col items-center ">
            <p className="text-xs">APR</p>
            <p className="text-2xl font-medium">13</p>
            <p className="text-xs">SAT</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="col-span-2">
            <div className="relative">
              <img src={curry} className="aspect-square rounded-2xl" alt="" />
              <p className="absolute bottom-2 left-2 text-sm text-white line-clamp-2">
                Creamy Coconut Chicken Curry with Fragrant Basmati Rice and
                Fresh Cilantro
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 items-center justify-center flex">
          <div className="flex justify-center items-center p-4 rounded-full bg-gray-100">
            <IoAdd className="text-3xl " />
          </div>
        </div>
        <div className="col-span-2">
          <div className="relative">
            <img src={salad} className="aspect-square rounded-2xl" alt="" />
            <p className="absolute bottom-2 left-2 text-sm text-white line-clamp-2">
              Crisp Garden Salad with Mixed Greens, Cherry Tomatoes, and
              Lemon-Honey Vinaigrette
            </p>
          </div>
        </div>

        <div className="col-span-1 flex justify-center items-center">
          {" "}
          <div className="flex flex-col items-center ">
            <p className="text-xs">APR</p>
            <p className="text-2xl font-medium">14</p>
            <p className="text-xs">SAT</p>
          </div>
        </div>
        <div className="col-span-2 items-center justify-center flex">
          <div className="flex justify-center items-center p-4 rounded-full bg-gray-100">
            <IoAdd className="text-3xl " />
          </div>
        </div>
        <div className="col-span-2">
          <div className="relative">
            <img src={curry} className="aspect-square rounded-2xl" alt="" />
            <p className="absolute bottom-2 left-2 text-sm text-white line-clamp-2">
              Creamy Coconut Chicken Curry with Fragrant Basmati Rice and Fresh
              Cilantro
            </p>
          </div>
        </div>
        <div className="col-span-2 items-center justify-center flex">
          <div className="flex justify-center items-center p-4 rounded-full bg-gray-100">
            <IoAdd className="text-3xl " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyPlanPage;
