import React from "react";
import ResponsiveNav from "./Home/Navbar/ResponsiveNav";
import Hero from "./Home/Hero/Hero";
import AboutMe from "./Home/AboutMe/AboutMe";
import Certifications from "./Home/Certifications/Certifications";
import Proyects from "./Home/Proyects/Proyects";
import ContactForm from "./Home/Contact/Contact";

const Home = () => {
  return (
    <div>
      <div id="navbar">
        <ResponsiveNav />
      </div>

      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center"
      >
        <Hero />
      </section>

      <section id="about" className="pt-23">
        <AboutMe />
      </section>

      <section id="certifications" >
        <Certifications />
      </section>

      <section id="projects">
        <Proyects />
      </section>

      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
