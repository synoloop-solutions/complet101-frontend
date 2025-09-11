import React from "react";
import styles from "./SafeGuard.module.css";
import Heading from "../components/Heading";
import Button from "../components/Button";
import Navigation from "../components/Navigation";

const SafeGuard = ({ onGoBack }) => {
  const navItems = [
    { label: "Home", href: "home", active: false },
    { label: "Services", href: "services", active: false },
    { label: "Overview", href: "overview", active: false },
  ];

  const handleNavClick = (item) => {
    console.log("Navigation clicked:", item.label, "href:", item.href);

    // Call the navigation handler passed from parent
    if (onNavigate && typeof onNavigate === "function") {
      onNavigate(item.href, item.label);
    } else {
      console.warn("onNavigate prop not provided or not a function");
    }
  };
  return (
    <div>
      {/* Navigation Bar */}
      <Navigation
        logoText="CompLet101™"
        navItems={navItems}
        showBackButton={true}
        onBackClick={onGoBack}
        onNavClick={handleNavClick}
      />

      {/* Page Content */}

      <div className={styles.container}>
        <div className={styles.content}>
          <Heading
            level="h1"
            size="large"
            color="primary"
            weight="bold"
            align="center"
            marginBottom="24px"
          >
            User Guidance and Protection Act
          </Heading>

          <div className={styles.messageCard}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>🛡️</span>
            </div>

            <Heading
              level="h2"
              size="medium"
              color="secondary"
              weight="semibold"
              align="center"
              marginBottom="16px"
            >
              Age Restriction Notice
            </Heading>

            <p className={styles.description}>
              We appreciate your interest in our services. However, our platform
              is designed for users who are 18 years or older to ensure
              compliance with applicable regulations and to provide
              age-appropriate content.
            </p>

            <div className={styles.infoSection}>
              <h3 className={styles.sectionTitle}>What this means:</h3>
              <ul className={styles.infoList}>
                <li>Our services require users to be 18 years or older</li>
                <li>This restriction helps us maintain legal compliance</li>
                <li>
                  We prioritize user safety and appropriate content delivery
                </li>
                <li>
                  Alternative resources may be available through educational
                  institutions
                </li>
              </ul>
            </div>

            <div className={styles.contactSection}>
              <p className={styles.contactText}>
                If you have questions or need guidance, please contact a parent,
                guardian, or educational counselor who can help you find
                appropriate resources for your needs.
              </p>
            </div>

            <div className={styles.actionButtons}>
              <Button variant="primary" size="medium" onClick={onGoBack}>
                Return to Home
              </Button>

              <Button
                variant="secondary"
                size="medium"
                onClick={() =>
                  window.open("https://www.commonsensemedia.org/", "_blank")
                }
              >
                Educational Resources
              </Button>
            </div>
          </div>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              Thank you for understanding. Your privacy and safety are important
              to us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeGuard;
