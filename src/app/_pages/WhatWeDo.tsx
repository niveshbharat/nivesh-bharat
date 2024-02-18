import React from "react";
import Image from "next/image";
import underline from "../../../public/assets/underline.svg";
import Card from "@/components/Card";
import card1 from "../../../public/assets/card-1.svg";
import card2 from "../../../public/assets/card-2.svg";
import card3 from "../../../public/assets/card-3.svg";
import card4 from "../../../public/assets/card-4.svg";
import card5 from "../../../public/assets/card-5.svg";
import card6 from "../../../public/assets/card-6.svg";

const WhatWeDo = () => {
  return (
    //What we do?
    <div className="h-full max-w-6xl mx-10 sm:mx-24 xl:mx-auto pb-4">
      <h1 className="text-center text-5xl relative font-semibold">
        What we do?
      </h1>
      <div className="w-full mt-2 mb-10 flex justify-center">
        <Image src={underline} alt="underline" className="w-auto h-auto" />
      </div>
      <div className="grid grid-cols-1 gap-16 mt-4 lg:sm:grid-cols-2">
        <Card
          title="Mutual Funds"
          description="A professionally created basket of funds designed to help investors build diversified mutual fund portfolio for long term wealth creation."
          image={card1}
        />
        <Card
          title="Stock Broking"
          description="Providing stock broking solutions through trading platform and application for direct stock investing."
          image={card2}
        />
        <Card
          title="Insurance"
          description="We offer wide range of insurance products tailored according to your requirement which can help your loved ones in any emergency and can secure their future."
          image={card3}
        />
        <Card
          title="PMS and AIFs"
          description="We offer and distribute PMS & AIFs products basis client requirement and risk appetite for long term wealth creation."
          image={card4}
        />
        <Card
          title="Bonds"
          description="A professionally created basket of funds designed to help investors build a stable and fixed return delivering portfolio with low risk."
          image={card5}
        />
        <Card
          title="Financial & Tax planning"
          description="We offer personalised financial and tax planning solutions for better management of investment and taxes."
          image={card6}
        />
        </div>
    </div>
  );
};

export default WhatWeDo;
