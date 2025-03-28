"use client";
import React, { useEffect } from "react";

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



const Main = () => {
  return (
    <div className="w-full h-auto overflow-hidden ">      
      <Hero />
      <TechnologyPage />
      <Latestnews/>
      <OurAims />
      <BusinessGrowthBanner />
      <ProductsPage />
      <AboutUsPage />
      <TeamSection />
      <FAQSection/>
      <Gallery />
      <Footerpage />
      <ChatBot />
    </div>
  );
};

export default Main;
