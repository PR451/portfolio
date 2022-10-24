import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There ✋, I am
         <br /> <span className="info-name">Pooja Wattamwar</span>.
         <br /> I love building web applications.
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/pooja.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;