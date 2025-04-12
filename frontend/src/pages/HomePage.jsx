import React, { useState } from "react";
import examplePost from "../../public/post-eg.jpg";
import Avvvatars from "avvvatars-react";
import { GoDotFill } from "react-icons/go";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoAdd } from "react-icons/io5";

const HomePage = () => {
  const [votes, setVotes] = useState(240);

  const handleUpvote = () => {
    setVotes((prev) => prev + 1);
  };

  const navigate = useNavigate();

 

  return (
    <section className="p-10 sm:ml-64 sm:mr-80 font-schisted">
      <div className="py-5 border-y border-gray-300">
        <div className="flex mb-5 gap-3 items-center">
          <div className="flex items-center gap-2">
            <Avvvatars value="annonymous" />
            <span className="text-sm text-gray-700 font-medium">Anonymous</span>
          </div>
          <div className="flex  text-xs items-center text-gray-500">
            <GoDotFill className=" " />
            <span>2 days ago</span>
          </div>
          <div className="flex text-xs  items-center text-gray-500">
            <GoDotFill className=" " />
            <span>Because you've shown interest in a similar community</span>
          </div>
        </div>
        <p className="mb-5 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <img
          src={examplePost}
          className="rounded-xl aspect-square object-cover"
          alt=""
        />
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="flex items-center my-5 bg-gray-100 px-4 py-2 rounded-full w-fit ">
              <button onClick={handleUpvote}>
                <AiFillLike className="size-5" />
              </button>
              <span className="px-2 font-medium">{votes}</span>
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
              Create
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
