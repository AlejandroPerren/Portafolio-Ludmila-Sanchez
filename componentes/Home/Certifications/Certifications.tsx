import React from "react";
import CertificationsSlider from "./CertificationsSlider";

const Certifications = () => {
  return (
    <section className="pt-10 pb-16 bg-white">
      <div className="w-full max-w-6xl 2xl:max-w-[1600px] mx-auto px-4 md:px-8 xl:px-0 py-10">
        <h1 className="text-2xl md:text-5xl 2xl:text-7xl font-bold text-violet-700 mb-10 text-center">
          Certificados
        </h1>
        <CertificationsSlider />
      </div>
    </section>
  );
};

export default Certifications;
