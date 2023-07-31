import React, { useState } from 'react';
import Validation from './loginvalidation';

const Teammember = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);
    console.log(values)
  };

  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
        <form
          className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md"
          onSubmit={handleSubmit}
        >
          <div>
            <p className="mb-5 text-3xl uppercase text-gray-600">Login</p>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleInput}
              className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
              autoComplete="off"
              placeholder="Email"
              required
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>
          <div className='flex flex-col'>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleInput}
              className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
              autoComplete="off"
              placeholder="Password"
              required
            />
            {errors.password && <span className="text-red-500">{errors.password}</span>}
          </div>
          <button
            className="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80"
            id="login"
            type="submit"
          >
            <span>Login</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Teammember;
