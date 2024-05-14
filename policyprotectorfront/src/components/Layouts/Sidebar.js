import React from "react";
import { Link } from "react-router-dom"; 

export default function Sidebar() {
  return (
    <>
       <aside className ="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
          <div className ="p-6">
              <Link to="" className ="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</Link>
              <button className ="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                  <i className ="fas fa-plus mr-3"></i> New Report
              </button>
          </div>
          <nav className ="text-white text-base font-semibold pt-3">
              <Link to="/dashboard" className ="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                  <i className ="fas fa-tachometer-alt mr-3"></i>
                  Dashboard
              </Link>
              <Link to="blank.html" className ="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" >
                  <i className ="fas fa-sticky-note mr-3"></i>
                  Blank Page
              </Link>
              <Link to="/tables" className ="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                  <i className ="fas fa-table mr-3"></i>
                  Tables
              </Link>
              <Link to="" className ="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                  <i className ="fas fa-align-left mr-3"></i>
                  Forms
              </Link>
              <Link to="" className ="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                  <i className ="fas fa-tablet-alt mr-3"></i>
                  Tabbed Content
              </Link>
              <Link to="" className ="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                  <i className ="fas fa-calendar mr-3"></i>
                  Calendar
              </Link>
          </nav>
          <Link to="" className ="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4">
              <i className ="fas fa-arrow-circle-up mr-3"></i>
              Upgrade to Pro!
          </Link>
      </aside>
    </>
  );
}
