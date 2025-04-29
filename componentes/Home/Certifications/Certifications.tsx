import React from "react";
import CertificationsSlider from "./CertificationsSlider";

const Certifications = () => {
  return (
    <section className="pt-10 pb-16 bg-white">
      <div className="w-[90%] mx-auto">
        <h1 className="text-2xl font-bold text-violet-700 mb-6">Certificados</h1>
        <CertificationsSlider />
      </div>
    </section>
  );
};

export default Certifications;
