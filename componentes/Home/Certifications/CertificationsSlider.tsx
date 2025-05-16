"use client";

import { certificatesData } from "@/data";
import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CertificationModal from "./utils/CertificationModal";

interface Certification {
  id: number;
  image: string;
  title: string;
  company: string;
  duration: string;
  technologies: string[];
  summary: string;
}

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1600 }, items: 4 },
  desktop: { breakpoint: { max: 1600, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const CertificationsSlider: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        keyBoardControl
        containerClass="py-4 max-w-[1600px] mx-auto"
        itemClass="px-2"
      >
        {certificatesData.map((data) => (
          <div
            key={data.id}
            className="mx-auto 
              w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] xl:w-[300px] 2xl:w-[320px] 
              cursor-pointer transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl py-8"
            onClick={() => setSelectedCert(data)}
          >
            <div className="relative h-[200px] md:h-[220px] lg:h-[240px] xl:h-[260px] 2xl:h-[280px]">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-contain rounded-md border border-violet-100 shadow-sm hover:border-violet-400 transition-all"
              />
            </div>
            <div className="mt-2 text-center">
              <h2 className="text-sm xl:text-base font-semibold text-violet-800">
                {data.title}
              </h2>
              <div className="flex justify-center gap-1 text-xs xl:text-sm text-gray-600">
                <p>{data.company}</p>
                <span>-</span>
                <p className="italic text-gray-500">{data.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <CertificationModal
        data={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </>
  );
};

export default CertificationsSlider;
