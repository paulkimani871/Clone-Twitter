import React from 'react'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import { useParams } from 'react-router-dom'
import { useComments } from '../hooks/useComments'
import Post from '@/components/post'

function Comments() {
  const params = useParams()
  const postId= params.postid
  const {comments} = useComments(postId)
  
  return (
    <div className="home">

    <div className="mid"> 
      <Post/>
        <PostForm postId={postId} label="comment"/>
        <PostList posts={comments}/>

    </div>
    <div className="end"> </div>
    </div>
  )
}

export default Comments