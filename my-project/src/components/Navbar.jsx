import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className=' mx-auto fixed bg-white w-[100vw]'>
        <div className='flex items-center justify-center w-auto'>
        <div className='text-2xl w-full h-[60px] flex flex-row items-center justify-evenly'>
          <div className="">
            <h1 className='text-2xl font-bold tracking-wider'>Logo</h1>
          </div>
         
          <div className="text-sm breadcrumbs">
            <ul className='flex flex-row gap-2 items-center'>
            <Link to='/' > <li className='flex flex-row gap-1 items-center'>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                  
                </a>
                Home
              </li> 
              </Link>
              &#8827;
              <Link to='/about'><li className='items-center flex flex-row gap-1'>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                </a>
                  About
              </li> 
              </Link>
              &#8827;
              <Link to='/contact'>  <li className='items-center flex flex-row gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Contact
              </li>
              </Link>
            </ul>
          </div>
                    
          <div className='flex items-center'>
          
            <ul className="menu lg:menu-horizontal bg-base-200 rounded-box ">
                <li>
                    <details>
                      <summary>Login</summary>
                      <ul>
                        <li>
                          <Link to="/login">Admin</Link>
                        </li>
                        <li>
                          <Link to="/team-member">Team Member</Link>
                        </li>
                        <li>
                          <Link to="/team-leader">Team Leader</Link>
                        </li>
                      </ul>

                    </details>
                  </li>
            </ul>

          </div>
     
     
      </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar