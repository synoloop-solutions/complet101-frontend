import React, { useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import styles from "./Navigation.module.css";

import logoIcon from "../assets/logo-icon-blue.svg";
// import Home from "../pages/Home";

/**
 * Responsive Navigation Component with mobile-first approach
 * @param {string} logoText - Text for the logo
 * @param {Array} navItems - Array of navigation items {label, href, active}
 * @param {boolean} showBackButton - Whether to show the back button
 * @param {Function} onBackClick - Callback for back button click
 * @param {Function} onNavClick - Callback for navigation item click
 * @param {string} className - Additional CSS classes
 */
const Navigation = ({
  logoText = "CompLet101™",
  navItems = [
    { label: "Home", href: "/home", active: false },
    { label: "Services", href: "/services", active: true },
    { label: "Overview", href: "/overview", active: false },
  ],
  showBackButton = true,
  onBackClick,
  onNavClick,
  className = "",
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (item, event) => {
    event.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
    onNavClick?.(item);
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    onBackClick?.();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`${styles.navigation} ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <a href="/" className={styles.logo} aria-label="Go to homepage">
            <span className={styles.logoIcon}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={logoIcon}
                alt="Logo"
                className={styles.logoImage}
              />
            </span>
            <span className={styles.logoText}>{logoText}</span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className={styles.desktopNav}>
          <ul className={styles.navList} role="menubar">
            {navItems.map((item, index) => (
              <li key={index} className={styles.navItem} role="none">
                <a
                  href={item.href}
                  className={`${styles.navLink} ${
                    item.active ? styles.navLinkActive : ""
                  }`}
                  onClick={(e) => handleNavClick(item, e)}
                  role="menuitem"
                  aria-current={item.active ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Back Button - Desktop */}
        {showBackButton && (
          <div className={styles.backButtonDesktop}>
            <button
              className={styles.backButton}
              aria-label="Go back"
              type="button"
              onClick={handleBackClick}
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className={styles.mobileMenuSection}>
          {/* Back Button - Mobile */}
          {showBackButton && (
            <button
              className={styles.backButtonMobile}
              aria-label="Go back"
              type="button"
              onClick={handleBackClick}
            >
              <ArrowLeft size={20} />
            </button>
          )}

          {/* Hamburger Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div
          className={styles.mobileNavOverlay}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div
            style={{
              textAlign: "right",
              padding: "10px",
              marginInlineEnd: "10px",
              marginBlockStart: "10px",
            }}
            onClick={toggleMobileMenu}
          >
            <X size={24} />
          </div>
          <div className={styles.mobileNavContent}>
            <ul className={styles.mobileNavList} role="menu">
              {navItems.map((item, index) => (
                <li key={index} className={styles.mobileNavItem} role="none">
                  <a
                    href={item.href}
                    className={`${styles.mobileNavLink} ${
                      item.active ? styles.mobileNavLinkActive : ""
                    }`}
                    onClick={(e) => handleNavClick(item, e)}
                    role="menuitem"
                    aria-current={item.active ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className={styles.mobileNavBackdrop}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navigation;
