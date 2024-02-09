"use-client";
import React from "react";
import MobileMenu from "./MobileMenu";
import logo2 from "../../public/assets/nav-logo.svg";
import Image from "next/image";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="z-0 flex text-[0.7rem] lg:text-[1rem] items-center justify-between max-w-6xl py-5 mx-10 xl:mx-auto ">
      <div>
        <Image src={logo2} alt="logo" />
      </div>

      <div className="items-center hidden space-x-8 font-medium md:flex md:space-x-6 lg:space-x-14 text-black">
        <Link to="stats" spy={true} smooth={true} offset={-50} duration={700}>
          <p className="transition cursor-pointer hover:text-primary hover:cursor-pointer hover:scale-105 duration-300 hover:text-[#ff9933]">
            About Us
          </p>
        </Link>
        <Link
          to="whatwedo"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
        >
          <p className="transition cursor-pointer hover:text-primary hover:cursor-pointer hover:scale-105 duration-300 hover:text-[#ff9933]">
            Products
          </p>
        </Link>
        <Link to="SIP" spy={true} smooth={true} offset={-40} duration={700}>
          <p className="transition cursor-pointer hover:text-primary hover:cursor-pointer hover:scale-105 duration-300 hover:text-[#ff9933]">
            SIP Calculator
          </p>
        </Link>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
        >
          <p className="transition cursor-pointer hover:text-primary hover:cursor-pointer hover:scale-105 duration-300 hover:text-[#ff9933]">
            Portfolio
          </p>
        </Link>
        <Link to="ourteam" spy={true} smooth={true} offset={0} duration={700}>
          <p className="transition cursor-pointer hover:text-primary hover:cursor-pointer hover:scale-105 duration-300 hover:text-[#ff9933]">
            Our Team
          </p>
        </Link>
      </div>
      <div>
        <Link to="contact" spy={true} smooth={true} offset={-50} duration={700}>
          <p className="hidden md:block font-medium px-10 py-4 text-white transition rounded-[80px] cursor-pointer bg-p_green-500 hover:bg-p_green-900">
            Contact us
          </p>
        </Link>
      </div>

      <div className="relative md:hidden z-50">
        <MobileMenu />
      </div>
    </div>
  );
};

export default NavBar;
