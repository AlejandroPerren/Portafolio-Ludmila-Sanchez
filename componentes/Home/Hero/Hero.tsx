"use client"
import React from "react";
import { motion } from "framer-motion";
import Name from "./Name";
import Picture from "./Picture";

const Hero = () => {
  const subtitle = "Analista de datos".split(" ");

  return (
    <div className="w-full flex flex-col items-center relative min-h-screen justify-center overflow-hidden px-4">
      <Picture />
      
      <div className="mt-28">
        <Name />
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {subtitle.map((word, index) => (
          <motion.span
            key={word}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.3 }}
            className="
              text-[0.75rem]
              sm:text-[1.25rem]
              md:text-[1.75rem]
              lg:text-[2.5rem]
              2xl:text-[3rem]
              text-violet-700
              uppercase tracking-tight
            "
            style={{ fontFamily: "var(--font-MillionDesign)" }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
