import React from "react";
import Image from "next/image";
import stats1 from "../../public/assets/about_clients.svg";
import stats2 from "../../public/assets/about_AUM.svg";
import stats3 from "../../public/assets/about_expert.svg";
import underline from "../../public/assets/underline.svg";
import { AboutCard } from "./AboutCard";

const Statistics = () => {
  return (
    <div className="max-w-6xl items-center justify-center">
      <h1 className="text-center text-5xl relative font-semibold">About Us</h1>
      <div className="w-full mt-2 mb-10 flex justify-center">
        <Image src={underline} alt="underline" className="w-auto h-auto" />
      </div>
      <div className="flex flex-col sm:flex-row gap-10 p-10 justify-between">
        <AboutCard image={stats1} title="1000+" body="Trusted Clients" />
        <AboutCard image={stats2} title="Rs. 30Cr+" body="Assets Under Management (AUM)" />
        <AboutCard image={stats3} title="10+ Years" body="Total Experience" />
      </div>

      <p className="px-8 pb-8 text-center">
        Our boutique investment firm crafts unique portfolios to fit each
        client&apos;s needs, risk appetite, time horizon, and goals. With us,
        your investment strategy will be as one-of-a-kind as you are.
      </p>
    </div>
  );
};

export default Statistics;
