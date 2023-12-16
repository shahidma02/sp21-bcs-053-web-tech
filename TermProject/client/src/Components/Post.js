import React from 'react'
import Back from '../back.png'
function Post(){
    return(
        <div className='w-full flex mt-8 space-x-4'>
            <div className='w-[35%] h-[200px] flex justify-center items-center object-cover' >
               <img src={Back} alt='post imagee' className='h-full w-full' />
            </div>
            <div className='flex flex-col w-[65%] '>
                <h1 className='text-xl font-bold md:mb-2 md:text-2xl'>
                    10 Uses of Artificial Intelligence in Our Daily Lives
                </h1>
                <div className='flex mb-2 text-sm font-semibold text-gray-500 space-x-4 md:mb-4 '>
                    <p>@amenashahid</p>
                    <div className='flex space-x-2 '>
                        <p>16/6/2023</p>
                        <p>16:45</p>
                    </div>

                </div>
                <p>Artificial Intelligence (AI) has seamlessly woven into the fabric of our daily lives, offering an array of conveniences and enhancements. From the familiar voices of virtual assistants, like Siri and Alexa, responding to our queries and managing tasks, to the personalized recommendations on streaming platforms and e-commerce websites, AI algorithms constantly adapt to our preferences. In the healthcare sector, AI aids in diagnostics and treatment planning, analyzing medical images with precision. The autonomous capabilities of vehicles, driven by AI, promise a future of safer and more efficient transportation. Moreover, AI contributes to fraud detection in financial transactions and ensures the moderation of content on social media platforms. Language translation services and predictive text features on our devices rely on AI, fostering global communication and improving our writing efficiency. As AI continues to evolve, its integration into our daily routines showcases its transformative impact on diverse aspects, making our lives more efficient, connected, and tailored to our individual needs.</p>
            </div>
        
        </div>
    )
}
export default Post;