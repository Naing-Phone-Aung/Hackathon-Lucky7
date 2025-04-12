import React from "react";
import { Link, useParams } from "react-router-dom";
import communityList from "../data/community";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import Avvvatars from "avvvatars-react";
import { GoDotFill } from "react-icons/go";

const CommunityDetailPage = () => {
  const { id } = useParams();
  const currentCommunity = communityList.find(
    (community) => community.id == id
  );


  return (
    <section className="p-4 sm:ml-64 sm:mr-80 font-schisted">
      <div className="py-5 border-y border-gray-300">
        <div className="flex mb-5 gap-3 items-center">
          <div className="flex items-center gap-2">
            <Avvvatars value="FoodieCraze" />
            <span className="text-sm text-gray-700 font-medium">
              FoodieCraze
            </span>
          </div>
          <div className="flex  text-xs items-center text-gray-500">
            <GoDotFill className=" " />
            <span>2 hours ago</span>
          </div>
          <div className="flex text-xs  items-center text-gray-500">
            <GoDotFill className=" " />
            <span>Because you've shown interest in a similar community</span>
          </div>
        </div>
        <p className="text-2xl font-medium text-gray-800 pb-4">
          What’s your ultimate 3-ingredient go-to meal?
        </p>
        <p className="mb-5 text-gray-700">
          We all have those days when cooking feels like a chore, or the fridge
          is almost empty. I’m curious — what’s your favorite meal that only
          needs 3 ingredients but still tastes amazing? Looking for ideas that
          are quick, filling, and don’t break the bank. Bonus points if it only
          takes one pan to cook!
        </p>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="flex items-center my-5 bg-gray-100 px-4 py-2 rounded-full w-fit ">
              <button>
                <AiFillLike className="size-5" />
              </button>
              <span className="px-2 font-medium">1.2k</span>
            </div>
            <Link
              to={"/comment-page"}
              className="flex items-center my-5 bg-gray-100 px-4 py-2 rounded-full w-fit "
            >
              <button>
                <FaComment className="size-5" />
              </button>
              <span className="px-2 font-medium">45</span>
            </Link>
          </div>
          <div className="flex gap-5 items-center">
            <button
              type="button"
              className="text-white flex items-center gap-2 bg-orange hover:bg-secOrange focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full  px-4 py-1.5 text-center dark:bg-secOrange dark:hover:bg-orange dark:focus:ring-sebg-secOrange"
            >
              <IoAdd className="size-7" />
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="py-5 border-y border-gray-300">
        <div className="flex mb-5 gap-3 items-center">
          <div className="flex items-center gap-2">
            <Avvvatars value="FoodieCraze" />
            <span className="text-sm text-gray-700 font-medium">
              FoodieCraze
            </span>
          </div>
          <div className="flex  text-xs items-center text-gray-500">
            <GoDotFill className=" " />
            <span>2 hours ago</span>
          </div>
          <div className="flex text-xs  items-center text-gray-500">
            <GoDotFill className=" " />
            <span>Because you've shown interest in a similar community</span>
          </div>
        </div>
        <p className="text-2xl font-medium text-gray-800 pb-4">
          What’s your favorite comfort food that’s actually healthy?
        </p>
        <p className="mb-5 text-gray-700">
          We all crave comfort food — but most of it is super indulgent. I’m
          trying to build a list of comforting dishes that still feel good to
          eat (nutritionally speaking). What are your go-to meals that hit the
          spot emotionally and physically? Drop your favorites below — bonus if
          it’s easy to prep after a long day!
        </p>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="flex items-center my-5 bg-gray-100 px-4 py-2 rounded-full w-fit ">
              <button>
                <AiFillLike className="size-5" />
              </button>
              <span className="px-2 font-medium">1.2k</span>
            </div>
            <Link
              to={"/comment-page"}
              className="flex items-center my-5 bg-gray-100 px-4 py-2 rounded-full w-fit "
            >
              <button>
                <FaComment className="size-5" />
              </button>
              <span className="px-2 font-medium">45</span>
            </Link>
          </div>
          <div className="flex gap-5 items-center">
            <button
              type="button"
              className="text-white flex items-center gap-2 bg-orange hover:bg-secOrange focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full  px-4 py-1.5 text-center dark:bg-secOrange dark:hover:bg-orange dark:focus:ring-sebg-secOrange"
            >
              <IoAdd className="size-7" />
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityDetailPage;
