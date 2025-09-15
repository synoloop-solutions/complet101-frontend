import React, { useState } from "react";
import styles from "./FormStyles.module.css";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { ArrowLeft, Send } from "iconsax-reactjs";

const CompLet101Form = ({ onBack }) => {
  const [formData, setFormData] = useState({
    complainantName: "",
    complainantEmail: "",
    complainantPhone: "",
    organization: "",
    complaintType: "",
    complaintSubject: "",
    complaintDescription: "",
    incidentDate: "",
    desiredOutcome: "",
    urgencyLevel: "medium",
    attachments: null,
    gdprConsent: false,
    privacyConsent: false,
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
    console.log("CompLet101 Form submitted:", formData);
    // Handle form submission logic here
  };

  const complaintTypes = [
    "Service Quality",
    "Billing/Payment Issue",
    "Staff Conduct",
    "Policy Violation",
    "Discrimination",
    "Data Protection",
    "Other",
  ];

  return (
    <div className={styles.formContainer}>
      <Button
        variant="ghost"
        size="small"
        onBack={true}
        className={styles.backButton}
      >
        <ArrowLeft size="20" color="#2677b2" />
        Back to Services
      </Button>
      <div className={styles.formHeader}>
        <Heading
          level="h1"
          size="large"
          color="dark"
          weight="bold"
          align="center"
        >
          CompLet101™ Complaint Form
        </Heading>

        <p className={styles.formDescription}>
          Submit your complaint professionally and ensure fair resolution
          through our structured process.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Personal Information Section */}
        <div className={styles.formSection}>
          <Heading level="h3" size="medium" color="dark" weight="semibold">
            Personal Information
          </Heading>

          <div className={styles.inputGroup}>
            <label htmlFor="complainantName" className={styles.label}>
              Full Name *
            </label>
            <input
              type="text"
              id="complainantName"
              name="complainantName"
              value={formData.complainantName}
              onChange={handleInputChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="complainantEmail" className={styles.label}>
                Email Address *
              </label>
              <input
                type="email"
                id="complainantEmail"
                name="complainantEmail"
                value={formData.complainantEmail}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="complainantPhone" className={styles.label}>
                Phone Number
              </label>
              <input
                type="tel"
                id="complainantPhone"
                name="complainantPhone"
                value={formData.complainantPhone}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="organization" className={styles.label}>
              Organization/Company (if applicable)
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
        </div>

        {/* Complaint Details Section */}
        <div className={styles.formSection}>
          <Heading level="h3" size="medium" color="dark" weight="semibold">
            Complaint Details
          </Heading>

          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="complaintType" className={styles.label}>
                Complaint Type *
              </label>
              <select
                id="complaintType"
                name="complaintType"
                value={formData.complaintType}
                onChange={handleInputChange}
                className={styles.select}
                required
              >
                <option value="">Select complaint type</option>
                {complaintTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="urgencyLevel" className={styles.label}>
                Urgency Level
              </label>
              <select
                id="urgencyLevel"
                name="urgencyLevel"
                value={formData.urgencyLevel}
                onChange={handleInputChange}
                className={styles.select}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="complaintSubject" className={styles.label}>
              Complaint Subject *
            </label>
            <input
              type="text"
              id="complaintSubject"
              name="complaintSubject"
              value={formData.complaintSubject}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Brief summary of your complaint"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="complaintDescription" className={styles.label}>
              Detailed Description *
            </label>
            <textarea
              id="complaintDescription"
              name="complaintDescription"
              value={formData.complaintDescription}
              onChange={handleInputChange}
              className={styles.textarea}
              placeholder="Provide a detailed description of your complaint, including dates, locations, and any relevant information"
              rows="5"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="incidentDate" className={styles.label}>
              Incident Date
            </label>
            <input
              type="date"
              id="incidentDate"
              name="incidentDate"
              value={formData.incidentDate}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="desiredOutcome" className={styles.label}>
              Desired Outcome
            </label>
            <textarea
              id="desiredOutcome"
              name="desiredOutcome"
              value={formData.desiredOutcome}
              onChange={handleInputChange}
              className={styles.textarea}
              placeholder="What would you like to see happen as a result of this complaint?"
              rows="3"
            />
          </div>
        </div>

        {/* Consent Section */}
        <div className={styles.formSection}>
          <Heading level="h3" size="medium" color="dark" weight="semibold">
            Consent & Privacy
          </Heading>

          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="gdprConsent"
                checked={formData.gdprConsent}
                onChange={handleInputChange}
                className={styles.checkbox}
                required
              />
              <span className={styles.checkboxText}>
                I consent to the processing of my personal data in accordance
                with GDPR regulations for the purpose of handling my complaint.
                *
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
                I have read and agree to the Privacy Policy and Terms of
                Service. *
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
            Submit Complaint
            <Send size="20" color="#FFFFFF" />
          </Button>

          <p className={styles.footerNote}>
            Your complaint will be reviewed within 2-3 business days. You'll
            receive a confirmation email with a reference number.
          </p>
        </div>
      </form>
    </div>
  );
};

export default CompLet101Form;
