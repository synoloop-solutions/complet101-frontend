import React, { useState, useRef, useEffect } from "react";
import "./CustomSelect.css"; // import CSS file

const CustomSelect = ({
  options,
  placeholder = "Select an option",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    onChange && onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select" ref={dropdownRef}>
      <button
        className="custom-select-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected ? selected.label : placeholder}
        <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
      </button>

      {isOpen && (
        <ul className="custom-options">
          {options.map((option, index) => (
            <li
              key={index}
              className="custom-option"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
