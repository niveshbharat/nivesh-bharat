"use client";
import React, { useState } from "react";
import mobile from "../../public/assets/mobile.svg";
import graph from "../../public/assets/graph.svg";
import underline from "../../public/assets/underline.svg";
import Image from "next/image";
import DisclosureComponent from "./DisclosureFAQ";
import { RiArrowDropDownLine } from "react-icons/ri";

type Props = {};

const Growing = (props: Props) => {
  const [activeDisclosure, setActiveDisclosure] = useState<number | null>(null);

  const handleDisclosureToggle = (index: number) => {
    setActiveDisclosure((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-7xl mb-12 md:mb-0 md:h-[600px] lg:h-[650px] relative md:grid grid-cols-2 md:gap-20">
      <div className="flex flex-col mx-10 mt-5">
        <h1 className="text-5xl sm:text-4xl lg:text-6xl font-semibold">
          Growing Together
        </h1>
        <div className="w-[30vw] mt-4 mb-2">
          <Image src={underline} alt="underline" className="w-auto h-auto" />
        </div>

        <Image
          src={mobile}
          alt="Mobile"
          className="w-[40vw] ml-2 md:hidden my-8"
        />

        <DisclosureComponent
          title={
            <div style={{ display: "flex", alignItems: "center" }}>
              <RiArrowDropDownLine />
              <span style={{ marginLeft: "0.5rem" }}>
                Register and create your account instantly.
              </span>
            </div>
          }
          isOpen={activeDisclosure === 0}
          onToggle={() => handleDisclosureToggle(0)}
        >
          <p>
            Begin your investment journey effortlessly.Create your account in
            moments to start exploring the world of finance. Instant access,
            endless opportunities.
          </p>
        </DisclosureComponent>

        <DisclosureComponent
          title={
            <div style={{ display: "flex", alignItems: "center" }}>
              <RiArrowDropDownLine />
              <span style={{ marginLeft: "0.5rem" }}>
                View and manage your dashboard easily on the go.
              </span>
            </div>
          }
          isOpen={activeDisclosure === 1}
          onToggle={() => handleDisclosureToggle(1)}
        >
          <p>
            Stay connected to your investments wherever you are. Easily view and
            manage your dashboard on the go with our user-friendly app
            interface.
          </p>
        </DisclosureComponent>

        <DisclosureComponent
          title={
            <div style={{ display: "flex", alignItems: "center" }}>
              <RiArrowDropDownLine />
              <span style={{ marginLeft: "0.5rem" }}>Start Investing Now</span>
            </div>
          }
          isOpen={activeDisclosure === 2}
          onToggle={() => handleDisclosureToggle(2)}
        >
          <p>
            Embark on your investment journey today. Start investing now and
            pave the way towards your financial goals with confidence and ease.
          </p>
        </DisclosureComponent>
      </div>

      <div className="relative hidden md:block">
        <Image
          src={mobile}
          alt="Mobile"
          className="absolute z-10 top-[10vw] -left-10 w-[20vw] max-w-[200px]"
        />
        <Image
          src={graph}
          alt="Graph"
          className="absolute z-0 top-0 -right-10 shadow-xl rounded-lg"
        />
      </div>
    </div>
  );
};

export default Growing;
