"use client";

import React, { useState } from "react";
import axios from "axios";

const VisitorPopup = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [collected, setCollected] = useState(false);

  const getVisitorIP = async () => {
    setLoading(true);
    try {
      const ipRes = await axios.get("https://api.ipify.org?format=json");
      const ip = ipRes.data.ip;

      const userAgent = navigator.userAgent;
      const browser = navigator.userAgentData?.brands?.[1]?.brand || "Unknown";
      const os = navigator.userAgentData?.platform || navigator.platform || "Unknown";

      const getLocation = () =>
        new Promise((resolve) => {
          if (!navigator.geolocation) return resolve([]);
          navigator.geolocation.getCurrentPosition(
            (pos) => resolve([pos.coords.latitude, pos.coords.longitude]),
            () => resolve([]),
            { timeout: 10000 }
          );
        });

      const coordinates = await getLocation();

      const payload = {
        ip_address: ip,
        device_info: userAgent,
        browser,
        os,
        location: {
          coordinates,
        },
      };

      const res = await axios.post("https://swanbackend.onrender.com/api/visitors", payload);

      if (res.status === 201 || res.status === 200) {
        console.log("✅ Visitor info submitted:", payload);
        setCollected(true);
        setTimeout(() => onClose(), 1200);
      }
    } catch (err) {
      console.error("❌ Error collecting visitor info:", err);
    }
    setLoading(false);
  };

  const handleToggle = async () => {
    if (!collected) await getVisitorIP();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl px-6 py-8 w-[90%] max-w-md animate-slideUp">
        <h2 className="text-2xl font-bold text-center mb-2">🚀 Quick Setup</h2>
        <hr className="mb-4 border-gray-200" />
        <p className="text-sm text-gray-600 text-center mb-6">
          We'd like to collect basic info to personalize your experience. 🔐
        </p>

        <div className="flex items-center justify-center space-x-3">
          <span className="text-sm font-medium text-gray-700">Allow</span>
          <button
            onClick={handleToggle}
            disabled={loading || collected}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
              collected ? "bg-green-500" : "bg-gray-300"
            }`}
            aria-label="Allow tracking toggle"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                collected ? "translate-x-6" : ""
              }`}
            ></span>
          </button>

          {loading && (
            <div className="ml-2 w-4 h-4 border-2 border-t-transparent border-gray-400 rounded-full animate-spin" />
          )}
          {collected && (
            <span className="ml-2 text-green-600 font-semibold">✔ Sent</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisitorPopup;
