import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
        </a>
        <a href="https://github.com/AsmaH5" target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/asma-h-757b14155/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 ¦ Asma Hassan</p>
    </div>
    
  );
}

export default Footer;