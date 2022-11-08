import React from "react";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <div className="fixed z-50 w-screen bg-slate-300 p-6 px-16">
      {/* destop & tablet */}
      <div className="hidden md:flex w-full h-full">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </div>
        <ul className="flex items-center ml-auto">
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Home
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Menu
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            About Us
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Service
          </li>
        </ul>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
      header
    </div>
  );
};

export default Header;
