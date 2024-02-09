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
      <div className="grid grid-cols-1 gap-16 mt-4 sm:grid-cols-1 lg:sm:grid-cols-2">
        <Card
          title="Mutual Funds"
          description="There are various types of investments available and you can choose investments"
          image={card1}
        />
        <Card
          title="Stock Broking"
          description="There are various types of investments available and you can choose investments"
          image={card2}
        />
        <Card
          title="Insurance"
          description="There are various types of investments available and you can choose investments"
          image={card3}
        />
        <Card
          title="PMS and AIFs"
          description="There are various types of investments available and you can choose investments"
          image={card4}
        />
        <Card
          title="Bonds"
          description="There are various types of investments available and you can choose investments"
          image={card5}
        />
        <Card
          title="Financial & Tax planning"
          description="There are various types of investments available and you can choose investments"
          image={card6}
        />
        </div>
    </div>
  );
};

export default WhatWeDo;
