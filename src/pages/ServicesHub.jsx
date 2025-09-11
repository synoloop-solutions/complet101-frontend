import React from "react";
import styles from "./ServicesHub.module.css";
import Heading from "../components/Heading";
import Button from "../components/Button";
import Navigation from "../components/Navigation";
import {
  FolderOpen,
  Courthouse,
  Star,
  ArrowDown2,
  ArrowRight,
} from "iconsax-reactjs";

const ServicesHub = ({ onGoBack, onNavigate }) => {
  const services = [
    {
      id: 1,
      title: "CompLet101™",
      description:
        "Professional complaint submission and resolution services for individuals and organizations, ensuring a fair process.",
      icon: <FolderOpen size="32" color="#2677b2" />,
      features: [
        "GDPR Assessment",
        "Policy Creation",
        "Training Programs",
        "Ongoing Support",
      ],
      buttonText: "Start  CompLet101  Form",
    },
    {
      id: 2,
      title: "LocalLogic",
      description:
        "Specialized support for council-related complaints, local government compliance, and community advocacy, empowering local voices.",
      icon: <Courthouse size="32" color="#2677b2" />,
      features: [
        "Security Audits",
        "Risk Assessment",
        "Implementation",
        "24/7 Monitoring",
      ],
      buttonText: "Start  LocalLogic  Form",
    },
    {
      id: 3,
      title: "UReady",
      description:
        "Comprehensive business support, formation guidance, and compliance assistance for entrepreneurs and startups to thrive securely.",
      icon: <Star size="32" color="#2677b2" />,
      features: [
        "Process Automation",
        "System Integration",
        "Digital Strategy",
        "Performance Analytics",
      ],
      buttonText: "Start  UReady  Form",
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
          <Heading
            level="h1"
            size="large"
            color=""
            weight="bold"
            align="center"
          >
            Our Services
          </Heading>

          {/* <p className={styles.subtitle}>
            Choose from our comprehensive range of services designed to empower
            your journey with trust and clarity.
          </p> */}
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  <span className={styles.serviceIcon}>{service.icon}</span>
                  <Heading
                    level="h3"
                    size="small"
                    color="dark"
                    weight="semibold"
                    marginBottom="0"
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span>{service.title}</span>
                      <ArrowDown2 size="24" color="#171a1f" />
                    </div>
                  </Heading>
                </div>
              </div>

              <p className={styles.serviceDescription}>{service.description}</p>

              <div className={styles.featuresSection}>
                {/* <h4 className={styles.featuresTitle}>Key Features:</h4> */}
                {/* <ul className={styles.featuresList}>
                  {service.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul> */}
              </div>

              <div className={styles.cardFooter}>
                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => handleServiceClick(service.id)}
                  className={styles.serviceButton}
                >
                  {service.buttonText}

                  <ArrowRight size="32" color="#FFFFFF" />
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
