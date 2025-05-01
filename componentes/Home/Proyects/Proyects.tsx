import React from "react";
import ProjectsSlider from "./ProyectsSlider";


const Projects = () => {
  return (
    <section className="pt-10 pb-16">
      <div className="w-full max-w-6xl mx-auto px-4 py-20 bg-white">
      <h1 className="text-2xl font-bold text-violet-700 mb-6 text-center">
          Proyectos
        </h1>
        <ProjectsSlider />
      </div>
    </section>
  );
};

export default Projects;
