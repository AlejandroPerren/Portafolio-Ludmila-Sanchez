"use client";

import { useParams } from "next/navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { projectsData } from "@/data";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="p-6 text-center text-lg text-red-600">
        Proyecto no encontrado.
      </div>
    );
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-violet-700 hover:text-violet-900 transition mb-6"
      >
        <FaArrowLeft className="text-xl" />
        <span className="font-medium">Volver al inicio</span>
      </Link>

      <header className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-violet-700 leading-tight">
          {project.title}
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Detalle completo del desarrollo, implementación y análisis del
          proyecto.
        </p>
      </header>

      <div className="overflow-hidden mb-14">
        {project.embedUrl ? (
          <div className="w-full h-[800px]">
            <iframe
              src={project.embedUrl}
              title={project.title}
              allowFullScreen
              className="w-full h-full rounded-xl border-0"
            />
          </div>
        ) : (
          <Carousel
            responsive={responsive}
            arrows
            swipeable
            draggable
            infinite
            autoPlay={false}
          >
            {project.images.map((img, index) => (
              <div
                key={index}
                className="w-full h-[800px] flex items-center justify-center"
              >
                <Image
                  src={img}
                  alt={`Imagen ${index + 1}`}
                  width={1200}
                  height={800}
                  className="max-h-full object-contain rounded-xl"
                />
              </div>
            ))}
          </Carousel>
        )}
      </div>

      <section className="space-y-14 text-gray-800 text-[1.05rem] leading-relaxed">
        <div>
          <h2 className="text-2xl font-semibold text-violet-800 mb-4">
            Objetivos
          </h2>
          <p>{project.objectives}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-violet-800 mb-4">
            Resultados
          </h2>
          <p>{project.results}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-violet-800 mb-4">
              Duración
            </h2>
            <p>{project.duration}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-violet-800 mb-4">
              Tecnologías utilizadas
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-violet-800 mb-4">
            Conclusiones
          </h2>
          <p>{project.conclusions}</p>
        </div>
      </section>

      <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href={project.dataset}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gray-100 text-violet-700 border border-violet-300 text-base rounded-full hover:bg-violet-50 transition shadow-sm"
        >
          Ver Dataset
        </a>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-violet-700 text-white text-base rounded-full hover:bg-violet-800 transition shadow-md"
        >
          {project.type === "dashboard"
            ? "Ver Dashboard"
            : "Ver Repositorio en GitHub"}
        </a>
      </div>
    </div>
  );
}
