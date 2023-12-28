import { useContext, useEffect, useState } from "react"
import {ImCross} from 'react-icons/im'
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../context/UserContext"


const EditPost = () => {

    const postId=useParams().id
    const {user}=useContext(UserContext)
    const navigate=useNavigate()
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const [file,setFile]=useState(null)
    const [cat,setCat]=useState("")
    const [cats,setCats]=useState([])

    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/post/${postId}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        
        setTitle(data.title);
        setDesc(data.desc);
        setFile(data.photo);
        setCats(data.categories);
    
      } catch (err) {
        console.error(err);
      }
    }
    

    const handleUpdate = async (e) => {
      e.preventDefault();
    
      const post = {
        title,
        desc,
        username: user.username,
        userId: user._id,
        categories: cats,
      };
    
      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("img", filename);
        data.append("file", file);
        post.photo = filename;
    
        // img upload
        try {
          await fetch("http://localhost:4000/api/upload", {
            method: "POST",
            body: data,
          });
        } catch (err) {
          console.log(err);
        }
      }
    
      // post upload
      try {
        const response = await fetch(`http://localhost:4000/api/post/${postId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
          },
          body: JSON.stringify(post),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const updatedPost = await response.json();
        navigate(`/posts/post/${updatedPost._id}`);
      } catch (err) {
        console.log(err);
      }
    };
    

    

    useEffect(()=>{
      fetchPost()
    },[postId])

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
  return (
    <div>
        
        <div className='px-6 md:px-[200px] mt-8'>
        <h1 className='font-bold md:text-2xl text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text '>Edit Your Post</h1>
        <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
          <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Enter post title' className='px-4 py-2 outline-none'/>
          <input onChange={(e)=>setFile(e.target.files[0])} type="file"  className='px-4  text-pink-500'/>
          <div className='flex flex-col'>
            <div className='flex items-center space-x-4 md:space-x-8'>
                <input value={cat} onChange={(e)=>setCat(e.target.value)} className='px-4 py-2 outline-none' placeholder='Enter post category' type="text"/>
                <div onClick={addCategory} className='px-10 hover:hue-rotate-30 py-4 mt-10 h-10 flex items-center  text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full cursor-pointer'>Add</div>
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
          <textarea onChange={(e)=>setDesc(e.target.value)} value={desc} rows={15} cols={30} className='px-4 py-2 outline-none' placeholder='Enter post description'/>
          <button onClick={handleUpdate} className='hover:hue-rotate-30 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full cursor-pointer w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Update</button>
        </form>

        </div>
        
    </div>
  )
}

export default EditPost