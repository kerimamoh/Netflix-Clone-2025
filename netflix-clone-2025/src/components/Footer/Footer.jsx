// 
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-outer-container">
      <div className="footer-inner-container">
        <div className="footer-icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div className="footer-column">
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div className="footer-column">
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className="footer-column">
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="copyright">© 1997_2025 Netflix, Inc.</div>
      </div>
    </footer>
  );
};


export default Footer