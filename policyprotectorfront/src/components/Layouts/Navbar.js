import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import axios from "axios";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [redirect, setRedirect] = useState(false); 

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/logout", null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Logged out successfully:", response.data);
      setRedirect(true);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

// Render redirect if redirect state is true
if (redirect) {
  return <Navigate to='/' replace />;
}

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
        <div className="w-1/2"></div>
        <div className="relative w-1/2 flex justify-end">
          <button
            onClick={toggleNavbar}
            className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
          >
            <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
          </button>
          {isOpen && (
            <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
              <Link
                to="#"
                className="block px-4 py-2 account-link hover:text-blue-700"
              >
                Account
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 account-link hover:text-blue-700"
              >
                Support
              </Link>
              <a
                
                className="block px-4 py-2 account-link hover:text-blue-700"
              >
                <form onSubmit={handleLogout}>
                  <button type="submit"> Sign Out </button>
                </form>
              </a>
            </div>
          )}
        </div>
      </header>

      <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
        <div className="flex items-center justify-between">
          <Link
            to="index.html"
            className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >
            Admin
          </Link>
          <button
            onClick={toggleNavbar}
            className="text-white text-3xl focus:outline-none"
          >
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
        {isOpen && (
          <nav className="flex flex-col pt-4">
            <Link
              to="index.html"
              className="flex items-center active-nav-link text-white py-2 pl-4 nav-item"
            >
              <i className="fas fa-tachometer-alt mr-3"></i>
              Dashboard
            </Link>
            <Link
              to="blank.html"
              className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item"
            >
              <i className="fas fa-sticky-note mr-3"></i>
              Blank Page
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
