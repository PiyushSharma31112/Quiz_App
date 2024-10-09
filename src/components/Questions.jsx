import React from 'react'
import { NavLink } from "react-router-dom"
import Timer from './Timer/Timer'
// import { GKQues, SportsQues, MathQues, ScienceQues } from "./index"

const QuestionsPage = [
  {
      id: 1,
      name: "Questions from G.k",
      button: "Start",
      page: "Gk"
  },
  {
      id: 2,
      name: "Questions from Sports",
      button: "Start",
      page: "sports"
  },
  {
      id: 3,
      name: "Questions from Maths",
      button: "Start",
      page: "maths"
  },
  {
      id: 4,
      name: "Questions from Science",
      button: "Start",
      page: 'science'
  },
]

function Questions() {
  return (
    <>
      <div className='w-full h-screen relative flex justify-center items-center main-bg-page-question'>
       
        <div className=' questions grid grid-cols-2 bg-transparent backdrop:blur-sm w-[80%] h-[50%] rounded-2xl gap-10'>
            {
              QuestionsPage.map(( { id, name, page, button } ) => (
                <div className='h-auto w-[400px] flex flex-col gap-4 justify-center items-center rounded-lg bg-white border-2 shadow-lg backdrop:blur-sm p-1 ' key={id}>
                    <h1 className='font-semibold text-center text-black text-2xl'> 
                      {name} 
                    </h1>

                    <NavLink to= {page} className='h-[50px] w-[100px] button text-xl flex items-center justify-center py-2 px-5 rounded-xl font-semibold text-white'  >
                        {button}
                    </NavLink>
                </div>
              ))
            }
            
        </div>
      
      
        {/* <div className='flex items-center justify-center py-2 px-5 fixed right-10 top-10 bg-red-600 rounded-xl font-semibold text-white'>
                        <Timer/>
        </div> */}

         
      </div>
    </>
  )
}

export default Questions
