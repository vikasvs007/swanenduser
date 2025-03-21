"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, Globe } from "lucide-react";

const GoogleTranslateDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Prevent duplicate script loading
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            { pageLanguage: "en", autoDisplay: false },
            "google_translate_element"
          );
        }
      };

      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.id = "google-translate-script";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.googleTranslateElementInit) {
          window.googleTranslateElementInit();
        }
      };

      document.body.appendChild(script);
    }

    return () => {
      // Optional: Cleanup script (if needed)
      const existingScript = document.getElementById("google-translate-script");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  // Function to change language
  const changeLanguage = (lang) => {
    const googleSelect = document.querySelector(".goog-te-combo");
    if (googleSelect) {
      googleSelect.value = lang;
      googleSelect.dispatchEvent(new Event("change"));
    } else {
      console.error("Google Translate dropdown not found!");
    }
  };

  return (
    <div className="relative">
      {/* Language Dropdown Button */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 py-2 text-white rounded-md transition"
      >
        <span>
          <Globe size={20} />
        </span>
        <ChevronDown size={18} />
      </button>

      {/* Dropdown List */}
      {showDropdown && (
        <div className="absolute top-12 right-0 z-50 bg-gradient-to-r from-[#1f3d3b] to-[#2b4a48] text-white p-3 rounded-md shadow-lg border w-52">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => changeLanguage("en")}
                className="block w-full text-left px-3 py-1 hover:scale-105 rounded-md"
              >
                English
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage("kn")}
                className="block w-full text-left px-3 py-1 hover:scale-105 rounded-md"
              >
                Kannada
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Google Translate Hidden Div */}
      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
};

export default GoogleTranslateDropdown;
