"use client";
import Image from "next/image";
import { Navbar } from "../NavbarLinks/Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Navbar Positioned Absolutely */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Background Image - Fixed Next.js 13+ Compatibility */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 md:w-full md:h-full md:left-0"
      >
        <Image
          // autoPlay
          // loop
          // muted
          // playsInline
          src="/LandingPage.jpeg"
          alt="Landing Hero Image"
          fill
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Content Section - Appears from Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:w-[85%] md:h-[80vh] min-h-[400px] relative md:top-20 top-48 m-auto flex flex-wrap items-center"
      >
        {/* Left Section */}
        <div className="md:w-[50%] w-[100%] md:pl-10 px-5">
          <div className="text-white">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-bold text-3xl sm:text-3xl md:text-5xl"
            >
              Grain by grain <span className="text-[#a2e194]">Perfection</span>{" "}
              Redefined.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="md:text-gray-300 text-white sm:text-xl mt-4"
            >
              Experience the next level of sorting technology with unmatched
              efficiency and accuracy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }} // Prevents re-rendering glitch
              className="flex  items-center gap-3 md:gap-5 mt-4 md:py-10 whitespace-nowrap"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="bg-[#a2e194] py-3 px-5 rounded-2xl text-black font-semibold transition"
              >
                Get in Touch
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="bg-[#a2e194] py-3 px-5 rounded-2xl text-black font-semibold transition"
              >
                Download brochure
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
