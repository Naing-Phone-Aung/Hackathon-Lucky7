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
  console.log(currentCommunity.posts);

  return (
    <section className="p-4 sm:ml-64 sm:mr-80 font-schisted">
    {currentCommunity.posts.map((post) => (
      <div className="py-5 px-6 sm:px-10 border-y border-gray-300">
      {/* Header */}
      <div className="flex flex-wrap gap-3 items-center mb-5">
        <div className="flex items-center gap-2">
          <Avvvatars value={post.username} />
          <span className="text-sm font-medium text-gray-700">
            {post.username}
          </span>
        </div>
        <div className="flex items-center text-xs text-gray-500 gap-1">
          <GoDotFill />
          <span>{post.timeAgo}</span>
        </div>
        <div className="flex items-center text-xs text-gray-500 gap-1">
          <GoDotFill />
          <span>Because you've shown interest in a similar community</span>
        </div>
      </div>
  
      {/* Description */}
      <p className="text-2xl font-medium text-gray-800 pb-4">
        {post.title}
      </p>

      <p className="text-sm font-medium text-gray-800 pb-4">
        {post.context}
      </p>
  
      {/* Image */}
      <div className="w-full mb-6">
        <img
          src={post.image}
          alt={post.title}
          className="w-full aspect-square object-cover rounded-xl shadow-sm"
        />
      </div>
  
      {/* Interaction Section */}
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div className="flex gap-2">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
            <AiFillLike className="size-5" />
            <span className="px-2 font-medium">{post.likes}</span>
          </div>
          <Link
            to="/comment-page"
            className="flex items-center bg-gray-100 px-4 py-2 rounded-full"
          >
            <FaComment className="size-5" />
            <span className="px-2 font-medium">{post.comments}</span>
          </Link>
        </div>
        <button
          type="button"
          className="text-white flex items-center gap-2 bg-orange hover:bg-secOrange focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full px-4 py-1.5 text-center dark:bg-secOrange dark:hover:bg-orange dark:focus:ring-sebg-secOrange"
        >
          <IoAdd className="size-6" />
          Save
        </button>
      </div>
    </div>
    ))}

    </section>
  );
};

export default CommunityDetailPage;
