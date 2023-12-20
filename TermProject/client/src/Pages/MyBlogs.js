import { Link, useLocation } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"

import Post from "../Components/Post"
import Loader from "../Components/Loader"


const MyBlogs = () => {
    const {search}=useLocation()
  // console.log(search)
  const [posts,setPosts]=useState([])
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)
  const {user}=useContext(UserContext)
  // console.log(user)

  const fetchPosts = async () => {
    setLoader(true);
  
    try {
      const response = await fetch(`http://localhost:4000/api/post/user/${user._id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
  
      setPosts(data);
  
      if (data.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
  
      setLoader(false);
    } catch (error) {
      console.error(error);
      setLoader(true);
    }
  };
  

  useEffect(()=>{
    fetchPosts()

  },[search])

  return (
    <div>
        
        <div className="px-8 md:px-[200px] min-h-[80vh]">
        {loader?<div className="h-[40vh] flex justify-center items-center"><Loader/></div>:!noResults?
        posts.map((post)=>(
          <>
          <Link to={user?`/posts/post/${post._id}`:"/login"}>
          <Post key={post._id} posts={post}/>
          </Link>
          </>
          
        )):<h3 className="text-center font-bold mt-16">No posts available</h3>}
        </div>
        
    </div>
  )
}

export default MyBlogs