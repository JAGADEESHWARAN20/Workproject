import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className='w-screen h-[100vh]  flex bg-red-600 flex-col justify-evenly items-center'>
      <h1 className='font-bold font-700 text-2xl font-[poppins]'>Contact page</h1>
    </div>
    </>
  )
}

export default Contact