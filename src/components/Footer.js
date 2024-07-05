import React from "react";
//import { BsTwitter } from "react-icons/bs";
//import { BsYoutube } from "react-icons/bs";
import "../styles/Footer.css"; // Import your custom CSS file

function Footer() {
  
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* Links to terms & privacy policy (already included) */}
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
      <p> &copy; 2024 programmingwithsam.com </p>
      <div className="footer-section-columns">
        {/* Links already included, no changes needed */}
      </div>
       
    </div>
  );
}

export default Footer;
