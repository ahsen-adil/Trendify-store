import React from "react";
import { FaTshirt, FaShippingFast, FaSmileBeam } from "react-icons/fa";
import img from "../../iamges/hero-img-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-[#FFCFB3] py-12 font-sans">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Image */}
        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-2xl" data-aos="fade-right" data-aos-duration="2000">
          <Image
            src={img}
            alt="Fashion Models"
            className="w-[700px] mr-[100px] mb-[100px]"
          />
          <div className="absolute top-10 right-10 md:top-16 md:right-16 text-black">
            <span className="text-6xl">͙͘͡★</span>
          </div>
          <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 text-black">
            <span className="text-8xl mr-12">͙͘͡★</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left max-w-lg" data-aos="fade-left" data-aos-duration="2000">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
          DISCOVER <br />
          FASHION THAT <br />
          DEFINES YOU
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
          Unleash your unique personality with our curated collection of stylish apparel. Explore timeless designs and modern trends crafted to reflect your individuality and elevate your wardrobe.
          </p>
         <Link href="/prodects"><button className="mt-6 bg-black text-white px-8 py-3 text-lg rounded-full hover:bg-gray-800 transition">
            Shop Now
          </button> </Link> 

          {/* React Icons Section */}
          <div className="mt-8 flex flex-col md:flex-row gap-6">
            <div className="flex items-center gap-4">
              <FaTshirt className="text-8xl text-black" />
              <p className="text-gray-600">
                Trendy Styles for Everyone
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaShippingFast className="text-8xl text-black" />
              <p className="text-gray-600">
                Fast & Reliable Shipping
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaSmileBeam className="text-8xl text-black" />
              <p className="text-gray-600">
                Thousands of Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
