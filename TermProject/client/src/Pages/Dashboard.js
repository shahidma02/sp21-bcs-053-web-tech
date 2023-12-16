import React from 'react'
import Post from '../Components/Post';
import Navbar from '../Components/Navbar';

function Dashboard(){
    return(
        <div>
            <Navbar logedIn={true}/>
        <div className='px-8 md:px-[200px] '>
            
            <Post/>
            
        </div>
        </div>
    )
}
export default Dashboard;