"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../Components/NavbarLinks/Navbar";
import ContactForm from "../Components/Crad/ContactForm";
import Footerpage from "../Components/LandingPages/Footerpage";

// ✅ Your actual solutions array
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
          {
            src: "/photo-1574323347407-f5e1ad6d020b.avif",
            title: "High-Quality Wheat",
          },
          {
            src: "/premium_photo-1726862459894-aca62bf8a756.avif",
            title: "Wheat Sorting ",
          },
          {
            src: "/photo-1574323347407-f5e1ad6d020b.avif",
            title: "Color Sorting",
          },
          {
            src: "/photo-1646995892749-1bb82ae1679b.avif",
            title: "Defect Sorting",
          },
        ],
        recommended: [
          {
            image: "/img1.jpeg",
            title: "Wheat Optical Sorter 5000",
            description: "Precision sorting for wheat grains using AI-powered vision tech.",
          },
          {
            image: "/img2.jpeg",
            title: "Wheat Optical Sorter 5000",
            description: "Precision sorting for wheat grains using AI-powered vision tech.",
          },
          {
            image: "/img3.jpg",
            title: "Wheat Optical Sorter 5000",
            description: "Precision sorting for wheat grains using AI-powered vision tech.",
          },
        ],
      },
      {
        name: "Rice",
        images: [
          {
            src: "/photo-1612708074992-c7936e82c99b.avif",
            title: "Japonica Rice",
          },
          {
            src: "/photo-1627482265910-5c0ff6bee088.avif",
            title: "Unsorted Rice",
          },
          {
            src: "/photo-1612708074992-c7936e82c99b.avif",
            title: "Brown Rice",
          },
          {
            src: "/premium_photo-1725899527843-0e0d1f2eda03.avif",
            title: " Black Rice",
          },
        ],
        recommended: [
          {
            image: "/img4.jpeg",
            title: "Smart Rice Sorter X1",
            description: "Optimized for various rice types with infrared detection.",
          },
          {
            image: "/img5.jpeg",
            title: "Smart Rice Sorter X1",
            description: "Optimized for various rice types with infrared detection.",
          },
          {
            image: "/img6.jpeg",
            title: "Smart Rice Sorter X1",
            description: "Optimized for various rice types with infrared detection.",
          },
        ],
      },
      {
        name: "Grain",
        images: [
          {
            src: "/photo-1574323347407-f5e1ad6d020b (1).avif",
            title: "Wheat",
          },
          {
            src: "/photo-1626671502253-c50bad9325b1.avif",
            title: "Barley",
          },
          {
            src: "/photo-1543244550-7d81da8f3d2e.avif",
            title: "Rye",
          },
          {
            src: "/photo-1614373532018-92a75430a0da.avif",
            title: "Oat",
          },
          {
            src: "/photo-1613728913293-c99bb00ef39c.avif",
            title: "Corn",
          },
          {
            src: "/photo-1628317321557-68729bee6644.avif",
            title: "Sesame",
          },
        ],
        recommended: [
          {
            image: "/img7.jpeg",
            title: "Smart Rice Sorter X1",
            description: "Optimized for various rice types with infrared detection.",
          },
          {
            image: "/img8.jpeg",
            title: "Smart Rice Sorter X1",
            description: "Optimized for various rice types with infrared detection.",
          },
          {
            image: "/img9.jpeg",
            title: "Smart Rice Sorter X1",
            description: "Optimized for various rice types with infrared detection.",
          },
        ],
      },
      {
        name: "Beans",
        images: [
          {
            src: "/photo-1580425922682-cd96db9af39d.avif",
            title: "Coffee Bean",
          },
          {
            src: "/photo-1523312727315-7c6ae09c3d09.avif",
            title: "Red Bean",
          },
          {
            src: "/photo-1575399872095-9363bf262e64.avif",
            title: "Peanut",
          },
          {
            src: "/photo-1644432757699-bb5a01e8fb0e.avif",
            title: " Chickpeas",
          },
          {
            src: "/photo-1615485500710-aa71300612aa.avif",
            title: "Mung Bean",
          },
          {
            src: "/photo-1596564823703-d28706a620e8.avif",
            title: "Peas",
          },
          {
            src: "/photo-1639843606783-b2f9c50a7468 (1).avif",
            title: " SoyBean",
          },
        ],
        recommended: [
          {
            image: "/img10.jpeg",
            title: "Smart Rice Sorter X1",
            description: "Optimized for various rice types with infrared detection.",
          },
          {
            image: "/img11.jpeg",
            title: "Smart Rice Sorter X1",
            description: "Optimized for various rice types with infrared detection.",
          },
          {
            image: "/img12.jpeg",
            title: "Smart Rice Sorter X1",
            description: "Optimized for various rice types with infrared detection.",
          },
        ],
      },
      {
        name: "Nuts",
        images: [
          {
            src: "/photo-1575399872095-9363bf262e64.avif",
            title: "Peanut",
          },
          {
            src: "/premium_photo-1674347954785-7604a0220776.avif",
            title: "Watermelon Seeds",
          },
          {
            src: "/photo-1575399872095-9363bf262e64.avif",
            title: "Pine Nuts",
          },
          {
            src: "/photo-1508061253366-f7da158b6d46.avif",
            title: "Almonds",
          },
        ],
        recommended: [
          {
            image: "/img1.jpeg",
            title: "Smart Rice Sorter X1",
            description: "Optimized for various rice types with infrared detection.",
          },
          {
            image: "/img11.jpeg",
            title: "Smart Rice Sorter X1",
            description: "Optimized for various rice types with infrared detection.",
          },
          {
            image: "/img8.jpeg",
            title: "Smart Rice Sorter X1",
            description: "Optimized for various rice types with infrared detection.",
          },
        ],
      },
      {
        name: "Seed",
        images: [
          {
            src: "/photo-1612708074992-c7936e82c99b.avif",
            title: "Rice Seeds",
          },
          {
            src: "/photo-1663025293688-322e16b6cb66.avif",
            title: "Wheat Seeds",
          },
          {
            src: "/photo-1595259601874-5e6652e719d3.avif",
            title: "Other Seeds",
          },
        ],
        recommended: [
          {
            image: "/img10.jpeg",
            title: "Smart Rice Sorter X1",
            description: "Optimized for various rice types with infrared detection.",
          },
          {
            image: "/img11.jpeg",
            title: "Smart Rice Sorter X1",
            description: "Optimized for various rice types with infrared detection.",
          },
          {
            image: "/img12.jpeg",
            title: "Smart Rice Sorter X1",
            description: "Optimized for various rice types with infrared detection.",
          },
        ],
      },
    ],
  },
  {
    id: "plastic",
    title: "Plastic Waste Sorting",
    image: "/photo-1571727153934-b9e0059b7ab2.avif",
    icon: "♻️",
    items: [
      {
        name: "Recycled Resources",
        images: [
          {
            src: "/photo-1731613932524-923778f16b9d.avif",
            title: "Plastic Flakes",
          },
          {
            src: "/scrap-metal-pieces-laying-in-a-pile.webp",
            title: "Wee Metal",
          },
          {
            src: "/photo-1737998874193-8f6da6cad870.avif",
            title: "glass",
          },
          {
            src: "/photo-1567080586917-e6ab6aa0df85.avif",
            title: "Wood",
          },
        ],
        recommended: [
          {
            image: "/img5.jpeg",
            title: "PET Auto Sort Pro",
            description: "Detects and separates PET plastics with high efficiency.",
          },
          {
            image: "/img6.jpeg",
            title: "PET Auto Sort Pro",
            description: "Detects and separates PET plastics with high efficiency.",
          },
          {
            image: "/img8.jpeg",
            title: "PET Auto Sort Pro",
            description: "Detects and separates PET plastics with high efficiency.",
          },
        ],
      },
    ],
  },
  // Add more categories as needed...
];

const Page = () => {
  const [selectedSolution, setSelectedSolution] = useState(solutions[0]);
  const [selectedItem, setSelectedItem] = useState(selectedSolution.items[0]);

  return (
    <div>
      <Navbar />
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
                setSelectedItem(sol.items[0]);
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

        {/* Lower Section */}
        <motion.div
          key={selectedSolution.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md flex flex-col md:flex-row gap-6"
        >
          {/* Item Selector */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">{selectedSolution.title} Materials</h2>
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

          {/* Images Section */}
          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-semibold mb-4">{selectedItem.name} Images</h2>
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
                    className="rounded-lg object-cover shadow-md h-34"
                  />
                  <p className="text-sm mt-2 font-medium">{img.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recommended Machines Section */}
        <div className="mt-14">
          <h2 className="text-4xl font-bold text-center mb-2 text-[#8E54FF]">
            Recommended Sorting Machines
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Advanced technology built for precision and productivity — tailored for {selectedItem.name}.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {(selectedItem.recommended || []).map((rec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-lg shadow-md p-4"
              >
                <Image
                  src={rec.image}
                  alt={rec.title}
                  width={250}
                  height={150}
                  className="rounded-md h-72 object-contain m-auto"
                />
                <h3 className="mt-3 font-semibold text-lg">{rec.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form & Footer */}
      <div>
        <h2 className="text-center text-4xl sm:text-2xl md:text-5xl mt-6 sm:mt-8 font-bold">
          <span className="inline-block bg-gradient-to-r from-green-400 to-blue-400 py-1 px-3 rounded-2xl text-white">
            More Information?
          </span>
        </h2>
        <ContactForm />
        <Footerpage />
      </div>
    </div>
  );
};

export default Page;
