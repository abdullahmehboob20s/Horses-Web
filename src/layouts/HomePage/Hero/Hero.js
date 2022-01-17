import React from "react";
import styles from "./Hero.module.css";
import heroImg from "assets/images/hero-img.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <img src={heroImg} className="w-full" alt="" />
    </div>
  );
}

export default Hero;
