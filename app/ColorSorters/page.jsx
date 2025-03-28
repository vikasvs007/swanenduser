"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";

const products = [
  {
    name: "Swan Swift",
    image: "/img1.jpeg",
    description:
      "Experience next-level precision with the Swan RGB Tri Chromatic CCD Camera. This cutting-edge color sorter machine processes images with unmatched accuracy, ensuring high-quality sorting for your products.",
    features: [
      "5400* 3 pixels RGB CCD Camera Technology",
      "High power LED illumination",
      "Double side viewing incorporated",
      "Embedded system with digital image technology",
      "Stable sorter accuracy by improved collection efficiency",
    ],
    reverse: false,
  },
  {
    name: "Eagle Vision",
    image: "/img2.jpeg",
    description:
      "We are well known as the reputed organization in this field of operation, engaged in manufacturing a wide array of excellent quality Dal Color Sorter Machine. Swan RGB Tri Chromatic CCD Camera and image processing technology can process image parameters ever faster",
    features: [
      "pixels RGB CCD Camera Technology",
      "Double side viewing incorporated",
      "Embedded system with digital image technology",
      "Smart Ejector Technology",
    ],
    reverse: true,
  },
  {
    name: "Eagle Vision",
    image: "/img4.jpeg",
    description:
      "We are well known as the reputed organization in this field of operation, engaged in manufacturing a wide array of excellent quality Dal Color Sorter Machine. Swan RGB Tri Chromatic CCD Camera and image processing technology can process image parameters ever faster.",
    features: [
      "Ultra-fast sorting speed",
      "AI-powered defect detection",
      "Multi-material processing capability",
      "Intuitive touch-screen interface",
    ],
    reverse: false,
  },
  {
    name: "Eagle Vision",
    image: "/img4.jpeg",
    description:
      "We are well known as the reputed organization in this field of operation, engaged in manufacturing a wide array of excellent quality Dal Color Sorter Machine. Swan RGB Tri Chromatic CCD Camera and image processing technology can process image parameters ever faster",
    features: [
      "Ultra-fast sorting speed",
      "AI-powered defect detection",
      "Multi-material processing capability",
      "Intuitive touch-screen interface",
    ],
    reverse: true,
  },
];

const Page = () => {
  return (
    <div>
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="rounded-b-lg">
          <Navbar className="w-full max-w-7xl mx-auto px-6" />
        </div>
        <div className="max-w-6xl mx-auto text-center relative py-6">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-indigo-200 to-transparent opacity-20 rounded-lg blur-xl"></div>

          {/* Main Heading */}
          <motion.h2
            className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-2 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Elevate Precision with{" "}
            <motion.span
              className="text-[#8E54FF] relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Smart Sorting
              {/* Underline Effect */}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#8E54FF] rounded-full scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </motion.span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-gray-600 text-lg sm:text-xl font-medium relative"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Revolutionizing sorting technology for a smarter tomorrow.
          </motion.p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  product.reverse ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Content Section */}
                <motion.div
                  className="p-8 bg-white rounded-lg shadow-lg relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-transparent opacity-10"></div>
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

                  {/* Animated Button */}
                  <motion.button
                    className="mt-4 px-6 py-3 bg-[#8E54FF] text-white font-semibold rounded-lg shadow-md transition-all hover:bg-[#7A45E6] hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download Brochure
                  </motion.button>
                </motion.div>

                {/* Image Section */}
                <motion.div
                  className={`relative h-full flex justify-center ${
                    product.reverse ? "order-first" : ""
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                >
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full rounded-lg shadow-2xl object-center"
                    whileHover={{ scale: 1.05 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>
      <div className="py-10">
        <Footerpage />
      </div>
    </div>
  );
};

export default Page;
