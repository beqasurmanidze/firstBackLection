import React, { useState } from "react";

const AddComment = () => {
  const [comment, setComment] = useState("");
  const [remainingChars, setRemainingChars] = useState(250);

  const handleCommentChange = (e) => {
    const value = e.target.value;
    if (value.length <= 250) {
      setComment(value);
      setRemainingChars(250 - value.length);
    }
  };

  const handleSubmit = () => {
    if (comment.trim().length > 0) {
      alert(`Comment submitted: ${comment}`);
      setComment("");
      setRemainingChars(250);
    } else {
      alert("Comment cannot be empty.");
    }
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md w-[730px]">
      <h3 className="text-lg font-bold mb-2">Add Comment</h3>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        rows="4"
        placeholder="Type your comment here"
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <div className="flex justify-between">
        <div className="text-gray-500 mb-2">
          {remainingChars} Characters left
        </div>
        <button
          onClick={handleSubmit}
          className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600"
        >
          post Comment
        </button>
      </div>
    </div>
  );
};

export default AddComment;
