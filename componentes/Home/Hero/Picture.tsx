import Image from "next/image";
import React from "react";

const Picture = () => {
  return (
    <div
      className="absolute rounded-full bg-white p-[2px] 
                 w-[55px] sm:w-[90px] md:w-[120px] lg:w-[170px] xl:w-[200px]
                 aspect-square flex items-center justify-center shadow-md "
    >
      <Image
        src={"/pictures/fotoperfilredondo2-Photoroom.png"}
        fill
        alt="Foto Personal"
        className="rounded-full object-cover"
      />
    </div>
  );
};

export default Picture;
