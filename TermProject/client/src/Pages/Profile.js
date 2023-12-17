import React from 'react'
import ProfileImg from '../profile.jpg'
import Navbar from '../Components/Navbar';
const Profile = () => {
  return (
    <div>
      
        <div className='px-8  mt-8 flex h-96'>
            <div className='flex px-[150px] space-y-4  w-full '>
                <div className=' w-1/4'>
                <img src={ProfileImg} alt="" className='rounded-full w-48 h-48'/></div>
                <div className='w-2/4 ml-20'>
                <h1 className='text-xl flex font-bold mb-4 '>Full Name</h1>
                <p >Email</p>
                <p>Designation</p>
                <p>NUmber of Posts</p>

                </div>
                <div className='w-1/4 px-10'>
                <button className='bg-slate-300 text-sm p-1 rounded-md border-gray-300 text-black hover:text-white font-semibold'>Edit Profile</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile