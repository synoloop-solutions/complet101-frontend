import React from "react";
import styles from "./Heading.module.css";

/**
 * Reusable Heading component with Semantic HTML and Accessibility features and flexible styling.
 *
 * @param {string} children - The text content of the heading.
 * @param {string} level - The heading level (h1, h2, h3, etc.). Default is 'h1'.
 * @param {string} size - Size of the heading (small, medium, large). Default is 'medium'.
 * @param {string} color - Color of the heading text. Default is 'black'.
 * @param {string} weight - Font weight (normal, bold, etc.). Default is 'normal'.
 * @param {string} align - Text alignment (left, center, right). Default is 'left'.
 * @param {string/number} marginBottom - Margin bottom for spacing.
 * @param {string} className - Additional CSS classes for custom styling.
 * @param {object} style - Inline styles for further customization.
 * @param {object} ...props - Additional HTML attributes.
 */

const Heading = ({
  children,
  level = "h1",
  size = "large",
  color = "primary",
  weight = "bold",
  align = "",
  marginBottom,
  className = "",
  style = {},
  ...props
}) => {
  const validLevels = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const HeadingTag = validLevels.includes(level) ? level : "h1";

  // Build css classes
  const cssClasses = [
    styles.heading,
    styles[`heading--${size}`],
    styles[`heading--${color}`],
    styles[`heading--${weight}`],
    styles[`heading--${align}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Handle dynamic margin bottom
  const dynamicStyles = {
    ...style,
    ...(marginBottom && {
      marginBottom:
        typeof marginBottom === "number" ? `${marginBottom}px` : marginBottom,
    }),
  };

  return (
    <HeadingTag className={cssClasses} style={dynamicStyles} {...props}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
export { Heading };
