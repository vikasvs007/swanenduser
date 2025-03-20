"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footerpage = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-auto bg-white text-gray-800  py-12 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row justify-between space-y-10 md:space-y-0">
        
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center space-x-3"
        >
          <Image src="/SwanSorter_Logo-02.png" alt="SwanSorter Logo" width={120} height={40} />
          <h1 className="text-2xl font-bold text-gray-900">SwanSorter</h1>
        </motion.div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 text-center md:text-left">
          
      
          {/* Companies */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Companies</h3>
            <ul className="space-y-3">
              {["Solutions", "Company", "News", "Contact"].map((path) => (
                <li key={path}>
                  <Link href={`/${path.toLowerCase()}`} className="text-gray-600 hover:text-gray-900 relative">
                    <span className="relative hover:underline hover:decoration-green-400 transition duration-300">{path}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Other Links */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Other Links</h3>
            <ul className="space-y-3">
              {["Team", "Pricing", "FAQs", "Testimonials"].map((path) => (
                <li key={path}>
                  <Link href={`/${path.toLowerCase()}`} className="text-gray-600 hover:text-gray-900">
                    <span className="relative hover:underline hover:decoration-blue-400 transition duration-300">{path}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Social Media Icons */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-10 flex justify-center space-x-6"
      >
        {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
          <motion.a
            key={index}
            href="#"
            whileHover={{ scale: 1.2 }}
            className="p-3 rounded-full bg-gray-200 hover:bg-gradient-to-r from-green-400 to-blue-400 text-gray-800 hover:text-white transition duration-300"
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        ))}
      </motion.div>

      {/* Footer Bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-8 border-t border-gray-200 pt-6 text-center"
      >
        <p className="text-gray-600">© {new Date().getFullYear()} SwanSorter. All Rights Reserved.</p>
        <div className="mt-2 flex flex-wrap justify-center space-x-4">
          {["Privacy", "Terms", "Sitemap"].map((path) => (
            <Link key={path} href={`/${path.toLowerCase()}`} className="text-gray-600 hover:text-gray-900 transition duration-300 hover:underline">
              {path} Policy
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footerpage;
