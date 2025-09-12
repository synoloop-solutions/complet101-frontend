import React from 'react';
import { LifeBuoy } from 'lucide-react';
import styles from './SafeGuard.module.css';

const SafeguardComponent = () => {
  const resources = [
    {
      id: 1,
      name: "Childline",
      description: "Free, confidential support for children and young people in the UK.",
      link: "Visit Childline",
      url: "#"
    },
    {
      id: 2,
      name: "The Mix",
      description: "Support and guidance for young people aged 13-25 on mental health, relationships, and more.",
      link: "Visit The Mix",
      url: "#"
    },
    {
      id: 3,
      name: "YoungMinds",
      description: "Information and support for young people's mental health and wellbeing.",
      link: "Visit YoungMinds",
      url: "#"
    },
    {
      id: 4,
      name: "Kooth",
      description: "Free, safe and anonymous online mental wellbeing community for young people.",
      link: "Visit Kooth",
      url: "#"
    },
    {
      id: 5,
      name: "Bullying UK",
      description: "Advice and support for young people affected by bullying.",
      link: "Visit Bullying UK",
      url: "#"
    },
    {
      id: 6,
      name: "NSPCC",
      description: "Working to protect children across the UK. Information and advice for children and adults.",
      link: "Visit NSPCC",
      url: "#"
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        {/* Header Section */}
        <div className={styles.headerSection}>
          <div className={styles.iconContainer}>
            <LifeBuoy className={styles.icon} />
          </div>
          <h1 className={styles.mainTitle}>
            Help and Support for Under 18s
          </h1>
          <p className={styles.subtitle}>
            You're not alone. Find resources and guidance here to help you feel safe and supported.
          </p>
        </div>

        {/* Trusted Adult Guidance Section */}
        <div className={styles.guidanceSection}>
          <h2 className={styles.sectionTitle}>
            Trusted Adult Guidance
          </h2>
          
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              If you're finding things difficult or facing challenges, talking to a trusted adult can make a big 
              difference. This could be a parent, guardian, family member, teacher, school nurse, youth 
              worker, or any other adult you feel comfortable and safe with. They can listen without 
              judgment, offer advice, and help you find the support you need.
            </p>
            
            <p className={styles.paragraph}>
              Remember, it's okay to ask for help, and you have the right to be safe and heard. Choosing 
              someone you trust is a brave and important step.
            </p>
          </div>
        </div>

        {/* Helpful Resources & Helplines Section */}
        <div className={styles.resourcesSection}>
          <h2 className={styles.resourcesTitle}>
            Helpful Resources & Helplines
          </h2>
          
          <div className={styles.resourceGrid}>
            {resources.map((resource) => (
              <div key={resource.id} className={styles.resourceCard}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{resource.name}</h3>
                  <svg className={styles.externalIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className={styles.cardDescription}>
                  {resource.description}
                </p>
                <a href={resource.url} className={styles.cardLink}>
                  {resource.link}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support Section */}
        <div className={styles.contactSection}>
          <h2 className={styles.contactTitle}>
            Need to talk or unsure where to start?
          </h2>
          
          <p className={styles.contactText}>
            The resources above are here to support you. If you need further guidance or prefer to 
            speak with someone from CompLet101™ directly, please reach out to our support team.
          </p>
          
          <button className={styles.contactButton}>
            Contact CompLet101™ Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default SafeguardComponent;