import React from "react";
import Heading from "../components/Heading";
import Button from "../components/Button";
import Navigation from "../components/Navigation";
import Safeguard from "../components/SafeguardComponent";
import { LifeBuoy } from 'lucide-react';



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
    <>
      {/* Navigation Bar */}
      <Navigation
        logoText="CompLet101™"
        navItems={navItems}
        showBackButton={true}
        onBackClick={onGoBack}
        onNavClick={handleNavClick}
      />

      {/* Page Content */}



    <Safeguard/>
    
 


  </>
  );
};

export default SafeGuard;
