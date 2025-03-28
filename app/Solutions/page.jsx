"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../Components/NavbarLinks/Navbar";
import ContactForm from "../Components/Crad/ContactForm";
import Footerpage from "../Components/LandingPages/Footerpage";

const solutions = [
  {
    id: "agriculture",
    title: "Agricultural Products Sorting",
    image: "/photo-1501430654243-c934cec2e1c0.avif",
    icon: "🌾",
    items: [
      {
        name: "Wheat",
        images: [
          { src: "/photo-1574323347407-f5e1ad6d020b.avif", title: "Wheat Quality Check" },
          { src: "/premium_photo-1726862459894-aca62bf8a756.avif", title: "Wheat Sorting" },
          { src: "/photo-1507311036505-05669fc503cb.avif", title: "Wheat Processing" },
          { src: "/photo-1574323347407-f5e1ad6d020b.avif", title: "Wheat Packaging" },
          { src: "/photo-1574323347407-f5e1ad6d020b.avif", title: "Wheat Storage" },
        ],
      },
      {
        name: "Beans",
        images: [
          { src: "/photo-1580425922682-cd96db9af39d.avif", title: "Coffee Beans" },
          { src: "/photo-1523312727315-7c6ae09c3d09.avif", title: "Red Beans" },
          { src: "/photo-1594900799266-0e56587ba586.avif", title: "Mung Beans" },
          { src: "/photo-1639843606783-b2f9c50a7468.avif", title: "Soya Beans " },
          { src: "/photo-1575399872095-9363bf262e64.avif", title: "Peanut" },
          { src: "/photo-1635843121634-3d071b6fb5d8.avif", title: "Chickpeas" },
        ],
      },
      {
        name: "Rice",
        images: [
          { src: "/photo-1613045935265-265ff612e0e2.avif", title: "Brown Rice" },
          { src: "/photo-1612708074992-c7936e82c99b.avif", title: "Parboiled" },
          { src: "/photo-1502825868325-37569f642e95.avif", title: "Black Rice" },
        ],
      },
      {
        name: "Nuts",
        images: [
          { src: "/photo-1610073474647-7b0b80a2f31f.avif", title: " Cashews Nuts" },
          { src: "/photo-1585536301151-2afb2fb1c960.avif", title: " Pine Nuts" },
          { src: "/photo-1611529695554-fd3d13d1d819.avif", title: " Walnut Nuts" },
          { src: "/photo-1508061235804-9436954f042f.avif", title: " Almonds" },
        ],
      },
    ],
  },
  {
    id: "recycling",
    title: "Recycling Resource Sorting",
    image: "/photo-1606901302392-ca613ab6abb7.avif",
    icon: "♻",
    items: [
      {
        name: "Plastic",
        images: [
          { src: "/photo-1537084642907-629340c7e59c.avif", title: "Plastic Flakes" },
          { src: "/photo-1571727153934-b9e0059b7ab2.avif", title: "Plastic Bottle" },
        ],
      },
      {
        name: "Paper",
        images: [
          { src: "/photo-1537084642907-629340c7e59c.avif", title: "Paper Sorting" },
          { src: "/photo-1537084642907-629340c7e59c.avif", title: "Paper Recycling" },
        ],
      },
    ],
  },
  {
    id: "food-inspection ",
    title: "Food Inspection Sorting",
    image: "/photo-1466637574441-749b8f19452f.avif",
    icon: "🍎",
    items: [
      {
        name: "Fruits",
        images: [
          { src: "/photo-1464965911861-746a04b4bca6.avif", title: "Fruit Quality Check" },
          { src: "/photo-1464965911861-746a04b4bca6.avif", title: "Fruit Sorting" },
        ],
      },
      {
        name: "Vegetables",
        images: [
          { src: "/photo-1464965911861-746a04b4bca6.avif", title: "Vegetable Inspection" },
          { src: "/photo-1464965911861-746a04b4bca6.avif", title: "Vegetable Packaging" },
        ],
      },
      {
        name: "Meat",
        images: [
          { src: "/photo-1464965911861-746a04b4bca6.avif", title: "Meat Quality Control" },
          { src: "/photo-1464965911861-746a04b4bca6.avif", title: "Meat Processing" },
        ],
      },
    ],
  }
];

const Page = () => {
  const [selectedSolution, setSelectedSolution] = useState(solutions[0]);
  const [selectedItem, setSelectedItem] = useState(selectedSolution.items[0]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto p-6 text-gray-900">
        {/* Top Grid - Solution Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {solutions.map((sol) => (
            <motion.div
              key={sol.id}
              className={`p-4 bg-white shadow-md rounded-lg cursor-pointer transition duration-300 transform hover:scale-105 ${
                selectedSolution.id === sol.id ? "border-2 border-teal-500" : ""
              }`}
              onClick={() => {
                setSelectedSolution(sol);
                setSelectedItem(sol.items[0]); // Reset to first item
              }}
            >
              <Image
                src={sol.image}
                alt={sol.title}
                width={220}
                height={130}
                className="rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">{sol.title}</h3>
              <div className="text-3xl mt-2">{sol.icon}</div>
            </motion.div>
          ))}
        </div>

        {/* Lower Section - Items List & Image Grid */}
        <motion.div
          key={selectedSolution.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md flex flex-col md:flex-row gap-6"
        >
          {/* Left Side - Items List */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">
              {selectedSolution.title} Materials
            </h2>
            <div className="space-y-2">
              {selectedSolution.items.map((item) => (
                <button
                  key={item.name}
                  className={`block w-full p-3 text-left shadow rounded-md transition ${
                    selectedItem.name === item.name
                      ? "bg-teal-500 text-white font-bold"
                      : "bg-white text-gray-900 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedItem(item)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Show All Images with Titles */}
          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-semibold mb-4">
              {selectedItem.name} Images
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {selectedItem.images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <Image
                    src={img.src}
                    alt={selectedItem.name}
                    width={250}
                    height={180}
                    className="rounded-lg shadow-md"
                  />
                  <p className="text-sm mt-2 font-medium">{img.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div>
        <div>
          <h2 className="text-center text-5xl mt-8 font-bold text-[#8E54FF]">More Information ?</h2>
         <ContactForm />
        </div>
        <Footerpage/>
      </div>
    </div>
  );
};

export default Page;
