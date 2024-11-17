"use client"
import HeroSection from "./(pages)/hero/page";
import DressStyle from "./(pages)/styles/page";
import BrandLogos from "./components/brandLogo";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Prodects from "./(pages)/prodects/page";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"


export default function Home() {
  useEffect(() => {
    AOS.init();
}, []);
  return (
   <>
    <Navbar/>
    <HeroSection/>
    <BrandLogos/>
    <Prodects/>
    <DressStyle/>
    <Footer/>
   </>
  );
}
