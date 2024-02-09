'use client'
import React, { useRef } from "react";
import Image from "next/image";
import underline from "../../../public/assets/underline.svg";
import { review } from "@/data/db";
import Navigate from "../../components/Navigate";
import ReviewCard from "../../components/ReviewCard";

const Review = () => {
  const reviewRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-semibold text-center text-5xl">
        Review by Our Clients
      </h1>
      <div className="w-full mt-2 flex justify-center">
        <Image src={underline} alt="underline" className="w-[300px]" />
      </div>

      <div
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
      <Navigate scrollRef={reviewRef} scrollBy={500} />
    </div>
  );
};

export default Review;
