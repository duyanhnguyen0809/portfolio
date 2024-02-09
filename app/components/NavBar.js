"use client";
import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const openMenu = () => {
    setIsMenuOpen(true);
  };
  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between p-5 bg-transparent z-30">
      <div className="text-white font-bold text-3xl">.duyanh </div>
      <div
        className="text-white font-bold text-2xl tablet:hidden pc:hidden mobile:inline"
        onClick={openMenu}
      >
        Menu
      </div>
      {isMenuOpen && (
        <div className="absolute h-screen w-screen bg-[#6BF2B3] right-0 top-0 z-100">
          <div className="flex flex-col justify-between h-screen p-5">
            <div className="flex justify-between">
              <div className="text-white font-bold text-3xl">.phuong</div>
              <div
                className="text-white opacity-50 font-bold text-xl uppercase"
                onClick={closeMenu}
              >
                Hide
              </div>
            </div>
            <div className="flex flex-col space-y-10 mt-10">
              <div className="text-white font-black text-5xl">MENU</div>

              <div className="font-bold text-3xl text-white cursor-pointer">
                Home
              </div>
              <div className="font-bold text-3xl text-white cursor-pointer">
                About
              </div>
              <div className="font-bold text-3xl text-white cursor-pointer">
                Contact
              </div>
            </div>
            <div className="flex justify-between">
              <div className="">
                <p className="font-bold text-3xl text-white">Social</p>
                <a
                  href="https://www.facebook.com/"
                  className="uppercase text-white"
                >
                  Linkedin
                </a>
              </div>
              <div className="">
                <p className="font-bold text-3xl text-white">Contact</p>
                <p className="text-white">+33 6 65 04 26 35</p>
                <p className="text-white uppercase">
                  duyanhnguyen08091998
                  <br />
                  @gmail.com
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      )}
      <ul className="mobile:hidden pc:flex tablet:flex space-x-10">
        <li className=" relative group font-bold text-xl cursor-pointer text-white uppercase">
          Home
          <span className="absolute h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out -bottom-1 left-0 right-0"></span>
        </li>
        <li className="relative group font-bold text-xl cursor-pointer text-white uppercase">
          About
          <span className="absolute h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out -bottom-1 left-0 right-0"></span>
        </li>
        <li className="relative group font-bold text-xl cursor-pointer text-white uppercase">
          Contact
          <span className="absolute h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out -bottom-1 left-0 right-0"></span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
