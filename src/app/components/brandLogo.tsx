import React from "react";
import Image from "next/image";
import versaceLogo from "../iamges/versacelogo.png";
import zaraLogo from "../iamges/zaralogo.png";
import gucciLogo from "../iamges/guccilogo.png";
import pradaLogo from "../iamges/paradalogo.jpeg";
import ckLogo from "../iamges/calvinlogo.png";

export default function BrandLogos() {
  return (
    <div className="flex items-center justify-center h-[150px] bg-black font-sans" data-aos="flip-down" data-aos-duration="2000">
      <div className="flex lg:space-x-[120px]">
        {/* Versace */}
        <div className="group flex flex-col items-center lg:animate-spin">
          <div className="p-4 bg-white rounded-full shadow-lg transition-transform transform group-hover:scale-110">
            <Image src={versaceLogo} alt="Versace Logo" className="h-16 w-16" />
          </div>
        </div>
        {/* Zara */}
        <div className="group flex flex-col items-center lg:animate-spin">
          <div className="p-4 bg-white rounded-full shadow-lg transition-transform transform group-hover:scale-110">
            <Image src={zaraLogo} alt="Zara Logo" className="h-16 w-16 " />
          </div>
        </div>
        {/* Gucci */}
        <div className="group flex flex-col items-center lg:animate-spin">
          <div className="p-4 bg-white rounded-full shadow-lg transition-transform overflow-hidden transform group-hover:scale-110">
            <Image src={gucciLogo} alt="Gucci Logo" className="h-16 w-16 scale-150 " />
          </div>
        </div>
        {/* Prada */}
        <div className="group flex flex-col items-center lg:animate-spin">
          <div className="p-4 bg-white rounded-full shadow-lg transition-transform overflow-hidden transform group-hover:scale-110">
            <Image src={pradaLogo} alt="Prada Logo" className="h-16 w-16 scale-150" />
          </div>
        </div>
        {/* Calvin Klein */}
        <div className="group flex flex-col items-center lg:animate-spin">
          <div className="p-4 bg-white rounded-full shadow-lg transition-transform transform group-hover:scale-110">
            <Image src={ckLogo} alt="Calvin Klein Logo" className="h-16 w-16" />
          </div>
        </div>
      </div>
    </div>
  );
}
