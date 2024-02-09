import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo_3.svg";

const Footer = () => {
  return (
    <div className="bg-[#02190F] p-10 pb-2 text-[#CECECE]">
      <div className="flex flex-col mb-10 sm:flex-row sm:space-x-16 items-center justify-center">
        <div className="flex items-center justify-content-center ">
          <Image src={logo} alt="logo" />
        </div>
        <div className="text-center sm:w-[40%] mt-4">
          <span className="font-bold">Address: </span>
          <p className="">Mission Billion Finserv Private Limited 1st Floor</p>
          <p>
            Plot. No. 21, Sindhi Colony, Above City Decor, Opposite Gumanpura
            Flyover, Kota, Rajasthan-324006
          </p>
          <p> Nearest Landmark: - Near DP Jewellers, Kota</p>
        </div>
        <div className="flex flex-col gap-2 mt-4 text-center">
          <div>
            <span className="font-bold">Contact Us: </span>
            <p>Call: - +91-8860100478</p>
            <p>Email: - care@niveshbharat.com</p>
          </div>
          <div>
            <span className="font-bold">Business Hours: </span>
            <p>Monday to Saturday: 10:00 AM to 08:00 PM</p>
            <p>Sunday: Closed </p>
          </div>
        </div>
      </div>
      <hr className="text-[#FFFFFF]" />
      <div className="text-[#BBBBBB]">
        <p className="text-lg m-2 text-center">
          Mission Billion Finserv Private Limited is an AMFI registered mutual
          fund distributor (ARN – 283361)
        </p>
        <p className="text-[14px] text-center">
          Mutual fund investments are subject to market risks. Please read all
          scheme related documents carefully before investing. Past performance
          is not an indicator of future returns.
        </p>
      </div>
    </div>
  );
};

export default Footer;
