import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import PostList from "../components/PostList";
import { UpdateProfile } from "@/components/UpdateProfile";
import { useUser } from "@/hooks/useUser";
import { useParams } from "react-router-dom";
import { auth } from "@/firebase";
import { useUserTweets } from "@/hooks/useUserTweets";

function Profile() {
  const params = useParams();
  const userId = params.userid;
  const { user } = useUser(userId);
const {posts} = useUserTweets(userId)



  return (
    <div className="profile">
      <div className="mid">
        <div className="icon">
          <IoMdArrowBack className="back" />
          <div className="desc">
            <h3>{user?.name}</h3>
            <h4>{posts?.length} {posts.length === 1 ? "post" : "posts"}</h4>
          </div>
        </div>
        <div className="box1">
          <img src="/600x200.jpg" alt="" className="image1" />
          <img src="/prof-image.jpg" alt="" className="image2" />
          {/* <button className='btn'>Edit Profile</button> */}
          {userId === auth.currentUser.uid && <UpdateProfile user={user} />}
        </div>
        <div className="display">
          <h2>{user?.name}</h2>
          <h3>{user?.handle ? `@${user?.handle}` : `@${user?.name}`}</h3>
          <p>The bio of the user</p>
        </div>

        <PostList posts={posts}/>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Profile;
