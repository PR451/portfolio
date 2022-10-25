import React from "react";
import './Mobile.css'
function Mobile({ isOpen, setIsOpen}) {
  return (
  <div className="mobile">
    <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
      <i class="fi-rr-cross-circle"></i>
    </div>
    <div className="mobile-option">
    <a href="#projects" onClick={() => setIsOpen(!isOpen)}>
          <i class="fi-rr-edit-alt option-icon"></i>Projects
        </a>
    </div>
    <div className="mobile-option">
        <a href="#skills" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi-rr-laptop option-icon"></i>Skills
        </a>
    </div>
    <div className="mobile-option">
        <a href="#work" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi-rr-briefcase option-icon"></i>Work
        </a>
    </div>
    <div className="mobile-option">
        <a href="#contact" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi fi-rr-user option-icon"></i>Contact
        </a>
    </div>
  </div>
  );
}

export default Mobile;