"use client";
import React from "react";
import { motion } from "framer-motion";

const Latestnews = () => {
  const newsData = [
    {
      date: "12/02/2025",
      title: "Enhancing Efficiency with Smart Sorting – Swan at PRSE 2025",
      image:
        "https://images.unsplash.com/photo-1513757378314-e46255f6ed16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFubmVyfGVufDB8fDB8fHww",
      link: "/LatestNews",
    },
    {
      date: "16/01/2025",
      title: "Swan Unveils High-Speed Sorting Machines",
      image:
        "https://images.unsplash.com/photo-1513757378314-e46255f6ed16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFubmVyfGVufDB8fDB8fHww",
      link: "/LatestNews",
    },
    {
      date: "30/09/2024",
      title: "Boosting Productivity with AI Sorting Showcase",
      image:
        "https://images.unsplash.com/photo-1513757378314-e46255f6ed16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFubmVyfGVufDB8fDB8fHww",
      link: "/LatestNews",
    },
  ];

  return (
    <div className="w-full min-h-full bg-gradient-to-r from-gray-100 to-white">
      <motion.section
        className="w-full py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Check out Our{" "}
          <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 font-bold rounded-xl">
            Latest
          </span>{" "}
          News
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12">
          {newsData.map((news, index) => (
            <motion.div
              key={index}
              className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <p className="text-gray-500 text-sm">{news.date}</p>
                <h3 className="text-lg font-bold mt-2">{news.title}</h3>
                <a
                  href={news.link}
                  className="text-blue-600 font-semibold mt-3 inline-block"
                >
                  Read more &gt;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Latestnews;
