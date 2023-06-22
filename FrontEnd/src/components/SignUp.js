import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignUp = ()=> {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const data = {
        name,
        email,
        password
    }

    const handleSignUp = async()=>{
        try {
            const response = await axios.post('http://localhost:3000/signup', {
              // Request body data
              data : data
            });
            if(response.data.status){
                navigate('/login')
                console.log(response.data); // Response data
            }
      
          } catch (error) {
            console.error(error);
            swal({
                title: error.response.data,
                icon: "error",
                button: "OK",
              });
          }
    }

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-black-900">
                            Signup
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    value = {name}
                                    onChange={(e)=>setName(e.target.value)}
                                    className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    value = {email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    value = {password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    className=" p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-end mt-4">
                            <Link to="/login" className="text-sm text-gray-600 underline hover:text-gray-900"> Already registered?</Link>
                        
                            <button
                                type="submit"
                                onClick={handleSignUp}
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Register
                            </button>
                        </div>
                   
                </div>
            </div>
        </div>
    );
}


export default SignUp