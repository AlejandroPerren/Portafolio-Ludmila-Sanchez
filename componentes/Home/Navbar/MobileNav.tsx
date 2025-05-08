import { navLinks } from "@/contants/contants";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type MobileNavProps = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: MobileNavProps) => {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 transition-opacity duration-300 z-[1002] bg-black ${
          showNav ? "opacity-70" : "opacity-0 pointer-events-none"
        } w-full h-screen`}
        onClick={closeNav}
      ></div>

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 z-[1003] w-[80%] max-w-xs h-screen bg-white transition-transform duration-300 ${navOpen} p-6 flex flex-col space-y-6 shadow-lg`}
      >
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 w-6 h-6 cursor-pointer"
        />

        {/* NavLinks */}
        {navLinks.map((link) => {
          const linkClasses =
            "text-violet-700 text-lg font-medium hover:text-yellow-500 transition";

          return link.download ? (
            <a
              key={link.id}
              href={link.url}
              download
              onClick={closeNav}
              className={linkClasses}
            >
              {link.label}
            </a>
          ) : (
            <Link key={link.id} href={link.url}>
              <p onClick={closeNav} className={linkClasses}>
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
