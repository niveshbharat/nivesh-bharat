"use client";
import React, { useEffect, useRef, useState } from "react";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";

type Props = {
  scrollRef: React.RefObject<HTMLDivElement>;
  scrollBy: number;
};

const Navigate = ({ scrollRef, scrollBy }: Props) => {
  const [autoScroll, setAutoScroll] = useState(false);
  const navigateRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAutoScroll(true);
        }
      },
      { threshold: 0.1 }
    );

    if (navigateRef.current) {
      observer.observe(navigateRef.current);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && autoScroll) {
        scrollRef.current.scrollLeft += 400;
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [autoScroll, scrollRef]);

  return (
    <div ref={navigateRef} className="self-center space-x-10 flex">
      <button
        aria-label="Previous Item"
        className="bg-white p-2 shadow-md rounded-full hover:bg-primary transition-all"
        onClick={() => {
          setAutoScroll(false);
          if (scrollRef.current) {
            scrollRef.current.scrollLeft -= scrollBy;
          }
        }}
      >
        <LiaAngleLeftSolid className="transition-all  hover:text-p_green-500" />
      </button>
      <button
        aria-label="Next Item"
        className="bg-white p-2 shadow-md rounded-full hover:bg-primary transition-all"
        onClick={() => {
          setAutoScroll(false);
          if (scrollRef.current) {
            scrollRef.current.scrollLeft += scrollBy;
          }
        }}
      >
        <LiaAngleRightSolid className="transition-all hover:text-p_green-500" />
      </button>
    </div>
  );
};

export default Navigate;
