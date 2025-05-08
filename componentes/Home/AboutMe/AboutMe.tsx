import Image from "next/image";
import TechSlider from "./TechSlider";

export default function AboutMe() {
  return (
      <section className="bg-violet-700 text-white py-16 px-8 rounded-3xl  shadow-lg max-w-6xl mx-auto my-12 flex flex-col md:flex-row md:items-center gap-12">
        <div className="hidden md:flex md:w-1/2 justify-center">
          <Image
            src="/pictures/fotoperfilredondo2.png"
            alt="Analista de datos"
            width={400}
            height={400}
            className="rounded-2xl  max-w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 z-10">
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-center md:text-left">
            Acerca de mí
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-violet-100 text-center md:text-left">
            Soy una analista de datos apasionada por descubrir patrones y tomar
            decisiones informadas a partir de la información. Me especializo en
            transformar datos complejos en visualizaciones claras y accionables.
            Últimamente, he enfocado mi carrera en el uso de inteligencia
            artificial y machine learning para potenciar soluciones innovadoras.
            Me encanta aprender y aplicar nuevas tecnologías que impulsen la
            toma de decisiones inteligentes.
          </p>

          <TechSlider />
        </div>
      </section>
  );
}
