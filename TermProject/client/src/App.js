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
import { UserContextProvider } from "./context/UserContext";
function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path={"/signup"} element={<SignUp/>} />
        <Route path={"/LogIn"} element={<LogIn/>} />
        <Route path={"/dashboard"} element={<Dashboard/>} />
        <Route path={"/displayusers"} element={<DisplayUsers/>} />
        <Route path={"/postdetails"} element={<PostDetails/>} />
        <Route path={"/write"} element={<CreatePost/>} />
        <Route path={"/edit"} element={<EditPost/>} />
        <Route path={"/profile"} element={<Profile/>} />
      </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
