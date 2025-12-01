"use client";

import Link from "next/link";
import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    password: "",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-700 to-teal-800 p-5">
      <form
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-4"
      >
        <h2 className="text-3xl font-bold text-center text-emerald-700">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-4">
          Register to continue
        </p>

        <div className="flex flex-col">
          <label className="font-medium text-gray-700">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>


        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>


        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Age</label>
          <input
            type="number"
            placeholder="Enter your age"
            className="mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl font-semibold transition cursor-pointer"
        >
          Register
        </button>

        <p className="text-center text-gray-600 text-sm mt-2">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-emerald-600 font-medium hover:underline"
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
