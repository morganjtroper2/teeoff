import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import LoginPage from "./LoginPage";
import DarkToggle from "../Components/DarkMode"

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [showLogin, setShowLogin] = useState(false); // Track login page visibility

  return (
    <>
      <div className="min-h-screen bg-green-50 dark:bg-emerald-950">
        {/* Header */}
        <header className="flex justify-between items-center p-8 bg-white shadow-md dark:bg-zinc-950">
          <h1 className="text-4xl font-bold text-green-700 mr-10">Tee BOX</h1>
          <nav>
            <ul className="flex space-x-2">
              <li><a href="#" className="text-2xl text-gray-700 hover:text-green-600 dark:text-slate-300 dark:hover:text-emerald-800">Homepage</a></li>
              <span className="text-2xl">|</span>
              <li><a href="#" className="text-2xl text-gray-700 hover:text-green-600 dark:text-slate-300 dark:hover:text-emerald-800">Golf Courses</a></li>
              <span className="text-2xl">|</span>
              <li><a href="#" className="text-2xl text-gray-700 hover:text-green-600 dark:text-slate-300 dark:hover:text-emerald-800">Hotel</a></li>
              <span className="text-2xl">|</span>
              <li><a href="#" className="text-2xl text-gray-700 hover:text-green-600 dark:text-slate-300 dark:hover:text-emerald-800">Flights</a></li>
            </ul>
            <DarkToggle />
          </nav>

          {/* Login Button */}
          <button 
            onClick={() => setShowLogin(!showLogin)}  // Toggle the login visibility
            className="ml-auto px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 hover:outline hover:outline-2 hover:outline-black"
          >
            Login
          </button>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-4 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-400 hover:outline hover:outline-2 hover:outline-black"
          />
        </header>

        {/* Main Content */}
        <main className="flex justify-center items-center h-[70vh]">
          <div className="flex space-x-10">
            {["Golf Courses", "Hotels", "Flights"].map((title, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-15 shadow-lg rounded-3xl w-100 text-center hover:outline hover:outline-2 hover:outline-black dark:bg-zinc-950"
              >
                <h2 className="text-3xl font-semibold text-green-700">{title}</h2>
                <p className="text-gray-600 mt-4 dark:text-slate-300">Explore the best {title.toLowerCase()} for your trip.</p>
              </motion.div>
            ))}
          </div>
        </main>

        {/* Show Login Page When Login is Clicked */}
        {showLogin && (
          <div className="fixed inset-0 flex items-center justify-center">
            <LoginPage onClose={() => setShowLogin(false)} />
          </div>
        )}
      </div>
    </>
  );
}
