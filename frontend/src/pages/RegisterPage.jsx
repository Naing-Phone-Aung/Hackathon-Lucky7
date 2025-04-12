import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen font-schisted items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-1">CREATE YOUR ACCOUNT</h2>
          <p className="text-sm text-gray-500">
            Create an account to start planning your day, join community and get the latest updates.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange text-white py-2 px-4 rounded-md hover:bg-secOrange transition"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-600">
          Already have an account{" "}
          <Link
            to={"/login-page"}
            className="text-orange-600 hover:underline"
          >
            log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
