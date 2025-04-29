"use client";


import { navLinks } from "@/contants/contants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";


type NavProps = {
  openNav: () => void;
};

const Nav = ({ openNav }: NavProps) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`${
        navBg ? "shadow-md bg-blue-950" : "fixed"
      } transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
          </div>
          <h1 className="text-xl md:text-2xl text-fuchsia-700 uppercase font-bold">
            Ludmila 
          </h1>
        </div>
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p
                  className="relative text-fuchsia-700 text-base font-medium w-fit block 
                after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 
                after:w-full after:scale-x-0 after:hover-x-100 after:transition duration-300 after:origin-right"
                >
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        {/* buttons */}
        <div className="flex items-center space-x-4">

          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-fuchsia-700 lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;