import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div
        className="max-w-md w-full space-y-8 p-10 rounded-lg shadow-2xl"
        style={{ backgroundColor: "#1f2941" }}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Sign In</h1>
          <p className="mt-2 text-sm text-gray-300">
            Your gateway to historical manuscripts
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-white mb-1"
              >
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-500" />
                  ) : (
                    <FaEye className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className=" py-2 px-4 border border-white rounded-md shadow-sm text-sm font-medium text-white bg-[#111827] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 group relative w-full flex justify-center"
            >
              Sign in
            </button>
          </div>

          <div className="flex items-center justify-between text-white">
            <Link
              className="text-sm text-gray-200 hover:text-white"
            >
              Forgot password?
            </Link>
            <Link
           
              className="text-sm text-gray-200 hover:text-white"
            >
              Create account
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#1f2941] text-gray-300">
                Or continue with
              </span>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-white rounded-md shadow-sm text-sm font-medium text-white bg-[#111827] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <FaGoogle className="mr-2 h-5 w-5" /> Google
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-white rounded-md shadow-sm text-sm font-medium text-white bg-[#111827] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <FaFacebook className="mr-2 h-5 w-5" /> Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
