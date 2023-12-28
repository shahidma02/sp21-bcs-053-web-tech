import React from "react";
import Back from "../back.png"
function Post({ posts }) {
  

 
  // "http://localhost:4000/images/"+posts.photo
  
  return (
    <div className="w-full flex mt-8 space-x-4">
      
      <div className="w-[35%] h-[200px] flex justify-center items-center object-cover">
        <img src={"http://localhost:4000/images/"+posts.photo} alt="post imagee" className="h-full w-full" />
      </div>
      <div className="flex flex-col w-[65%] ">
        <h1 className="text-xl font-bold md:mb-2 md:text-2xl">{posts.title}</h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 space-x-4 md:mb-4 ">
          <p>{posts.name}</p>
          <div className="flex space-x-2 ">
            <p>{new Date(posts.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(posts.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">{posts.desc.slice(0,200)+" ..."}</p>
      </div>
    </div>
  );
}
export default Post;
