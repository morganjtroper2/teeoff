import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";

export default function HomePage() {

  const [search, setSearch] = useState("");

  return (
    <>
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <header className="flex justify-between items-center p-8 bg-white shadow-md">
        <h1 className="text-4xl font-bold text-green-700 mr-10">Tee BOX</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-2xl text-gray-700 hover:text-green-600">Homepage</a></li>
            <li><a href="#" className="text-2xl text-gray-700 hover:text-green-600">Golf Courses</a></li>
            <li><a href="#" className="text-2xl text-gray-700 hover:text-green-600">Hotel</a></li>
            <li><a href="#" className="text-2xl text-gray-700 hover:text-green-600">Flights</a></li>
          </ul>
        </nav>

         {/* Login Button */}
         <button className="ml-auto px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-700">
          Login
        </button>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-400"
        />
      </header>

      {/* Main Content */}
      <main className="flex justify-center items-center h-[70vh]">
        <div className="flex space-x-10">
          {["Golf Courses", "Hotels", "Flights"].map((title, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-25 shadow-lg rounded-xl w-100 text-center"
            >
              <h2 className="text-3xl font-semibold text-green-700">{title}</h2>
              <p className="text-gray-600 mt-7">Explore the best {title.toLowerCase()} for your trip.</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
    </>
  );
}
