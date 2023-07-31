import React from 'react';

const Homepage = () => {
  return (
    <div className='w-screen h-auto flex bg-red-200 flex-col justify-evenly scroll-smooth items-center'>
      <div className='w-full  h-[100vh] overflow-y-scroll text-white bg-slate-200 flex flex-row items-center justify-evenly'>
        <div className=' w-auto mx-10 flex flex-col items-center bg-amber-500 px-2 py-5'><h1 className='text-[100px] text-slate-800'>Helloworld</h1> <p className='w-1/2 text-justify text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corporis commodi non animi. Reprehenderit, harum quod tempora, consequuntur maxime et deleniti quae eum voluptate esse, omnis natus labore perspiciatis unde.</p>
        <div className="flex flex-row gap-3 w-auto cursor-pointer mt-5">
        <a href="#home2">          <div className='bg-gray-900 hover:bg-sky-800 rounded-md shadow-md scroll-smooth  text-white px-5 py-2'>Home</div></a>
        <a href="#home3">  <div className='bg-gray-500 hover:bg-blue-900 text-white rounded-md shadow-lg scroll-smooth px-5 py-2'>about</div></a>
        </div>
        </div>
        <div className='flex w-1/2 items-center mr-12'>
             
        </div>
      </div>
      <div id='home2' className='w-full h-[100vh] overflow-y-scroll text-white bg-slate-700 flex items-center justify-center'>
        hellow
      </div>
      <div id='home3' className='w-full h-[100vh] overflow-y-scroll text-white bg-slate-700 flex items-center justify-center'>
        hellow
      </div>
    </div>
  );
};

export default Homepage;
