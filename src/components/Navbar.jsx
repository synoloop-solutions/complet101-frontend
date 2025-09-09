import React, { useState } from "react";
import "../styles/navbar.css";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="logo">Complet101</div>

        <div className="links">
          <a href="#about" className="link">
            About
          </a>

          {/* Products Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <a href="#products" className="link">
              Products ▼
            </a>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="#complet101">CompLet101</a>
                <a href="#locallogic">LocalLogic</a>
                <a href="#uready">UReady</a>
              </div>
            )}
          </div>

          <a href="#contact" className="link">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
