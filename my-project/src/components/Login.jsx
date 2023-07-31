import React, { useState } from 'react';
import './login.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

// Import the validation function
import Validation from './signupvalidation';
import { useNavigate } from 'react-router-dom';

AOS.init();

const Login = () => {
  const [isLogin, setLogin] = useState(true);
  const initialValues = {
    Username: '',
    email: '',
    password: '',
    fullname: '',
  };

  // State to hold the form values and errors
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});


  const navigate = useNavigate();
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form using the Validation function
    const validationErrors = Validation(values);
    setErrors(validationErrors);
    if (!errors.Username && !errors.email && !errors.password && !errors.fullname) {
      axios.post('http://localhost:4000/signup',values)
      .then(res =>{
        navigate('/');
        console.log(res)
      })
      .catch(err => console.log(err));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleToggle = () => {
    setLogin(!isLogin);
  };

  return (
    <div>
      <div className="h-screen flex">
        <div className="flex w-1/2 bg-white i justify-around items-center">
          <div>
            <h1 className="text-slate-700 font-bold text-4xl font-['poppins']">Admin Panel</h1>
            <p className="text-slate-700 mt-1 font-['poppins']">Login to Start your work</p>
            <button
              onClick={handleToggle}
              type="button"
              className="block w-28 bg-slate-700 text-white mt-4 py-2 rounded-2xl font-normal mb-2 font-['montserrat']"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </div>
        </div>
        <div className="h-auto w-1/2 flex flex-col justify-center items-center">
          {isLogin ? (
            <div className={`pb-[50%] pt-[50%]  bg-gradient-to-tr to-yellow-400 from-slate-700 flex w-full  justify-center items-center`}>
              <form className="bg-transparent" onSubmit={handleSubmit}>
                <h1 className="text-gray-800 font-bold text-5xl pb-5 mb-1">Login</h1>
                <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  <input
                    className="pl-2 outline-none border-none bg-transparent placeholder:text-white text-white"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
                {/* Display the error message for email */}
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <input
                    className="pl-2 outline-none border-none bg-transparent placeholder:text-white text-white"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                  />
                </div>
                {/* Display the error message for password */}
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                <button
                  type="submit"
                  className="block w-full bg-black hover:bg-slate-800 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                >
                  Login
                </button>
                <span className="text-sm ml-2 hover:text-white cursor-pointer">Forgot Password ?</span>
              </form>
            </div>
          ) : (
            <div className={`h-[100vh] pb-[50%] pt-[50%] flex w-full justify-center items-center bg-gradient-to-tr to-blue-800 from-purple-700 transition-transform `}>
              <form className="bg-transparent" onSubmit={handleSubmit}>
                <h1 className="text-white font-bold text-5xl  mb-1 pb-5">SignUp</h1>
                <p className="text-sm font-normal text-white mb-7">Welcome Back</p>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <input
                    className="pl-2 outline-none border-none bg-transparent placeholder:text-white text-white"
                    type="text"
                    name="Username"
                    id="Username"
                    placeholder="Username"
                    value={values.Username}
                    onChange={handleChange}
                  />
                </div>
                {/* Display the error message for username */}
                {errors.Username && <p className="text-red-500 text-sm">{errors.Username}</p>}
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <input
                    className="pl-2 outline-none border-none bg-transparent placeholder:text-white text-white"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                  <input
                    className="pl-2 outline-none border-none bg-transparent placeholder:text-white text-white"
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="fullname"
                    value={values.fullname}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center border-2 py-3 my-3 px-3 rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  <input
                    className="pl-2 outline-none border-none bg-transparent placeholder:text-white text-white"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
                {/* Display the error message for email */}
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                <button
                  type="submit"
                  className="block w-full bg-black hover:bg-slate-800 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                >
                  Sign Up
                </button>
                <span className="text-sm ml-2 hover:text-white cursor-pointer">Forgot Password ?</span>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
