


import React, { useEffect, useState } from "react";
import Post from "../Components/Post";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Pagination from "../Components/Pagination";
const Dashboard = () => {
  const [prompt, setPrompt] = useState("");
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = parseInt(searchParams.get("page")) || 1;
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    setLoader(true);
    try {
      const res = await axios.get("http://localhost:4000/api/post/" + search);
      // console.log(res.data)
      setPosts(res.data);
      if (res.data.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(true);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [search,page]);
  const handlePagination = (newPage) => {
    const newPath ="/dashboard/?page=${newPage}&search=${search}";
    navigate(newPath);
  };
  return (
    <div>
    <div className="px-8 md:px-[200px] min-h-[80vh]">
      <div className="sticky flex px-2 -z-10 mt-5 mb-10 w-[400px]  space-x-0 border-2 rounded-lg">
        <p
          onClick={() => navigate(prompt ? "?search=" + prompt : navigate("/"))}
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
      {loader ? (
        <div className="h-[40vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : !noResults ? (
        posts.map((post) => (
          <React.Fragment key={post._id}>
            <Link to={user ? `/posts/post/${post._id}` : "/login"}>
              <Post posts={post} />
            </Link>
          </React.Fragment>
        ))
      ) : (
        <h3 className="text-center font-bold mt-16">No posts available</h3>
      )}

      {/* {posts.map((posts) => (
        <Post key={posts._id} posts={posts} />
      ))} */}
      
    </div>
    <Pagination handlePagination={handlePagination} currentPage={page} />
    </div>
  );
};
export default Dashboard;
