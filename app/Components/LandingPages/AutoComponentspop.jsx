// components/AutoPopupChat.js
"use client";

import React, { useState, useEffect } from "react";

const AutoPopupChat = () => {
  const [visible, setVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    {
      title: "🎉 Best Sorting Machines ",
      subtitle: "Get up to 25% off on Sorting Machines",
      note: "Chat with us to grab your deal today!",
      image: "/img1.jpeg",
    },
    {
      title: "Need help choosing a machine?",
      subtitle: "Our team is ready to guide you",
      note: "Find the perfect match for your needs.",
      image: "/img4.jpeg",
    },
    {
      title: "💡 Custom Sorting Solutions",
      subtitle: "We build it to suit your business",
      note: "Let’s start your free consultation!",
      image: "/img3.jpg",
    },
  ];

  const showPopup = () => {
    setVisible(true);
  };

  useEffect(() => {
    const delay = Math.floor(Math.random() * 10000) + 10000; // 10–20 sec
    const initialTimer = setTimeout(() => {
      showPopup();
    }, delay);

    return () => clearTimeout(initialTimer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
      setVisible(true);
    }, 15000); // Reappear after 15 seconds
  };

  const current = messages[messageIndex];

  return (
    <div
      className={`fixed bottom-6 left-6 transition-all duration-500 ease-in-out z-[999999999] ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <div className="bg-white border shadow-2xl rounded-3xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-gray-800 overflow-hidden relative">
        <img
          src={current.image}
          alt="Popup Banner"
          className="w-[50%] m-auto h-40 sm:h-52 md:h-56 object-cover"
        />
        <div className="p-6">
          <h4 className="font-bold text-xl sm:text-2xl mb-1">{current.title}</h4>
          <p className="text-base sm:text-lg mb-1">{current.subtitle}</p>
          <p className="text-sm sm:text-base text-gray-600 mb-3">{current.note}</p>
          <button className="text-blue-600 hover:underline text-sm sm:text-base font-medium">
            <a href="/contact">Chat Now →</a>
          </button>
        </div>
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
          onClick={handleClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default AutoPopupChat;
