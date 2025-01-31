import React, { useState } from "react";
import { Card, CardContent } from "../Components/ui/card";
import { Input } from "../Components/ui/input";
import { Button } from "../Components/ui/button";
import { Label } from "../Components/ui/label";
import { motion } from "framer-motion";

const LoginPage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  // State for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle login button click
  const handleLogin = () => {
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
    console.log("Logging in with:", { username, password });
    alert(`Welcome, ${username}!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 w-full max-w-md p-6"
    >
      <Card className="p-6 shadow-xl bg-white border border-black rounded-2xl dark:bg-zinc-950">
        <CardContent className="space-y-4 relative">
          {/* Positioned Exit Button */}
          <button
            className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-700 dark:text-slate-300 dark:hover:text-slate-100"
            onClick={onClose}  // Close the modal when clicked
          >
            X
          </button>
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-slate-300">Login</h2>
          <div>
            <Label className="text-gray-700 dark:text-slate-300">Username</Label>
            <Input
              type="text"
              placeholder="Enter your username"
              className="mt-1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <Label className="text-gray-700 dark:text-slate-300">Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="w-full mt-4" onClick={handleLogin}>
            Login
          </Button>
          <p className="text-center text-sm text-gray-600 dark:text-slate-300">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LoginPage;

