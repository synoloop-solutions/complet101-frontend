import React from "react";
import styles from "./SafeGuard.module.css";
import Heading from "../components/Heading";
import Button from "../components/Button";
import Navigation from "../components/Navigation";
import SafeguardCard from "../components/SafeguardCard";
import SafeguardBottom from "../components/SafeguardBottom";
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

           <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="mx-auto mb-4 sm:mb-6">
            <LifeBuoy className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-blue-600 mx-auto" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Help and Support for Under 18s
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed whitespace-normal sm:whitespace-nowrap">
            You're not alone. Find resources and guidance here to help you feel safe and supported.
          </p>


        </div>

        {/* Trusted Adult Guidance Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-150 mt-28">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
            Trusted Adult Guidance
          </h2>
          
          <div className="space-y-4 sm:space-y-5">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              If you're finding things difficult or facing challenges, talking to a trusted adult can make a big 
              difference. This could be a parent, guardian, family member, teacher, school nurse, youth 
              worker, or any other adult you feel comfortable and safe with. They can listen without 
              judgment, offer advice, and help you find the support you need.
            </p>
            
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Remember, it's okay to ask for help, and you have the right to be safe and heard. Choosing 
              someone you trust is a brave and important step.
            </p>
          </div>
        </div>
        <SafeguardCard />
        <SafeguardBottom />
      </div>
      
    </div>
    </div>
  );
};

export default SafeGuard;
