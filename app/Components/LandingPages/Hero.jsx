"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "../NavbarLinks/Navbar";

const desktopImages = ["/LandingPage1.jpeg", "/LandingPage2.jpeg"]; // Images for desktop
const mobileImages = ["/mob_Landing.jpeg", "/MobRes2.jpeg"]; // Separate images for mobile

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const imagesArray = isMobile ? mobileImages : desktopImages;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imagesArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]); // ✅ Only re-run when screen size changes

  return (
    <div className="w-full h-screen relative overflow-hidden text-white">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={isMobile ? mobileImages[currentImage] : desktopImages[currentImage]}
          alt="Landing Hero Image"
          fill
          className="object-cover w-full h-full transition-opacity duration-1000 ease-in-out"
        />
      </div>

      {/* Content Section */}
      <div
        className={`absolute top-3/6 transform -translate-y-1/2 w-[90%] sm:max-w-[600px] p-6 sm:p-10 
        bg-black/50 rounded-xl shadow-xl border border-white/20 text-center sm:text-left
        ${isMobile ? "left-1/2 -translate-x-1/2" : "left-[5%] sm:left-[10%]"}`}
      >
        {/* Title */}
        <h1 className="text-left font-extrabold text-4xl sm:text-4xl md:text-6xl tracking-wide leading-tight text-white">
          Grain by grain <span className="text-[#25a558]">perfection</span> redefined.
        </h1>

        {/* Description */}
        <p className="text-gray-200 text-left font- sm:text-lg md:text-xl leading-relaxed mt-4">
          Experience the next level of sorting technology with unmatched efficiency and accuracy.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4 sm:gap-6 mt-6">
          <button className="bg-[#25a558] py-3 px-6 rounded-full text-white font-semibold shadow-lg transition hover:bg-[#1e8545] hover:shadow-2xl w-full sm:w-auto">
            Get in Touch
          </button>
          <button className="bg-[#25a558] py-3 px-6 rounded-full text-white font-semibold shadow-lg transition hover:bg-[#1e8545] hover:shadow-2xl w-full sm:w-auto">
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
