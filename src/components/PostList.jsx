import React, { useState } from "react";
import { BiRepost } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { LuMessageSquare } from "react-icons/lu";
import { MdOutlineFileUpload } from "react-icons/md";
import { RiShareForwardBoxLine } from "react-icons/ri";
import { useRealTimeTweets } from "../hooks/useTweets";
import { Link } from "react-router-dom";

function PostList({posts=[]}) {
  // const[tweets,setTweets] =useState()

  return (
    <ul className="post-list-container">
      {posts?.map((post) => (
        <li key={post.id}>
          <div className="post-list" >
            <Link to={`/${post.userId}`} className="post-user">
              <img src="/prof-image.jpg" alt="" />
              <h1>{post.name}</h1>
              <h2>@{post.name}</h2>
            </Link>
        <Link to={`/comments/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <p>{post.post}</p>
        </Link>
            <div className="post-action">
              <LuMessageSquare />
              <BiRepost/>
              <FaRegHeart />
              <MdOutlineFileUpload />
            </div>
          </div>
      </li>
      ))}
    </ul>
  );
}

export default PostList;
