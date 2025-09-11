import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./AgeVerification.module.css";
import CustomSelect from "./CustomSelect";
import Button from "./Button";
import Heading from "./Heading";

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

  const [loading, setLoading] = useState(false);

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

  const handleAgeSelection = useCallback((selectedOption) => {
    setSelectedAge(selectedOption);
    setHasAttempted(false); // Reset attempt state when selection changes
  }, []);

  const handleContinue = async () => {
    setHasAttempted(true);

    // Check if user has selected an age
    if (!selectedAge) {
      return; // Error will show due to showError logic
    }

    setLoading(true);

    // Simulate API call or processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);

    // Route based on age selection
    if (selectedAge.isAdult) {
      // User is 18+ - call success callback
      onAgeVerified?.(true);
    } else {
      // User is under 18 - call failure callback
      onVerificationFailed?.(false);
    }
  };

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
        <Heading
          id="age-verification-title"
          className={styles.title}
          level="h3"
          size="medium"
          color=""
          weight="bold"
        >
          {messages.title}
        </Heading>

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

          {/* Underage warning Message */}
          {showUnderageMessage && (
            <div
              className={styles.warningMessage}
              role="alert"
              aria-live="polite"
            >
              <p>
                ⚠️ Please note: Our services require users to be 18 or older.
              </p>
            </div>
          )}
        </div>

        <Button
          variant="primary"
          size="large"
          onClick={handleContinue}
          loading={loading || isLoading}
          disabled={loading}
        >
          Continue
        </Button>

        {/* Loading State */}
        {(isLoading || loading) && (
          <div className={styles.loading} role="status" aria-live="polite">
            <span className={styles.loadingText}>
              {loading ? "Processing..." : "Verifying..."}
            </span>
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
