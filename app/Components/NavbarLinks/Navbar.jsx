"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X ,Search} from "lucide-react";
import SwanSortlogo from "@/public/SwanSorter_Logo-02.png";
import GoogleTranslateDropdown from "../Google_Translator/google";

 const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-[90%] max-w-7xl mx-auto my-4">
      <div className="flex justify-between items-center py-2 text-white rounded-lg bg-gradient-to-r from-[#1f3d3b] to-[#2b4a48] shadow-lg">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mx-5"
        >
          <Image src={SwanSortlogo} alt="SwanSorter Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">SwanSorter</h1>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex gap-6  text-lg font-semibold items-center"
        >
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/Solutions" className="hover:text-gray-300 transition">Solutions</Link>
          <Link href="/Company" className="hover:text-gray-300 transition">Company</Link>
          <Link href="/Blogs" className="hover:text-gray-300 transition">Blogs</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
          <Link href="/ColorSorters" className="hover:text-gray-300 transition">Color Sorters</Link>
          
          {/* Google Translate Dropdown with Fix */}
          <div className=" mx-4 whitespace-nowrap">
            <GoogleTranslateDropdown />
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <button className="md:hidden mx-5" onClick={() => setMenuOpen(!menuOpen)}>
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
          <Link href="/Solutions" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Solutions</Link>
          <Link href="/Company" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Company</Link>
          <Link href="/Blogs" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Blogs</Link>
          <Link href="/contact" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/ColorSorters" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Color Sorters</Link>
          
          {/* Google Translate Dropdown with Fix */}
          <div className="">
            <GoogleTranslateDropdown />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;