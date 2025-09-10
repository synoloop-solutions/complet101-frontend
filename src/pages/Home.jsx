import React, { useState } from "react";
import { PlayCircle } from "iconsax-reactjs";
import styles from "./Home.module.css";
import logoIcon from "../assets/logo-icon.svg";
import AgeVerication from "../components/AgeVerication";
import Heading from "../components/Heading";
import VideoModal from "../components/VideoModal";

// import homeImage from "../assets/homeImg.png";

const Home = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Temporary video URL for demo purposes
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  // For Vimeo use: https://player.vimeo.com/video/your_video_id
  // For direct video files use the file URL: "path/to/your/video.mp4"

  const handleVideoClick = (event) => {
    event.preventDefault();
    setIsVideoModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.separatorContainer}>
          <div className={styles.content}>
            {/* Logo Section */}
            <div className={styles.logo}>
              <img src={logoIcon} alt="Logo" className={styles.logoIcon} />
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
              CompLet101™ streamlines complex processes, providing accessible
              solutions with a focus on your privacy and security.
            </p>

            <p className={styles.description}>
              We are committed to GDPR compliance, robust data protection, and
              safeguarding every user.
            </p>

            {/* <a className={styles.demoVideo} href="#">
              <PlayCircle size="32" color="#2677B2FF" />
              <span className={styles.demoText}>
                Watch our introductory video
              </span>
            </a> */}

            {/* Updated demo video link with click handler */}
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
            <AgeVerication />
            <p className={styles.privacyNote}>
              We are committed to protecting your privacy. Please review our{" "}
              <a href="#" className={styles.privacyPolicyLink}>
                Privacy Policy
              </a>{" "}
              for more information.
            </p>
          </div>

          {/* Hero Image Section */}
          <div className={styles.heroImageContainer}>
            {/* <img src={homeImage} alt="Hero" className={styles.heroImage} /> */}
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
};

export default Home;
