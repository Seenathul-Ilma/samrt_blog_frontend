// didn't use

import React, { useState } from 'react'

export default function Login() {
  const currDate = new Date();
    const [name, setName] = useState("Zeenathul Ilma");
    const [inputValue, setInputValue] = useState("");
  
    return (
      <div className="flex min-h-screen overflow-hidden">
        {/* Left side: form */}
        <div className="w-1/3 flex flex-col justify-center p-8 ml-20">
          <div className="mb-4 flex flex-col pb-4">
            <div className="m-2 font-sans font-light">
              <h1 className="text-[30px]">Sign In</h1>
              <p className="lead text-[20px]">Login to your account</p>
            </div>
            <form className="mt-3">
              <label className="block mb-3">
                <span className="block m-2 mb-0 font-sans font-light text-[18px] text-slate-800">
                  Email
                </span>
                <input
                  type="email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="peer w-80 m-2 mt-1 text-[16px] font-sans border border-slate-500 rounded py-1.5 px-2 invalid:border-red-500 invalid:text-red-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-red-500 focus:invalid:outline-red-500 "
                  placeholder="johnDoe@gmail.com"
                />
                <p className="m-2 mt-0 hidden text-red-500 peer-invalid:block">
                  Please provide a valid email address.
                </p>
              </label>
              <label className="blocks">
                <span className="block m-2 text-[18px] mb-0 font-sans font-light text-slate-800">
                  Password
                </span>
                <input
                  type="password"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="peer w-80 m-2 mt-1 text-[16px] font-sans border border-slate-500 rounded py-1.5 px-2 invalid:border-red-500 invalid:text-red-500 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-red-500 focus:invalid:outline-red-500 "
                  placeholder="johndeo@123"
                />
              </label>
              <div className="mt-2">
                <button
                  type="submit"
                  onClick={(e) => {e.preventDefault(); setName(inputValue); alert("This is " + inputValue);}}
                  className="m-2 bg-red-500 focus:bg-gray-500 text-white px-4 py-1.5 rounded"
                >
                  Log In
                </button>
                <button
                  type="submit"
                  onClick={() => setName(inputValue)}
                  className="m-2 bg-gray-500 text-white px-4 py-1.5 rounded"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
  
          {/* <h1>This is {name}</h1>
        <h2>Today is {currDate.toLocaleDateString()}</h2>
        <h2>The time now is {currDate.toLocaleTimeString()}.</h2> */}
        </div>
  
        {/* Right side: image */}
        <div className="w-2/3 flex items-center justify-center bg-white">
          <img
            src="src/assets/images/image.jpg"
            alt="login visual"
            className="max-h-full max-w-full object-cover"
          />
        </div>
      </div>
    );
}
