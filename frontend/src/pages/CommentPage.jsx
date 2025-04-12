import Avvvatars from "avvvatars-react";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import comments from "../data/comments";

const CommentPage = () => {
  return (
    <section className="p-4 sm:ml-64 sm:mr-80 font-schisted">
      <div className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 dark:bg-gray-900">
        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
          Comments
        </h2>

        {/* Comment input */}
        <div className="flex gap-3 mb-6">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center text-white text-sm font-medium">
           <Avvvatars value="annonymous" size={40} />
          </div>
          <input
            type="text"
            placeholder=" Write a comment..."
            className="flex-1  bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 text-gray-500 dark:text-gray-400"
          ></input>
        </div>

        {/* Comments list */}
        <div className="space-y-6 text-gray-800 dark:text-white">
          {comments.map((c, index) => (
            <div key={index} className="flex gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center text-white text-sm font-medium">
                <Avvvatars value={c.name} size={40} />
              </div>

              {/* Comment content */}
              <div className="flex-1">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-3">
                  <p className="font-semibold text-sm">{c.name}</p>
                  <p className="text-sm mt-1">{c.comment}</p>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-1 mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <button className="hover:underline">Like</button>
                  <span>·</span>
                  <span>{c.createdAt}</span>

                  {/* Conditional like icon + count */}
                  
                    <span className="ml-2 flex items-center gap-1">
                      <AiFillLike className={`h-3 w-3 text-blue-500 ${c.liked? "fill-blue-500" : "fill-gray-300"}`} />
                      <span>{c.likesCount}</span>
                    </span>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommentPage;
