"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

const techs = [
  {
    name: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  { name: "Power BI", img: "https://img.icons8.com/color/96/power-bi.png" },
  {
    name: "Pandas",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "SQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 600 }, items: 2 },
  mobile: { breakpoint: { max: 600, min: 0 }, items: 1 },
};

export default function TechSlider() {
  return (
    <div className="w-full max-w-5xl mx-auto my-12 px-4">
      <h3 className="text-2xl font-bold text-center mb-6 text-violet-700">
        Tecnologías que uso
      </h3>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        className="text-center"
      >
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="bg-violet-100 rounded-xl p-4 mx-2 shadow-md flex flex-col items-center"
          >
            <img
              src={tech.img}
              alt={tech.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-violet-800 text-sm font-semibold">
              {tech.name}
            </span>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
