import React from "react";

const AddComment = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md w-[730px] ">
      <h3 className="text-lg font-bold mb-2">Add Comment</h3>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        rows="4"
        placeholder="Type your comment here"
      ></textarea>
      <div className="flex justify-between">
        <div className="text-gray-500 mb-2">250 Characters left</div>
        <button className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600">
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default AddComment;
