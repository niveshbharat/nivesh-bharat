"use-client";
import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: any;
};

const PortfolioCard = ({ title, description, image }: Props) => {
  return (
    <div className="flex bg-p_darkgreen max-w-[720px] md:flex-shrink-0 flex-col-reverse md:flex-row snap-center rounded-2xl items-center">
      <div className="text-white p-10 md:p-10 md:pr-0">
        <h1 className="text-2xl sm:text-3xl font-semibold mt-4">{title}</h1>
        <p className="text-sm sm:text-lg mt-2">{description}</p>
      </div>
      <div className="relative w-[70vw] sm:w-[50vw] h-[30vh] md:pr-36 my-5">
        <Image
          src={image}
          alt="portfolio"
          fill
          className="rounded-3xl aspect-square"
        />
      </div>
    </div>
  );
};

export default PortfolioCard;
