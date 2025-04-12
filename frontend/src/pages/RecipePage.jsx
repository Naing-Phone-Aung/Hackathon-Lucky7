import React from "react";
import recipes from "../data/recipes";
import Avvvatars from "avvvatars-react";
import { GoDotFill } from "react-icons/go";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiSaveDown2 } from "react-icons/ci";

const RecipePage = () => {
  
  return (
    <section className="p-4 sm:ml-64 sm:mr-80 font-schisted">
      <div className="">
        {recipes.map((el) => (
          <div className="py-5 border-y border-gray-300">
            <div className="flex mb-5 gap-3 items-center">
              <div className="flex items-center gap-2">
                <Avvvatars value={el.owner} />
                <span className="text-sm text-gray-700 font-medium">
                  {el.owner}
                </span>
              </div>
              <div className="flex  text-xs items-center text-gray-500">
                <GoDotFill className=" " />
                <span>{el.created_at}</span>
              </div>
              <div className="flex text-xs  items-center text-gray-500">
                <GoDotFill className=" " />
                <span>
                  Because you've shown interest in a similar community
                </span>
              </div>
            </div>
            <div className="mb-5 text-gray-700 flex items-center gap-2 text-xs font-medium">
              <GoDotFill className="size-3" />
              <p>{el.title}</p>
            </div>

            <div className="text-gray-800 text-sm mb-5">{el.description}</div>

            <div className="flex gap-4 overflow-scroll ">
              {el.ingredients.map((ingredient, index) => (
                <p
                  key={index}
                  className="text-sm text-nowrap border border-gray-300 mb-5 rounded-full px-3 py-1 text-gray-700"
                >
                  {ingredient.name}{" "}
                </p>
              ))}
            </div>

            <ol className="list-decimal list-inside text-gray-800 text-sm">
              {el.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>

            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                {/* <Link
                  to={"/comment-page"}
                  className="flex items-center my-5 bg-gray-100 px-4 py-2 rounded-full w-fit "
                >
                  <button>
                    <FaComment className="size-5" />
                  </button>
                  <span className="px-2 font-medium">45</span>
                </Link> */}
              </div>
              <div className="flex gap-5 items-center">
                <button
                  type="button"
                  className=" flex items-center gap-2 text-orange bg-orange-50 hover:shadow-sm focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full  px-4 py-1.5 text-center dark:bg-orange-100 dark:hover:bg-orange dark:focus:ring-sebg-secOrange"
                >
                  <CiSaveDown2 className="size-5" />
                  Calculate calories
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipePage;
