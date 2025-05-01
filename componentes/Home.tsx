import React from "react";
import Hero from "./Home/Hero/Hero";

import ResponsiveNav from "./Home/Navbar/ResponsiveNav";
import Certifications from "./Home/Certifications/Certifications";
import Proyects from "./Home/Proyects/Proyects";
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
        <Certifications />
      </div>

      <div>
        <Proyects/>
      </div>
    </div>
  );
};

export default Home;
