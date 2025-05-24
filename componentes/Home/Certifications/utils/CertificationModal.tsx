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
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-4xl w-[3000px] relative shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="relative h-[450px] mb-4">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-contain rounded-md border"
          />
        </div>

        <h2 className="text-xl font-bold text-violet-800 mb-4 text-center">
          {data.title}
        </h2>

        <div className="text-center space-y-3 text-sm text-gray-700">
          <div>
            <p className="font-bold text-md text-gray-600">Empresa</p>
            <p>{data.company}</p>
          </div>
          <div>
            <p className="font-bold text-md text-gray-600">Duración</p>
            <p>{data.duration}</p>
          </div>
          <div>
            <p className="font-bold text-md text-gray-600">Tecnologías</p>
            <p>{data.technologies.join(", ")}</p>
          </div>
          <div>
            <p className="font-bold text-md text-gray-600">Resumen</p>
            <p className="italic text-gray-600">{data.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationModal;
