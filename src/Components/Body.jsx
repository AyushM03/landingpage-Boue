import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
const Body = () => {
  return (
    <div className="space-y-20 lg:flex">
      <div className="flex items-center justify-center px-2.5 py-2.5 lg:flex-1 lg:order-2 ">
        <img
          src="./assets/door.jpg"
          alt=""
          className="h-60 w-60 rounded-full p-2 md:h-80 md:w-80"
        />
        <img
          src="./assets/door.jpg"
          alt=""
          className="h-60  absolute rounded-full p-2 rotate-[45deg] md:h-80 "
        />
        <img
          src="./assets/door.jpg"
          alt=""
          className="h-60  absolute rounded-full p-2 rotate-[315deg] md:h-80 "
        />

        <img
          src="./assets/icecreem.jpg"
          alt=""
          className="absolute h-40 w-40 rounded-full p-1 md:h-60 md:w-60"
        />
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight">The Flavor Finds You</h1>
        <p className="font-lato text-gray-400">People who love to eat are always the best people</p>
        <form action="" className="flex flex-col gap-4 md:flex-row ">
          <input  className="md:px-20 md:py-5 rounded-md px-4 py-3 bg-white placeholder:text-gray-400" type="email" placeholder="Enter email address " />
          <button className="md:px-20 md:py-5  rounded-md px-4 py-3   bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
          
        </form>
        <div className="flex gap-2 ">
            <IoCheckmarkCircleSharp className="fill-green-400 h-6 w-6" />
            <p className="font-lato  text-gray-400">No spam, ever. Unsbscribe anytime</p>
          </div>
      </div>
    </div>
  );
};

export default Body;
