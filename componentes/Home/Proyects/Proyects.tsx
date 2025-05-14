import React from "react";
import ProjectsSlider from "./ProyectsSlider";


const Projects = () => {
  return (
    <section className="pt-10 pb-16 bg-violet-300">
      <div className="w-full max-w-9xl mx-[auto] px-4 py-20 ">
      <h1 className="text-2xl md:text-5xl 2xl:text-8xl font-bold text-violet-700 mb-6 text-center">
          Proyectos
        </h1>
        <ProjectsSlider />
      </div>
    </section>
  );
};

export default Projects;
