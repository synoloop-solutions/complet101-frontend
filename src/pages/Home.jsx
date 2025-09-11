import React, { useState } from "react";
import { PlayCircle } from "iconsax-reactjs";
import styles from "./Home.module.css";
import logoIcon from "../assets/logo-icon.svg";
import Heading from "../components/Heading";
import VideoModal from "../components/VideoModal";
import SafeGuard from "./SafeGuard";
import ServicesHub from "./ServicesHub";
import homeImage from "../assets/homeImg.png";
import AgeVerification from "../components/AgeVerication";
import ServicesOverview from "./Overview";
import Navigation from "../components/Navigation";

const Home = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home"); // 'home', 'safeguard', 'serviceshub'
  const [userAge, setUserAge] = useState(null); // null, 'under18', '18plus'

  // Temporary video URL for demo purposes
  const videoUrl =
    "https://www.youtube.com/embed/44qF9XuYk9A?si=YYqEYy-3P5Do2V8r";
  // For Vimeo use: https://player.vimeo.com/video/your_video_id
  // For direct video files use the file URL: "path/to/your/video.mp4"

  const handleVideoClick = (event) => {
    event.preventDefault();
    setIsVideoModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsVideoModalOpen(false);
  };

  // Handle age verification success (18+ users)
  const handleAgeVerified = (isAdult) => {
    console.log("Age Verified as adult:", isAdult);
    setUserAge("adult");
    setCurrentPage("services");
  };

  // Handle age verification failure (under 18 users)
  const handleVerificationFailed = (isAdult) => {
    console.log("Age Verification failed, user is minor:", isAdult);
    setUserAge("minor");
    setCurrentPage("underage");
  };

  // Handle "Go Back" action from SafeGuard and ServicesHub pages
  const handleGoBackToHome = () => {
    console.log("Navigating back to Home");
    setCurrentPage("home");
    setUserAge(null);
  };

  // Handle navigation from nav items (NEW FUNCTION)
  const handleNavigation = (href, label) => {
    console.log("Navigating to:", href, label);

    switch (href) {
      case "home":
        setCurrentPage("home");
        break;
      case "services":
        // Only allow if user is verified as adult
        if (userAge === "adult") {
          setCurrentPage("services");
        } else {
          console.warn("Access to services requires age verification");
          // Optionally redirect to home or show a message
          setCurrentPage("home");
        }
        break;
      case "serviceoverview":
        setCurrentPage("serviceoverview");
        break;
      default:
        console.warn("Unknown navigation route:", href);
        setCurrentPage("home");
    }
  };

  // Render different pages based on current state
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "underage":
        return <SafeGuard onGoBack={handleGoBackToHome} />;
      case "services":
        return <ServicesOverview onGoBack={handleGoBackToHome} />;
      case "serviceoverview":
        return <ServicesOverview onGoBack={handleGoBackToHome} />;
      case "home":
      default:
        return (
          <>
            <div className={styles.heroSection}>
              <div className={styles.separatorContainer}>
                <div className={styles.content}>
                  {/* Logo Section */}
                  <div className={styles.logo}>
                    <img
                      src={logoIcon}
                      alt="Logo"
                      className={styles.logoIcon}
                    />
                    <span className={styles.logoText}>Complet101</span>
                  </div>

                  <Heading
                    level="h1"
                    size="large"
                    color="primary"
                    weight="bold"
                    className={styles.homeTitle}
                    marginBottom="20px"
                  >
                    Empowering Your Journey with Trust & Clarity
                  </Heading>

                  <p className={styles.tagline}>
                    CompLet101™ streamlines complex processes, providing
                    accessible solutions with a focus on your privacy and
                    security.
                  </p>

                  <p className={styles.description}>
                    We are committed to GDPR compliance, robust data protection,
                    and safeguarding every user.
                  </p>

                  {/* Demo video button */}
                  <button
                    className={styles.demoVideo}
                    onClick={handleVideoClick}
                    type="button"
                    aria-label="Open introductory video"
                  >
                    <PlayCircle size="32" color="#2677B2FF" />
                    <span className={styles.demoText}>
                      Watch our introductory video
                    </span>
                  </button>

                  {/* Age Verification Section */}
                  <AgeVerification
                    onAgeVerified={handleAgeVerified}
                    onVerificationFailed={handleVerificationFailed}
                  />

                  <p className={styles.privacyNote}>
                    We are committed to protecting your privacy. Please review
                    our{" "}
                    <a href="#" className={styles.privacyPolicyLink}>
                      Privacy Policy
                    </a>{" "}
                    for more information.
                  </p>
                </div>

                {/* Hero Image Section */}
                <div className={styles.heroImageContainer}>
                  <img
                    src={homeImage}
                    alt="Hero"
                    className={styles.heroImage}
                  />
                </div>
              </div>
            </div>

            {/* Video Modal */}
            <VideoModal
              isOpen={isVideoModalOpen}
              onClose={handleCloseModal}
              videoUrl={videoUrl}
              title="Complet101 - Introductory Video"
              autoPlay={true}
            />
          </>
        );
    }
  };
  return renderCurrentPage();
};

export default Home;
