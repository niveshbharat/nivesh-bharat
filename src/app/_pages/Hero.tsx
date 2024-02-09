import React from "react";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="mb-20 xl:-mb-20 max-w-5xl px-4 pt-16 mx-10 sm:mt-14 xl:mx-auto">
      <div className="text-center">
        <h1 className="hidden md:block text-5xl font-bold font-lexend align-center text-center xl:text-7xl">
          <ReactTyped
            strings={["Let's build your Wealth!"]}
            typeSpeed={40}
            backSpeed={50}
            backDelay={1500}
            loop
          >
            <input type="text" className="bg-transparent outline-none text-center" />
          </ReactTyped>
        </h1>
        <h1 className="md:hidden text-5xl font-bold font-lexend text-center">
          <p className="">Let&apos;s build your <span className="text-p_green-500">Wealth!</span></p>
        </h1>
        <p className="text-xl text-body py-5">
          We build your Investment Portfolio by customizing your financial
          planning to match your goals and risk appetite. Introducing India’s
          First of its kind All-In-One Investment Platform to transform your
          Investment Journey.
        </p>
        <button className="items-center mt-5 py-10">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
            className="font-medium px-10 py-5 text-white transition rounded-md cursor-pointer bg-p_green-500 hover:bg-p_green-900"
          >
            Get Started with us!
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
