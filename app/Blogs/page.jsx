"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Tag, User } from "lucide-react";
import Navbar from "../Components/NavbarLinks/Navbar";

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const events = [
  {
    img: "/photo-1513757378314-e46255f6ed16.avif",
    title: "Meyer Europe at PRSE 2025 – Visit Us at RAI Amsterdam",
    author: "Monika Pawlińska",
    date: "12/02/2025",
    tags: ["Event", "Fairs", "PRS"],
  },
  {
    img: "/photo-1513757378314-e46255f6ed16.avif",
    title:
      "What is aflatoxin, and how optical sorting can help to reduce infection?",
    author: "John Doe",
    date: "15/03/2025",
    tags: ["Science", "Health"],
  },
  {
    img: "/photo-1513757378314-e46255f6ed16.avif",
    title: "Sorting challenges of the Milling and Grain Processing Industry",
    author: "Jane Smith",
    date: "20/04/2025",
    tags: ["Industry", "Technology"],
  },
  {
    img: "/photo-1513757378314-e46255f6ed16.avif",
    title: "Chute vs Belt Optical Sorters: Key Differences and Applications",
    author: "Alex Brown",
    date: "30/05/2025",
    tags: ["Sorting", "Machines"],
  },
  {
    img: "/photo-1513757378314-e46255f6ed16.avif",
    title: "Innovations in Recycling Technology at PRSE 2025",
    author: "Michael Lee",
    date: "10/06/2025",
    tags: ["Recycling", "Sustainability"],
  },
  {
    img: "/photo-1513757378314-e46255f6ed16.avif",
    title: "Next-Gen Optical Sorting Systems: A Closer Look",
    author: "Emily Davis",
    date: "25/07/2025",
    tags: ["Tech", "Future"],
  },
  {
    img: "/photo-1513757378314-e46255f6ed16.avif",
    title: "Sustainable Solutions in Waste Management",
    author: "Daniel Wilson",
    date: "08/08/2025",
    tags: ["Environment", "Waste"],
  },
  {
    img: "/photo-1513757378314-e46255f6ed16.avif",
    title: "Advancing AI in Sorting Technology",
    author: "Laura White",
    date: "15/09/2025",
    tags: ["AI", "Innovation"],
  },
  {
    img: "/photo-1513757378314-e46255f6ed16.avif",
    title: "Understanding the Future of Food Safety with Optical Sorting",
    author: "Chris Martin",
    date: "05/10/2025",
    tags: ["Food", "Safety"],
  },
  {
    img: "/photo-1513757378314-e46255f6ed16.avif",
    title: "Global Trends in Recycling: What to Expect in 2026",
    author: "Sophia Green",
    date: "22/11/2025",
    tags: ["Trends", "Global"],
  },
];

const page = () => {
  return (
    <div className="w-full overflow-hidden min-h-screen bg-gray-100">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Navbar />
      </motion.div>

      <div className="w-full max-w-6xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="w-full md:w-1/2 relative">
            <Image
              src="/img1.jpeg"
              alt="Event Banner"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Global Innovations at PRSE 2025 – Join Us at RAI Amsterdam
            </h2>
            <div className="flex items-center text-gray-600 text-sm mt-3">
              <User className="w-4 h-4 mr-2" />
              <span>Author: Monika Pawlińska</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm mt-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Date: 12/02/2025</span>
            </div>
            <div className="flex flex-wrap mt-4 gap-2">
              <span className="bg-green-600 text-white font-bold px-4 py-2 rounded-full">
                Read More
              </span>
            </div>
          </div>
        </motion.div>

        <div className="w-full max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white text-gray-900 p-8 rounded-lg shadow-lg flex flex-col hover:shadow-xl transition duration-300"
            >
              <Image
                src={event.img}
                alt={event.title}
                width={350}
                height={250}
                className="rounded-lg w-full object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{event.title}</h3>
              <div className="flex items-center text-gray-600 text-sm mt-3">
                <User className="w-5 h-5 mr-2" />
                <span>{event.author}</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm mt-2">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex flex-wrap mt-5 gap-3">
                {event.tags.map((tag) => (
                  <span key={tag} className="bg-gray-200 text-gray-800 text-sm px-4 py-2 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#" className="text-blue-600 text-lg mt-5 inline-block font-semibold">
                Read More &gt;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;