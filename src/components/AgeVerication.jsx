import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./AgeVerification.module.css";
import CustomSelect from "./CustomSelect";

/**
 * Age verification component with enhanced UX and validation
 * @param {Function} onAgeVerified - Callback when age is successfully verified (isAdult: boolean)
 * @param {Function} onVerificationFailed - Callback when verification fails
 * @param {boolean} isLoading - Loading state for async operations
 * @param {string} error - Error message to display
 * @param {Object} customMessages - Override default messages
 */
const AgeVerification = ({
  onAgeVerified,
  onVerificationFailed,
  isLoading = false,
  error = null,
  customMessages = {},
}) => {
  const [selectedAge, setSelectedAge] = useState(null);
  const [hasAttempted, setHasAttempted] = useState(false);

  // Default messages with override capability
  const messages = {
    title: "Age Verification Required",
    description:
      "To ensure we provide appropriate services and comply with regulations, please confirm your age.",
    placeholder: "Please select your age range",
    underageMessage:
      "We apologize, but you must be 18 or older to access this service.",
    errorMessage: "Please select your age range to continue.",
    ...customMessages,
  };

  // Age options with clear labeling
  const ageOptions = [
    {
      value: "adult",
      label: "I am 18 years or older",
      isAdult: true,
    },
    {
      value: "minor",
      label: "I am under 18 years old",
      isAdult: false,
    },
  ];

  const handleAgeSelection = useCallback(
    (selectedOption) => {
      setSelectedAge(selectedOption);
      setHasAttempted(true);

      if (selectedOption.isAdult) {
        // User is adult - call success callback
        onAgeVerified?.(true);
      } else {
        // User is minor - call failure callback
        onVerificationFailed?.(false);
      }
    },
    [onAgeVerified, onVerificationFailed]
  );

  const showError = hasAttempted && !selectedAge && !error;
  const showUnderageMessage = selectedAge && !selectedAge.isAdult;

  return (
    <div
      className={styles.ageVerification}
      role="dialog"
      aria-labelledby="age-verification-title"
      aria-describedby="age-verification-description"
    >
      <div className={styles.content}>
        <h2 id="age-verification-title" className={styles.title}>
          {messages.title}
        </h2>

        <p id="age-verification-description" className={styles.description}>
          {messages.description}
        </p>

        <div className={styles.selectContainer}>
          <CustomSelect
            options={ageOptions}
            placeholder={messages.placeholder}
            onChange={handleAgeSelection}
            disabled={isLoading}
            aria-label="Age verification selection"
            aria-describedby={
              showError || error ? "age-verification-error" : undefined
            }
            aria-invalid={showError || !!error}
          />
        </div>

        {/* Error Messages */}
        {(showError || error) && (
          <div
            id="age-verification-error"
            className={styles.errorMessage}
            role="alert"
            aria-live="polite"
          >
            {error || messages.errorMessage}
          </div>
        )}

        {/* Underage Message */}
        {showUnderageMessage && (
          <div
            className={styles.underageMessage}
            role="alert"
            aria-live="polite"
          >
            <p>{messages.underageMessage}</p>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className={styles.loading} role="status" aria-live="polite">
            <span className={styles.loadingText}>Verifying...</span>
          </div>
        )}
      </div>
    </div>
  );
};

AgeVerification.propTypes = {
  onAgeVerified: PropTypes.func,
  onVerificationFailed: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  customMessages: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    placeholder: PropTypes.string,
    underageMessage: PropTypes.string,
    errorMessage: PropTypes.string,
  }),
};

export default AgeVerification;
