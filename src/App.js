import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="py-40 pl-20">
        <h1 class="mb-8 text-6xl font-bold bg-gradient-to-r  from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Scribbling Brilliance,
          <br />
          One Page at a Time!
        </h1>
        <div className="flex">
          <p className="pr-10 border-r-2 hover:text-pink-500">Marketing</p>
          <p className="px-10 border-r-2  hover:text-pink-500">Design</p>
          <p className="px-10 border-r-2 hover:text-pink-500">E-commerce</p>
          <p className="px-10   hover:text-pink-500">Fashion</p>
        </div>
      </div>
    </div>
  );
}

export default App;
