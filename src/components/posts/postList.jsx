//postList.jsx
import { useState,useEffect } from "react"
import { getAllPosts } from "../../services/PostService.jsx"


export const AllPosts = () => {
    const [allPosts,setAllPosts] = useState([])

    useEffect(() =>{
        getAllPosts().then(postObject => {
            setAllPosts(postObject)
        })
    },[]) 
    return (
        <div>
          <h1>All Posts</h1>
          {allPosts.length > 0 ? (
            allPosts.map(post => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <small>Posted on: {post.date}</small>
              </div>
            ))
          ) : (
            <p>No posts to display</p>
          )}
        </div>
      );
      
}