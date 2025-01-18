import React, { useState } from "react";

const EditFeedBack = () => {
  const [replyVisible, setReplyVisible] = useState({});
  const [currentReply, setCurrentReply] = useState({});
  const [replies, setReplies] = useState({});

  const comments = [
    {
      id: 1,
      name: "Elijah Moss",
      username: "@hexagon.bestagon",
      text: "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device's dark mode turns on without the bright background it currently has.",
      img: "Ellijah.svg",
    },
    {
      id: 2,
      name: "James Skinner",
      username: "@hummingbird1",
      text: "Second this! I do a lot of late-night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It's also quite a trend with modern apps and apparently saves battery life.",
      img: "James.svg",
    },
    {
      id: 3,
      name: "Anne Valentine",
      username: "@annev1990",
      text: "@hummingbird1 While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
      img: "Anne.svg",
    },
    {
      id: 4,
      name: "Ryan Welles",
      username: "@voyager344",
      text: "@annev1990 Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
      img: "Ryan.svg",
    },
  ];

  const toggleReplyInput = (commentId) => {
    setReplyVisible((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  const handleReplyChange = (commentId, text) => {
    setCurrentReply((prev) => ({
      ...prev,
      [commentId]: text,
    }));
  };

  const handleReplySubmit = (commentId) => {
    if (!currentReply[commentId]?.trim()) return;

    setReplies((prev) => ({
      ...prev,
      [commentId]: [...(prev[commentId] || []), currentReply[commentId]],
    }));

    setCurrentReply((prev) => ({
      ...prev,
      [commentId]: "",
    }));

    setReplyVisible((prev) => ({
      ...prev,
      [commentId]: false,
    }));
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="w-[730px] bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4"> Comments</h2>

        {comments.map((comment) => (
          <div
            key={comment.id}
            className="comment mb-6 border-b border-gray-200 pb-4"
          >
            {/* Comment Section */}
            <div className="flex items-start space-x-4">
              {/* User Avatar Placeholder */}
              <div className="w-10 h-10 bg-gray-300 rounded-full">
                <img src={comment.img} alt="pfp" />
              </div>

              {/* Comment Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">{comment.name}</p>
                    <p className="text-gray-500 text-sm">{comment.username}</p>
                  </div>
                  <button
                    className="text-blue-600 text-sm hover:underline"
                    onClick={() => toggleReplyInput(comment.id)}
                  >
                    Reply
                  </button>
                </div>
                <p className="text-gray-700 text-sm mt-2">{comment.text}</p>
              </div>
            </div>

            {/* Reply Input */}
            {replyVisible[comment.id] && (
              <div className="reply-form mt-4 pl-14 flex gap-4">
                <input
                  type="text"
                  className="border rounded px-4 py-2 w-full"
                  value={currentReply[comment.id] || ""}
                  placeholder="Type your reply..."
                  onChange={(e) =>
                    handleReplyChange(comment.id, e.target.value)
                  }
                />
                <button
                  onClick={() => handleReplySubmit(comment.id)}
                  className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500"
                >
                  post comment
                </button>
              </div>
            )}

            {/* Display Replies */}
            <div className="replies mt-4 pl-14">
              {replies[comment.id]?.map((reply, index) => (
                <p
                  key={index}
                  className="reply text-gray-700 bg-gray-100 p-2 rounded mb-2"
                >
                  {reply}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditFeedBack;
