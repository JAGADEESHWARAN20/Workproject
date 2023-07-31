import React from 'react'
import { Link } from 'react-router-dom'

const StanderdHeader = () => {
  return (
    <div className='w-full flex flex-row justify-between items-center h-[60px] bg-slate-500 '>
        <div className='ml-4 text-white font-bold text-3xl'>TimeTracker</div>
        <div className='mr-4 flex items-center '>
          <details className='dropdown dropdown-end dropdown-bottom'>
            <summary tabIndex={0} className="btn m-1">login</summary>
        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ">
                      <ul>
                        <li>
                          <Link to="/login">Profile</Link>
                        </li>
                        <li>
                          <Link to="/team-member">Logout</Link>
                        </li>
                      </ul>

                   
            </ul>
          </details>
        </div>
    </div>
  )
}

export default StanderdHeader