"use client";
import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <button
        aria-label="Menu"
        onClick={() => {
          setIsMenuOpen((prevState) => !prevState);
        }}
      >
        <GiHamburgerMenu className="text-primary w-8 h-8" />
      </button>

      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <ul
          ref={menuRef}
          className="absolute right-0 p-6 shadow-lg rounded-md flex flex-col space-y-4 w-[40vw] bg-[#ffe5cc] border border-[#fdd3ab] max-w-[180px] font-medium"
        >
          <Link
            to="whatwedo"
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
          >
            <p className="transition cursor-pointer hover:text-primary">
              Products
            </p>
          </Link>
          <Link
            to="stats"
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
          >
            <p className="transition cursor-pointer hover:text-primary">
              About Us
            </p>
          </Link>
          <Link to="SIP" spy={true} smooth={true} offset={40} duration={700}>
            <p className="transition cursor-pointer hover:text-primary">
              SIP Calculator
            </p>
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={100}
            duration={700}
          >
            <p className="transition cursor-pointer hover:text-primary">
              Portfolio
            </p>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
          >
            <p className="transition cursor-pointer hover:text-primary">
              Contact
            </p>
          </Link>
        </ul>
      </Transition>
    </div>
  );
};

export default MobileMenu;
