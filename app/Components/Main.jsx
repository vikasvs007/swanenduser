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

  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown");
    if (popupShown !== "true") {
      setPopupOpen(true);
      localStorage.setItem("popupShown", "true");
    }
  }, []);

  return (
    <div className="w-full h-auto overflow-hidden">
       <AutoPopupChat/>
      <VisitorPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
      {!popupOpen && (
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
         
        </>
      )}
    </div>
  );
};

export default Main;
