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
        navBg ? "shadow-md bg-violet-300" : "fixed"
      } transition-all duration-200 h-[10vh] z-[1000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 bg-violet-700 rounded-full flex items-center justify-center flex-col"></div>
          <h1 className="text-xl md:text-2xl text-violet-700 uppercase font-bold">
            Ludmila
          </h1>
        </div>
        {/* NavLinks */}
        <div className="hidden 2xl:flex items-center space-x-10 ">
          {navLinks.map((link) => {
            const linkClasses =
              "relative text-violet-700 text-base md:text-lg lg:text-2xl font-bold w-fit block " +
              "after:block after:content-[''] after:absolute after:h-[3px] after:bg-violet-300 " +
              "after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition duration-300 after:origin-right";

            return link.download ? (
              <a
                key={link.id}
                href={link.url}
                download
                className={linkClasses}
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.id} href={link.url}>
                <p className={linkClasses}>{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* buttons */}
        <div className="flex items-center space-x-4">
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-violet-700 2xl:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
