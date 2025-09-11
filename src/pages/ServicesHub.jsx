import React from "react";
import styles from "./ServicesHub.module.css";
import Heading from "../components/Heading";
import Button from "../components/Button";
import Navigation from "../components/Navigation";

const ServicesHub = ({ onGoBack, onNavigate }) => {
  const services = [
    {
      id: 1,
      title: "Privacy Compliance",
      description:
        "Comprehensive GDPR and data protection compliance solutions to keep your business secure and legally compliant.",
      icon: "🔒",
      features: [
        "GDPR Assessment",
        "Policy Creation",
        "Training Programs",
        "Ongoing Support",
      ],
      buttonText: "Learn More",
    },
    {
      id: 2,
      title: "Security Solutions",
      description:
        "Advanced security measures to protect your digital assets and maintain customer trust.",
      icon: "🛡️",
      features: [
        "Security Audits",
        "Risk Assessment",
        "Implementation",
        "24/7 Monitoring",
      ],
      buttonText: "Get Started",
    },
    {
      id: 3,
      title: "Digital Transformation",
      description:
        "Streamline your processes with our comprehensive digital transformation services.",
      icon: "⚡",
      features: [
        "Process Automation",
        "System Integration",
        "Digital Strategy",
        "Performance Analytics",
      ],
      buttonText: "Explore",
    },
  ];

  const handleServiceClick = (serviceId) => {
    console.log(`Service ${serviceId} clicked`);
    // Add your service-specific logic here
  };

  // Navigation configuration for services page
  const navItems = [
    { label: "Home", href: "home", active: false },
    { label: "Services", href: "services", active: true },
    { label: "Overview", href: "overview", active: false },
  ];

  const handleNavClick = (item) => {
    console.log("Navigation clicked:", item.label, "href:", item.href);

    // Call the navigation handler passed from parent
    if (item.href && onNavigate && typeof onNavigate === "function") {
      onNavigate(item.href, item.label);
    } else {
      console.warn("onNavigate prop not provided or not a function");
    }
  };

  return (
    <>
      <Navigation
        logoText="CompLet101"
        navItems={navItems}
        showBackButton={true}
        onBackClick={onGoBack}
        onNavClick={handleNavClick}
      />

      {/* Page Content */}
      <div className={styles.container}>
        <div className={styles.header}>
          {/* <Button
            variant="ghost"
            size="small"
            onClick={onGoBack}
            className={styles.backButton}
          >
            ← Back to Home
          </Button> */}

          <Heading
            level="h1"
            size="large"
            color="primary"
            weight="bold"
            align="center"
            marginBottom="16px"
          >
            Our Services
          </Heading>

          <p className={styles.subtitle}>
            Choose from our comprehensive range of services designed to empower
            your journey with trust and clarity.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  <span className={styles.serviceIcon}>{service.icon}</span>
                </div>

                <Heading
                  level="h3"
                  size="small"
                  color="dark"
                  weight="semibold"
                  marginBottom="12px"
                >
                  {service.title}
                </Heading>
              </div>

              <p className={styles.serviceDescription}>{service.description}</p>

              <div className={styles.featuresSection}>
                <h4 className={styles.featuresTitle}>Key Features:</h4>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => handleServiceClick(service.id)}
                  className={styles.serviceButton}
                >
                  {service.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Need help choosing the right service?
            <Button
              variant="ghost"
              size="small"
              onClick={() => console.log("Contact clicked")}
              className={styles.contactButton}
            >
              Contact our experts
            </Button>
          </p>
        </div>
      </div>
    </>
  );
};

export default ServicesHub;
