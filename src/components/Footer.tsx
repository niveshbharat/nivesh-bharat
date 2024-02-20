import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo_3.svg";
import { footerInfo } from "@/data/db";

const Footer = () => {
  return (
    <div className="bg-[#02190F] p-10 pb-2 text-[#CECECE]">
      <div className="flex flex-col mb-10 sm:flex-row sm:space-x-16 items-center justify-center">
        <div className="flex items-center justify-content-center ">
          <Image src={logo} alt="logo" />
        </div>
        <div className="flex flex-col gap-1 text-center sm:w-[40%] mt-4">
          <span className="font-bold">Address: </span>
          <p className="">{footerInfo.addressLine1}</p>
          <p>
            {footerInfo.addressLine2}
          </p>
          <p>{footerInfo.addressLine3}</p>
        </div>
        <div className="flex flex-col gap-2 mt-4 text-center">
          <div>
            <span className="font-bold">Contact Us: </span>
            <p>Call: {footerInfo.mobile1}</p>
            <p>{footerInfo.mobile2}</p>
            <p>Email: {footerInfo.email}</p>
          </div>
          <div>
            <span className="font-bold">Business Hours: </span>
            <p>{footerInfo.businessHoursLine1}</p>
            <p>{footerInfo.businessHoursLine2}</p>
          </div>
        </div>
      </div>
      <hr className="text-[#FFFFFF]" />
      <div className="text-[#BBBBBB]">
        <p className="text-lg m-2 text-center">
          {footerInfo.tagline}
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
