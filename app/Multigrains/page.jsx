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
        "name": "Groundnuts",
        "images": [
          {
            "src": "/photo-1585536301151-2afb2fb1c960.avif",
            "title": "Premium Groundnuts",
            "details": {
              "points": [
                "Rich in protein and healthy fats",
                "High in antioxidants and vitamins",
                "Commonly used in snacks, oils, and cooking",
                "Boosts brain health",
                "Used in many cuisines worldwide"
              ],
              "description": "Groundnuts are a high-protein legume used in various cuisines and products such as oils, snacks, and butters."
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
        "name": "Cashew Nut",
        "images": [
          {
            "src": "/photo-1610073474647-7b0b80a2f31f.avif",
            "title": "Premium Cashew Nuts",
            "details": {
              "points": [
                "Rich in healthy fats, protein, and minerals",
                "Used in sweets, snacks, and cooking",
                "Rich in antioxidants",
                "Supports heart health",
                "Popular worldwide"
              ],
              "description": "Cashew nuts are nutrient-dense, providing healthy fats, protein, and antioxidants, and are used in a variety of dishes and snacks."
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
        "name": "Fried Gram",
        "images": [
          {
            "src": "/fg6.webp",
            "title": "Roasted Fried Gram",
            "details": {
              "points": [
                "Rich in protein and fiber",
                "High in vitamins and minerals",
                "Good for digestion",
                "Common in Indian dishes",
                "Ideal for snacks and cooking"
              ],
              "description": "Fried gram, also known as roasted chickpeas, is a healthy snack with high fiber and protein content, commonly used in Indian recipes."
            }
          }
        ],
        "recommended": [
          {
            image: "/img7.jpeg",
            title: "Swan 8 chute 512 channel",
          },
          {
            image: "/img8.jpeg",
            title: "Swan 8 chute 512 channel",
          },
          {
            image: "/img9.jpeg",
            title: "Swan 1 chute 64 channel",
          },
        ]
      },
      {
        "name": "Urad Dal",
        "images": [
          {
            "src": "/white-urad-dal.webp",
            "title": "High-Quality Urad Dal",
            "details": {
              "points": [
                "Rich in protein, iron, and fiber",
                "Common in Indian dals and curries",
                "Helps improve digestion",
                "Supports heart health",
                "Versatile in recipes"
              ],
              "description": "Urad dal is a popular legume used in Indian cooking, rich in protein and fiber, often included in dals and curries."
            }
          }
        ],
        "recommended": [
          {
            "image": "/img10.jpeg",
            "title": "Swan  5 chute 320 channel"
          },
          {
            "image": "/img11.jpeg",
            "title": "Swan 600 mm belt type machine"
          },
          {
            "image": "/img5.jpeg",
            "title": "swan 2 chute 128 channel box type"
          }
        ]
      },
      {
        "name": "Green Gram",
        "images": [
          {
            "src": "/green-bean-mung-bean-white_147493-76.webp",
            "title": "High-Quality Green Gram",
            "details": {
              "points": [
                "High in protein, fiber, and antioxidants",
                "Aids in weight management",
                "Good for blood sugar control",
                "Commonly used in soups and salads",
                "Popular in Asian and Indian cuisines"
              ],
              "description": "Green gram is a nutritious legume, high in protein and fiber, commonly used in soups, salads, and snacks."
            }
          }
        ],
        "recommended": [
          {
            "image": "/img6.jpeg",
            "title": "Swan 3 chute 192 channel"
          },
          {
            "image": "/img7.jpeg",
            "title": "Swan 8 chute 512 channel"
          },
          {
            "image": "/img2.jpeg",
            "title": "swan 300 mm belt type"
          }
        ]
      },
      {
        "name": "Channa",
        "images": [
          {
            "src": "/360_F_288614217_ebFduJmzbCDkgcmA5DL7pO2GDOSZdcU7.webp",
            "title": "Premium Channa",
            "details": {
              "points": [
                "Rich in protein and fiber",
                "Good for heart health",
                "Used in soups, stews, and salads",
                "Helps with digestion",
                "Common in Indian and Mediterranean dishes"
              ],
              "description": "Channa, or chickpeas, are a great source of plant-based protein and are widely used in cooking around the world."
            }
          }
        ],
        "recommended": [
          {
            "image": "/img4.jpeg",
            "title": "Swan 3 chute 192 channel"
          },
          {
            "image": "/img9.jpeg",
            "title": "Swan 1 chute 64 channel"
          },
          {
            "image": "/img10.jpeg",
            "title": "Swan  5 chute 320 channel"
          }
        ]
      },
      {
        "name": "Raisin",
        "images": [
          {
            "src": "/360_F_61227944_i9jxGjPzeHfCmhjVR7XYrr8NJves68Kf.webp",
            "title": "Healthy Raisins",
            "details": {
              "points": [
                "Rich in fiber, antioxidants, and vitamins",
                "Used in baking, desserts, and cooking",
                "Good for heart health",
                "Promotes digestive health",
                "Commonly consumed as a snack"
              ],
              "description": "Raisins are dried grapes, packed with nutrients and antioxidants, commonly used in cooking, baking, or as a snack."
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
            "image": "/img4.jpeg",
            "title": "Swan 3 chute 192 channel"
          }
        ]
      },
      {
        "name": "Toor Dal",
        "images": [
          {
            "src": "/360_F_215106928_FuYl9HSXh8rxdVib4SdcigMKLiNJDn5I.webp",
            "title": "Premium Toor Dal",
            "details": {
              "points": [
                "Rich in protein and fiber",
                "Good for heart health",
                "Used in soups and curries",
                "Popular in Indian cuisine",
                "Helps with digestion"
              ],
              "description": "Toor dal is a popular legume used in Indian cooking, packed with protein and fiber, ideal for dals and curries."
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
            "title": "Tswan 300 mm belt type"
          },
          {
            "image": "/img5.jpeg",
            "title": "swan 2 chute 128 channel box type"
          }
        ]
      },
      {
        "name": "Rice",
        "images": [
          {
            "src": "/photo-1613045935265-265ff612e0e2.webp",
            "title": "Premium Rice",
            "details": {
              "points": [
                "Rich in carbohydrates and energy",
                "Easy to digest",
                "Common in many global cuisines",
                "Used in a variety of dishes",
                "Low in fat"
              ],
              "description": "Rice is a staple food worldwide, rich in carbohydrates and energy, widely used in both savory and sweet dishes."
            }
          }
        ],
        "recommended": [
          {
            "image": "/img5.jpeg",
            "title": "Swan 1 chute 64 channel"
          },
          {
            "image": "/img6.jpeg",
            "title": "Swan 8 chute 512 channel"
          },
          {
            "image": "/img8.jpeg",
            "title": "swan 2 chute 128 channel box type"
          },
        ]
      },
      {
        "name": "Coffee Beans",
        "images": [
          {
            "src": "/coffee-beans-and-ground-coffee.webp",
            "title": "Premium Coffee Beans",
            "details": {
              "points": [
                "Rich in caffeine and antioxidants",
                "Grown in tropical regions",
                "Used in brewing coffee",
                "Popular worldwide",
                "Supports mental alertness"
              ],
              "description": "Coffee beans are the foundation for coffee, providing caffeine and antioxidants, grown mainly in tropical regions."
            }
          }
        ],
        "recommended": [
          {
            "image": "/img5.jpeg",
            "title": "Swan 1 chute 64 channel"
          },
          {
            "image": "/img6.jpeg",
            "title": "Swan 8 chute 512 channel"
          },
          {
            "image": "/img8.jpeg",
            "title": "swan 2 chute 128 channel box type"
          },
        ]
      },
      {
        "name": "Peeled Garlic",
        "images": [
          {
            "src": "/467a7de616d369770cb23e30022eaff8603f7ee6.webp",
            "title": "Fresh Peeled Garlic",
            "details": {
              "points": [
                "Known for its strong flavor and medicinal properties",
                "Contains antioxidants and sulfur compounds",
                "Used in cooking and as a seasoning",
                "Promotes heart health",
                "Commonly used in many cuisines"
              ],
              "description": "Peeled garlic is widely used in cooking for its flavor and health benefits, containing antioxidants and sulfur compounds."
            }
          }
        ],
        "recommended": [
          {
            "image": "/img5.jpeg",
            "title": "Swan 1 chute 64 channel"
          },
          {
            "image": "/img6.jpeg",
            "title": "Swan 8 chute 512 channel"
          },
          {
            "image": "/img8.jpeg",
            "title": "swan 2 chute 128 channel box type"
          },
        ]
      },
      {
        "name": "Black Pepper",
        "images": [
          {
            "src": "/black-pepper (1).webp",
            "title": "Premium Black Pepper",
            "details": {
              "points": [
                "Rich in antioxidants and anti-inflammatory properties",
                "Commonly used as a seasoning",
                "Boosts metabolism",
                "Used in various cuisines worldwide",
                "Contains piperine, which promotes nutrient absorption"
              ],
              "description": "Black pepper is a versatile spice, rich in antioxidants and used in cooking to enhance flavor and promote health."
            }
          }
        ],
        "recommended": [
          {
            "image": "/img5.jpeg",
            "title": "Swan 1 chute 64 channel"
          },
          {
            "image": "/img6.jpeg",
            "title": "Swan 8 chute 512 channel"
          },
          {
            "image": "/img8.jpeg",
            "title": "swan 2 chute 128 channel box type"
          },
        ]
      },
      {
        "name": "Horsegram",
        "images": [
          {
            "src": "/Horse_Gram_BNC.webp",
            "title": "Premium Horsegram",
            "details": {
              "points": [
                "Rich in protein, iron, and fiber",
                "Helps in weight loss and digestion",
                "Common in Indian and Asian cuisines",
                "Used in soups, stews, and salads",
                "Helps in lowering cholesterol"
              ],
              "description": "Horsegram is a nutrient-dense legume, rich in protein and fiber, commonly used in soups, salads, and stews."
            }
          }
        ],
        "recommended": [
          {
            "image": "/img5.jpeg",
            "title": "Swan 1 chute 64 channel"
          },
          {
            "image": "/img6.jpeg",
            "title": "Swan 8 chute 512 channel"
          },
          {
            "image": "/img8.jpeg",
            "title": "swan 2 chute 128 channel box type"
          },
        ]
      },
    
      {
        "name": "Peanuts",
        "images": [
          {
            "src": "/Peanuts.webp",
            "title": "Fresh Peanuts",
            "details": {
              "points": [
                "High in protein, healthy fats, and antioxidants",
                "Used in snacks, butter, and oil",
                "Commonly grown in tropical regions",
                "Supports heart health",
                "Good for weight management"
              ],
              "description": "Peanuts are a protein-rich legume, commonly used in snacks, oils, and peanut butter, offering numerous health benefits."
            }
          }
        ],
        "recommended": [
          {
            "image": "/img5.jpeg",
            "title": "Swan 1 chute 64 channel"
          },
          {
            "image": "/img6.jpeg",
            "title": "Swan 8 chute 512 channel"
          },
          {
            "image": "/img8.jpeg",
            "title": "swan 2 chute 128 channel box type"
          },
        ]
      },
      {
        "name": "Masoor Dal",
        "images": [
          {
            "src": "/360_F_366619034_7vvQPpAZO8Qhd52VM5GxQcHN518qOTuL.webp",
            "title": "High-Quality Masoor Dal",
            "details": {
              "points": [
                "Rich in protein, fiber, and iron",
                "Commonly used in soups, stews, and curries",
                "Helps in maintaining heart health and digestion",
                "Quick cooking and versatile",
                "Popular in Indian and Middle Eastern cuisines"
              ],
              "description": "Masoor dal, or red lentils, is a popular pulse that cooks quickly and is used in soups, stews, and curries, providing protein and fiber."
            }
          }
        ],
        "recommended": [
          {
            "image": "/img5.jpeg",
            "title": "Swan 1 chute 64 channel"
          },
          {
            "image": "/img6.jpeg",
            "title": "Swan 8 chute 512 channel"
          },
          {
            "image": "/img8.jpeg",
            "title": "swan 2 chute 128 channel box type"
          },
        ]
      },
      {
        "name": "Sesame Seeds",
        "images": [
          {
            "src": "/sesame-seeds.webp",
            "title": "High-Quality Sesame Seeds",
            "details": {
              "points": [
                "Rich in calcium, iron, and magnesium",
                "Used in baking, cooking, and as a topping",
                "Contains antioxidants and promotes heart health",
                "Commonly used in Middle Eastern and Asian cuisines",
                "Helps in improving bone and skin health"
              ],
              "description": "Sesame seeds are a nutrient-dense food, rich in calcium and antioxidants, often used in cooking, baking, and as a topping."
            }
          }
        ],
        "recommended": [
          {
            "image": "/img8.jpeg",
            "title": "Swan 1 chute 64 channel"
          },
          {
            "image": "/img6.jpeg",
            "title": "Swan 8 chute 512 channel"
          },
          {
            "image": "/img5.jpeg",
            "title": "swan 2 chute 128 channel box type"
          },
        ]
      },
      {
        "name": "Wheat",
        "images": [
          {
            "src": "/360_F_19316220_OLQSBnSaLUe1eAK7sGOKHSDP0c6IkpRz.webp",
            "title": "High-Quality Wheat",
            "details": {
              "points": [
                "High in protein content and milling quality",
                "Uniform grain size and low moisture content",
                "Free from impurities and suitable for making flour",
                "Widely used for baking bread, pasta, and other products",
                "Helps in maintaining energy levels and digestive health"
              ],
              "description": "Wheat is a staple cereal grain, used for making flour, bread, and other products, providing high energy and digestive benefits."
            }
          }
        ],
        "recommended": [
          {
            "image": "/img8.jpeg",
            "title": "Swan 1 chute 64 channel"
          },
          {
            "image": "/img6.jpeg",
            "title": "Swan 8 chute 512 channel"
          },
          {
            "image": "/img5.jpeg",
            "title": "swan 2 chute 128 channel box type"
          },
        ]
      },
      {
        "name": "Almonds",
        "images": [
          {
            "src": "/360_F_263888294_P7wNhukeWJs2cbIpHwN78kErD9CpWJem.webp",
            "title": "Fresh Almonds",
            "details": {
              "points": [
                "Rich in healthy fats, protein, and fiber",
                "Contains antioxidants and supports heart health",
                "Used in snacking, baking, and cooking",
                "Popular in Mediterranean and Asian cuisines",
                "Provides energy and helps in weight management"
              ],
              "description": "Almonds are a nutrient-packed nut, rich in healthy fats, antioxidants, and fiber, used in snacking, baking, and cooking."
            }
          }
        ],
        "recommended": [
          {
            "image": "/img5.jpeg",
            "title": "Swan 1 chute 64 channel"
          },
          {
            "image": "/img6.jpeg",
            "title": "Swan 8 chute 512 channel"
          },
          {
            "image": "/img8.jpeg",
            "title": "swan 2 chute 128 channel box type"
          },
        ]
      },
      {
        "name": "Tea Leaves",
        "images": [
          {
            "src": "/360_F_962048098_EjzbHGAkKQkjObta7QrAmlq5NkHtvchW.webp",
            "title": "Premium Tea Leaves",
            "details": {
              "points": [
                "Rich in antioxidants and polyphenols",
                "Supports metabolism and weight management",
                "Commonly used in various beverages",
                "Promotes mental clarity and focus",
                "Can improve heart health"
              ],
              "description": "Tea leaves are packed with antioxidants and are known for their health benefits, including boosting metabolism and improving mental clarity."
            }
          }
        ],
        "recommended": [
          {
            "image": "/img8.jpeg",
            "title": "Swan 1 chute 64 channel"
          },
          {
            "image": "/img6.jpeg",
            "title": "Swan 8 chute 512 channel"
          },
          {
            "image": "/img5.jpeg",
            "title": "swan 2 chute 128 channel box type"
          },
        ]
      },
      // {
      //   "name": "Quartz",
      //   "images": [
      //     {
      //       "src": "/photo-quartz.avif",
      //       "title": "High-Quality Quartz",
      //       "details": {
      //         "points": [
      //           "Used in construction, electronics, and jewelry",
      //           "Highly durable and resistant to scratching",
      //           "Often used in countertops and decorative items",
      //           "Conducts electricity in its purest form",
      //           "Common in various industrial applications"
      //         ],
      //         "description": "Quartz is a durable, versatile material commonly used in construction, electronics, and jewelry, prized for its scratch resistance and aesthetic appeal."
      //       }
      //     }
      //   ],
      //   "recommended": [
      //     {
      //       "image": "/img1.jpeg",
      //       "title": "Quartz Sorting Machine"
      //     },
      //     {
      //       "image": "/img2.jpeg",
      //       "title": "Quartz Processing Equipment"
      //     }
      //   ]
      // },
      {
        "name": "Maize Grains",
        "images": [
          {
            "src": "/360_F_677013430_1jLnnjZuxQGfHIwPkZXzMYSxN2eb8Lel.webp",
            "title": "Premium Maize Grains",
            "details": {
              "points": [
                "Rich in carbohydrates and fiber",
                "Used in cooking, snacks, and animal feed",
                "High in vitamins B and C",
                "Helps in digestion and energy production",
                "Common in staple foods worldwide"
              ],
              "description": "Maize grains are a staple crop, rich in carbohydrates and fiber, and used in a variety of dishes, snacks, and animal feed."
            }
          }
        ],
        "recommended": [
          {
            "image": "/img4.jpeg",
            "title": "Swan 1 chute 64 channel"
          },
          {
            "image": "/img8.jpeg",
            "title": "Swan 8 chute 512 channel"
          },
          {
            "image": "/img5.jpeg",
            "title": "swan 2 chute 128 channel box type"
          },
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
              MultiGrains Materials
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
