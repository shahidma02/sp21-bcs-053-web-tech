import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Back from '../back.png'
import Navbar from '../Components/Navbar';

const PostDetails = () => {
  return (

    <div>
      <Navbar/>
      <div className="px-8 md:px-[200px] mt-8 pb-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            10 Uses of Artificial Intelligence{" "}
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@amenashahid</p>
          <div className="flex space-x-2 ">
            <p>16/6/2023</p>
            <p>16:45</p>
          </div>
        </div>
        <img src={Back} alt='post imagee' className='h-full w-full' />
        <p className="mx-auto mt-8">Artificial Intelligence (AI) has seamlessly woven into the fabric of our daily lives, offering an array of conveniences and enhancements. From the familiar voices of virtual assistants, like Siri and Alexa, responding to our queries and managing tasks, to the personalized recommendations on streaming platforms and e-commerce websites, AI algorithms constantly adapt to our preferences. In the healthcare sector, AI aids in diagnostics and treatment planning, analyzing medical images with precision. The autonomous capabilities of vehicles, driven by AI, promise a future of safer and more efficient transportation. Moreover, AI contributes to fraud detection in financial transactions and ensures the moderation of content on social media platforms. Language translation services and predictive text features on our devices rely on AI, fostering global communication and improving our writing efficiency. As AI continues to evolve, its integration into our daily routines showcases its transformative impact on diverse aspects, making our lives more efficient, connected, and tailored to our individual needs.</p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories</p>
            <div className="flex justify-center items-center space-x-2">
                <div className="bg-gray-300 rounded-lg px-3">Tech</div>
                <div className="bg-gray-300 rounded-lg px-3">Ai</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
