import React from "react";

const About = () => {
  return (
    <div className=" min-h-[80vh]  ">
      <div className="flex justify-center mt-10">
        <div className="self-center text-3xl font-bold dark:text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text p-3">
          About Us
        </div>
      </div>
      <div className=" mx-48 mt-10">
      <h1 className="text-xl ">
        Welcome to SmartScribbles – Your Platform for Enlightening Perspectives!
      </h1>
      <p className="mt-5 text-lg">
        At SmartScribbles, we believe in the power of words to inspire, inform,
        and connect. Our platform is a vibrant community where individuals from
        all walks of life converge to share their insights, stories, and
        expertise through articles and blogs. Whether you're a seasoned writer
        or someone with a passion for expressing ideas, SmartScribbles provides
        the perfect canvas for your thoughts.
      </p>
      </div>
    </div>
  );
};

export default About;
