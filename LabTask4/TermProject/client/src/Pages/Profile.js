import React, { useState , useEffect} from 'react'
import ProfileImg from '../profile.jpg'
import Navbar from '../Components/Navbar';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Loader from '../Components/Loader';
import axios from 'axios';

const Profile = () => {
  const [userInfo, setUserInfo] = useState([])
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);
  
  const fetchUser = async () => {
    setLoader(true);
    
    try {
      const res = await axios.get("http://localhost:4000/api/user/" + user._id);
      // console.log(res.data)
      setUserInfo(res.data);
      
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(true);
    }
  };
  useEffect(() => {
    console.log('hello')
    fetchUser();
  }, []);
  
  return (
    <div>
      {loader? (
        <div className="h-[40vh] flex justify-center items-center">
          <Loader />
        </div>
      ):<div className='px-8  mt-8 flex h-96'>
      <div className='flex px-[150px] space-y-4  w-full '>
          <div className=' w-1/4'>
          <img src={ProfileImg} alt="" className='rounded-full w-48 h-48'/></div>
          <div className='w-2/4 ml-20'>
          <h1 className='text-xl flex font-bold mb-4 '>{userInfo.name}</h1>
          <p >{userInfo.email}</p>
          

          </div>
          <div className='w-1/4 px-10'>
          <button className='bg-slate-300 text-sm p-1 rounded-md border-gray-300 text-black hover:text-white font-semibold'>Edit Profile</button>
          </div>
      </div>
  </div>}
      
        
    </div>
  )
}

export default Profile