import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
     <Navbar/>
    <div className='w-screen h-[100vh]  flex bg-red-400 flex-col justify-evenly items-center'>
      <h1 className='font-bold font-700 text-2xl font-[poppins]'>About page</h1>
    </div>
    </>
  )
}

export default About