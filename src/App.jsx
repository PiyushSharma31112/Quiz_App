import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='flex w-full h-full justify-center items-center'>
        <Outlet />
      </div>
    </>
  )
}

export default App
