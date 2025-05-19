"use client";

import { projectsData } from "@/data";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/navigation";
import { FaRegEye } from "react-icons/fa";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1600 }, items: 4 },
  desktop: { breakpoint: { max: 1600, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const ProjectsSlider = () => {
  const router = useRouter();

  return (
    <Carousel
      responsive={responsive}
      infinite={false}
      centerMode={false}
      autoPlay
      autoPlaySpeed={6000}
      keyBoardControl
      containerClass="py-10 max-w-7xl mx-auto"
      itemClass="px-4 flex justify-center" 
      removeArrowOnDeviceType={["mobile"]}
      arrows
      customTransition="all .4s ease"
    >
      {projectsData.map((project, index) => (
        <div
          key={project.id}
          onClick={() => router.push(`/proyecto/${project.id}`)}
          className={`cursor-pointer transform transition duration-300 hover:scale-105
            ${
              index % 2 === 0
                ? "mt-0"
                : "md:mt-[100%] sm:mt-0"
            }
            max-w-[320px] w-full  
          `}
        >
          <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-300 bg-white">
            <Image
              src={project.images[0]}
              alt={`Proyecto ${project.id}`}
              fill
              className="object-cover object-center"
            />

            {/* Overlay al hacer hover */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 flex flex-col items-center justify-center px-4 text-white text-center">
              <FaRegEye className="w-8 h-8 mb-2" />
              <h2 className="text-lg font-semibold mb-1">{project.title}</h2>
              <p className="text-sm line-clamp-3">{project.summary}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectsSlider;
