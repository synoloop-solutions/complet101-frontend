import React from "react";
import styles from "./Button.module.css";

/**
 * Reusable Button component with multiple variants and states
 *
 * @param {string|React.ReactNode} children - Button content
 * @param {string} variant - Button style variant
 * @param {string} size - Button size variant
 * @param {boolean} disabled - Disabled state
 * @param {boolean} loading - Loading state
 * @param {string} type - HTML button type
 * @param {Function} onClick - Click handler
 * @param {string} className - Additional CSS classes
 * @param {Object} style - Inline styles
 * @param {Object} ...props - Additional HTML button attributes
 */
const Button = ({
  children,
  variant = "primary",
  size = "large",
  disabled = false,
  loading = false,
  type = "button",
  onClick,
  className = "",
  style = {},
  ...props
}) => {
  // Build CSS classes
  const cssClasses = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    loading && styles["button--loading"],
    disabled && styles["button--disabled"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Handle click with loading/disabled state
  const handleClick = (event) => {
    if (disabled || loading) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return (
    <button
      type={type}
      className={cssClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      style={style}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className={styles.spinner} aria-hidden="true">
          <svg className={styles.spinnerIcon} viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="32"
              strokeDashoffset="32"
            />
          </svg>
        </span>
      )}
      <span className={loading ? styles.buttonTextLoading : styles.buttonText}>
        {children}
      </span>
    </button>
  );
};

// Export both default and named
export default Button;
export { Button };
