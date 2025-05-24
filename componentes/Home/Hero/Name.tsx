import React from "react";
import { motion } from "framer-motion";

const Name = () => {
  const words = ["Ludmila", "Sanchez"];

  return (
    <div className="text-center leading-[4rem] sm:leading-[5rem] md:leading-[8rem] lg:leading-[10rem] 2xl:leading-[13rem]">
      <h1
        className="
          text-[3rem]
          sm:text-[4.5rem]
          md:text-[6rem]
          lg:text-[10rem]
          2xl:text-[15rem]
          text-violet-700
          uppercase tracking-tight
          flex flex-col items-center
        "
        style={{ fontFamily: "var(--font-MillionDesign)" }}
      >
        {words.map((word, index) => (
          <motion.span
            key={word}
            initial={{ x: index === 0 ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.4 }}
          >
            {word}
          </motion.span>
        ))}
      </h1>
    </div>
  );
};

export default Name;
