import React, { useState } from "react";
import styles from "./Navbar.module.css";
import brandLogo from "assets/images/brand-logo.png";
import { Link as ScrollLink } from "react-scroll";
import activeIndicator from "assets/images/active-indicator.png";
import hamburger from "assets/images/hamburger.png";
import crossIcon from "assets/images/crossIcon.png";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const handler = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", handler);
    };
  });

  const menuRef = OutsideClickDetector(() => {
    setIsOpen(false);
  });

  return (
    <div className={`${styles.wrapper} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <img src={brandLogo} className={styles.navbarBrand} alt="" />

          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={hamburger} className={styles.hamburger} alt="" />
          </button>

          <div
            className={`${styles.navbarRight} ${isOpen ? styles.open : ""}`}
            ref={menuRef}
          >
            <div className={styles.mobileBar}>
              <img src={brandLogo} alt="" />
              <img
                src={crossIcon}
                onClick={() => setIsOpen(!isOpen)}
                className={styles.crossIcon}
                alt=""
              />
            </div>
            <div className={styles.navbar_link}>
              <ScrollLink
                className={`${styles.navbarScrollLink} ${styles.active} gray uppercase font-gilroy-light weight-3 pointer`}
              >
                Home
                <img src={activeIndicator} alt="" />
              </ScrollLink>
              <ScrollLink
                className={`${styles.navbarScrollLink} gray uppercase font-gilroy-light weight-3 pointer`}
              >
                Why
                <img src={activeIndicator} alt="" />
              </ScrollLink>
              <ScrollLink
                className={`${styles.navbarScrollLink} gray uppercase font-gilroy-light weight-3 pointer`}
              >
                our nft’s
                <img src={activeIndicator} alt="" />
              </ScrollLink>
              <ScrollLink
                className={`${styles.navbarScrollLink} gray uppercase font-gilroy-light weight-3 pointer`}
              >
                roadmap
                <img src={activeIndicator} alt="" />
              </ScrollLink>
              <ScrollLink
                className={`${styles.navbarScrollLink} gray uppercase font-gilroy-light weight-3 pointer`}
              >
                whitepaper
                <img src={activeIndicator} alt="" />
              </ScrollLink>
              <ScrollLink
                className={`${styles.navbarScrollLink} gray uppercase font-gilroy-light weight-3 pointer`}
              >
                team
                <img src={activeIndicator} alt="" />
              </ScrollLink>
              <ScrollLink
                className={`${styles.navbarScrollLink} gray uppercase font-gilroy-light weight-3 pointer`}
              >
                partner’s
                <img src={activeIndicator} alt="" />
              </ScrollLink>
              <ScrollLink
                className={`${styles.navbarScrollLink} gray uppercase font-gilroy-light weight-3 pointer`}
              >
                FAQ
                <img src={activeIndicator} alt="" />
              </ScrollLink>
            </div>
            <div className={styles.navBtns}>
              <button className="white pointer  font-gilroy-light uppercase weight-3">
                Join Discord
              </button>
              <button className="white pointer  font-gilroy-bold uppercase ">
                Join Presale
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
