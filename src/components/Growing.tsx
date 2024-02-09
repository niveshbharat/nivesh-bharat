'use client'
import React, { useState } from 'react';
import mobile from "../../public/assets/mobile.svg";
import graph from "../../public/assets/graph.svg";
import underline from "../../public/assets/underline.svg";
import Image from "next/image";
import DisclosureComponent from "./DisclosureFAQ";

type Props = {}

const Growing = (props: Props) => {
    const [activeDisclosure, setActiveDisclosure] = useState<number | null>(null);

    const handleDisclosureToggle = (index: number) => {
        setActiveDisclosure((prev) => (prev === index ? null : index));
    };

    return (
        <div className="w-full max-w-7xl mb-20 md:mb-0 md:h-[600px] lg:h-[650px] relative md:grid grid-cols-2 md:gap-20">
            <div className="mx-10 mt-5">
                <h1 className="text-5xl sm:text-4xl lg:text-6xl font-semibold">Growing Together</h1>
                <div className="w-[30vw] mt-4 mb-2">
                    <Image src={underline} alt="underline" className="w-auto h-auto" />
                </div>

                <DisclosureComponent
                    title="Register and create your account instantly."
                    isOpen={activeDisclosure === 0}
                    onToggle={() => handleDisclosureToggle(0)}
                >
                    <p>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.</p>
                </DisclosureComponent>

                <DisclosureComponent
                    title="View and manage your dashboard easily on the go."
                    isOpen={activeDisclosure === 1}
                    onToggle={() => handleDisclosureToggle(1)}
                >
                    <p>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.</p>
                </DisclosureComponent>

                <DisclosureComponent
                    title="Start Investing Now"
                    isOpen={activeDisclosure === 2}
                    onToggle={() => handleDisclosureToggle(2)}
                >
                    <p>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.</p>
                </DisclosureComponent>
                
            </div>

            <div className="relative hidden md:block">
                <Image src={mobile} alt="Mobile" className="absolute z-10 top-[10vw] -left-10 w-[20vw] max-w-[200px]" />
                <Image src={graph} alt="Graph" className="absolute z-0 top-0 -right-10 shadow-xl rounded-lg" />
            </div>
        </div>
    );
};

export default Growing;
