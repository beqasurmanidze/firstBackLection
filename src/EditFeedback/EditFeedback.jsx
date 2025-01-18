import React, { useState } from "react";

const EditFeedBack = () => {
  const [votes, setVotes] = useState(99); // State to track votes

  const handleGoUp = () => {
    setVotes(votes + 1); // Increment vote count
  };

  return (
    <div className="flex justify-center items-center h-[730px] bg-gray-100">
      <div>
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 bg-gray-100 w-[730px] h-[151px] mb-6">
          <button className="text-gray-600 text-base hover:underline">
            Go Back
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
            Edit Feedback
          </button>
        </div>

        {/* Feedback Card */}
        <div
          className="bg-white flex justify-between items-center p-6 rounded-lg shadow-md"
          style={{ width: "730px", height: "151px" }}
        >
          {/* Left Section */}
          <div className="flex items-start space-x-4">
            {/* Voting Section */}
            <div
              onClick={handleGoUp}
              className="flex flex-col items-center bg-gray-100 px-3 py-2 rounded-lg"
            >
              <img
                src="arrowUp.svg"
                alt="icon"
                // Add click handler
                className="cursor-pointer" // Make the icon clickable
              />
              <p className="text-gray-600 font-bold text-lg">{votes}</p>
            </div>

            {/* Title and Description */}
            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                Add a dark theme option
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                It would help people with light sensitivities and who prefer
                dark mode.
              </p>
              <span className="mt-3 inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-md">
                Feature
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            <div className="text-gray-400 text-xl">💬</div>
            <p className="text-gray-800 font-medium">4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFeedBack;
