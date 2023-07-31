import React from 'react';
import { Link } from 'react-router-dom';

const LoginType = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <div className="bg-blue-900 w-[400px] h-[300px] rounded-lg items-center flex flex-col gap-5 justify-evenly">
        <Link to="/loginpage" className="w-[50px] text-black hover:w-[180px] h-auto px-2 py-2 rounded-lg bg-white duration-300 overflow-hidden hover:shadow-lg items-center flex flex-row gap-2 cursor-pointer">
          <img width="36" src="https://img.icons8.com/material-rounded/96/administrator-male.png" alt="administrator-male" />
          <h2>Administrator</h2>
        </Link>
        <Link to="/team-member" className="w-[50px] text-black hover:w-[12rem] h-auto px-2 py-2 rounded-lg bg-white duration-300 overflow-hidden items-center hover:shadow-lg flex flex-row gap-2 cursor-pointer">
          <img width="36" src="https://img.icons8.com/material/96/group-background-selected.png" alt="group-background-selected" />
          <h2 style={{ whiteSpace: 'nowrap' }}>Team Member</h2>
        </Link>
        <Link to="/team-leader" className="w-[50px] text-black hover:w-[12rem] h-auto px-2 py-2 rounded-lg bg-white duration-300 overflow-hidden flex flex-row gap-2 hover:shadow-lg items-center cursor-pointer">
          <img width="36" src="https://img.icons8.com/ios-filled/100/leader.png" alt="leader" />
          <h2 style={{ whiteSpace: 'nowrap' }}>Team Leader</h2>
        </Link>
      </div>
    </div>
  );
};

export default LoginType;
