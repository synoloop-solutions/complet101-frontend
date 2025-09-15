import React, { useState } from "react";
import styles from "./ServiceForm.module.css";
import Navigation from "./Navigation";
import Heading from "./Heading";
import Button from "./Button";
import { ArrowLeft, Send } from "lucide-react";

const ServiceForm = ({ serviceType, onGoBack, onNavigate, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Service-specific configurations
  const serviceConfig = {
    1: {
      title: "CompLet101™ Form",
      subtitle: "Professional complaint submission and resolution services",
      icon: "📋",
      fields: [
        {
          id: "complainantName",
          label: "Your Full Name",
          type: "text",
          required: true,
        },
        {
          id: "organization",
          label: "Organization/Company Against",
          type: "text",
          required: true,
        },
        {
          id: "incidentDate",
          label: "Date of Incident",
          type: "date",
          required: true,
        },
        {
          id: "complaintCategory",
          label: "Complaint Category",
          type: "select",
          required: true,
          options: [
            "Service Quality",
            "Discrimination",
            "Privacy Breach",
            "Financial",
            "Other",
          ],
        },
        {
          id: "description",
          label: "Detailed Description",
          type: "textarea",
          required: true,
          rows: 5,
        },
        {
          id: "evidence",
          label: "Supporting Evidence",
          type: "file",
          accept: ".pdf,.doc,.docx,.jpg,.png",
        },
        {
          id: "preferredOutcome",
          label: "Preferred Resolution",
          type: "textarea",
          rows: 3,
        },
        {
          id: "contactMethod",
          label: "Preferred Contact Method",
          type: "select",
          options: ["Email", "Phone", "Post"],
        },
      ],
    },
    2: {
      title: "LocalLogic Form",
      subtitle:
        "Specialized support for council-related complaints and local government issues",
      icon: "🏛️",
      fields: [
        {
          id: "residentName",
          label: "Your Full Name",
          type: "text",
          required: true,
        },
        { id: "address", label: "Your Address", type: "text", required: true },
        {
          id: "councilArea",
          label: "Council/Local Authority",
          type: "text",
          required: true,
        },
        {
          id: "issueType",
          label: "Issue Type",
          type: "select",
          required: true,
          options: [
            "Planning Permission",
            "Waste Management",
            "Roads & Transport",
            "Housing",
            "Environmental",
            "Other",
          ],
        },
        {
          id: "issueLocation",
          label: "Location of Issue",
          type: "text",
          required: true,
        },
        {
          id: "issueDate",
          label: "When did this occur?",
          type: "date",
          required: true,
        },
        {
          id: "description",
          label: "Detailed Description",
          type: "textarea",
          required: true,
          rows: 5,
        },
        {
          id: "previousContact",
          label: "Have you contacted the council before?",
          type: "radio",
          options: ["Yes", "No"],
        },
        {
          id: "evidence",
          label: "Supporting Documents/Photos",
          type: "file",
          accept: ".pdf,.doc,.docx,.jpg,.png",
        },
        {
          id: "urgency",
          label: "Urgency Level",
          type: "select",
          options: ["Low", "Medium", "High", "Critical"],
        },
      ],
    },
    3: {
      title: "UReady Form",
      subtitle: "Comprehensive business support and formation guidance",
      icon: "⭐",
      fields: [
        {
          id: "businessName",
          label: "Business Name (if applicable)",
          type: "text",
        },
        {
          id: "ownerName",
          label: "Owner/Founder Name",
          type: "text",
          required: true,
        },
        {
          id: "businessType",
          label: "Business Type",
          type: "select",
          required: true,
          options: [
            "Sole Proprietorship",
            "Partnership",
            "Limited Company",
            "Not Sure Yet",
          ],
        },
        {
          id: "industry",
          label: "Industry/Sector",
          type: "text",
          required: true,
        },
        {
          id: "businessStage",
          label: "Business Stage",
          type: "select",
          required: true,
          options: [
            "Idea Stage",
            "Planning Stage",
            "Starting Up",
            "Already Trading",
            "Expanding",
          ],
        },
        {
          id: "supportNeeded",
          label: "Support Needed",
          type: "checkbox",
          options: [
            "Business Formation",
            "Compliance Guidance",
            "Financial Planning",
            "Marketing Strategy",
            "Legal Advice",
          ],
        },
        {
          id: "description",
          label: "Business Description",
          type: "textarea",
          required: true,
          rows: 4,
        },
        {
          id: "timeline",
          label: "Desired Timeline",
          type: "select",
          options: [
            "ASAP",
            "Within 1 month",
            "Within 3 months",
            "Within 6 months",
            "No rush",
          ],
        },
        {
          id: "budget",
          label: "Budget Range",
          type: "select",
          options: [
            "Under £500",
            "£500-£1000",
            "£1000-£5000",
            "£5000+",
            "To be discussed",
          ],
        },
        {
          id: "previousExperience",
          label: "Previous Business Experience",
          type: "radio",
          options: ["Yes", "No"],
        },
      ],
    },
  };

  const config = serviceConfig[serviceType] || serviceConfig[1];

  const handleInputChange = (fieldId, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    const requiredFields = config.fields.filter((field) => field.required);
    const missingFields = requiredFields.filter((field) => !formData[field.id]);

    if (missingFields.length > 0) {
      alert(`Please fill in: ${missingFields.map((f) => f.label).join(", ")}`);
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", { serviceType, formData });

      if (onSubmit) {
        onSubmit(serviceType, formData);
      } else {
        alert("Form submitted successfully!");
        onGoBack(); // Return to services page
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field) => {
    const baseProps = {
      id: field.id,
      name: field.id,
      required: field.required,
      className: styles.formInput,
      onChange: (e) => handleInputChange(field.id, e.target.value),
    };

    switch (field.type) {
      case "text":
      case "email":
      case "date":
        return (
          <input
            type={field.type}
            placeholder={field.placeholder}
            {...baseProps}
          />
        );

      case "textarea":
        return (
          <textarea
            rows={field.rows || 3}
            placeholder={`Enter ${field.label.toLowerCase()}...`}
            {...baseProps}
          />
        );

      case "select":
        return (
          <select {...baseProps}>
            <option value="">Select {field.label}</option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case "radio":
        return (
          <div className={styles.radioGroup}>
            {field.options.map((option) => (
              <label key={option} className={styles.radioLabel}>
                <input
                  type="radio"
                  name={field.id}
                  value={option}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  className={styles.radioInput}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        );

      case "checkbox":
        return (
          <div className={styles.checkboxGroup}>
            {field.options.map((option) => (
              <label key={option} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  value={option}
                  onChange={(e) => {
                    const currentValues = formData[field.id] || [];
                    const newValues = e.target.checked
                      ? [...currentValues, option]
                      : currentValues.filter((v) => v !== option);
                    handleInputChange(field.id, newValues);
                  }}
                  className={styles.checkboxInput}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        );

      case "file":
        return (
          <input
            type="file"
            accept={field.accept}
            multiple
            {...baseProps}
            onChange={(e) => handleInputChange(field.id, e.target.files)}
          />
        );

      default:
        return null;
    }
  };

  const navItems = [
    { label: "Home", href: "home", active: false },
    { label: "Services", href: "services", active: false },
    { label: "Overview", href: "overview", active: false },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Navigation
        logoText="CompLet101"
        navItems={navItems}
        showBackButton={true}
        onBackClick={onGoBack}
        onNavClick={(item) => onNavigate?.(item.href, item.label)}
      />

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <span className={styles.serviceIcon}>{config.icon}</span>
            <div>
              <Heading
                level="h1"
                size="large"
                color="primary"
                weight="bold"
                marginBottom="8px"
              >
                {config.title}
              </Heading>
              <p className={styles.subtitle}>{config.subtitle}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGrid}>
            {config.fields.map((field) => (
              <div key={field.id} className={styles.formGroup}>
                <label htmlFor={field.id} className={styles.formLabel}>
                  {field.label}
                  {field.required && <span className={styles.required}>*</span>}
                </label>
                {renderField(field)}
              </div>
            ))}
          </div>

          <div className={styles.formActions}>
            <Button
              type="button"
              variant="secondary"
              size="medium"
              onClick={onGoBack}
            >
              <ArrowLeft size={20} />
              Back to Services
            </Button>

            <Button
              type="submit"
              variant="primary"
              size="medium"
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Form"}
              <Send size={20} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
