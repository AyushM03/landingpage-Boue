import React from "react";
import { HiOutlineBars4 } from "react-icons/hi2";
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-20">
        <img class="h-12    rounded-full" src="./assets/logo.png" alt="Logo" />
        <button className="bg-gradient-to-r from-[#987070] to-[#F1E5D1] text-sm text-white px-2.5 py-1.5 rounded-2xl  ">
          Boue is hiring
        </button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6"> 
        <li><a href="#">Plans</a></li>
        <li><a href="#">Your Thoughts</a></li>
        <li><a href="#">Menu</a></li>
        <div className="hidden lg:flex justify-center items-center font-lato gap-6">
          <a className="text-gray-400" href="#">Sign In</a>
          <button className="rounded-md px-4 py-3   bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
        </div>
      </ul>
      <div className="lg:hidden"> 
        <HiOutlineBars4 className=" h-7 w-7 fill-gray-900"/>
      </div>
    </div>
  );
};

export default Header;
