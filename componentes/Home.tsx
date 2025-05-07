import React from "react";
import Hero from "./Home/Hero/Hero";

import ResponsiveNav from "./Home/Navbar/ResponsiveNav";
import Certifications from "./Home/Certifications/Certifications";
import Proyects from "./Home/Proyects/Proyects";
import ContactForm from "./Home/Contact/Contact";
import AboutMe from "./Home/AboutMe/AboutMe";

const Home = () => {
  return (
    <div>
      <div>
        <ResponsiveNav />
      </div>

      <div>
        <Hero />
      </div>
    <div>
      <AboutMe/>
    </div>
      <div>
        <Certifications />
      </div>

      <div>
        <Proyects/>
      </div>
      <div>
        <ContactForm/>
      </div>
    </div>
  );
};

export default Home;
