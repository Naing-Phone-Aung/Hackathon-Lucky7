import React from "react";

const CreateCommunityPage = () => {
  return (
    <section className="p-4 sm:ml-64 sm:mr-80 font-schisted">
      <form>
        <div className="my-5">
          <label
            htmlFor="input-label-with-helper-text"
            className="block text-sm font-medium mb-2"
          >
            Community Name
          </label>
          <input
            type="email"
            id="input-label-with-helper-text"
            className="py-2.5 sm:py-3 bg-gray-50 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="your community name"
            aria-describedby="hs-input-helper-text"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder="Write your thoughts here..."
            defaultValue={""}
          />
        </div>
        <div className="grid space-y-3">
          <div className="relative flex items-start">
            <div className="flex items-center h-5 mt-1">
              <input
                id="hs-radio-delete"
                name="hs-radio-with-description"
                type="radio"
                className="border-gray-200 rounded-full text-orange focus:ring-orange-500"
                aria-describedby="hs-radio-delete-description"
                defaultChecked
              />
            </div>
            <label htmlFor="hs-radio-delete" className="ms-3">
              <span className="block text-sm font-semibold text-gray-800">
                Public
              </span>
              <span
                id="hs-radio-delete-description"
                className="block text-sm text-gray-600"
              >
                Notify me when this action happens.
              </span>
            </label>
          </div>
          <div className="relative flex items-start">
            <div className="flex items-center h-5 mt-1">
              <input
                id="hs-radio-archive"
                name="hs-radio-with-description"
                type="radio"
                className="border-gray-200 rounded-full text-orange focus:ring-orange-500"
                aria-describedby="hs-radio-archive-description"
              />
            </div>
            <label htmlFor="hs-radio-archive" className="ms-3">
              <span className="block text-sm font-semibold text-gray-800">
                Private
              </span>
              <span
                id="hs-radio-archive-description"
                className="block text-sm text-gray-600"
              >
                Notify me when this action happens.
              </span>
            </label>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="text-white mt-5 bg-orange hover:bg-secOrange focus:ring-4 focus:ring-orange-300 font-medium rounded-lg px-4 py-2  mb-2 dark:bg-orange dark:hover:bg-orange focus:outline-none dark:focus:ring-sebg-secOrange"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateCommunityPage;
