import React from "react";
import "./Contact.css";
import Separator from "../../Common/Separator/Separator";
import SocialContact from "../../Common/SocialContact/SocialContact";
function Contact() {
  return (
    <div className="contact">
    <Separator />
    <label className="section-title">Contact</label>
    <div className="contact-container">
      <div className="contact-left">
        <p>Want to get in touch? Contact me on any of the platform</p>
        <SocialContact />
        </div>
      </div>
    </div>
  );
}

export default Contact;