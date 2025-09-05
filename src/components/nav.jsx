import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
/*import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";*/

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        {/* Logo */}
        <div className="nav-logo">
          <span className="logo-text">LegalTech</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            
            {/* Products Dropdown */}
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="nav-link nav-dropdown-trigger">
                  Products <ChevronDown className="nav-dropdown-icon" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="nav-dropdown-content">
                  <DropdownMenuItem>
                    <a href="#complet101" className="nav-dropdown-item">CompLet101</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#locallogic" className="nav-dropdown-item">LocalLogic</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#uready" className="nav-dropdown-item">UReady</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#safeguarding" className="nav-link">Safeguarding Guide</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="nav-mobile-toggle">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="nav-mobile-menu">
          <ul className="nav-mobile-list">
            <li><a href="#home" className="nav-mobile-link" onClick={toggleMobileMenu}>Home</a></li>
            
            {/* Mobile Products Submenu */}
            <li>
              <div className="nav-mobile-submenu">
                <span className="nav-mobile-label">Products</span>
                <ul className="nav-mobile-sublist">
                  <li><a href="#complet101" className="nav-mobile-sublink" onClick={toggleMobileMenu}>CompLet101</a></li>
                  <li><a href="#locallogic" className="nav-mobile-sublink" onClick={toggleMobileMenu}>LocalLogic</a></li>
                  <li><a href="#uready" className="nav-mobile-sublink" onClick={toggleMobileMenu}>UReady</a></li>
                </ul>
              </div>
            </li>
            
            <li><a href="#about" className="nav-mobile-link" onClick={toggleMobileMenu}>About</a></li>
            <li><a href="#safeguarding" className="nav-mobile-link" onClick={toggleMobileMenu}>Safeguarding Guide</a></li>
            <li><a href="#contact" className="nav-mobile-link" onClick={toggleMobileMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;