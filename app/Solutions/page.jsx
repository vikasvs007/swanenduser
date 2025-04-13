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
    id: "MultiGrains",
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
            details: {
              points: [
                "High protein content",
                "Excellent milling quality",
                "Uniform grain size",
                "Low moisture content",
                "Free from impurities",
              ],
              description:
                "High-quality wheat is essential for producing premium flour and bread.",
            },
          },
          {
            src: "/premium_photo-1726862459894-aca62bf8a756.avif",
            title: "Wheat Sorting ",
            details: {
              points: [
                "Removes broken kernels",
                "Eliminates foreign material",
                "Improves product purity",
                "Increases market value",
                "Ensures consistent quality",
              ],
              description:
                "Efficient sorting improves the quality and value of the wheat.",
            },
          },
          {
            src: "/photo-1574323347407-f5e1ad6d020b.avif",
            title: "Color Sorting",
            details: {
              points: [
                "Detects subtle color variations",
                "Removes discolored grains",
                "Enhances visual appeal",
                "Increases product uniformity",
                "Reduces defects",
              ],
              description:
                "Color sorting removes discolored or damaged grains.",
            },
          },
          {
            src: "/photo-1646995892749-1bb82ae1679b.avif",
            title: "Defect Sorting",
            details: {
              points: [
                "Identifies damaged grains",
                "Removes diseased kernels",
                "Prevents contamination",
                "Ensures food safety",
                "Improves overall quality",
              ],
              description:
                "Defect sorting ensures only the best grains are selected.",
            },
          },
        ],
        recommended: [
          {
            image: "/img1.jpeg",
            title: "swan 300 belt type ms frame",
          },
          {
            image: "/img2.jpeg",
            title: "swan 300 mm belt type",
          },
          {
            image: "/img3.jpg",
            title: "swan 1 chute 64 channels",
          },
        ],
      },
      {
        name: "Rice",
        images: [
          {
            src: "/photo-1612708074992-c7936e82c99b.avif",
            title: " Steam Rice,",
            details: {
              points: [
                "Short, sticky grains",
                "High amylopectin content",
                "Moist texture",
                "Mild flavor",
                "Suitable for sushi",
              ],
              description:
                "Steam Rice rice is known for its short, sticky grains.",
            },
          },
          {
            src: "/photo-1627482265910-5c0ff6bee088.avif",
            title: "Boiled Rice, Rice",
            details: {
              points: [
                "Contains impurities",
                "Inconsistent quality",
                "Lower market value",
                "Higher risk of defects",
                "Variable cooking time",
              ],
              description:
                "Boiled Rice rice contains impurities and broken grains.",
            },
          },
          {
            src: "/photo-1612708074992-c7936e82c99b.avif",
            title: "Broken Rice",
            details: {
              points: [
                "Whole grain",
                "Nutrient-rich",
                "High in fiber",
                "Nutty flavor",
                "Longer cooking time",
              ],
              description:
                "Broken rice is a whole grain rice with the bran layer intact.",
            },
          },
          {
            src: "/Poha-Flattened-Rice-Flakes-Piping-Pot-Curry-1.webp", // Add image path if available
            title: "Beaten Rice",
            details: {
                points: [
                    "Flattened rice made by steaming paddy and then pressing it",
                    "Light and easy to digest",
                    "Commonly used in snacks, breakfast, and desserts",
                    "Also known as poha in India",
                    "Can be prepared with vegetables, spices, or sweeteners"
                ],
                description: "Beaten rice, also known as poha, is a light, flattened rice that is commonly used in Indian cuisine for making quick, nutritious breakfasts and snacks."
            },
        }
        
        ],
        recommended: [
          {
            image: "/img4.jpeg",
            title: "Swan 3 chute 192 channel",
          },
          {
            image: "/img5.jpeg",
            title: "swan 2 chute 128 channel box type",
          },
          {
            image: "/img6.jpeg",
            title: "Swan 3 chute 192 channel",
          },
        ],
      },
      {
        name: "Dal",
        description:
          "Dals are an essential part of Indian cuisine, offering rich protein, fiber, and vital nutrients. From Toor Dal to Masoor Dal, each variety brings a unique flavor and texture to everyday meals. Perfect for soups, curries, and stews, dals are a staple in vegetarian and health-conscious diets.",
        images: [
          {
            src: "/photo-1702041357314-db5826c96f04.avif",
            title: "Toor Dal",
            details: {
              points: [
                "Staple grain",
                "Used in various curries",
                "High in protein",
                "Popular in Indian households",
                "Easy to cook",
              ],
              description:
                "Toor Dal is a widely used lentil in Indian cooking, essential for dishes like sambar and dal fry.",
            },
          },
          {
            src: "/photo-1694679671688-3d9bb5e77f37.avif",
            title: "Moong Dal",
            details: {
              points: [
                "Light and easy to digest",
                "Rich in fiber",
                "Ideal for khichdi and soups",
                "Quick to cook",
                "Low in fat",
              ],
              description:
                "Moong Dal is a highly nutritious lentil known for its versatility and ease of digestion.",
            },
          },
          {
            src: "/photo-1732680086236-45d986974942.avif",
            title: "Masoor Dal",
            details: {
              points: [
                "Earthy flavor",
                "Great for spicy dals",
                "Cooks quickly",
                "High in iron",
                "Used in stews and curries",
              ],
              description:
                "Masoor Dal has a rich, earthy taste and is often used in Indian and Middle Eastern dishes.",
            },
          },
          {
            src: "/360_F_423753065_Q6bkjsCwyMAOdY5JEs1UMBIVpoXz6NIM.webp",
            title: "Chana Dal",
            details: {
              points: [
                "Nutty flavor",
                "Rich in fiber",
                "Used in snacks and curries",
                "Made from split chickpeas",
                "Helps manage blood sugar",
              ],
              description:
                "Chana Dal is a protein-rich pulse made from split chickpeas, widely used in Indian dishes and sweets.",
            },
          },
          {
            src: "/photo-1615485500710-aa71300612aa.avif",
            title: "Green Moong",
            details: {
              points: [
                "Sproutable for salads",
                "Rich in antioxidants",
                "Mild taste",
                "Common in Indian and Asian cuisine",
                "Good for detox",
              ],
              description:
                "Whole Green Moong is a healthy legume, often sprouted and used in salads or stews.",
            },
          },
          {
            src: "/black-e1683893256576.webp",
            title: " Urad Dal Whole",
            details: {
              points: [
                "Earthy flavor",
                "Great for spicy dals",
                "Cooks quickly",
                "High in iron",
                "Used in stews and curries",
              ],
              description:
                "Urad Dal Whole  has a rich, earthy taste and is often used in Indian and Middle Eastern dishes.",
            },
          },
          {
            src: "/split-urad-dal-black_1.webp",
            title: " Urad Dal",
            details: {
              points: [
                "Earthy flavor",
                "Great for spicy dals",
                "Cooks quickly",
                "High in iron",
                "Used in stews and curries",
              ],
              description:
                "Masoor Dal has a rich, earthy taste and is often used in Indian and Middle Eastern dishes.",
            },
          },
          {
            src: "/WHOLEREDTOOR.webp",
            title: "Toor Whole",
            details: {
              points: [
                "Earthy flavor",
                "Great for spicy dals",
                "Cooks quickly",
                "High in iron",
                "Used in stews and curries",
              ],
              description:
                "Masoor Dal has a rich, earthy taste and is often used in Indian and Middle Eastern dishes.",
            },
          },
        ],
        recommended: [
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
        ],
      },
      {
        name: "Fried Gram",
        images: [
          {
            src: "/white-chickpea-500x500.webp",
            title: "Fried Gram",
            details: {
              points: [
                "Roasted form of Bengal gram",
                "Rich in protein and fiber",
                "Used in chutneys and snacks",
                "Common in Indian cooking",
                "Eaten as a healthy snack",
              ],
              description:
                "Fried gram is a roasted version of Bengal gram, often consumed as a snack or used in chutneys and traditional Indian dishes.",
            },
          },
          {
            src: "/photo-1523312727315-7c6ae09c3d09.avif",
            title: "Guar Gum",
            details: {
              points: [
                "Derived from guar beans",
                "Used as a thickening agent",
                "Soluble in cold water",
                "Used in food, cosmetics, and industry",
                "Helps improve texture and shelf life",
              ],
              description:
                "Guar gum is a natural thickening agent extracted from guar beans, widely used in food processing, pharmaceuticals, and cosmetics.",
            },
          },
          {
            src: "/20220202_1057251.webp", // Add image path if available
            title: "Horse Gram",
            details: {
                points: [
                    "Protein-rich legume",
                    "Common in South Indian cuisine",
                    "Used in soups, curries, and chutneys",
                    "Known for medicinal and weight-loss benefits",
                    "Hard texture, requires soaking before cooking"
                ],
                description: "Horse gram is a nutrient-dense legume used in traditional Indian dishes, valued for its high protein content and health benefits including digestion and weight management."
            },
        }
        
        ],
        recommended: [
          {
            image: "/img10.jpeg",
            title: "Swan  5 chute 320 channel",
          },
          {
            image: "/img11.jpeg",
            title: "Swan 600 mm belt type machine",
          },
          {
            image: "/img12.jpeg",
            title: "Swan 1 chute 64 channel ms/ss frame",
          },
        ],
      },
      {
        name: "Seeds",
        images: [
          {
            src: "/360_F_98824546_XR0OYlogKI0vpfzdTAnQUm0P7Q8vbPRz.webp",
            title: "Poppy Seeds",
            details: {
              points: [
                "Popular snack",
                "Used to make peanut butter",
                "High in protein",
                "Rich in healthy fats",
                "Not technically a nut",
              ],
              description:
                "Poppy seeds are tiny, oil-rich seeds used for their nutty flavor in baking, sweets, and traditional curries, and are valued for their nutritional content.",
            },
          },
          {
            src: "/premium_photo-1674347954785-7604a0220776.avif",
            title: "Watermelon Seeds",
            details: {
              points: [
                "Can be roasted",
                "Edible seeds",
                "Good source of nutrients",
                "Crunchy texture",
                "Often discarded",
              ],
              description:
                "Watermelon seeds can be roasted and eaten as a snack.",
            },
          },
          {
            src: "/wp-1630312031523-scaled.webp",
            title: "Tamarind Seeds",
            details: {
              points: [
                "Obtained from tamarind fruit",
                "Used in traditional medicine",
                "Can be roasted and eaten",
                "Source of antioxidants",
                "Used to make tamarind seed powder",
              ],
              description:
                "Tamarind seeds are hard seeds found inside tamarind pods, often roasted or ground into powder for use in traditional remedies and culinary preparations.",
            },
          },
          {
            src: "/sesame-seeds.webp", // Add image path if available
            title: "Sesame Seeds",
            details: {
                points: [
                    "Tiny oil-rich seeds",
                    "Used in sweets and bakery items",
                    "Rich in calcium and iron",
                    "Available in white, black, and brown varieties",
                    "Pressed to extract sesame oil"
                ],
                description: "Sesame seeds are small, nutritious seeds used in cooking, baking, and oil extraction, known for their nutty flavor and health benefits."
            },
        },
        {
            src: "/360_F_1198176902_njOkg8q4l8pFh8GHih4pqoWpPgEvRJlh.webp",
            title: "Fenugreek Seeds",
            details: {
                points: [
                    "Strong bitter flavor",
                    "Used in spice blends and pickles",
                    "Aid in digestion and blood sugar control",
                    "Used in Ayurvedic medicine",
                    "Can be sprouted and eaten"
                ],
                description: "Fenugreek seeds are aromatic and bitter seeds commonly used in Indian cooking and traditional medicine for their health benefits."
            },
        },
        {
            src: "/niger-seed-close-up.webp",
            title: "Niger Seeds",
            details: {
                points: [
                    "Small black seeds",
                    "Rich in oil and protein",
                    "Used for bird feed and oil extraction",
                    "Common in Ethiopian cuisine",
                    "High in linoleic acid"
                ],
                description: "Niger seeds are tiny oil-rich seeds used for bird feed and cooking oil, valued for their nutritional properties and culinary use in select cuisines."
            },
        },
        {
            src: "/360_F_422437204_ZAa0YLQ6LEPm4dh98Cktnk84BLkfWjvw.webp",
            title: "Sunflower Seeds",
            details: {
                points: [
                    "Harvested from sunflower heads",
                    "Eaten raw, roasted, or in snacks",
                    "Rich in vitamin E and healthy fats",
                    "Used to extract sunflower oil",
                    "Promote heart health"
                ],
                description: "Sunflower seeds are nutrient-dense seeds used as a snack or pressed for oil, popular for their health benefits and crunchy texture."
            },
        },
        {
            src: "/360_F_1224560567_kpVqdkII4hP9FcRsFL25SqXNG58EOhOB.webp",
            title: "Pumpkin Seeds",
            details: {
                points: [
                    "Also known as pepitas",
                    "Rich in magnesium and zinc",
                    "Eaten roasted or raw",
                    "Support prostate and heart health",
                    "Used in salads, granola, and baking"
                ],
                description: "Pumpkin seeds, or pepitas, are edible seeds packed with nutrients and are often enjoyed roasted or added to a variety of dishes."
            },
        },
        {
            src: "/fennel-seeds-top-view_271326-7.webp",
            title: "Fennel Seeds",
            details: {
                points: [
                    "Sweet and aromatic flavor",
                    "Used in cooking and herbal teas",
                    "Aids digestion",
                    "Popular mouth freshener in India",
                    "Rich in antioxidants and fiber"
                ],
                description: "Fennel seeds are aromatic seeds used for seasoning, digestion, and freshening breath, commonly found in Indian cuisine and teas."
            },
        },
        {
            src: "/360_F_69517650_puotOHAWs5rTQ5Nj4LzVkBMPk8r0V4nB.webp", // Already shared earlier, but repeating with this batch
            title: "Poppy Seeds",
            details: {
                points: [
                    "Tiny, oil-rich seeds",
                    "Used in baking and cooking",
                    "Nutty flavor and crunchy texture",
                    "Rich in calcium and iron",
                    "Used in traditional sweets and curries"
                ],
                description: "Poppy seeds are tiny, oil-rich seeds used for their nutty flavor in baking, sweets, and traditional curries, and are valued for their nutritional content."
            },
        },
        {
            src: "/Amaranth_Grain.webp",
            title: "Rajgira Seeds (Ramdana Seeds)",
            details: {
                points: [
                    "Also known as amaranth seeds",
                    "Gluten-free and protein-rich",
                    "Used during fasting in India",
                    "Can be puffed or ground into flour",
                    "Good source of fiber and iron"
                ],
                description: "Rajgira seeds, also called Ramdana or amaranth seeds, are gluten-free grains used in fasting foods and traditional Indian snacks for their high nutritional value."
            },
        },
        {
            src: "/A2418245416ef4df5b3a985ff14dd9c6bk.png_300x300.webp", // Add image path if available
            title: "Almond Seeds",
            details: {
                points: [
                    "Edible seeds of the almond tree",
                    "Rich in healthy fats and vitamin E",
                    "Used in sweets, snacks, and milk",
                    "Good for heart and brain health",
                    "Can be eaten raw, soaked, or roasted"
                ],
                description: "Almond seeds are nutrient-rich edible seeds valued for their flavor and health benefits, commonly used in desserts, snacks, and almond milk."
            },
        },
        {
            src: "/cotton.webp",
            title: "Cotton Seeds Sorter",
            details: {
                points: [
                    "Used for sorting cotton seeds by quality",
                    "Helps in seed grading and processing",
                    "Essential for cotton seed oil industry",
                    "Improves efficiency in seed selection",
                    "Used in agricultural and industrial settings"
                ],
                description: "A Cotton Seeds Sorter is a machine designed to sort and grade cotton seeds efficiently, playing a key role in seed processing and oil production."
            },
        },
        {
            src: "/360_F_251903391_dEPKuDRvDF4kwEkzTH6dUfj20SxsXg50.webp",
            title: "Flaxseed",
            details: {
                points: [
                    "Rich in omega-3 fatty acids",
                    "High in fiber and antioxidants",
                    "Supports digestive and heart health",
                    "Used in smoothies, baking, and cereals",
                    "Can be consumed whole or ground"
                ],
                description: "Flaxseeds are tiny seeds known for their high omega-3 and fiber content, often added to foods for their nutritional and digestive benefits."
            },
        },
        {
            src: "/yellow-mustard-seed.webp", // Add image path if available
            title: "Mustard",
            details: {
                points: [
                    "Seeds used as spice and for oil extraction",
                    "Common in Indian and global cuisines",
                    "Available in black, yellow, and brown varieties",
                    "Used in pickles, tempering, and mustard paste",
                    "Rich in selenium and omega-3 fatty acids"
                ],
                description: "Mustard seeds are flavorful seeds used in cooking and oil production, known for their pungent taste and versatility in various cuisines."
            },
        },   
        {
            src: "/360_F_81663460_gpyKbEb3Rwd5eo3U9mNwlZu6Fhr7Wlh3.webp", // Add image path if available
            title: "Coriander Seeds",
            details: {
                points: [
                    "Dried seeds of the coriander plant",
                    "Used whole or ground in cooking",
                    "Has a warm, citrusy, and nutty flavor",
                    "Key ingredient in spice blends and pickling",
                    "Aids digestion and has medicinal properties"
                ],
                description: "Coriander seeds are fragrant, dried seeds used as a spice in culinary dishes and spice mixes, known for their flavor and digestive benefits."
            },
        }
        
        
        ],
        recommended: [
          {
            image: "/img1.jpeg",
            title: "swan 300 belt type ms frame",
          },
          {
            image: "/img11.jpeg",
            title: "Swan 600 mm belt type machine",
          },
          {
            image: "/img8.jpeg",
            title: "Swan 8 chute 512 channel",
          },
        ],
      },
      {
        name: "Maize",
        images: [
            {
                src: "/corn.webp", // Add image path if available
                title: "Maize",
                details: {
                    points: [
                        "Also known as corn",
                        "Staple food in many countries",
                        "Used for flour, cornmeal, and popcorn",
                        "Rich in carbohydrates and fiber",
                        "Used in food, fodder, and biofuel"
                    ],
                    description: "Maize, commonly known as corn, is a versatile grain crop used globally for food, animal feed, and industrial purposes like biofuel and starch production."
                },
            },
        ],
        recommended: [
            {
              image: "/img1.jpeg",
              title: "swan 300 belt type ms frame",
            },
            {
              image: "/img11.jpeg",
              title: "Swan 600 mm belt type machine",
            },
            {
              image: "/img8.jpeg",
              title: "Swan 8 chute 512 channel",
            },
          ],
      },
      {
        name: "Pepper",
        images: [
            {
                src: "/black-pepper.webp", // Add image path if available
                title: "Pepper",
                details: {
                    points: [
                        "Known as the king of spices",
                        "Used whole or ground as seasoning",
                        "Available in black, white, and green varieties",
                        "Adds pungency and flavor to dishes",
                        "Rich in antioxidants and aids digestion"
                    ],
                    description: "Pepper is a widely used spice known for its sharp flavor and aroma, commonly used in seasoning and traditional remedies around the world."
                },
            }
            
        ],
        recommended: [
          {
            image: "/img10.jpeg",
            title: "Swan  5 chute 320 channel",
          },
          {
            image: "/img11.jpeg",
            title: "Swan 600 mm belt type machine",
          },
          {
            image: "/img12.jpeg",
            title: "Swan 1 chute 64 channel ms/ss frame",
          },
        ],
      },

      {
        name: "Nuts",
        images: [
            {
                src: "/360_F_69825519_Fku0zeygKxz85qtbHMZzDTBDuPe3kPFp.webp", // Add image path if available
                title: "Pine Nuts",
                details: {
                    points: [
                        "Edible seeds of pine trees",
                        "Rich in healthy fats and protein",
                        "Used in pesto, salads, and baking",
                        "Delicate, buttery flavor",
                        "High in magnesium and iron"
                    ],
                    description: "Pine nuts are small, buttery seeds harvested from pine cones, commonly used in Mediterranean dishes like pesto and prized for their nutritional value."
                },
            },
            {
                src: "/360_F_407042220_gd0K3aNiJQTFPwg7BRw6p4Zlm75LEzRl.webp", // Add image path if available
                title: "Cashew Nuts",
                details: {
                    points: [
                        "Curved, creamy nuts",
                        "Used in sweets, curries, and snacks",
                        "Rich in healthy fats and minerals",
                        "Often roasted or used to make cashew butter",
                        "Grown mainly in tropical climates"
                    ],
                    description: "Cashew nuts are kidney-shaped seeds known for their creamy texture and are widely used in cooking, baking, and as a nutritious snack."
                },
            },
            {
                src: "/360_F_212701427_UKxS3mhFejLaCCv8uSQ4UWw03FTKhzG2.webp", // Add image path if available
                title: "Ground Nut",
                details: {
                    points: [
                        "Also known as peanuts",
                        "Consumed raw, roasted, or boiled",
                        "Used to make peanut butter and oil",
                        "High in protein and healthy fats",
                        "Common in Indian and global cuisine"
                    ],
                    description: "Ground nuts, or peanuts, are protein-rich legumes used in various culinary forms like roasted snacks, peanut butter, and cooking oil."
                },
            },
            {
                src: "/dried-betel-nut-on-the-floor.webp", // Add image path if available
                title: "Betel Nut",
                details: {
                    points: [
                        "Also called areca nut",
                        "Chewed with betel leaves in many cultures",
                        "Used in traditional ceremonies",
                        "Stimulating effects similar to caffeine",
                        "Common in Southeast Asia and India"
                    ],
                    description: "Betel nut, also known as areca nut, is traditionally chewed with betel leaves and holds cultural significance in many Asian communities."
                },
            },    
            {
                src: "/heap-macadamia-nuts-with-shells_493806-12754.webp", // Add image path if available
                title: "Macadamia",
                details: {
                    points: [
                        "Rich, buttery flavor and texture",
                        "Native to Australia but grown in various regions",
                        "High in healthy fats and antioxidants",
                        "Used in baking, desserts, and snacks",
                        "Commonly roasted or used to make macadamia butter"
                    ],
                    description: "Macadamia nuts are prized for their creamy, buttery flavor and high nutritional value, often used in baking, snacks, or enjoyed on their own."
                },
            }
                    
        ],
        recommended: [
          {
            image: "/img4.jpeg",
            title: "swan 3 Chute 192 Channel",
          },
          {
            image: "/img5.jpeg",
            title: "swan 2 chute 128 channel box type",
          },
          {
            image: "/img6.jpeg",
            title: "Swan 3 chute 192 channel",
          },
        ],
      },
      {
        name: "Dehydrated ",
        images: [
            {
                src: "/intro-1723846741.webp", // Add image path if available
                title: "Dehydrated Onion",
                details: {
                    points: [
                        "Made by drying fresh onions",
                        "Available in flakes, powder, and granules",
                        "Used in soups, sauces, and spice mixes",
                        "Long shelf life and easy to store",
                        "Retains flavor and aroma of fresh onion"
                    ],
                    description: "Dehydrated onion is processed by drying fresh onions, offering a convenient way to add onion flavor to recipes without the need for chopping or refrigeration."
                },
            },
            {
                src: "/Dehydrated-garlic_baking-ingredients-e1593724486708.webp", // Add image path if available
                title: "Dehydrated Garlic",
                details: {
                    points: [
                        "Made from dried garlic cloves",
                        "Available as flakes, powder, or granules",
                        "Enhances flavor in a variety of dishes",
                        "Easy to store and use",
                        "Used in spice blends, snacks, and sauces"
                    ],
                    description: "Dehydrated garlic is a concentrated, shelf-stable form of garlic used for seasoning and flavoring, perfect for convenient use in cooking."
                },
            },
            {
                src: "/dehydrated-red-potatoes-with-skin-sq-600x600.webp", // Add image path if available
                title: "Dehydrated Potato Peel",
                details: {
                    points: [
                        "Dried outer layer of the potato",
                        "Rich in fiber, antioxidants, and nutrients",
                        "Used in soups, broths, or as a crunchy snack",
                        "Helps reduce food waste by utilizing the peel",
                        "Retains most of the nutrients from the fresh potato"
                    ],
                    description: "Dehydrated potato peel is the dried outer skin of potatoes, offering a nutritious, eco-friendly addition to soups, snacks, and other dishes, packed with fiber and antioxidants."
                },
            }
        ],
        recommended: [
          {
            image: "/img10.jpeg",
            title: "Swan  5 chute 320 channel",
          },
          {
            image: "/img11.jpeg",
            title: "Swan 600 mm belt type machine",
          },
          {
            image: "/img12.jpeg",
            title: "Swan 1 chute 64 channel ms/ss frame",
          },
        ],
      },
      {
        name: "Beans",
        images: [
            {
                src: "/coffee-beans-and-ground-coffee.webp", // Add image path if available
                title: "Coffee Beans",
                details: {
                    points: [
                        "Roasted seeds of the coffee plant",
                        "Used to brew coffee beverages",
                        "Available in Arabica and Robusta varieties",
                        "Roast levels range from light to dark",
                        "Rich source of caffeine and antioxidants"
                    ],
                    description: "Coffee beans are roasted seeds of the Coffea plant, widely consumed for their bold flavor and stimulating caffeine content, and are essential in coffee production."
                },
            },
            // {
            //     src: "",
            //     title: "Tea Sorter",
            //     details: {
            //         points: [
            //             "Machine used to sort tea leaves by size and quality",
            //             "Enhances consistency in tea processing",
            //             "Used in tea factories and packaging units",
            //             "Can sort green, black, and herbal teas",
            //             "Improves tea grade and market value"
            //         ],
            //         description: "A Tea Sorter is a machine designed to classify tea leaves by size and texture, ensuring uniformity and quality in tea production and packaging."
            //     },
            // }            
            
        ],
        recommended: [
          {
            image: "/img10.jpeg",
            title: "Swan  5 chute 320 channel",
          },
          {
            image: "/img11.jpeg",
            title: "Swan 600 mm belt type machine",
          },
          {
            image: "/img12.jpeg",
            title: "Swan 1 chute 64 channel ms/ss frame",
          },
        ],
      },

      {
        name: "Jeera",
        images: [
            {
                src: "/idsjlnllbp10dhznfrhn.webp", // Add image path if available
                title: "Jeera",
                details: {
                    points: [
                        "Also known as cumin seeds",
                        "Warm, earthy flavor and aroma",
                        "Used in tempering, spice blends, and curries",
                        "Rich in iron and aids digestion",
                        "Popular in Indian, Middle Eastern, and Mexican cuisines"
                    ],
                    description: "Jeera, or cumin seeds, are a staple spice known for their distinct aroma and digestive benefits, widely used in cooking and traditional remedies."
                },
            }
            
        ],
        recommended: [
            {
              image: "/img1.jpeg",
              title: "swan 300 belt type ms frame",
            },
            {
              image: "/img11.jpeg",
              title: "Swan 600 mm belt type machine",
            },
            {
              image: "/img8.jpeg",
              title: "Swan 8 chute 512 channel",
            },
          ],
      },

      {
        name: "Garlic",
        images: [
            {
                src: "/peeled-garlic-471175766-2000-b417da82d8d749b9a6a7171124430d12 (1).webp", // Add image path if available
                title: "Peeled Garlic",
                details: {
                    points: [
                        "Garlic cloves with the skin removed",
                        "Ready to use in cooking",
                        "Common in pre-prepared dishes and sauces",
                        "Rich in allicin, known for health benefits",
                        "Used to enhance flavor in a wide variety of cuisines"
                    ],
                    description: "Peeled garlic refers to cloves with the skin removed, offering convenience in cooking and a strong, aromatic flavor used in many dishes worldwide."
                },
            },
            {
                src: "/fresh-garlic-on-vintage-table-garlics-clove-royalty-free-image-1691437626.webp",
                title: "Unpeeled Garlic",
                details: {
                    points: [
                        "Garlic with the skin intact",
                        "Fresh cloves retain more flavor and nutrients",
                        "Used for long-term storage",
                        "A good source of antioxidants and sulfur compounds",
                        "Typically used in whole cloves for roasting or seasoning"
                    ],
                    description: "Unpeeled garlic cloves are fresh, unprocessed bulbs that preserve the full flavor and nutrients, ideal for roasting or using in various dishes."
                },
            }            
        ],
        recommended: [
            {
              image: "/img5.jpeg",
              title: "swan 300 belt type ms frame",
            },
            {
              image: "/img1.jpeg",
              title: "Swan 600 mm belt type machine",
            },
            {
              image: "/img10.jpeg",
              title: "Swan 8 chute 512 channel",
            },
          ],
      },

      {
        name: "Clove",
        images: [
            {
                src: "/360_F_77814928_uAl4WZvHATAcXG0kf5KvTSAQ6VdMOTk9.webp", // Add image path if available
                title: "Clove",
                details: {
                    points: [
                        "Dried flower buds of the clove tree",
                        "Pungent and aromatic flavor",
                        "Used in cooking, baking, and beverages",
                        "Rich in antioxidants and medicinal properties",
                        "Common in spice blends like garam masala and pumpkin pie spice"
                    ],
                    description: "Cloves are aromatic flower buds used in cooking and medicine, known for their strong, spicy flavor and health benefits like pain relief and digestive support."
                },
            }
               
        ],
        recommended: [
            {
              image: "/img1.jpeg",
              title: "swan 300 belt type ms frame",
            },
            {
              image: "/img5.jpeg",
              title: "Swan 600 mm belt type machine",
            },
            {
              image: "/img8.jpeg",
              title: "Swan 8 chute 512 channel",
            },
          ],
      },

      {
        name: "Cardamom",
        images: [
            {
                src: "/360_F_47263334_Ib96bxeudiRvgLnTVK7Za5fGbW9AIi4Q.webp", // Add image path if available
                title: "Cardamom",
                details: {
                    points: [
                        "Aromatic spice from the seeds of the cardamom plant",
                        "Available in green (most common) and black varieties",
                        "Used in both sweet and savory dishes",
                        "Common in Indian, Middle Eastern, and Scandinavian cuisines",
                        "Known for its strong, sweet, and slightly spicy flavor"
                    ],
                    description: "Cardamom is a highly aromatic spice used in cooking, desserts, and beverages, valued for its unique flavor profile and digestive benefits."
                },
            }  
        ],
        recommended: [
            {
              image: "/img1.jpeg",
              title: "swan 300 belt type ms frame",
            },
            {
              image: "/img5.jpeg",
              title: "Swan 600 mm belt type machine",
            },
            {
              image: "/img8.jpeg",
              title: "Swan 8 chute 512 channel",
            },
          ],
      },

      {
        name: " Fruit",
        images: [
            {
                src: "/CoffeeFruitHeader.webp", // Add image path if available
                title: "Coffee Fruit",
                details: {
                    points: [
                        "The fruit of the Coffea plant",
                        "Contains coffee beans inside its fleshy outer layer",
                        "Harvested to extract beans for coffee production",
                        "Rich in antioxidants, especially chlorogenic acids",
                        "Also used in making coffee fruit extract for health supplements"
                    ],
                    description: "Coffee fruit, or coffee cherry, is the outer fruit that encases the coffee beans. It is rich in antioxidants and has potential health benefits, including boosting metabolism."
                },
            }            
        ],
        recommended: [
            {
              image: "/img1.jpeg",
              title: "swan 300 belt type ms frame",
            },
            {
              image: "/img5.jpeg",
              title: "Swan 600 mm belt type machine",
            },
            {
              image: "/img8.jpeg",
              title: "Swan 8 chute 512 channel",
            },
          ],
      },

      {
        name: "Corn Flakes",
        images: [
            {
                src: "/13749976-Cornflakes-corn-flakes-picture-filling.webp", // Add image path if available
                title: "Corn Flakes",
                details: {
                    points: [
                        "Made from toasted cornmeal",
                        "Popular breakfast cereal",
                        "Light, crispy texture with a mild flavor",
                        "Often served with milk or yogurt",
                        "Fortified with vitamins and minerals"
                    ],
                    description: "Corn flakes are crispy, toasted flakes made from corn, commonly enjoyed as a breakfast cereal, often fortified with vitamins and minerals for added nutrition."
                },
            }                     
        ],
        recommended: [
            {
              image: "/img2.jpeg",
              title: "swan 300 belt type ms frame",
            },
            {
              image: "/img3.jpg",
              title: "Swan 600 mm belt type machine",
            },
            {
              image: "/img7.jpeg",
              title: "Swan 8 chute 512 channel",
            },
          ],
      },

      {
        name: "Millets",
        images: [
            {
                src: "/4480e6e2bc8aa8cf85f0dbe5e2684e88.webp",
                title: "Kodo Millet",
                details: {
                    points: [
                        "A small, drought-resistant grain",
                        "Rich in fiber and antioxidants",
                        "Helps in managing blood sugar levels",
                        "Used in porridge, salads, and baked goods",
                        "Popular in India and parts of Africa"
                    ],
                    description: "Kodo millet is a nutritious, gluten-free grain known for its high fiber content and potential health benefits, commonly used in traditional dishes and as a healthy alternative to rice."
                }
            },
            {
                src: "/foxtail-millet.webp",
                title: "Foxtail Millet",
                details: {
                    points: [
                        "A small, golden-colored grain",
                        "Rich in protein, fiber, and iron",
                        "Helps in weight management and digestion",
                        "Used in a variety of dishes, from breakfast to dinner",
                        "Popular in Asia and known for its health benefits"
                    ],
                    description: "Foxtail millet is a highly nutritious, gluten-free grain that’s widely used in cooking, offering significant health benefits, including better digestion and weight management."
                }
            },
            {
                src: "/24087-2_4a6f027b-7498-4fef-9a14-b5caa94e93bf.webp",
                title: "Barnyard Millet",
                details: {
                    points: [
                        "Small, white, rice-like grain",
                        "Rich in fiber and low in calories",
                        "Helps in controlling blood sugar and cholesterol",
                        "Used in making porridge, pilafs, and snacks",
                        "Popular in traditional Indian and Asian cuisines"
                    ],
                    description: "Barnyard millet is a small, nutrient-rich grain known for its low calorie content and high fiber, making it a great choice for weight loss and managing health conditions like diabetes."
                }
            },
            {
                src: "/360_F_999766858_sapQCZ7wE3VoMh80o4PH8PK6APF8nLRa.webp",
                title: "Pearl Millet",
                details: {
                    points: [
                        "Round, hard grains that are usually yellow or white",
                        "High in protein, fiber, and essential minerals",
                        "Good for heart health and improving digestion",
                        "Used in breads, porridge, and as a rice substitute",
                        "A staple in Africa and India"
                    ],
                    description: "Pearl millet is a versatile, gluten-free grain known for its high nutritional value, including protein and fiber, and is often used in a variety of culinary dishes."
                }
            }
          ],
      },


      {
        name: "Grain",
        images: [
            {
                src: "/SizeCopy_8ead0bdc-f782-4589-8c8b-9419c20e7687.webp", // Add image path if available
                title: "Jowar Grain",
                details: {
                    points: [
                        "Also known as sorghum",
                        "Gluten-free and highly nutritious",
                        "Rich in fiber, protein, and essential minerals",
                        "Used to make flour, porridge, and traditional dishes",
                        "Common in Indian and African cuisines"
                    ],
                    description: "Jowar, or sorghum, is a highly nutritious gluten-free grain, commonly used in various dishes, including flatbreads, porridges, and as flour in many cuisines."
                },
            }
                 
        ],
        recommended: [
            {
              image: "/img5.jpeg",
              title: "swan 300 belt type ms frame",
            },
            {
              image: "/img1.jpeg",
              title: "Swan 600 mm belt type machine",
            },
            {
              image: "/img10.jpeg",
              title: "Swan 8 chute 512 channel",
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
            name: "Plastic and Minerals",
            images: [
                {
                    src: "/plastic-pellets.webp", // Add image path if available
                    title: "Plastic Granules",
                    details: {
                        points: [
                            "Used in manufacturing plastic products",
                            "Available in various colors and types",
                            "Commonly used for injection molding and extrusion",
                            "Versatile material for a wide range of industries",
                            "Made from recycled plastics or virgin plastic resins"
                        ],
                        description: "Plastic granules are small, granular pieces of plastic used in the production of plastic products. They are melted and molded into different shapes for a variety of applications, ranging from packaging to automotive parts."
                    }
                },
                {
                    src: "/5286846dd11f.webp", // Add image path if available
                    title: "Plastic Flakes",
                    details: {
                        points: [
                            "Shredded plastic materials used for recycling",
                            "Typically produced from bottles, containers, and other plastic waste",
                            "Used as raw material for reprocessing into new plastic products",
                            "Commonly used in the production of new bottles, fibers, and films",
                            "Helps in reducing plastic waste and environmental impact"
                        ],
                        description: "Plastic flakes are small, flat pieces of plastic typically derived from post-consumer waste, commonly used in recycling processes to produce new plastic items and reduce environmental impact."
                    }
                },
                {
                    src: "/quartz.webp", // Add image path if available
                    title: "Quartz",
                    details: {
                        points: [
                            "Hard, crystalline mineral composed of silicon and oxygen",
                            "Used in the production of glass, electronics, and ceramics",
                            "High thermal conductivity and low expansion",
                            "Commonly found in nature as quartz crystals",
                            "Essential in the manufacturing of semiconductors and photovoltaic cells"
                        ],
                        description: "Quartz is a highly abundant and versatile mineral used in a variety of industries, including electronics, glass, and ceramics, known for its hardness, stability, and various industrial applications."
                    }
                },
                ,
                {
                    src: "/minerals-and-crystals-many-different-kinds.webp", // Add image path if available
                    title: "Minerals",
                    details: {
                        points: [
                            "Natural substances found in the earth’s crust",
                            "Used in various industries, including construction, manufacturing, and technology",
                            "Includes a wide variety of minerals like metals, salts, and stones",
                            "Can be refined and processed for specific industrial applications",
                            "Important raw materials for energy, technology, and building materials"
                        ],
                        description: "Minerals are naturally occurring substances that are essential in various industries, providing raw materials for everything from construction to high-tech manufacturing."
                    }
                },
                {
                    src: "/91ONeWurn2L.webp", // Add image path if available
                    title: "Coals",
                    details: {
                        points: [
                            "Fossil fuel used primarily for energy production",
                            "Forms from plant material over millions of years",
                            "Used in power generation, steel production, and other industries",
                            "Varieties include anthracite, bituminous, sub-bituminous, and lignite",
                            "Important global energy source despite environmental concerns"
                        ],
                        description: "Coal is a black or brownish-black sedimentary rock that is a major energy source, used primarily in power plants and industrial processes, but also a significant contributor to global carbon emissions."
                    }
                }
            ],
            recommended: [
                {
                    image: "/img10.jpeg",
                    title: "Plastic Granules Sorting Machine"
                },
                {
                    image: "/img11.jpeg",
                    title: "Plastic Flakes Washing Machine"
                },
                {
                    image: "/img12.jpeg",
                    title: "Quartz Crusher Machine"
                },
                {
                    image: "/img13.jpeg",
                    title: "Conveyor Belt System"
                },
                {
                    image: "/img14.jpeg",
                    title: "Coal Screening Equipment"
                }
            ]
        }
    ],

  },
  // Add more categories as needed...
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
