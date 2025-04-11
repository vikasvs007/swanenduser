"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footerpage = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-auto bg-white text-gray-800 py-12 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row justify-between space-y-10 md:space-y-0">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center space-x-3"
        >
          <Image
            src="/Logo_img.png"
            alt="Swan Sorter Systems Logo"
            className="rounded-full"
            width={120}
            height={40}
          />
          <h1 className="text-2xl font-bold text-gray-900 text-center md:text-left">
            Swan Sorter Systems
          </h1>
        </motion.div>

        {/* Contact & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left w-full">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Say Hi to Swan</h3>
            <p className="text-gray-600 font-medium">GENERAL ENQUIRIES</p>
            <p className="text-gray-600">swan@swansorter.com</p>
            <p className="text-gray-600">+91 8951 385 814</p>

            <p className="mt-4 text-gray-600 font-medium">SALES ENQUIRIES</p>
            <p className="text-gray-600">swan@swansorter.com</p>
            <p className="text-gray-600">+91 9986 899 129, +91 9483 445 471</p>
          </motion.div>

          {/* Navigation Menu */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Navigation Menu</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Solutions", href: "/Solutions" },
                { label: "Latest Blogs", href: "/Blogs" },
                { label: "Contact", href: "/contact" },
                { label: "Color Sorter", href: "/ColorSorters" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Important Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Media & Downloads", href: "/media-downloads" },
                // { name: "Press Release", href: "/press-release" },
                { name: "Contact Us", href: "/contact" },
                {
                  name: "Download Brochures",
                  href: "/PdfFolder/SwanSorter-Brochure_V2 -Buyers (Final).pdf",
                },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    download
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
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
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-6 flex justify-center space-x-6"
      >
        {[
          { Icon: FaFacebookF, link: "https://www.facebook.com/p/Swan-Sorter-Systems-Pvt-Ltd-100068629621171/?locale=eo_EO" },
          { Icon: FaTwitter, link: "https://twitter.com/swansorter1 "},
          {
            Icon: FaLinkedinIn,
            link: "https://www.linkedin.com/company/swan-sorter-systems?originalSubdomain=in",
          },
        ].map(({ Icon, link }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
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
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-8 border-t border-gray-200 pt-6 text-center"
      >
        <p className="text-gray-600">
          © 2025, Swan Sorter System Pvt. Ltd. / All rights reserved.
        </p>
        <div className="mt-2 flex flex-wrap justify-center space-x-4">
          {["Privacy", "Terms", "Sitemap"].map((path) => (
            <Link
              key={path}
              href={`/${path.toLowerCase()}`}
              className="text-gray-600 hover:text-gray-900 transition duration-300 hover:underline"
            >
              {path} Policy
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footerpage;
