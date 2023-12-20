
import {ImCross} from 'react-icons/im'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const CreatePost = () => {
   
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const [file,setFile]=useState(null)
    const {user}=useContext(UserContext)
    const [cat,setCat]=useState("")
    const [cats,setCats]=useState([])

    const navigate=useNavigate()

    const deleteCategory=(i)=>{
       let updatedCats=[...cats]
       updatedCats.splice(i)
       setCats(updatedCats)
    }

    const addCategory=()=>{
        let updatedCats=[...cats]
        updatedCats.push(cat)
        setCat("")
        setCats(updatedCats)
    }

    const handleCreate = async (e) => {
      e.preventDefault();
    
      const post = {
        title,
        desc,
        name: user.name,
        userId: user._id,
        categories: cats,
      };
    
      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("img", filename);
        data.append("file", file);
        post.photo = filename;
    
        //img upload
        try {
          const imgUpload = await fetch("http://localhost:4000/api/upload", {
            method: "POST",
            body: data,
          });
        
          if (!imgUpload.ok) {
            throw new Error(`Image upload failed: ${imgUpload.statusText}`);
          }
        } catch (err) {
          console.error("Image upload error:", err);
        }
      }
    
      //post upload
      try {
        const res = await fetch("http://localhost:4000/api/post/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
          credentials: "include",
          
        });
      
        if (res.ok) {
          const responseData = await res.json();
          console.log('OKKK2')
          navigate("/posts/post/" + responseData._id);
        } else {
          console.log("Error:", res.status, res.statusText);
          const errorData = await res.json(); // If the server returns JSON error details
          console.log("Error Details:", errorData);
        }
      } catch (err) {
        console.error("Post upload error:", err);
      }
      
    };
    



  return (
    <div>
        
        <div className='px-6 md:px-[200px] mt-8'>
        <h1 className='font-bold md:text-2xl text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text '>Start Scribbling</h1>
        <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
          <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Caption' className='px-4 py-2 outline-none'/>
          <input onChange={(e)=>setFile(e.target.files[0])} type="file"  className='px-4 text-pink-500 '/>
          <div className='flex flex-col'>
            <div className='flex items-center space-x-4 md:space-x-8'>
                <input value={cat} onChange={(e)=>setCat(e.target.value)} className='px-4 py-2 outline-none' placeholder='Enter post category' type="text"/>
                <div onClick={addCategory} className='px-10 py-4 mt-10 h-10 flex items-center  text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full cursor-pointer hover:hue-rotate-30'>Add</div>
            </div>

            {/* categories */}
            <div className='flex px-4 mt-3'>
            {cats?.map((c,i)=>(
                <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
                <p>{c}</p>
                <p onClick={()=>deleteCategory(i)} className='text-white bg-gradient-to-r from-purple-500 to-pink-500  rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
            </div>
            ))}
            
            
            </div>
          </div>
          <textarea onChange={(e)=>setDesc(e.target.value)} rows={15} cols={30} className='px-4 py-2 outline-none' placeholder='Enter post description'/>
          <button onClick={handleCreate} className=' bg-gradient-to-r from-purple-500 to-pink-500 rounded-full cursor-pointer w-full md:w-[20%] mx-auto text-white font-semibold hover:hue-rotate-30 px-4 py-2 md:text-xl text-lg'>Create</button>
        </form>

        </div>
        
    </div>
  )
}

export default CreatePost