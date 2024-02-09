"use client";
import PortfolioCard from "@/components/PortfolioCard";
import React, { useRef } from "react";
import Navigate from "@/components/Navigate";
import Image from "next/image";
import underline from "../../../public/assets/underline.svg";
import { portfolios } from "../../data/db";

function Portfolio() {
  const portfoliosRef = useRef<HTMLDivElement>(null);

  return (
    //Portfolios
    <div className="flex flex-col items-center h-full pb-4 mx-10 mt-24 xl:mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-3xl sm:text-5xl font-semibold">
          Get a portfolio that’s invested in you.
        </h1>
        <div className="w-full mt-2 mb-10 flex justify-center">
          <Image src={underline} alt="underline" className="w-auto h-auto" />
        </div>
      </div>

      <div
        ref={portfoliosRef}
        className="max-w-[95vw] flex overflow-x-scroll space-x-10 scrollbar-hide mb-10 scroll-smooth px-24 snap-x snap-mandatory"
      >
        {portfolios.map((portfolio) => (
          <PortfolioCard
            key={portfolio.id}
            title={portfolio.title}
            description={portfolio.desc}
            image={portfolio.image}
          />
        ))}
      </div>

      <Navigate scrollRef={portfoliosRef} scrollBy={400} />
    </div>
  );
}

export default Portfolio;
