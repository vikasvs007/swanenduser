"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";

const products = [
  {
    name: "Swan 300 belt type ms frame",
    image: "/img1.Jpeg",
    description:
      "Experience next-level precision with the Swan RGB Tri Chromatic CCD Camera...",
    features: [
      "5400* 3 pixels RGB CCD Camera Technology",
      "High power LED illumination",
      "Double side viewing incorporated",
      "Embedded system with digital image technology",
      "Stable sorter accuracy by improved collection efficiency",
    ],
    reverse: false,
    brochureLink: "/PdfFolder/Industrial_Grain_Sorting.pdf",
  },
  {
    name: " Swan 300 mmbelt type",
    image: "/img2.jpeg",
    description: "We are well known as the reputed organization...",
    features: [
      "pixels RGB CCD Camera Technology",
      "Double side viewing incorporated",
      "Embedded system with digital image technology",
      "Smart Ejector Technology",
    ],
    reverse: true,
    brochureLink: "/PdfFolder/Industrial_Grain_Sorting.pdf",
  },
  {
    name: " Swan 1 chute 64 channel",
    image: "/img3.jpg",
    description: "Introducing Falcon Max – maximum performance, maximum precision.",
    features: [
      "AI-enhanced color sorting",
      "Low energy consumption",
      "Built-in IoT diagnostics",
      "Modular conveyor system",
    ],
    reverse: false,
    brochureLink: "/PdfFolder/SWAN_RGB_AI_8Chute_512.pdf",
  },
  {
    name: "Swan 5 chute 320 channel",
    image: "/img4.jpeg",
    description: "We are well known as the reputed organization...",
    features: [
      "Ultra-fast sorting speed",
      "AI-powered defect detection",
      "Multi-material processing capability",
      "Intuitive touch-screen interface",
    ],
    reverse: true,
    brochureLink: "/PdfFolder/SWAN_RGB_AI_5Chute_320.pdf",
  },
  {
    name: " Swan  2 chute 128 channel box type",
    image: "/img5.jpeg",
    description: "Compact size with robust sorting capabilities for small-scale operations.",
    features: [
      "Compact design",
      "Touch screen control",
      "Easy maintenance access",
      "Affordable pricing for startups",
    ],
    reverse: false,
    brochureLink: "/PdfFolder/SwiftMini_Brochure.pdf",
  },
  {
    name: " Swan  3 chute 192 channel",
    image: "/img6.jpeg",
    description: "Extended capacity for larger grains and multi-sorting functions.",
    features: [
      "Multi-mode sorting",
      "Grain-type auto detection",
      "Smart data logging",
      "Auto calibration feature",
    ],
    reverse: true,
    brochureLink: "/PdfFolder/SWAN_RGB_AI_3Chute.pdf",
  },
  {
    name: " Swan 1 chute 64 channel",
    image: "/img7.jpeg",
    description: "Advanced spectral imaging for the most precise separation.",
    features: [
      "Near-infrared spectrum analysis",
      "AI-based contamination removal",
      "Smart defect learning",
      "4K touch panel interface",
    ],
    reverse: false,
    brochureLink: "/PdfFolder/SpectraPro.pdf",
  },
  {
    name: "Swan  8 chute 512 channel",
    image: "/img8.jpeg",
    description: "Flagship model built for ultra-speed industrial-scale operations.",
    features: [
      "8000px Ultra HD RGB camera",
      "Industrial AI processor",
      "Long lifespan ejectors",
      "Dual cleaning system",
    ],
    reverse: true,
    brochureLink: "/PdfFolder/SwanUltra_Brochure.pdf",
  },
  {
    name: "Swan  2 chute 128 channel box type",
    image: "/img5.png",
    description: "Advanced spectral imaging for the most precise separation.",
    features: [
      "Near-infrared spectrum analysis",
      "AI-based contamination removal",
      "Smart defect learning",
      "4K touch panel interface",
    ],
    reverse: false,
    brochureLink: "/PdfFolder/Midlevel_Sorting_Powerhouse.pdf",
  },
  {
    name: "Swan 5RGB Ai 10 chute 640 channel",
    image: "/img10.jpeg",
    description: "Flagship model built for ultra-speed industrial-scale operations.",
    features: [
      "8000px Ultra HD RGB camera",
      "Industrial AI processor",
      "Long lifespan ejectors",
      "Dual cleaning system",
    ],
    reverse: false,
    brochureLink: "/PdfFolder/SWAN_RGB_AI_10Chute_640.pdf",
  },
  {
    name: " Swan 600Mm belt type machine ",
    image: "/img11.jpeg",
    description: "Advanced spectral imaging for the most precise separation.",
    features: [
      "Near-infrared spectrum analysis",
      "AI-based contamination removal",
      "Smart defect learning",
      "4K touch panel interface",
    ],
    reverse: true,
    brochureLink: "/PdfFolder/Industrial_Grain_Sorting",
  },
  {
    name: " Swan 1 chute 64 channel ms/ss frame",
    image: "/img12.jpeg",
    description: "Flagship model built for ultra-speed industrial-scale operations.",
    features: [
      "8000px Ultra HD RGB camera",
      "Industrial AI processor",
      "Long lifespan ejectors",
      "Dual cleaning system",
    ],
    reverse: false,
    brochureLink: "/PdfFolder/Swan_RGB_AI_1Chute.pdf",
  },
];

const Page = () => {
  return (
    <div>
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="rounded-b-lg">
          <Navbar className="w-full max-w-7xl mx-auto px-6" />
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-stretch ${
                product.reverse ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
            >
              {/* Content Section */}
              <motion.div
                className="flex flex-col justify-between p-8 bg-white rounded-lg shadow-lg relative overflow-hidden h-full"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-transparent opacity-10 pointer-events-none"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-6 border-b-2 border-[#8E54FF] pb-2">
                    {product.name}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-4 mb-6">
                    {product.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-700 font-medium text-lg"
                      >
                        <span className="inline-block w-3 h-3 bg-[#8E54FF] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={product.brochureLink}
                    download
                    className="inline-block mt-4 px-6 py-3 bg-[#8E54FF] text-white font-semibold rounded-lg shadow-md transition-all hover:bg-[#7A45E6] hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download Brochure
                  </motion.a>
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                className={`relative h-full flex justify-center items-center ${
                  product.reverse ? "order-first" : ""
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg shadow-2xl max-h-[500px]"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="py-10">
        <ChatBot/>
        <AutoPopupChat/>
        <Footerpage />
      </div>
    </div>
  );
};

export default Page;
