import React, { useEffect, useState } from "react";
import Post from "../Components/Post";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [prompt, setPrompt] = useState("");
  const { search } = useLocation();

  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();
  const path = useLocation().pathname;

  const fetchPosts = async () => {
    setLoader(true)
    try {
      const res = await axios.get("http://localhost:4000/api/post/"+search);
      // console.log(res.data)
      setPosts(res.data);
      if(res.data.length===0){
        setNoResults(true)
      }
      else{
        setNoResults(false)
      }
      setLoader(false)
    } catch (err) {
      console.log(err);
      setLoader(true)
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [search]);
  return (
    <div className="px-8 md:px-[200px] flex flex-col justify-center items-center h-screen ">
      
        <div className="flex px-2  mt-5 mb-5 w-[400px]  space-x-0 border-2 rounded-lg">
          <p
            onClick={() =>
              navigate(prompt ? "?search=" + prompt : navigate("/"))
            }
            className="cursor-pointer mt-3"
          >
            <BsSearch />
          </p>
          <input
            onChange={(e) => setPrompt(e.target.value)}
            className="outline-none py-2 px-2 w-96 "
            placeholder="Search a post"
            type="text"
          />
        </div>
      
      {posts.map((posts) => (
        <Post key={posts._id} posts={posts} />
      ))}
    </div>
  );
};
export default Dashboard;
