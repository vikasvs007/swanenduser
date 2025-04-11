"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const VisitorPopup = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [collected, setCollected] = useState(false);

  const getVisitorInfo = async () => {
    setLoading(true);
    try {
      let ip = "";
      let country = "";
      let city = "";

      // Method 1: ipify + ipapi.co
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        ip = ipData.ip;

        const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
        const locationData = await locationResponse.json();

        if (!locationData.error) {
          country = locationData.country_name || "";
          city = locationData.city || "";
        } else {
          throw new Error("Location error");
        }
      } catch (error) {
        // Method 2: ipwho.is backup
        const geoResponse = await fetch('https://ipwho.is/');
        const geoData = await geoResponse.json();
        if (geoData.success !== false) {
          ip = geoData.ip;
          country = geoData.country || "";
          city = geoData.city || "";
        } else {
          throw new Error("Both methods failed");
        }
      }

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
          country,
          city,
          coordinates,
        },
      };

      const res = await axios.post("https://swanbackend.onrender.com/api/visitors", payload);

      if (res.status === 201 || res.status === 200) {
        console.log("✅ Visitor info submitted:", payload);
        setCollected(true);
        setTimeout(() => onClose(), 1500);
      }
    } catch (err) {
      console.error("❌ Error collecting visitor info:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (open && !collected) {
      getVisitorInfo();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl px-6 py-8 w-[90%] max-w-md animate-slideUp">
        <h2 className="text-2xl font-bold text-center mb-2">🔍 Improve Your Experience</h2>
        <hr className="mb-4 border-gray-200" />
        <p className="text-sm text-gray-600 text-center mb-6">
          We’re capturing basic insights to improve your experience.
        </p>

        <div className="text-center mt-4">
          {loading && (
            <div className="mx-auto w-6 h-6 border-2 border-t-transparent border-blue-500 rounded-full animate-spin" />
          )}
          {collected && (
            <span className="text-green-600 font-semibold text-lg">✔ Done</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisitorPopup;