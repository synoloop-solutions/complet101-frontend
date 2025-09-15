import React, { useState } from "react";
import styles from "./FormStyles.module.css";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { ArrowLeft, Send } from "iconsax-reactjs";

const UReadyForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    entrepreneurName: "",
    entrepreneurEmail: "",
    entrepreneurPhone: "",
    businessName: "",
    businessType: "",
    businessStage: "",
    industryType: "",
    businessDescription: "",
    targetMarket: "",
    fundingNeeds: "",
    complianceAreas: [],
    supportNeeds: [],
    timelineGoals: "",
    previousExperience: "",
    businessLocation: "",
    employeesCount: "",
    annualRevenue: "",
    marketingConsent: false,
    privacyConsent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckboxArrayChange = (e, fieldName) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [fieldName]: checked
        ? [...prev[fieldName], value]
        : prev[fieldName].filter((item) => item !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("UReady Form submitted:", formData);
    // Handle form submission logic here
  };

  const businessTypes = [
    "Sole Trader",
    "Partnership",
    "Limited Company",
    "Limited Liability Partnership",
    "Community Interest Company",
    "Charity/Non-Profit",
    "Other",
  ];

  const businessStages = [
    "Idea Stage",
    "Pre-Launch",
    "Launch Ready",
    "Early Stage (0-2 years)",
    "Growth Stage (2-5 years)",
    "Established (5+ years)",
  ];

  const industryTypes = [
    "Technology",
    "Healthcare",
    "Finance",
    "Retail/E-commerce",
    "Manufacturing",
    "Food & Beverage",
    "Professional Services",
    "Creative Industries",
    "Education",
    "Construction",
    "Other",
  ];

  const complianceOptions = [
    "Business Registration",
    "Tax Compliance",
    "Employment Law",
    "Health & Safety",
    "Data Protection (GDPR)",
    "Industry-Specific Regulations",
    "Intellectual Property",
    "Insurance Requirements",
  ];

  const supportOptions = [
    "Business Plan Development",
    "Financial Planning",
    "Marketing Strategy",
    "Legal Compliance",
    "Technology Implementation",
    "HR & Recruitment",
    "Operations Setup",
    "Funding Applications",
  ];

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <Button
          variant="ghost"
          size="small"
          onClick={onBack}
          className={styles.backButton}
        >
          <ArrowLeft size="20" color="#2677b2" />
          Back to Services
        </Button>

        <Heading
          level="h1"
          size="large"
          color="dark"
          weight="bold"
          align="center"
        >
          UReady Business Support Form
        </Heading>

        <p className={styles.formDescription}>
          Get comprehensive business support, formation guidance, and compliance
          assistance tailored to your entrepreneurial journey.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Entrepreneur Information Section */}
        <div className={styles.formSection}>
          <Heading level="h3" size="medium" color="dark" weight="semibold">
            Entrepreneur Information
          </Heading>

          <div className={styles.inputGroup}>
            <label htmlFor="entrepreneurName" className={styles.label}>
              Full Name *
            </label>
            <input
              type="text"
              id="entrepreneurName"
              name="entrepreneurName"
              value={formData.entrepreneurName}
              onChange={handleInputChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="entrepreneurEmail" className={styles.label}>
                Email Address *
              </label>
              <input
                type="email"
                id="entrepreneurEmail"
                name="entrepreneurEmail"
                value={formData.entrepreneurEmail}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="entrepreneurPhone" className={styles.label}>
                Phone Number
              </label>
              <input
                type="tel"
                id="entrepreneurPhone"
                name="entrepreneurPhone"
                value={formData.entrepreneurPhone}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="businessLocation" className={styles.label}>
              Business Location/Address
            </label>
            <input
              type="text"
              id="businessLocation"
              name="businessLocation"
              value={formData.businessLocation}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="City, Region, or full address"
            />
          </div>
        </div>

        {/* Business Information Section */}
        <div className={styles.formSection}>
          <Heading level="h3" size="medium" color="dark" weight="semibold">
            Business Information
          </Heading>

          <div className={styles.inputGroup}>
            <label htmlFor="businessName" className={styles.label}>
              Business Name *
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Current or proposed business name"
              required
            />
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="businessType" className={styles.label}>
                Business Structure *
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
                className={styles.select}
                required
              >
                <option value="">Select business type</option>
                {businessTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="businessStage" className={styles.label}>
                Business Stage *
              </label>
              <select
                id="businessStage"
                name="businessStage"
                value={formData.businessStage}
                onChange={handleInputChange}
                className={styles.select}
                required
              >
                <option value="">Select current stage</option>
                {businessStages.map((stage, index) => (
                  <option key={index} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="industryType" className={styles.label}>
              Industry Type *
            </label>
            <select
              id="industryType"
              name="industryType"
              value={formData.industryType}
              onChange={handleInputChange}
              className={styles.select}
              required
            >
              <option value="">Select industry</option>
              {industryTypes.map((industry, index) => (
                <option key={index} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="businessDescription" className={styles.label}>
              Business Description *
            </label>
            <textarea
              id="businessDescription"
              name="businessDescription"
              value={formData.businessDescription}
              onChange={handleInputChange}
              className={styles.textarea}
              placeholder="Describe your business concept, products/services, and value proposition"
              rows="4"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="targetMarket" className={styles.label}>
              Target Market
            </label>
            <textarea
              id="targetMarket"
              name="targetMarket"
              value={formData.targetMarket}
              onChange={handleInputChange}
              className={styles.textarea}
              placeholder="Describe your ideal customers and market size"
              rows="3"
            />
          </div>
        </div>

        {/* Business Details Section */}
        <div className={styles.formSection}>
          <Heading level="h3" size="medium" color="dark" weight="semibold">
            Business Details
          </Heading>

          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="employeesCount" className={styles.label}>
                Current/Planned Employees
              </label>
              <select
                id="employeesCount"
                name="employeesCount"
                value={formData.employeesCount}
                onChange={handleInputChange}
                className={styles.select}
              >
                <option value="">Select range</option>
                <option value="0">Just me</option>
                <option value="1-5">1-5 employees</option>
                <option value="6-10">6-10 employees</option>
                <option value="11-25">11-25 employees</option>
                <option value="26-50">26-50 employees</option>
                <option value="50+">50+ employees</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="annualRevenue" className={styles.label}>
                Current/Projected Annual Revenue
              </label>
              <select
                id="annualRevenue"
                name="annualRevenue"
                value={formData.annualRevenue}
                onChange={handleInputChange}
                className={styles.select}
              >
                <option value="">Select range</option>
                <option value="0-10k">£0 - £10,000</option>
                <option value="10k-50k">£10,000 - £50,000</option>
                <option value="50k-100k">£50,000 - £100,000</option>
                <option value="100k-250k">£100,000 - £250,000</option>
                <option value="250k-500k">£250,000 - £500,000</option>
                <option value="500k+">£500,000+</option>
              </select>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="fundingNeeds" className={styles.label}>
              Funding Requirements
            </label>
            <textarea
              id="fundingNeeds"
              name="fundingNeeds"
              value={formData.fundingNeeds}
              onChange={handleInputChange}
              className={styles.textarea}
              placeholder="Describe your funding needs, timeline, and intended use of funds"
              rows="3"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="previousExperience" className={styles.label}>
              Previous Business Experience
            </label>
            <textarea
              id="previousExperience"
              name="previousExperience"
              value={formData.previousExperience}
              onChange={handleInputChange}
              className={styles.textarea}
              placeholder="Describe relevant business experience, skills, or entrepreneurial background"
              rows="3"
            />
          </div>
        </div>

        {/* Support Requirements Section */}
        <div className={styles.formSection}>
          <Heading level="h3" size="medium" color="dark" weight="semibold">
            Support Requirements
          </Heading>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Compliance Areas Needed (select all that apply)
            </label>
            <div className={styles.checkboxGrid}>
              {complianceOptions.map((option, index) => (
                <label key={index} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    value={option}
                    checked={formData.complianceAreas.includes(option)}
                    onChange={(e) =>
                      handleCheckboxArrayChange(e, "complianceAreas")
                    }
                    className={styles.checkbox}
                  />
                  <span className={styles.checkboxText}>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Business Support Needed (select all that apply)
            </label>
            <div className={styles.checkboxGrid}>
              {supportOptions.map((option, index) => (
                <label key={index} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    value={option}
                    checked={formData.supportNeeds.includes(option)}
                    onChange={(e) =>
                      handleCheckboxArrayChange(e, "supportNeeds")
                    }
                    className={styles.checkbox}
                  />
                  <span className={styles.checkboxText}>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="timelineGoals" className={styles.label}>
              Timeline and Goals
            </label>
            <textarea
              id="timelineGoals"
              name="timelineGoals"
              value={formData.timelineGoals}
              onChange={handleInputChange}
              className={styles.textarea}
              placeholder="When do you want to launch/achieve specific milestones? What are your key business goals?"
              rows="3"
            />
          </div>
        </div>

        {/* Consent Section */}
        <div className={styles.formSection}>
          <Heading level="h3" size="medium" color="dark" weight="semibold">
            Consent & Communications
          </Heading>

          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="marketingConsent"
                checked={formData.marketingConsent}
                onChange={handleInputChange}
                className={styles.checkbox}
              />
              <span className={styles.checkboxText}>
                I would like to receive business tips, funding opportunities,
                and relevant updates via email.
              </span>
            </label>
          </div>

          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="privacyConsent"
                checked={formData.privacyConsent}
                onChange={handleInputChange}
                className={styles.checkbox}
                required
              />
              <span className={styles.checkboxText}>
                I agree to the Privacy Policy and consent to my data being
                processed for business support services. *
              </span>
            </label>
          </div>
        </div>

        <div className={styles.formFooter}>
          <Button
            type="submit"
            variant="primary"
            size="large"
            className={styles.submitButton}
          >
            Submit UReady Application
            <Send size="20" color="#FFFFFF" />
          </Button>

          <p className={styles.footerNote}>
            Our business experts will review your application and contact you
            within 1-2 business days to discuss your tailored support plan.
          </p>
        </div>
      </form>
    </div>
  );
};

export default UReadyForm;
