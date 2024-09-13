import React from "react";
import pattern from "../assets/pattern-bg-desktop.png";
import icon from "../assets/icon-arrow.svg";

const Home = () => {
  return (
    <>
      <div className="relative">
        <img src={pattern} alt="pattern" className="h-full" />
        <div className="absolute inset-x-0 top-0 mt-5 text-center">
          <h1 className="text-white text-3xl font-bold">IP Address Tracker</h1>
          <div className="flex items-center justify-center mt-5">
            <input
              className="w-1/3 rounded-l-lg p-3 outline-none text-black"
              type="text"
              placeholder="Search for any IP address or domain"
            />
            <button className="cursor-pointer bg-black text-white rounded-r-lg h-[50px]">
              <img src={icon} alt="arrow" className="px-5" />
            </button>
          </div>
          <ul className="bg-slate-100 rounded-lg mt-14 h-40 w-[70%] mx-auto p-5 flex justify-around">
            <li>IP Address</li>
            <li>LOCATION</li>
            <li>TIMEZONE</li>
            <li>ISP</li>
          </ul>
        </div>
        <div className="bg-black h-[500px] w-full">hjbjhbhjbj</div>
      </div>
    </>
  );
};

export default Home;
