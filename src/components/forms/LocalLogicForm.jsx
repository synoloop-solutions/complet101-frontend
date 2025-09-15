import React, { useState } from "react";
import styles from "./FormStyles.module.css";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { ArrowLeft, Send } from "iconsax-reactjs";

const LocalLogicForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    residentName: "",
    residentEmail: "",
    residentPhone: "",
    residentAddress: "",
    councilArea: "",
    issueType: "",
    issueLocation: "",
    issueDescription: "",
    impactLevel: "",
    supportingEvidence: "",
    preferredContact: "email",
    councilMemberContact: false,
    publicHearing: false,
    followUpConsent: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("LocalLogic Form submitted:", formData);
    // Handle form submission logic here
  };

  const issueTypes = [
    "Road & Infrastructure",
    "Planning Applications",
    "Waste Management",
    "Parks & Recreation",
    "Housing Issues",
    "Public Safety",
    "Environmental Concerns",
    "Council Services",
    "Other",
  ];

  const councilAreas = [
    "City Center",
    "North District",
    "South District",
    "East District",
    "West District",
    "Suburban Area A",
    "Suburban Area B",
    "Rural District",
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
          LocalLogic Council Support Form
        </Heading>

        <p className={styles.formDescription}>
          Submit council-related complaints and issues. We'll help advocate for
          your local community needs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Resident Information Section */}
        <div className={styles.formSection}>
          <Heading level="h3" size="medium" color="dark" weight="semibold">
            Resident Information
          </Heading>

          <div className={styles.inputGroup}>
            <label htmlFor="residentName" className={styles.label}>
              Full Name *
            </label>
            <input
              type="text"
              id="residentName"
              name="residentName"
              value={formData.residentName}
              onChange={handleInputChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="residentEmail" className={styles.label}>
                Email Address *
              </label>
              <input
                type="email"
                id="residentEmail"
                name="residentEmail"
                value={formData.residentEmail}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="residentPhone" className={styles.label}>
                Phone Number
              </label>
              <input
                type="tel"
                id="residentPhone"
                name="residentPhone"
                value={formData.residentPhone}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="residentAddress" className={styles.label}>
              Residential Address *
            </label>
            <textarea
              id="residentAddress"
              name="residentAddress"
              value={formData.residentAddress}
              onChange={handleInputChange}
              className={styles.textarea}
              placeholder="Full address including postcode"
              rows="2"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="councilArea" className={styles.label}>
              Council Area *
            </label>
            <select
              id="councilArea"
              name="councilArea"
              value={formData.councilArea}
              onChange={handleInputChange}
              className={styles.select}
              required
            >
              <option value="">Select your council area</option>
              {councilAreas.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Issue Details Section */}
        <div className={styles.formSection}>
          <Heading level="h3" size="medium" color="dark" weight="semibold">
            Issue Details
          </Heading>

          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="issueType" className={styles.label}>
                Issue Type *
              </label>
              <select
                id="issueType"
                name="issueType"
                value={formData.issueType}
                onChange={handleInputChange}
                className={styles.select}
                required
              >
                <option value="">Select issue type</option>
                {issueTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="impactLevel" className={styles.label}>
                Community Impact
              </label>
              <select
                id="impactLevel"
                name="impactLevel"
                value={formData.impactLevel}
                onChange={handleInputChange}
                className={styles.select}
              >
                <option value="">Select impact level</option>
                <option value="individual">Affects me individually</option>
                <option value="household">Affects my household</option>
                <option value="neighborhood">Affects my neighborhood</option>
                <option value="district">Affects wider district</option>
                <option value="community">Community-wide impact</option>
              </select>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="issueLocation" className={styles.label}>
              Issue Location/Address
            </label>
            <input
              type="text"
              id="issueLocation"
              name="issueLocation"
              value={formData.issueLocation}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Specific location where the issue occurs"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="issueDescription" className={styles.label}>
              Detailed Description *
            </label>
            <textarea
              id="issueDescription"
              name="issueDescription"
              value={formData.issueDescription}
              onChange={handleInputChange}
              className={styles.textarea}
              placeholder="Describe the issue in detail, including how it affects you and your community, when it occurs, and any attempts you've made to resolve it"
              rows="5"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="supportingEvidence" className={styles.label}>
              Supporting Evidence/References
            </label>
            <textarea
              id="supportingEvidence"
              name="supportingEvidence"
              value={formData.supportingEvidence}
              onChange={handleInputChange}
              className={styles.textarea}
              placeholder="Reference numbers, dates, names of officials contacted, relevant policies, etc."
              rows="3"
            />
          </div>
        </div>

        {/* Advocacy Preferences Section */}
        <div className={styles.formSection}>
          <Heading level="h3" size="medium" color="dark" weight="semibold">
            Advocacy Preferences
          </Heading>

          <div className={styles.inputGroup}>
            <label htmlFor="preferredContact" className={styles.label}>
              Preferred Contact Method
            </label>
            <select
              id="preferredContact"
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleInputChange}
              className={styles.select}
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="post">Post</option>
              <option value="text">Text Message</option>
            </select>
          </div>

          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="councilMemberContact"
                checked={formData.councilMemberContact}
                onChange={handleInputChange}
                className={styles.checkbox}
              />
              <span className={styles.checkboxText}>
                I authorize LocalLogic to contact my local council member on my
                behalf regarding this issue.
              </span>
            </label>
          </div>

          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="publicHearing"
                checked={formData.publicHearing}
                onChange={handleInputChange}
                className={styles.checkbox}
              />
              <span className={styles.checkboxText}>
                I'm willing to attend public hearings or council meetings if
                necessary to support this issue.
              </span>
            </label>
          </div>

          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="followUpConsent"
                checked={formData.followUpConsent}
                onChange={handleInputChange}
                className={styles.checkbox}
              />
              <span className={styles.checkboxText}>
                I consent to regular follow-up communications about the progress
                of my case. *
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
            Submit Council Issue
            <Send size="20" color="#FFFFFF" />
          </Button>

          <p className={styles.footerNote}>
            We'll review your submission and begin advocacy within 3-5 business
            days. You'll receive regular updates on progress.
          </p>
        </div>
      </form>
    </div>
  );
};

export default LocalLogicForm;
