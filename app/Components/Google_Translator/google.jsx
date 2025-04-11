"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, Globe } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "bn", name: "Bengali" },
  { code: "te", name: "Telugu" },
  { code: "mr", name: "Marathi" },
  { code: "ta", name: "Tamil" },
  { code: "ur", name: "Urdu" },
  { code: "gu", name: "Gujarati" },
  { code: "ml", name: "Malayalam" },
  { code: "pa", name: "Punjabi" },
  { code: "or", name: "Odia" },
  { code: "as", name: "Assamese" },
  { code: "ma", name: "Maithili" },
  { code: "bh", name: "Bhojpuri" },
  { code: "ne", name: "Nepali" },
  { code: "sd", name: "Sindhi" },
  { code: "sa", name: "Sanskrit" },
  { code: "ks", name: "Kashmiri" },
  { code: "doi", name: "Dogri" },
  { code: "mn", name: "Manipuri" },
  { code: "kok", name: "Konkani" },
  { code: "mni", name: "Meitei" },
  { code: "brx", name: "Bodo" },
  { code: "sat", name: "Santhali" },
  { code: "lep", name: "Lepcha" },
  { code: "raj", name: "Rajasthani" },
  { code: "gbm", name: "Garhwali" },
  { code: "kxu", name: "Kurukh" },
];

const GoogleTranslateDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
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
      const existingScript = document.getElementById("google-translate-script");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

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
      {/* Button */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 py-2 text-white rounded-md transition"
      >
        <span>
          <Globe size={20} />
        </span>
        <ChevronDown size={18} />
      </button>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute top-12 right-0 z-50 bg-gradient-to-r from-[#1f3d3b] to-[#2b4a48] text-white p-3 rounded-md shadow-lg border w-52">
          <ul
            className={`space-y-2 ${
              showAll ? "max-h-64 overflow-y-auto pr-1" : ""
            }`}
          >
            {(showAll ? languages : languages.slice(0, 4)).map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => changeLanguage(lang.code)}
                  className="block w-full text-left px-3 py-1 hover:scale-105 rounded-md"
                >
                  {lang.name}
                </button>
              </li>
            ))}
          </ul>

          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-3 text-center w-full text-sm text-blue-200 hover:text-white hover:underline"
            >
              Read More →
            </button>
          )}
        </div>
      )}

      {/* Google Translate Widget (hidden) */}
      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
};

export default GoogleTranslateDropdown;
