import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../Components/Navbar';
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState();
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [chngpassword, setChngPassword] = useState("");
  const [error,setError]=useState(false)
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    else if (e.target.name === "email") setEmail(e.target.value);
    else if (e.target.name === "dob") setDob(e.target.value);
    else if (e.target.name === "password") setPassword(e.target.value);
    else if (e.target.name === "gender") setGender(e.target.value);
    else if (e.target.name === "city") setCity(e.target.value);
    else if (e.target.name === "country") setCountry(e.target.value);
    else if (e.target.name === "chngpassword") setChngPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Hellooooo')
    if (password !== chngpassword) {
      alert("Password doesn't match");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    const data = { name, email, password, dob, city, country, gender };
    
    try {
      const response = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let result = await response.json();
      console.log("Success:", result);
      alert("User added successfully");
      navigate("/LogIn");
    } catch (error) {
      // console.error("Error:", error);
      // setError(!error)
      alert('something went wrong')
    }
    
    setName("");
    setEmail("");
    setDob("");
    setGender("");
    setPassword("");
    setCity("");
    setCountry("");
  };

  return (
    <div>
      
      <div className="h-screen pt-14 pb-16  justify-center flex  bg-fixed bg-center bg-cover bg-[url('back.png')] ">
        <div className=" bg-white w-[1000px] h-[480px] rounded-md">
          <h1 className={`text-3xl  text-blue-950 text-center mt-5 font-bold `}>
            Sign up
          </h1>
          <form className="space-y-1 pt-5 ">
            <div className="flex space-x-14 justify-center ">
              <div>
                <label
                  htmlFor="name"
                  className={` block text-md font-medium  text-blue-950 `}
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    value={name}
                    id="name"
                    name="name"
                    type="name"
                    autocomplete="name"
                    required
                    className="block w-[330px] h-9 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-1 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={` block text-md font-medium  text-blue-950 `}
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    value={email}
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    className="block w-[330px] h-9 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-1 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-14 justify-center ">
              <div>
                <label
                  htmlFor="gender"
                  className={` block text-md font-medium  text-blue-950 `}
                >
                  Gender
                </label>
                <div className="mt-2">
                  <select
                    onChange={handleChange}
                    id="gender"
                    value={gender}
                    name="gender"
                    type="gender"
                    autocomplete="gender"
                    required
                    className="block w-[330px] h-9 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-1 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select...</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="dob"
                  className={` block text-md font-medium  text-blue-950 `}
                >
                  Date of Brith
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    placeholder="DD/MM/YYYY"
                    id="dob"
                    value={dob}
                    name="dob"
                    type="dob"
                    autocomplete="dob"
                    required
                    className="block w-[330px] h-9 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-1 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-14 justify-center">
              <div>
                <label
                  htmlFor="password"
                  className={` block text-md font-medium  text-blue-950 `}
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    value={password}
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    className="block w-[330px] h-9 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-1 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="chngpassword"
                  className={` block text-md font-medium  text-blue-950 `}
                >
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    value={chngpassword}
                    id="chngpassword"
                    name="chngpassword"
                    type="password"
                    autocomplete="current-password"
                    required
                    className="block w-[330px] h-9 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-1 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-14 justify-center">
              <div>
                <label
                  htmlFor="city"
                  className={` block text-md font-medium  text-blue-950 `}
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    id="city"
                    value={city}
                    name="city"
                    type="city"
                    autocomplete="city"
                    required
                    className="block w-[330px] h-9 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-1 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="country"
                  className={` block text-md font-medium  text-blue-950 `}
                >
                  Country
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    id="country"
                    value={country}
                    name="country"
                    type="country"
                    autocomplete="country"
                    required
                    className="block w-[330px] h-9 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-1 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            {/* {error && <p className=" text-red-600">Something went wrong. Try again.</p>} */}
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                
                className="flex w-[250px] mt-4 justify-center rounded-md bg-blue-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?
            <a
              href="/LogIn"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
