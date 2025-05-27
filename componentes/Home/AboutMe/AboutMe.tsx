import Image from "next/image";
import TechSlider from "./TechSlider";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section className="relative overflow-hidden py-16 px-8 text-white bg-violet-700">
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-violet-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-fuchsia-400 rounded-full opacity-20 blur-3xl animate-pulse delay-200"></div>
      <div className="absolute top-1/3 right-[-150px] w-[300px] h-[300px] bg-pink-300 rounded-full opacity-10 blur-2xl animate-pulse delay-100"></div>
      <div className="absolute bottom-1/4 left-[-80px] w-[250px] h-[250px] bg-purple-300 rounded-full opacity-15 blur-2xl animate-pulse delay-150"></div>
      <div className="absolute top-1/4 left-1/2 w-[200px] h-[200px] bg-white rounded-full opacity-5 blur-2xl animate-pulse delay-300"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-12">
        <div className="hidden md:flex md:w-1/2 justify-center z-10">
          <Image
            src="/pictures/Animation1.jpeg"
            alt="Analista de datos"
            width={400}
            height={400}
            className="rounded-2xl max-w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 z-10">
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-center md:text-left">
            Acerca de mí
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-white text-center md:text-left">
            Técnica Superior en Desarrollo de Software, actualmente cursando la
            Licenciatura en Ciencia de Datos. Soy una analista de datos
            apasionada por el análisis, la interpretación y la visualización de
            datos, con el objetivo de generar valor a partir de la información.
            Me especializo en transformar datos complejos en visualizaciones
            claras y accionables. Últimamente, he enfocado mi carrera en el uso
            de inteligencia artificial y machine learning para potenciar
            soluciones innovadoras. Cuento con experiencia en trabajo
            colaborativo y me destaco por ser organizada, detallista y orientada
            a la resolución de problemas. Me adapto con facilidad a nuevos
            entornos y tecnologías, y busco seguir desarrollándome
            profesionalmente en el ámbito de la analítica de datos.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <a
              href="https://www.linkedin.com/in/ludmila-andrea-sanchez/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-violet-700 font-semibold rounded-xl shadow hover:bg-violet-100 transition"
            >
              <FaLinkedin className="text-2xl" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Ludmi0611"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-violet-700 font-semibold rounded-xl shadow hover:bg-violet-100 transition"
            >
              <FaGithub className="text-2xl" />
              GitHub
            </a>
          </div>

          <TechSlider />
        </div>
      </div>
    </section>
  );
}
