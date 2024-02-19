'use client'
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import underline from "../../../public/assets/underline.svg";
import { review } from "@/data/db";
import Navigate from "../../components/Navigate";
import ReviewCard from "../../components/ReviewCard";

const Review = () => {
  const reviewRef = useRef<HTMLDivElement>(null);
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

    if (reviewRef.current) {
      observer.observe(reviewRef.current);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (reviewRef.current && autoScroll) {
        reviewRef.current.scrollLeft += 400;
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [autoScroll, reviewRef]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-semibold text-center text-5xl">
        Review by Our Clients
      </h1>
      <div className="w-full mt-2 flex justify-center">
        <Image src={underline} alt="underline" className="w-[300px]" />
      </div>

      <div onClick={()=>{
            setAutoScroll(false);
          }}
        className="max-w-[95vw] flex overflow-x-scroll space-x-10 scrollbar-hide mb-10 scroll-smooth px-24 snap-x mt-12 snap-mandatory"
        ref={reviewRef}
      >
        {review.map((member) => (
          <ReviewCard
            key={member.id}
            name={member.name}
            designation={member.designation}
            desc={member.desc}
            imageURL={member.image}
          />
        ))}
      </div>
      <Navigate scrollRef={reviewRef} setAutoScroll={setAutoScroll} scrollBy={500} />
    </div>
  );
};

export default Review;
