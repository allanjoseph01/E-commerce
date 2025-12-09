"use client";
import React from "react";

const Filter = ({ onChangeAction }) => {
  return (
    <div>
      <select
        name="filter"
        id="filter"
        onChange={(e) => onChangeAction(Number(e.target.value))}
        className="mx-5 my-5 px-4 py-2 rounded-lg bg-white border border-gray-300 shadow-sm text-gray-700 outline-none transition duration-200 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300/50"
      >
        <option value="0">Select an option</option>
        <option value="1">1 or above</option>
        <option value="2">2 or above</option>
        <option value="3">3 or above</option>
        <option value="4">4 or above</option>
      </select>
    </div>
  );
};

export default Filter;
