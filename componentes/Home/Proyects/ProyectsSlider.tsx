"use client";

import { projectsData } from "@/data";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/navigation";
import { FaRegEye } from "react-icons/fa";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1600 }, items: 3 },
  desktop: { breakpoint: { max: 1600, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const ProjectsSlider = () => {
  const router = useRouter();

  return (
    <Carousel
      responsive={responsive}
      infinite
      centerMode
      autoPlay
      autoPlaySpeed={6000}
      keyBoardControl
      containerClass="py-10 max-w-7xl mx-auto"
      itemClass="px-4"
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {projectsData.map((project) => (
        <div
          key={project.id}
          onClick={() => router.push(`/proyecto/${project.id}`)}
          className="cursor-pointer transform transition duration-300 hover:scale-105"
        >
          <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-300 bg-white">
            <Image
              src={project.images[0]}
              alt={`Proyecto ${project.id}`}
              fill
              className="object-cover object-center"
            />
            {/* Overlay oscura con ícono */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
              <div className="flex flex-col items-center text-white">
                <FaRegEye className="w-8 h-8 mb-2" />
                <span className="text-sm">Ver proyecto</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectsSlider;
