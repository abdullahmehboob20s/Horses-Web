import Footer from "layouts/Footer/Footer";
import ArtCollection from "layouts/HomePage/ArtCollection/ArtCollection";
import CountdownTimer from "layouts/HomePage/CountdownTimer/CountdownTimer";
import DevelopmentRoadmap from "layouts/HomePage/DevelopmentRoadmap/DevelopmentRoadmap";
import FAQ from "layouts/HomePage/FAQ/FAQ";
import Hero from "layouts/HomePage/Hero/Hero";
import KeyToUnlock from "layouts/HomePage/KeyToUnlock/KeyToUnlock";
import NFTS from "layouts/HomePage/NFTS/NFTS";
import OurBrain from "layouts/HomePage/OurBrain/OurBrain";
import Partners from "layouts/HomePage/Partners/Partners";
import PreSale from "layouts/HomePage/PreSale/PreSale";
import Section from "layouts/HomePage/Section/Section";
import Values from "layouts/HomePage/Values/Values";
import Roadmap from "layouts/HomePage/Roadmap/Roadmap";
import React from "react";
import styles from "./HomePage.module.css";
import Navbar from "layouts/Navbar/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="mb-50px">
        <CountdownTimer />
      </div>
      <div className="mb-100px">
        <Section />
      </div>
      <div className="mb-150px">
        <KeyToUnlock />
      </div>
      <div className="mb-150px">
        <ArtCollection />
      </div>
      <div className="mb-150px">
        <PreSale />
      </div>
      <div className="mb-150px">
        <NFTS />
      </div>
      <div className="mb-150px">
        <Roadmap />
      </div>
      <div className="mb-150px">
        <DevelopmentRoadmap />
      </div>
      <div className="mb-100px">
        <Values />
      </div>
      <div className="mb-100px">
        <OurBrain />
      </div>
      <div className="mb-150px">
        <Partners />
      </div>
      <div className="mb-150px">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
