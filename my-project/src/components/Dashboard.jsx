import React from 'react';
import { NavLink } from 'react-router-dom';
import StanderdHeader from './StanderdHeader';
import { AiOutlineHome, AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineSearch } from 'react-icons/ai';

const Dashboard = () => {
  const numDivs = 5;
  const texts = ['Users', 'Projects', 'Templates', 'Reports', 'Settings'];
  const icons = [
    <AiOutlineHome />,
    <AiOutlineUser />,
    <AiOutlineMail />,
    <AiOutlinePhone />,
    <AiOutlineSearch />,
  ];

  return (
    <div>
      <StanderdHeader />
      <div className="text-sm breadcrumbs ml-10 mt-2">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active" className="flex gap-2">
              <AiOutlineHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" activeClassName="active">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
              </svg>
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='flex flex-row gap-3 w-[600px] mt-[20px] ml-[20px]'>
        {Array.from({ length: numDivs }).map((_, index) => (
          <div key={index} className='w-auto p-6 cursor-pointer text-center justify-center flex items-center rounded-md hover:scale-110 hover:bg-red-700 duration-150 h-[50px] bg-stone-900 text-white gap-2'>
            {icons[index]} {texts[index]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
