import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Picture = () => {
  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute rounded-full bg-white p-[2px] 
                 w-[55px] sm:w-[90px] md:w-[120px] lg:w-[170px] xl:w-[200px]
                 aspect-square flex items-center justify-center shadow-md"
    >
      <Image
        src={"/pictures/fotoperfilredondo2-Photoroom.png"}
        fill
        alt="Foto Personal"
        className="rounded-full object-cover"
      />
    </motion.div>
  );
};

export default Picture;
