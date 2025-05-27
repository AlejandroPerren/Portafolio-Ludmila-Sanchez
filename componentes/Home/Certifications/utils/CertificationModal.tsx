"use client";

import Image from "next/image";
import React, { useEffect } from "react";

interface Certification {
  id: number;
  image: string;
  title: string;
  company: string;
  duration: string;
  technologies: string[];
  summary: string;
}

interface Props {
  data: Certification | null;
  onClose: () => void;
}

const CertificationModal: React.FC<Props> = ({ data, onClose }) => {
  useEffect(() => {
    if (data) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [data]);

  if (!data) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative p-4 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="relative w-full h-64 md:h-[450px] mb-4">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-contain rounded-md border"
            sizes="(min-width: 768px) 700px, 100vw"
          />
        </div>

        <h2 className="text-2xl font-bold text-violet-800 mb-4 text-center">
          {data.title}
        </h2>

        <div className="text-center space-y-4 text-sm text-gray-700 px-2">
          <div>
            <p className="font-semibold text-gray-600">Empresa</p>
            <p>{data.company}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Duración</p>
            <p>{data.duration}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Tecnologías</p>
            <p>{data.technologies.join(", ")}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Resumen</p>
            <p className="italic text-gray-600">{data.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationModal;
