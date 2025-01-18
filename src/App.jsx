import { React } from "react";
import EditFeedBack from "./EditFeedback/EditFeedback";
import CommentsSection from "./Comments/CommentsSection";
import AddComment from "./addComment/AddComment";
function App() {
  return (
    <>
      <div className="flex justify-center flex-col bg-gray-100 ">
        <EditFeedBack />
      </div>
      <CommentsSection />
      <div className="flex justify-center bg-gray-100 ">
        <AddComment />
      </div>
    </>
  );
}

export default App;
