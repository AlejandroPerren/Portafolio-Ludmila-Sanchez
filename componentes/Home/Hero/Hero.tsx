import React from "react";
import Name from "./Name";
import Picture from "./Picture";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <Picture />
        <Name />
      </div>

      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
        <h2
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
          Analista de datos
        </h2>
      </div>
    </div>
  );
};

export default Hero;
