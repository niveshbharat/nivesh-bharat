"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import underline from "../../public/assets/underline.svg";
import { team } from "@/data/db";
import Navigate from "./Navigate";
import TeamCard from "./TeamCard";

type member = {
  id: number;
  name: string;
  designation: string;
  education: string;
  image: any;
  linkedin?: string;
  instagram?: string;
  desc: string;
};

const OurTeam = () => {
  const teamRef = useRef<HTMLDivElement>(null);
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

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (teamRef.current && autoScroll) {
        teamRef.current.scrollLeft += 400;
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [autoScroll, teamRef]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-semibold text-center text-5xl ">Our Team</h1>
      <div className="w-full mt-2 flex justify-center">
        <Image src={underline} alt="underline" className="w-[300px]" />
      </div>

      <div onClick={() => {
        setAutoScroll(false);
      }}
        className="max-w-[95vw] flex overflow-x-scroll space-x-10 scrollbar-hide mb-10 scroll-smooth px-24 snap-x mt-12 snap-mandatory"
        ref={teamRef}
      >
        {team.map((member: member) => (
          <TeamCard
            key={member.id}
            name={member.name}
            designation={member.designation}
            education={member.education}
            desc={member.desc}
            imageURL={member.image}
            linkedin={member.linkedin}
            instagram={member.instagram}
          />
        ))}
      </div>

      <Navigate scrollRef={teamRef} setAutoScroll={setAutoScroll} scrollBy={600} />
    </div>
  );
};

export default OurTeam;
