import React from "react";
import NavbarItem from "./NavbarItem";
const Navbar = () => {
  return (
    <nav className="w-full h-fit">
      <div className="flex flex-row items-center px-4 py-6 bg-violet-500 bg-opacity-90 transition duration-500">
        <h1 className="text-white-200 font-bold text-2xl ">User Hub</h1>
        <div
          className="flex-row
         ml-16
         gap-7
         hidden
         lg:flex"
        >
          <NavbarItem label="Home" />
          <NavbarItem label="About" />
          <NavbarItem label="Team" />
          <NavbarItem label="Contact" />
        </div>
        <div className="flex flex-row gap-7 ml-auto items-center">
          <input
            type="text"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white-500 dark:focus:border-blue-500"
            placeholder="username"
            required
          />
          <button className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
            Search
          </button>
        </div>
      </div>
    </nav>
    // <nav className="w-full fixed z-40">
    //   <div className="flex flex row items-center bg-blue-900"></div>
    // </nav>
  );
};

export default Navbar;
