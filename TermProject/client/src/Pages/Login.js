import React, { useState, useEffect, useContext } from 'react';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";
import Navbar from '../Components/Navbar';
import { UserContext } from '../context/UserContext';

function Login (){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useContext(UserContext)
  const navigate= useNavigate()
  
  const handleChange = (e) => {
    if (e.target.name === 'email') setEmail(e.target.value);
    else if (e.target.name === 'password') setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const data = { email, password };
    
    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      let result = await response.json();
      // console.log("Success:", result);
      setUser(result)
      
      alert("Loged in successfully");
      
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
    } 
    setEmail('');
  setPassword('');
};

  return (
    <div>
      
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}

      
      
      <div className="h-screen pt-16 pb-16  justify-center flex  bg-fixed bg-center bg-cover bg-[url('back.png')] ">
        {/* <div className="bg-white h-[450px] w-[1000px] rounded-xl flex"> */}
          {/* <div className="pl-20 w-[450px] flex flex-col justify-center items-center ">
            <h1 className={`$ text-blue-950 lg:text-3xl mt-8 sm:text-sm text-center`}>
              BrainBurst
            </h1> 
            <Image src="/reading.png" width={350} height={400} className="mx-auto my-4" />
          </div> */}
          <div className="bg-white rounded-md px-10 border-2">
            <h1 className={`text-3xl  text-blue-950 text-center mt-20 font-bold `}>Log In</h1>
            <form onSubmit={handleSubmit} method="POST">
              <div className="flex flex-col justify-center items-center ">
                <div className="flex">
                  <MdEmail className="text-blue-950 text-2xl mt-11 mr-2" />

                  <div className="mt-10">
                    <input autoComplete="off" onChange={handleChange} placeholder='Email' value={email} id="email" name="email" type="email" autocomplete="email" required className="border-2 border-blue-950 block w-[330px] h-9 rounded-md  py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300   sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div className="flex">
                  <RiLockPasswordFill className="text-blue-950 text-2xl mt-6 mr-2" />
                  <div className="relative border-2 border-blue-950 rounded-lg w-[330px] h-9 mx-auto mt-5 px-2">
                    <input
                    autoComplete="off"
                      type='password'
                      placeholder="Password"
                      className="border-0 rounded-md w-[315px] pr-2 focus:outline-none h-8  text-gray-900 shadow-sm    sm:text-sm sm:leading-6 "
                      onChange={handleChange} value={password} id="password" name="password" autocomplete="password" required
                    />
                    
                  </div>
                </div>
                <h1 className="text-slate-400 ml-56 mt-2 hover:text-slate-600">Forget Password</h1>
                <button className={`bg-blue-950 text-white rounded-lg px-7 py-2  mt-4 border-2 border-blue-950 hover:bg-white hover:text-blue-950 hover:border-2 hover:border-blue-950`}>
                  Log in
                </button>
              </div>
            </form>
            <p className="mt-4 text-center text-sm text-gray-500">
              Already have an account?
              <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign up</a>
            </p>
            
          </div>
        </div>
      {/* </div> */}
    </div >
  );
};

export default Login;
