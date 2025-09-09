import { PlayCircle } from "iconsax-reactjs";
import styles from "./Home.module.css";
import logoIcon from "../assets/logo-icon.svg";
import AgeVerication from "../components/AgeVerication";
import Heading from "../components/Heading";

// import homeImage from "../assets/homeImg.png";

const Home = () => {
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

            <a className={styles.demoVideo} href="#">
              <PlayCircle size="32" color="#2677B2FF" />
              <span className={styles.demoText}>
                Watch our introductory video
              </span>
            </a>

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
    </>
  );
};

export default Home;
