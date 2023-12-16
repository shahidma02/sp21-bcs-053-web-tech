import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Navbar from '../Components/Navbar';
function DisplayUsers() {
//   const [users, setUsers] = useState([]);
    const [result, setResult] = useState([]);

  useEffect(() => {
    console.log("into useeffect")
    const handleSubmit = async () => {
      try {
        const w_user = '656213a664157a5ee8bb0677'
        console.log("Fetching user data");
        const resp = await fetch(`http://localhost:4000/user/${w_user}`, {
          method: "GET", // Make sure it should be 'GET' for retrieving data
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        console.log('response', resp);

        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${resp.status}`);
        }

        const res = await resp.json();
        setResult(res);
        console.log("Success:", res);
        alert("User data retrieved successfully");
      } catch (error) {
        console.error("Error:", error.message);
        alert("Error retrieving user data");
      }
      
    };

    handleSubmit();
  }, []);

  return (
    <div>
      <Navbar/>
      <h1>Users:</h1>
      <ul>
        {result.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayUsers;
