import React from "react";
import Hero from "./Home/Hero/Hero";

import ResponsiveNav from "./Home/Navbar/ResponsiveNav";
import Certifications from "./Home/Certifications/Certifications";

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
    </div>
  );
};

export default Home;
