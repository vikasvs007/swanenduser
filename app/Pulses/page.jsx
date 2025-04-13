"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Components/NavbarLinks/Navbar";
import ContactForm from "../Components/Crad/ContactForm";
import Footerpage from "../Components/LandingPages/Footerpage";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import MaterialPanel from "../Components/LandingPages/Categories";

// ✅ Your actual solutions array
const solutions = [
  {
    "id": "Agricultural Products Sorting",
    "title": "Agricultural Products Sorting",
    "image": "/photo-1501430654243-c934cec2e1c0.avif",
    "icon": "🌾",
    "items": [
        {
          "name": "Brown Chickpeas ",
          "images": [
            {
              "src": "/images/brownchekpeas.jpeg",
              "title": "Desi Brown Chickpeas",
              "details": {
                "points": [
                  "High in fiber and protein",
                  "Smaller and darker than Kabuli chana",
                  "Often used in curries and boiled snacks",
                  "Helps control blood sugar",
                  "Great for traditional Indian dishes"
                ],
                "description": "Brown chickpeas are a nutrient-dense legume widely used in Indian cooking for their hearty texture and earthy flavor."
              }
            }
          ],
          "recommended": [
            {
              "image": "/img1.jpeg",
              "title": "swan 300 belt type ms frame"
            },
            {
              "image": "/img2.jpeg",
              "title": "swan 300 mm belt type"
            },
            {
              "image": "/img3.jpg",
              "title": "swan 1 chute 64 channels"
            }
          ]
        },
        {
          "name": "Green Peas ",
          "images": [
            {
              "src": "/images/dried-green-peas.jpeg",
              "title": "Dried Green Peas",
              "details": {
                "points": [
                  "Commonly used in soups and curries",
                  "Rich in protein and dietary fiber",
                  "Mild, slightly sweet flavor",
                  "Good for heart and gut health",
                  "Long shelf life when dried"
                ],
                "description": "Dried green peas are a staple in many traditional dishes and are loved for their versatility and nutritional benefits."
              }
            }
          ],
          "recommended": [
            {
              "image": "/img4.jpeg",
              "title": "swan 3 Chute 192 Channel"
            },
            {
              "image": "/img5.jpeg",
              "title": "swan 2 chute 128 channel box type"
            },
            {
              "image": "/img6.jpeg",
              "title": "Swan 3 chute 192 channel"
            }
          ]
        },
        {
          "name": "Green Gram ",
          "images": [
            {
              "src": "/images/Whole Green Moong Dal.jpeg",
              "title": "Whole Green Moong Dal",
              "details": {
                "points": [
                  "Highly digestible and protein-rich",
                  "Used in sprouting, soups, and curries",
                  "Supports weight management",
                  "Great for detox diets",
                  "Mild and nutty flavor"
                ],
                "description": "Green gram, or moong dal, is a small green pulse used in Ayurvedic diets for its light and nutritious properties."
              }
            }
          ],
          "recommended": [
            {
              "image": "/img1.jpeg",
              "title": "swan 300 belt type ms frame"
            },
            {
              "image": "/img2.jpeg",
              "title": "swan 300 mm belt type"
            },
            {
              "image": "/img3.jpg",
              "title": "swan 1 chute 64 channels"
            }
          ]
        },
        {
          "name": "Yellow Lentils ",
          "images": [
            {
              "src": "/images/moong-dal.jpeg",
              "title": "Split Yellow Moong Dal",
              "details": {
                "points": [
                  "Quick-cooking and easy to digest",
                  "Used in khichdi and dal dishes",
                  "Light on the stomach",
                  "Rich in protein and low in fat",
                  "Perfect for kids and elderly diets"
                ],
                "description": "Split yellow moong dal is a staple in Indian households, known for its ease of cooking and nourishing qualities."
              }
            }
          ],
          "recommended": [
            {
              "image": "/img4.jpeg",
              "title": "swan 3 Chute 192 Channel"
            },
            {
              "image": "/img5.jpeg",
              "title": "swan 2 chute 128 channel box type"
            },
            {
              "image": "/img6.jpeg",
              "title": "Swan 3 chute 192 channel"
            }
          ]
        },
        {
          "name": "Purple Speckled Beans",
          "images": [
            {
              "src": "/images/Purple Speckled Beans.jpeg",
              "title": "Purple Speckled Beans",
              "details": {
                "points": [
                  "Attractive color with creamy texture",
                  "Used in salads and stews",
                  "High in protein and fiber",
                  "Supports bone health",
                  "Unique aesthetic appeal"
                ],
                "description": "Purple speckled beans are both nutritious and visually appealing, perfect for gourmet dishes and balanced meals."
              }
            }
          ],
          "recommended": [
            {
              "image": "/img1.jpeg",
              "title": "swan 300 belt type ms frame"
            },
            {
              "image": "/img2.jpeg",
              "title": "swan 300 mm belt type"
            },
            {
              "image": "/img3.jpg",
              "title": "swan 1 chute 64 channels"
            }
          ]
        },
        {
          "name": "Soybeans",
          "images": [
            {
              "src": "/images/Non-GMO Soybeans.jpeg",
              "title": "Non-GMO Soybeans",
              "details": {
                "points": [
                  "High-quality plant-based protein",
                  "Used in tofu, soy milk, and oil",
                  "Contains all essential amino acids",
                  "Good for bone and heart health",
                  "A key ingredient in vegan diets"
                ],
                "description": "Soybeans are one of the richest sources of plant protein and are widely used in various vegetarian and vegan products."
              }
            }
          ],
          "recommended": [
            {
              "image": "/img4.jpeg",
              "title": "swan 3 Chute 192 Channel"
            },
            {
              "image": "/img5.jpeg",
              "title": "swan 2 chute 128 channel box type"
            },
            {
              "image": "/img6.jpeg",
              "title": "Swan 3 chute 192 channel"
            }
          ]
        },
        {
          "name": "Red Lentils ",
          "images": [
            {
              "src": "/images/Whole Masoor Dal.jpeg",
              "title": "Whole Masoor Dal",
              "details": {
                "points": [
                  "Rich in iron and protein",
                  "Common in Indian dals",
                  "Mild flavor, soft texture when cooked",
                  "Good for skin and energy",
                  "Used in everyday cooking"
                ],
                "description": "Whole red lentils, or masoor dal, are a protein-rich staple legume used in a variety of Indian dishes."
              }
            }
          ],
          "recommended": [
            {
              "image": "/img1.jpeg",
              "title": "swan 300 belt type ms frame"
            },
            {
              "image": "/img2.jpeg",
              "title": "swan 300 mm belt type"
            },
            {
              "image": "/img3.jpg",
              "title": "swan 1 chute 64 channels"
            }
          ]
        },
        {
          "name": "Red Kidney Beans ",
          "images": [
            {
              "src": "/images/Premium Rajma Beans.jpeg",
              "title": "Premium Rajma Beans",
              "details": {
                "points": [
                  "High in fiber and protein",
                  "Main ingredient in Rajma curry",
                  "Good for heart health",
                  "Rich, hearty taste",
                  "Popular in Indian and Mexican dishes"
                ],
                "description": "Rajma is a favorite in North Indian cuisine, often served with rice and packed with protein and flavor."
              }
            }
          ],
          "recommended": [
            {
              "image": "/img4.jpeg",
              "title": "swan 3 Chute 192 Channel"
            },
            {
              "image": "/img5.jpeg",
              "title": "swan 2 chute 128 channel box type"
            },
            {
              "image": "/img6.jpeg",
              "title": "Swan 3 chute 192 channel"
            }
          ]
        },
        {
          "name": "Horse Gram ",
          "images": [
            {
              "src": "/images/Organic Horse Gram.jpeg",
              "title": "Organic Horse Gram",
              "details": {
                "points": [
                  "Traditionally used in South Indian dishes",
                  "High in iron and calcium",
                  "Aids in weight loss and digestion",
                  "Strong, earthy flavor",
                  "Used in soups and chutneys"
                ],
                "description": "Horse gram is a highly nutritious and warming legume known for its medicinal value in Ayurvedic diets."
              }
            }
          ],
          "recommended": [
            {
              "image": "/img1.jpeg",
              "title": "swan 300 belt type ms frame"
            },
            {
              "image": "/img2.jpeg",
              "title": "swan 300 mm belt type"
            },
            {
              "image": "/img3.jpg",
              "title": "swan 1 chute 64 channels"
            }
          ]
        },
        {
          "name": "Black-Eyed Peas ",
          "images": [
            {
              "src": "/images/Black-Eyed Peas.jpeg",
              "title": "Black-Eyed Peas",
              "details": {
                "points": [
                  "Recognizable by black spot on cream body",
                  "Used in salads, stews, and Indian dishes",
                  "High in folate and protein",
                  "Supports digestion",
                  "Traditional in Southern US and India"
                ],
                "description": "Black-eyed peas are nutrient-dense legumes used in a variety of regional dishes for their unique look and rich nutrients."
              }
            }
          ],
          "recommended": [
            {
              "image": "/img4.jpeg",
              "title": "swan 3 Chute 192 Channel"
            },
            {
              "image": "/img5.jpeg",
              "title": "swan 2 chute 128 channel box type"
            },
            {
              "image": "/img6.jpeg",
              "title": "Swan 3 chute 192 channel"
            }
          ]
        }
    
    ]
                
  }
  
];

const Page = () => {
  const [selectedSolution, setSelectedSolution] = useState(solutions[0]);
  const [selectedItem, setSelectedItem] = useState(selectedSolution.items[0]);
  const [selectedImage, setSelectedImage] = useState(null); // State to hold selected image

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const clearImage = () => {
    setSelectedImage(null);
  };

  // New function to get relevant items for the "MultiGrains, Spices..." section
  const getCategoryItems = (categoryName) => {
    if (selectedSolution.id !== "agriculture") return [];

    const categoryMappings = {
      MultiGrains: ["Wheat", "Rice", "Grain"], // Corrected to include 'Grain'
      Spices: [
        "Pepper",
        "Clove",
        "Cardamom",
        "Chilli",
        "Coriander seeds",
        "Jeera",
        "Fennel Seeds",
      ],
      "All Types Of Pulses": [
        "Toor Dal",
        "Moong Dal",
        "Masoor Dal",
        "Chana Dal",
        "Green Moong",
        "Toor Whole",
        "Urad Dal",
        "Urad Dal Whole",
        "Fried Gram",
        "Chick Peas",
        "Mung Bean",
        "Peas",
        "SoyBean",
      ], //Added Peas and Soyabean
      Seeds: [
        "Poppy Seeds",
        "Mustard",
        "Tamarind Seeds",
        "Watermelon Seeds",
        "Sesame Seeds",
        "Coffee Beans",
        "Rajgira Seeds (Ramdana seeds)",
        "Rice Seeds",
        "Wheat Seeds",
        "Other Seeds",
        "Flaxseed",
        "Niger seeds",
        "Sunflower Seeds",
        "Pumpkin seeds",
        "Jowar grain",
        "Ragi",
        "Barley",
        "Betel Nut",
      ], //Added Barley and Betel Nut
    };

    const itemNames = categoryMappings[categoryName] || [];
    return selectedSolution.items.filter((item) =>
      itemNames.includes(item.name)
    );
  };

  // Define categories for the new section
  const categories = ["MultiGrains", "Spices", "All Types Of Pulses", "Seeds"];

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 text-gray-900">
        {/* Top Grid - Solution Selection */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {solutions.map((sol) => (
            <motion.div
              key={sol.id}
              className={`p-4 bg-white shadow-md rounded-lg cursor-pointer transition duration-300 transform hover:scale-105 ${
                selectedSolution.id === sol.id ? "border-2 border-teal-500" : ""
              }`}
              onClick={() => {
                setSelectedSolution(sol);
                setSelectedItem(sol.items[0]);
                setSelectedImage(null); // Clear selected image when switching solutions
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
        </div> */}

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
            <h2 className="text-2xl font-bold mb-4">
            Spices Materials
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
                  onClick={() => {
                    setSelectedItem(item);
                    setSelectedImage(null); // Clear selected image when switching items
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Images Section */}
          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-semibold mb-4">
              {selectedItem.name} Images
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {selectedItem.images.map((img, index) => {
                const isClickable =
                  img.details &&
                  img.details.points &&
                  img.details.points.length > 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`text-center ${
                      isClickable ? "cursor-pointer" : ""
                    }`} // Make clickable
                    onClick={
                      isClickable ? () => handleImageClick(img) : undefined
                    } // Handle click
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
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Recommended Machines Section */}
        <div className="mt-14">
          <h2 className="text-4xl font-bold text-center mb-2 text-[#8E54FF]">
            Recommended Sorting Machines
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Advanced technology built for precision and productivity — tailored
            for {selectedItem.name}.
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

        {/* Image Details Modal */}
        <AnimatePresence>
          {selectedImage && selectedImage.details && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-md" // Full screen, centered, blurred
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-6 w-full h-full overflow-y-auto" // Full width and height, scrollable
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold mb-4">
                    {selectedImage.title} Details
                  </h2>
                  <button
                    onClick={clearImage}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Close
                  </button>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 w-full">
                  <div className="lg:w-1/2">
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      width={800} // Increased size
                      height={600}
                      className="rounded-lg object-contain w-full h-auto" // Make sure image scales within container
                    />
                    <p className="text-gray-700 mt-4">
                      {selectedImage.details.description}
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="text-lg font-semibold mb-2">Key Points</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedImage.details.points.map((point, index) => (
                        <li key={index} className="text-gray-700">
                          {point}
                        </li>
                      ))}
                    </ul>
                    {/* Recommended Products */}
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-2">
                        Recommended Products
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {(selectedItem.recommended || []).map((rec, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-100 rounded-md p-2 flex items-center gap-2"
                          >
                            <Image
                              src={rec.image}
                              alt={rec.title}
                              width={80}
                              height={60}
                              className="rounded-md object-cover h-16 w-20"
                            />
                            <p className="text-sm font-medium">{rec.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div>
        <MaterialPanel />
      </div>
      {/* Contact Form & Footer */}
      <div>
        <ChatBot />
        <AutoPopupChat />
        <Footerpage />
      </div>
    </div>
  );
};

export default Page;
