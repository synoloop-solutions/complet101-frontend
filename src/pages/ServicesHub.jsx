import React, { useState } from "react";
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

// Import From Form COmponents
import CompLet101Form from "../components/forms/CompLet101Form";
import LocalLogicForm from "../components/forms/LocalLogicForm";
import UReadyForm from "../components/forms/UReadyForm";

const ServicesHub = ({ onGoBack, onNavigate, onServiceSelect }) => {
  const [selectedService, setSelectedService] = useState(null);
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
      formComponent: "complet101",
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
      formComponent: "locallogic",
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
      formComponent: "uready",
    },
  ];

  const handleServiceClick = (serviceId) => {
    console.log(`Service ${serviceId} clicked`);
    // Add your service-specific logic here
    const service = services.find((s) => s.id === serviceId);
    setSelectedService(service);
  };

  const handleBackToServices = () => {
    setSelectedService(null);
  };

  // Call the service selection handler from parent
  // if (onServiceSelect && typeof onServiceSelect === "function") {
  //   onServiceSelect(services);
  // } else {
  //   console.warn("onServiceSelect prop not provided or not a function");
  // }

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

  // If a service is selected, render the corresponding form.

  if (selectedService) {
    const renderForm = () => {
      switch (selectedService.formComponent) {
        case "complet101":
          return <CompLet101Form onGoBack={handleBackToServices} />;
        case "locallogic":
          return <LocalLogicForm onGoBack={handleBackToServices} />;
        case "uready":
          return <UReadyForm onGoBack={handleBackToServices} />;
        default:
          return <p>Form not found for this service.</p>;
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

        {renderForm()}
      </>
    );
  }

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

              {/* <div className={styles.featuresSection}>
                 <h4 className={styles.featuresTitle}>Key Features:</h4> 
             <ul className={styles.featuresList}>
                  {service.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul> 
              </div>*/}

              {/* Updated features section */}

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

      {/* <CompLet101Form /> */}
    </>
  );
};

export default ServicesHub;
