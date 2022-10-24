import React from "react";
import "./About.css";
import SocialContact from "../../Common/SocialContact/SocialContact";
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