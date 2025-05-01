import React from "react";
import CertificationsSlider from "./CertificationsSlider";

const Certifications = () => {
  return (
    <section className="pt-10 pb-16 ">
      <div className="w-full max-w-9xl mx-auto px-4 py-20 bg-white">
        <h1 className="text-2xl font-bold text-violet-700 mb-6 text-center">
          Certificados
        </h1>
        <CertificationsSlider />
      </div>
    </section>
  );
};

export default Certifications;
