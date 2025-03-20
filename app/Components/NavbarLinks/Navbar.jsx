"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import SwanSortlogo from "@/public/SwanSorter_Logo-02.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTranslator, setShowTranslator] = useState(false);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,kn", autoDisplay: false },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();
  }, []);

  useEffect(() => {
    // if (menuOpen) {
    //   setShowTranslator(false); // Temporarily hide
    //   setTimeout(() => setShowTranslator(true), 100); // Re-add after a short delay
    // }
  }, [menuOpen]);

  return (
    <nav className="w-[90%] max-w-7xl mx-auto my-4">
      <div className="flex justify-between items-center px-4 py-2 text-white rounded-lg bg-gradient-to-r from-[#1f3d3b] to-[#2b4a48]  shadow-lg">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <Image src={SwanSortlogo} alt="SwanSorter Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">SwanSorter</h1>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex gap-6 text-lg font-semibold items-center"
        >
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/solutions" className="hover:text-gray-300 transition">Solutions</Link>
          <Link href="/company" className="hover:text-gray-300 transition">Company</Link>
          <Link href="/news" className="hover:text-gray-300 transition">News</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
          <Link href="/ColorSorters" className="hover:text-gray-300 transition">Color Sorters</Link>

          {/* Desktop Language Translator */}
          <div id="google_translate_element" className="ml-4"></div>
        </motion.div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden flex flex-col bg-gradient-to-r from-[#1f3d3b] to-[#2b4a48] text-white mt-2 rounded-lg shadow-md p-4 space-y-4"
        >
          
          <Link href="/" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/solutions" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Solutions</Link>
          <Link href="/company" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Company</Link>
          <Link href="/news" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>News</Link>
          <Link href="/contact" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/ColorSorters" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Color Sorters</Link>

          {/* Mobile Language Translator */}
          {showTranslator && (
            <div key={menuOpen} className=" z-50 text-white">
                <div id="google_translate_element"></div>
            </div>
          )}
        </motion.div>
      )}
    </nav>
  );
};
