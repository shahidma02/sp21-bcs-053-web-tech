import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Landing from "./Pages/Landing";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import DisplayUsers from "./Pages/DisplayUsers";
import PostDetails from "./Pages/PostDetails";
import CreatePost from "./Pages/CreatePost";
import EditPost from "./Pages/EditPost";
import Profile from "./Pages/Profile";
import MyBlogs from "./Pages/MyBlogs";
import { UserContextProvider } from "./context/UserContext";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Calculate from "./Pages/Calculate";
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/LogIn"} element={<LogIn />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/displayusers"} element={<DisplayUsers />} />
          <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
          <Route path={"/write"} element={<CreatePost />} />
          <Route exact path="/edit/:id" element={<EditPost />} />
          <Route exact path="/myblogs/:id" element={<MyBlogs />} />
          <Route exact path="/profile/:id" element={<Profile />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/calc" element={<Calculate />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
