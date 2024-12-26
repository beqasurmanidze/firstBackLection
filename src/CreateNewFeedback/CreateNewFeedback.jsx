import React from "react";

const CreateNewFeedback = () => {
  return (
    <div className="relative max-w-lg mx-auto bg-white rounded-lg shadow-md p-6 mt-10 w-[540px] h-[657px]">
      {/* "Go Back" Button */}

      {/* Icon and Header */}
      <div className="mt-12 text-center flex-col">
        <button className="absolute top-4 left-4 text-blue-500 text-lg flex items-center">
          <img src="arrow.svg" alt="arrow" className="mr-2" />
          Go Back
        </button>
        {/* Icon */}
        <div className="mb-4 ">
          <img
            src="add.svg"
            alt="icon"
            className="w-12 h-12 bg-purple-500 text-white rounded-full "
          />
        </div>
        {/* Form Header */}
        <div className="flex flex-start">
          <h2 className="text-xl font-bold">Create New Feedback</h2>
        </div>
      </div>

      {/* Form */}
      <form className="mt-6">
        {/* Feedback Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700 "
          >
            Feedback Title
          </label>
          <p className="text-gray-400">Add a short, descriptive headline</p>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Add a short, descriptive headline"
            className="mt-1 block w-[456px] h-[48px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-lg font-medium text-gray-700"
          >
            Category
          </label>
          <p className="text-gray-400">Choose a category for your feedback</p>
          <select
            id="category"
            name="category"
            className="mt-1 block w-[456px] h-[48px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="Feature">Feature</option>
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="Bug">Bug</option>
            <option value="Enhancement">Enhancement</option>
          </select>
        </div>

        {/* Feedback Detail */}
        <div className="mb-6">
          <label
            htmlFor="details"
            className="block text-lg font-medium text-gray-700"
          >
            Feedback Detail
          </label>
          <textarea
            id="details"
            name="details"
            placeholder="Include any specific comments on what should be improved, added, etc."
            className="mt-1 block w-[456px] h-[96px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
          >
            Add Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewFeedback;
