"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";

const faqs = [
  {
    question: "Do you offer remote monitoring or IoT features?",
    answer:
      "Yes, our latest models come with IoT-enabled remote monitoring for real-time performance tracking.",
  },
  {
    question: "Can your machines be integrated with existing production lines?",
    answer:
      "Yes, our machines can be seamlessly integrated into existing conveyor systems and production setups.",
  },
  {
    question: "What types of sorting machines do you offer?",
    answer: `We offer AI-powered sorting machines that use next-generation technology to ensure superior accuracy. Our range includes:
• Optical Sorters
• Color Sorters
• Multi-Spectral Sorters
• Quality Inspection Systems`,
  },
  {
    question: "How do your AI-based sorting machines work?",
    answer:
      "Our machines use Artificial Intelligence (AI), Machine Learning (ML), and advanced imaging technology to detect and separate materials based on color, shape, size, and defects.",
  },
  {
    question: "What materials can your sorters handle?",
    answer:
      "Our sorters are capable of handling a wide range of materials including grains, pulses, plastics, glass, metals, and more.",
  },
  {
    question: "Do you provide installation and training support?",
    answer:
      "Yes, we provide complete on-site installation and training to ensure your team can operate the machine efficiently from day one.",
  },
  {
    question: "How do I maintain and service the machines?",
    answer:
      "We offer regular maintenance packages and remote diagnostics. Our technical support team is available 24/7 for assistance and troubleshooting.",
  },
  {
    question: "Are your sorting machines customizable?",
    answer:
      "Absolutely! We tailor each machine to suit the specific needs of your industry, material type, and operational environment.",
  },
];


const page = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Navbar/>
      <section className="bg-white py-16 px-4 sm:px-8 md:px-16 min-h-screen">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Questions
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center text-left px-6 py-4 hover:bg-gray-100 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-gray-800 font-medium text-base sm:text-lg">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-gray-500 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4 bg-white text-gray-600 border-t border-gray-200 whitespace-pre-line"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
      <Footerpage/>
    </div>
  );
};

export default page;
