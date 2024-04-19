import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div>
            <NavLink
              to="/"
              className="text-gray-900 hover:text-gray-600 transition duration-300"
            >
              <span className="font-bold text-xl">StudyBot</span>
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {!isLoggedIn && (
              <>
                <NavLink
                  to="/"
                  className="text-sm font-medium text-gray-900 hover:text-blue-500 transition duration-300"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/"
                  className="text-sm font-medium text-gray-900 hover:text-blue-500 transition duration-300"
                >
                  Features
                </NavLink>
                <NavLink
                  to="/"
                  className="text-sm font-medium text-gray-900 hover:text-blue-500 transition duration-300"
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="/"
                  className="text-sm font-medium text-gray-900 hover:text-blue-500 transition duration-300"
                >
                  About
                </NavLink>
                <NavLink
                  to="/signup"
                  className="text-sm font-medium text-gray-900 hover:text-blue-500 transition duration-300"
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to="/login"
                  className="text-sm font-medium text-gray-900 hover:text-blue-500 transition duration-300"
                >
                  Login
                </NavLink>
              </>
            )}
            {isLoggedIn && (
              <>
                <NavLink
                  to="/studybot"
                  className="text-sm font-medium text-gray-900 hover:text-blue-500 transition duration-300"
                >
                  Chat
                </NavLink>
                <NavLink
                  to="/performance"
                  className="text-sm font-medium text-gray-900 hover:text-blue-500 transition duration-300"
                >
                  Performance
                </NavLink>
                <NavLink
                  to="/flashcards"
                  className="text-sm font-medium text-gray-900 hover:text-blue-500 transition duration-300"
                >
                  Flashcards
                </NavLink>
                <NavLink
                  to="/quizzes"
                  className="text-sm font-medium text-gray-900 hover:text-blue-500 transition duration-300"
                >
                  Quizzes
                </NavLink>
                <NavLink
                  to="/login"
                  className="text-sm font-medium text-gray-900 hover:text-blue-500 transition duration-300"
                >
                  Logout
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
