import React ,{useEffect,useState, useContext} from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Back from '../back.png'
import Navbar from '../Components/Navbar';
import axios from "axios"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";


const PostDetails = () => {
  const postId=useParams().id
  const [post,setPost]=useState({})
  const {user}=useContext(UserContext)
  const [loader,setLoader]=useState(false)
  const navigate=useNavigate()
  const fetchPost = async () => {
    setLoader(true)
    try {
        const response = await fetch(`http://localhost:4000/api/post/${postId}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const postData = await response.json();
        // console.log(postData);
        setPost(postData);
        setLoader(false)
    } catch (error) {
        console.error(error);
        setLoader(true)
    }
};
  const handleDeletePost=async ()=>{

    try{
      const res=await axios.delete("http://localhost:4000/api/post/"+postId,{withCredentials:true})
      console.log(res.data)
      navigate("/")

    }
    catch(err){
      console.log(err)
    }

  }
  useEffect(()=>{
    fetchPost()

  },[postId])
  return (

    <div>
      
      {loader?<div className="h-[80vh] flex justify-center items-center w-full"><Loader/></div>:<div className="px-8 md:px-[200px] mt-8 pb-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            {post.title}
          </h1>
          {user?._id===post?.userId && <div className="flex items-center justify-center space-x-2">
            <p className="cursor-pointer" onClick={()=>navigate("/edit/"+postId)} ><BiEdit/></p>
            <p className="cursor-pointer" onClick={handleDeletePost}><MdDelete/></p>
         </div>}
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>{post.name}</p>
          <div className="flex space-x-2 ">
          <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
        <div className=" w-[600px] h-[400px] ">
        <img src={post.photo} alt='post imagee' className='h-full w-full' /></div></div>
        <p className="mx-auto mt-8">{post.desc}</p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
        <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
          {post.categories?.map((c,i)=>(
            <>
            <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">{c}</div>
            </>
            
          ))}
            
          </div>
        </div>
      </div>}
    </div>
  );
};

export default PostDetails;
