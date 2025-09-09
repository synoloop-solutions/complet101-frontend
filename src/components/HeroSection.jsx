import React from "react";
import styles from "./HeroSection.module.css";
import logoIcon from "../assets/logo-icon.svg";
import playerIcon from "../assets/player-circle.svg";
import AgeVerication from "./AgeVerication";

import "../index.css";

function HeroSection() {
  return (
    <div className={styles.heroSection}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <img src={logoIcon} alt="Logo" className={styles.logoIcon} />
        <span className={styles.logoText}>Complet101</span>
      </div>

      <div className={styles.content}>
        {/* HeroText */}
        <h1 className={styles.heroText}>
          Empowering Your Journey with Trust & Clarity
        </h1>
        <p className={styles.tagline}>
          CompLet101™ streamlines complex processes, providing accessible
          solutions with a focus on your privacy and security.
        </p>

        <p className={styles.description}>
          We are committed to GDPR compliance, robust data protection, and
          safeguarding every user.
        </p>

        <a className={styles.demoVideo} href="#">
          <img src={playerIcon} alt="Player Icon" />
          <span className={styles.demoText}>Watch our introductory video</span>
        </a>
        <AgeVerication />
      </div>
    </div>
  );
}

export default HeroSection;
