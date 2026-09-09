import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaPlus, FaRegSmileBeam } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa6";
import { LuChartBar, LuLoaderCircle } from "react-icons/lu";
import { MdOutlineGifBox } from "react-icons/md";
import { auth, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useUser } from "../hooks/useUser";

function PostForm({ label = "tweet", postId }) {
  const [post, setPost] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useUser(auth.currentUser.uid);

  const handleSendTweet = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const collectionRef = collection(db, "posts");

      await addDoc(collectionRef, {
        post,
        name: user?.name,
        userId: user?.userId,
        createdAt: Date.now(),
      postId: label === "comment" ? postId : null,
      });

      toast.success(`${label} posted successfully!`);
    } catch (error) {
      console.error(error);
      setError(error.message || `Failed to post ${label}`);
      toast.error(error);
    } finally {
      setIsLoading(false);
      setPost("");
    }
  };
  return (
    <form onSubmit={handleSendTweet} className="post-form-container">
      <div className="post-form">
        <img src="/prof-image.jpg" alt="" />
        <textarea
          placeholder="What's happening?"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
      </div>
      <div div className="post-form-options">
        <FaRegImage />
        <MdOutlineGifBox />
        <LuChartBar />
        <FaRegSmileBeam />
      </div>

      <div className="post-form-submit">
        <LuLoaderCircle />
        <FaPlus />
        <button type="submit">Post</button>
      </div>
    </form>
  );
}

export default PostForm;
