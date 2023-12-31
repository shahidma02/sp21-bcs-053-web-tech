// import "./App.css";
import Navbar from "../Components/Navbar"
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      
      <div className="py-40 pl-20">
        <h1 className="mb-8 text-6xl font-bold bg-gradient-to-r  from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Scribbling Brilliance,
          <br />
          One Page at a Time!
        </h1>
        <div className="flex">
          <p className="pr-10 border-r-2 hover:text-pink-500">Marketing</p>
          <p className="px-10 border-r-2  hover:text-pink-500">Data</p>
          <p className="px-10 border-r-2  hover:text-pink-500">Design</p>
          <p className="px-10 border-r-2 hover:text-pink-500">E-commerce</p>
          <p className="px-10   hover:text-pink-500">Fashion</p>
        </div>
        <div>
          <Link to='signup'>
          <button className="px-10 py-4 mt-10 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:animate-bounce">
            Start Now!
          </button></Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
