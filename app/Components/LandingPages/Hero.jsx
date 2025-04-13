"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "../NavbarLinks/Navbar";
import Link from "next/link";
import Marquee from "react-fast-marquee"; // Ensure this is installed

const desktopImages = [
  "/LandingPage1.jpeg",
  "/LandingPage2.jpeg",
  "/LandingPage.jpeg",
];
const mobileImages = [
  "/mob_Landing.jpeg",
  "/MobRes2.jpeg",
  "/LandingPage.jpeg",
];

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
  }, [isMobile]);

  return (
    <div className="w-full h-screen relative overflow-hidden text-white">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={
            isMobile
              ? mobileImages[currentImage]
              : desktopImages[currentImage]
          }
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
        <h1 className="text-left font-extrabold text-4xl sm:text-4xl md:text-6xl tracking-wide leading-tight text-white">
          Grain by grain <span className="text-[#25a558]">perfection</span>{" "}
          redefined.
        </h1>

        <p className="text-gray-200 text-left font- sm:text-lg md:text-xl leading-relaxed mt-4">
          Experience the next level of sorting technology with unmatched
          efficiency and accuracy.
        </p>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4 sm:gap-6 mt-6">
          <Link
            href="/contact"
            className="bg-[#25a558] py-3 px-6 rounded-full text-white font-semibold shadow-lg transition hover:bg-[#1e8545] hover:shadow-2xl w-full sm:w-auto text-center block"
          >
            Get in Touch
          </Link>

          <button className="bg-[#25a558] py-3 px-6 rounded-full text-white font-semibold shadow-lg transition hover:bg-[#1e8545] hover:shadow-2xl w-full sm:w-auto text-center">
            <a
              href="/PdfFolder/SwanSorter-Brochure_V2 -Buyers (Final).pdf"
              download
              className=""
            >
              Download Brochure
            </a>
          </button>
        </div>
      </div>

      {/* 👇 Absolute Marquee Overlay */}
      <div className="absolute bottom-8 w-full z-20">
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          <div className="flex items-center gap-8 px-4">
            <img
              src="/photo-1594900799266-0e56587ba586.avif"
              alt="Grain 1"
              className="h-12 sm:h-16 object-contain rounded-full"
            />
            <img
              src="/photo-1508061253366-f7da158b6d46.avif"
              alt="Grain 2"
              className="h-12 sm:h-16 object-contain rounded-full"
            />
            <img
              src="/photo-1508061235804-9436954f042f.avif"
              alt="Grain 3"
              className="h-12 sm:h-16 object-contain rounded-full"
            />
            <img
              src="/photo-1508061253366-f7da158b6d46.avif"
              alt="Grain 1 repeat"
              className="h-12 sm:h-16 object-contain rounded-full"
            />
            <img
              src="/photo-1567080586917-e6ab6aa0df85.avif"
              alt="Grain 2 repeat"
              className="h-12 sm:h-16 object-contain rounded-full"
            />
            <img
              src="/photo-1580425922682-cd96db9af39d.avif"
              alt="Grain 3 repeat"
              className="h-12 sm:h-16 object-contain rounded-full"
            />
            <img
              src="/photo-1574323347407-f5e1ad6d020b (1).avif"
              alt="Grain 3 repeat"
              className="h-12 sm:h-16 object-contain rounded-full"
            />
            <img
              src="/photo-1580425922682-cd96db9af39d.avif"
              alt="Grain 3 repeat"
              className="h-12 sm:h-16 object-contain rounded-full"
            />
            <img
              src="/photo-1523312727315-7c6ae09c3d09.avif"
              alt="Grain 3 repeat"
              className="h-12 sm:h-16 object-contain rounded-full"
            />
            <img
              src="/photo-1567080586917-e6ab6aa0df85.avif"
              alt="Grain 3 repeat"
              className="h-12 sm:h-16 object-contain rounded-full"
            />
            
            <img
              src="/photo-1596564823703-d28706a620e8.avif"
              alt="Grain 3 repeat"
              className="h-12 sm:h-16 object-contain rounded-full"
            />
             <img
              src="/photo-1574323347407-f5e1ad6d020b (1).avif"
              alt="Grain 3 repeat"
              className="h-12 sm:h-16 object-contain rounded-full"
            />
            <img
              src="/photo-1523312727315-7c6ae09c3d09.avif"
              alt="Grain 3 repeat"
              className="h-12 sm:h-16 object-contain rounded-full"
            />
             <img
              src="/photo-1523312727315-7c6ae09c3d09.avif"
              alt="Grain 3 repeat"
              className="h-12 sm:h-16 object-contain rounded-full"
            />
            <img
              src="/photo-1574323347407-f5e1ad6d020b (1).avif"
              alt="Grain 3 repeat"
              className="h-12 sm:h-16 object-contain rounded-full"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
