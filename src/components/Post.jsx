import { useRealTimeTweet } from '@/hooks/useTweet'
import React from 'react'
import { BiRepost } from 'react-icons/bi'
import { FaRegHeart } from 'react-icons/fa'
import { LuMessageSquare } from 'react-icons/lu'
import { MdOutlineFileUpload } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'

function Post() {

    const params = useParams()
      const postId= params.postid
    //   const collectionName = tweeetId
      const {post} = useRealTimeTweet(postId)
    
  return (
      <li key={post?.id}>
             <div className="post-list" >
               <Link to={`/${post?.userId}`} className="post-user">
                 <img src="/prof-image.jpg" alt="" />
                 <h1>{post?.name}</h1>
                 <h2>@{post?.name}</h2>
               </Link>
           {/* <Link to={`/comments/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}> */}
               <p>{post?.post}</p>
           {/* </Link> */}
               <div className="post-action">
                 <LuMessageSquare />
                 <BiRepost/>
                 <FaRegHeart />
                 <MdOutlineFileUpload />
               </div>
             </div>
         </li>
  )
}

export default Post