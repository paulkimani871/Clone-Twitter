import React from 'react'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import { useRealTimeTweets } from "../hooks/useTweets";

function Home() {
  const {posts} = useRealTimeTweets();

  return (
    <div className="home">
      <div className="mid">
        <PostForm label="tweet"/>
        <PostList posts={posts}/>
      


      </div>
      <div className="end">

      </div>
    </div>
  )
}

export default Home