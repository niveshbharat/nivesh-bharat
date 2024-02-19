"use client";
import PortfolioCard from "@/components/PortfolioCard";
import React, { useEffect, useRef, useState } from "react";
import Navigate from "@/components/Navigate";
import Image from "next/image";
import underline from "../../../public/assets/underline.svg";
import { portfolios } from "../../data/db";

function Portfolio() {
  const portfoliosRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAutoScroll(true);
        }
      },
      { threshold: 0.1 }
    );

    if (portfoliosRef.current) {
      observer.observe(portfoliosRef.current);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (portfoliosRef.current && autoScroll) {
        portfoliosRef.current.scrollLeft += 400;
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [autoScroll, portfoliosRef]);

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

      <div onClick={() => {
        setAutoScroll(false);
      }}
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

      <Navigate scrollRef={portfoliosRef} setAutoScroll={setAutoScroll} scrollBy={400} />
    </div>
  );
}

export default Portfolio;
