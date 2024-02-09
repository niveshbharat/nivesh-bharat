'use client'
import Hero from "@/app/_pages/Hero";
import NavBar from "@/components/NavBar";
import WhatWeDo from "./_pages/WhatWeDo";
import Portfolio from "./_pages/Portfolio";
import Statistics from "@/components/Statistics";
import Review from "./_pages/Review";
import Footer from "@/components/Footer";
import SIP from "@/components/SIP";
import Image from "next/image";
import gallery_bg from "../../public/assets/gallery_bg.svg";
import Growing from "@/components/Growing";
import Contact from "@/components/Contact";
import OurTeam from "@/components/OurTeam";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <section className="xl:h-screen">
        {/* Navbar */}
        <NavBar />

        {/* Hero */}
        <section id="home" className="relative ">
          <div className="absolute blur-[600px] bg-p_orange/40 p-96 -z-10 -left-72 -top-56" />
          <div className="absolute blur-[600px] bg-p_green-500/40 p-96 -z-10 -right-72 -top-56" />
          <Hero />
        </section>
      </section>

      {/* What We Do? */}
      <section id="whatwedo" className="relative">
        <WhatWeDo />
      </section>

      {/* Statistics */}
      <section
        id="stats"
        className="flex justify-center relative my-20"
      >
        <Statistics />
      </section>

      {/* SIP */}
      <section id="SIP" className="relative flex justify-center">
        <div className="absolute blur-[600px] bg-p_orange/40 p-96 -z-10 -left-72 -top-56" />
        <SIP />
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="relative p-5 mt-20">
        <div className="absolute inset-0 -z-10">
          <Image
            src={gallery_bg}
            alt="Background Image"
            fill={true}
            className="object-cover"
          />
        </div>
        <Portfolio />
      </section>

      {/* Growing Together */}
      <section id="growing" className="relative flex justify-center my-10 md:mt-20">
        <Growing />
      </section>

      {/* Reviews */}
      <section id="review" className="relative md:-mt-24 lg:-mt-12 xl:mt-5">
        <Review />
      </section>

      {/* Our Team */}
      <section id="ourteam" className="relative mt-24">
        <OurTeam />
      </section>

      {/* Contact */}
      <section id="contact" className="relative mt-24">
        <div className="absolute blur-[600px] bg-p_green-500/40 p-96 -z-10 -right-72 -top-56" />
        <Contact />
      </section>

      {/* Footer */}
      <section id="footer" className="relative mt-12 md:mt-24">
        <Footer />
      </section>
    </main>
  );
}
