"use client";

import { useParams } from "next/navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { projectsData } from "@/data";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = Number(params.id);

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <div className="p-6 text-red-500">Proyecto no encontrado.</div>;
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-700 drop-shadow-sm">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-gray-600">Detalle completo del proyecto</p>
      </div>

      <Carousel
        responsive={responsive}
        arrows
        swipeable
        draggable
        infinite
        autoPlay={false}
      >
        {project.images.map((img, index) => (
          <Image
            width={800}
            height={400}
            key={index}
            src={img}
            alt={`Imagen ${index + 1}`}
            className="rounded-2xl w-full h-[450px] object-cover shadow-lg"
          />
        ))}
      </Carousel>

      <div className="mt-12 space-y-6 text-gray-800 text-base leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">🎯 Objetivos</h2>
          <p>{project.objectives}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700">📊 Resultados</h2>
          <p>{project.results}</p>
        </div>

        <div className="flex gap-10">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">🕒 Duración</h2>
            <p>{project.duration}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700">📁 Dataset</h2>
            <p>{project.dataset}</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700">🛠️ Tecnologías utilizadas</h2>
          <div className="flex flex-wrap gap-3 mt-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700">📌 Conclusiones</h2>
          <p>{project.conclusions}</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition shadow-md"
        >
          Ver repositorio en GitHub
        </a>
      </div>
    </div>
  );
}
