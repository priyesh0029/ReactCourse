
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./utils/Slices/userSlice";

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const data ={
        email,
        password
    }
    const handleLogin = async()=>{
        try {
            const response = await axios.post('http://localhost:3000/login', {
              // Request body data
               data
            });
                console.log(response.data); // Response data
            if(response.data.status){
                if (response.data.response.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data.response.accessToken));
                    dispatch(login(response.data.response.userInfo));
                  }
                navigate('/')
            }
        } catch (error) {
          console.error(error);
          if(error){

              swal({
                  title: error.response.data,
                  icon: "error",
                  button: "OK",
                });
          }
        }
      
    }


  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black underline">
          Sign in
        </h1>
        <div className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-black-400 focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-black-400 focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button onClick={handleLogin} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-black-600 focus:outline-none focus:bg-black-600">
              Login
            </button>
          </div>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-black-600 hover:underline"
          >
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
