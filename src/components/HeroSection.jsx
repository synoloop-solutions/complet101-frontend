import React, { useState } from 'react';
import '../styles/hero.css';
import heroImage from '../assets/heroimage.jpg';
import Card from './Learn';
import AgeModal from './modal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStartComplaint = () => {
    setIsModalOpen(true); // Show modal on button click
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal when user selects Yes
  };

  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            {/* Hero Content */}
            <div className="hero-content">
              <div>
                <h1 className="hero-title">
                  Your voice matters. 
                  <span className="hero-title-accent">Document. Protect. Be heard.</span>
                </h1>
                <p className="hero-description">
                  CompLet101 turns personal experiences into structured, actionable complaints with precision and authority. Fully UK-registered and GDPR-compliant, it ensures your data is protected and your story respected.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="btn-group">
                <button 
                  className="btn btn-primary btn-large"
                  onClick={handleStartComplaint} // open modal
                >
                  Start Your Complaint
                </button>
                <button className="btn btn-secondary btn-large">
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hero-image-container">
              <div className="hero-image-wrapper">
                <img 
                  src={heroImage} 
                  alt="Professional legal consultation" 
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Verification Modal */}
      <AgeModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default HeroSection;
