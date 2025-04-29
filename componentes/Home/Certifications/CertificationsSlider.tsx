"use client";

import { certificatesData } from "@/data";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1600 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  

const CertificationsSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={5000}
      keyBoardControl
      containerClass="py-4"
      itemClass="px-2"
    >
      {certificatesData.map((data) => (
        <div key={data.id} className="mx-auto w-[260px]">
          <div className="relative h-[200px]">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-contain rounded-md border shadow-sm"
            />
          </div>
          <div className="mt-2 text-center">
            <h2 className="text-sm font-semibold text-violet-800">{data.title}</h2>
            <p className="text-xs text-gray-600">{data.company}</p>
            <p className="text-xs text-gray-500 italic">{data.duration}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CertificationsSlider;
