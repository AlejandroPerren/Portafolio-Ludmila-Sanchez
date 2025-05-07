export default function AboutMe() {
    return (
      <section className="relative bg-violet-700 text-white py-16 px-6 overflow-hidden rounded-3xl shadow-lg max-w-4xl mx-auto mt-12">
        <div className="absolute top-0 left-0 w-full h-full bg-violet-900 opacity-20 blur-2xl z-0" />
  
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Acerca de mí</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-violet-100">
            Soy una analista de datos apasionada por descubrir patrones y tomar decisiones informadas a partir de la información. 
            Me especializo en transformar datos complejos en visualizaciones claras y accionables. 
            Últimamente, he enfocado mi carrera en el uso de inteligencia artificial y machine learning para potenciar soluciones innovadoras. 
            Me encanta aprender y aplicar nuevas tecnologías que impulsen la toma de decisiones inteligentes.
          </p>
        </div>
      </section>
    );
  }
  