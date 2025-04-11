"use client";
import React, { useState, useEffect } from "react";

import Hero from "./LandingPages/Hero";
import TechnologyPage from "./LandingPages/TechnologyPage";
import ProductsPage from "./LandingPages/ProductsPage";
import AboutUsPage from "./LandingPages/AboutUsPage";
import Footerpage from "./LandingPages/Footerpage";
import Gallery from "./LandingPages/Gallery";
import ChatBot from "./ChatBot/ChatBot";
import OurAims from "./LandingPages/OurAims";
import TeamSection from "./LandingPages/TeamSection";
import BusinessGrowthBanner from "./LandingPages/BusinessGrowthBanner";
import Latestnews from "./LandingPages/Latestnews";
import FAQSection from "./LandingPages/FAQsection";
import VisitorPopup from "../Components/VisitorPages/Visitor";
import AutoPopupChat from "./LandingPages/AutoComponentspop";

const Main = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown");

    // Show landing page immediately
    setShowLanding(true);

    // Delay popup if not shown before
    if (popupShown !== "true") {
      const timer = setTimeout(() => {
        setPopupOpen(true);
        localStorage.setItem("popupShown", "true");
      }, 5000); // 5 seconds delay

      // Cleanup timer
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="w-full h-auto overflow-hidden">
      {showLanding && (
        <>
          <Hero />
          <TechnologyPage />
          <Latestnews />
          <OurAims />
          <BusinessGrowthBanner />
          <ProductsPage />
          <AboutUsPage />
          <TeamSection />
          <FAQSection />
          <Gallery />
          <Footerpage />
          <ChatBot />
          <AutoPopupChat />
        </>
      )}

      {/* Show popup only after landing is shown */}
      {popupOpen && <VisitorPopup open={popupOpen} onClose={handleClosePopup} />}
    </div>
  );
};

export default Main;
