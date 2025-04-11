"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TechnologyPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Precompute animation values to prevent re-renders
  const opacityText = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateYText = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  return (
    <div ref={ref} className="w-full min-h-full  bg-gradient-to-r from-gray-100 to-white px-6 pt-16">
      {/* Heading with Smooth Animation */}
      <motion.h1
        className="text-3xl sm:text-5xl font-bold leading-tight text-gray-800 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Unleash the Power of
        <span className="mx-5 bg-gradient-to-r from-green-400 to-blue-400 px-2 text-white rounded-lg block sm:inline">
          AI Faster Growth
        </span>
        <span> Smarter Decisions</span> Limitless Potential.
      </motion.h1>

      {/* Subtitle with Optimized Animation */}
      <motion.p
        className="mt-4 text-gray-600 text-lg sm:text-xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Transform your business with AI-powered solutions designed for speed and precision.
      </motion.p>

      <div className="w-[90%] m-auto h-full flex flex-wrap gap-4 md:gap-6">
        {/* Video with Smoother Scaling */}
        <motion.div
          className="video w-full h-full md:w-[48%] md:my-10 my-5"
          style={{ scale: videoScale }}
        >
          <video autoPlay loop muted playsInline className="w-full h-full rounded-3xl" src="/demo.mp4"></video>
        </motion.div>

        <div className="right w-full md:w-[48%] h-full flex flex-col justify-center md:my-20 px-4 md:px-0">
          {/* Subheading with Smoother Animation */}
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-center md:text-left text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            AI-Powered Sorting for Maximum Efficiency
          </motion.h2>

          {/* Paragraph with Optimized Scroll Animation */}
          <motion.p
            className="hidden md:flex text-gray-600 mt-3 text-base sm:text-lg text-center md:text-left leading-relaxed"
            style={{ opacity: opacityText, y: translateYText }}
          >
            Experience the future of intelligent sorting with our AI-driven
            machines. Designed to enhance precision, reduce waste, and
            boost productivity, our technology ensures seamless automation
            across industries.
          </motion.p>

          {/* Call-To-Action Button Animation */}
          <motion.button
            className="mt-5 my-5 whitespace-nowrap md:my-10 bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold py-3 px-3 text-center md:w-[35%] rounded-lg text-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          <a href="/contact">Know About Us</a>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
