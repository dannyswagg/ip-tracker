import React from "react";
import pattern from "../assets/pattern-bg-desktop.png";
import patternMobile from "../assets/pattern-bg-mobile.png";
import icon from "../assets/icon-arrow.svg";

const Home = () => {
  return (
    <>
      <div className="relative">
        <img
          src={pattern}
          alt="pattern"
          className="h-60 w-full object-fit hidden md:block"
        />
        <img
          src={patternMobile}
          alt="mobile pattern"
          className="w-full h-[16rem] md:hidden"
        />
        <div className="absolute inset-x-0 top-0 mt-5 text-center">
          <h1 className="text-white text-2xl md:text-3xl font-bold">
            IP Address Tracker
          </h1>
          <div className="flex items-center justify-center w-full mt-5">
            <input
              className="w-[75%] md:w-1/3 rounded-l-xl p-3 outline-none text-black placeholder:text-xs"
              type="text"
              placeholder="Search for any IP address or domain"
            />
            <button className="cursor-pointer bg-black text-white rounded-r-xl h-[50px]">
              <img src={icon} alt="arrow" className="px-5" />
            </button>
          </div>
          <ul
            className="bg-slate-100 rounded-lg mt-5 md:mt-12 w-[90%] md:w-[70%] 
          mx-auto py-7 px-5 block md:flex items-center justify-between"
          >
            <li className="text-center md:text-left flex-col">
              <h2 className="font-light text-sm text-darkGrey">IP Address</h2>
              <h2 className="font-bold text-2xl text-veryDarkGrey">
                192.212.174.101
              </h2>
            </li>
            <li className="text-center md:text-left flex-col">
              <h2 className="font-light text-sm text-darkGrey">LOCATION</h2>
              <h2 className="font-bold text-2xl text-veryDarkGrey">
                Brooklyn, NY 10001
              </h2>
            </li>
            <li className="text-center md:text-left flex-col">
              <h2 className="font-light text-sm text-darkGrey">TIMEZONE</h2>
              <h2 className="font-bold text-2xl text-veryDarkGrey">
                UTC -05:00
              </h2>
            </li>
            <li className="text-center md:text-left flex-col">
              <h2 className="font-light text-sm text-darkGrey">ISP</h2>
              <h2 className="font-bold text-2xl text-veryDarkGrey">
                SpaceX Starlink
              </h2>
            </li>
          </ul>
        </div>
        <div className="bg-black height"></div>
      </div>
    </>
  );
};

export default Home;
