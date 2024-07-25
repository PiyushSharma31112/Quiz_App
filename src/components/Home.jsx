import React from 'react'
import  {NavLink}  from "react-router-dom"
import { VscDebugStart } from "react-icons/vsc";

function Home() {

  return (

    <div className='home relative flex justify-center items-center w-screen h-screen flex-col'>

      <h1 className='text-5xl text-center font-bold absolute top-20'>Quiz App</h1>

      <div className='p-2 w-[100px] h-[50px] rounded-md bg-[#ff0000] text-white font-bold text-xl cursor-pointer '>


            <NavLink to="/Questions" className="flex items-center justify-evenly" >
                Start <VscDebugStart />
            </NavLink>
       </div>

    </div>
  )
}

export default Home
