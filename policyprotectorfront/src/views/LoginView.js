import React, { useState } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom'; // Import Navigate instead of Redirect

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [redirect, setRedirect] = useState(false); // Add state for redirect

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/auth/login", {
        email,
        password,
      });
      
      console.log("Login successful:", response.data);
      
      localStorage.setItem("access_token", response.data.access_token);

      setRedirect(true); // Set redirect state to true
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("Incorrect email or password");
    }
  };

  // Render redirect if redirect state is true
  if (redirect) {
    return <Navigate to='/dashboard' replace />;
  }

  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')" }}>
      <div className="flex justify-end">
        <div className="bg-white min-h-screen w-1/2 flex justify-center items-center">
          <div className="w-2/3">
            <form onSubmit={handleLogin}>
              <div>
                <span className="text-xl text-gray-900">Welcome back</span>
                <h1 className="text-2xl font-bold">Login to your account</h1>
              </div>
              <div className="mt-5">
              {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
                <label className="block text-md mb-2" htmlFor="email">Email</label>
                <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
              </div>
              <div className="my-3">
                <label className="block text-md mb-2" htmlFor="password">Password</label>
                <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
              </div>
              <div className="flex justify-between">
                <div>
                  <input className="cursor-pointer" type="radio" name="rememberme" />
                  <span className="text-sm">Remember Me</span>
                </div>
                <span className="text-sm text-blue-700 hover:underline cursor-pointer">Forgot password?</span>
              </div>
              <div>
                <button type="submit" className="mt-4 mb-3 w-full bg-red-600 hover:bg-red-500 text-white py-2 rounded-md transition duration-100">Login now</button>
                <div className="flex space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
                  <img className="h-5 cursor-pointer" src="https://i.imgur.com/arC60SB.png" alt="" />
                  <button>Or sign-in with google</button>
                </div>
              </div>
            </form>
            <p className="mt-8">Email  <span className="cursor-pointer text-sm text-blue-600">admin@gmail.com</span>  Password     <span className="cursor-pointer text-sm text-blue-600">123</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
