import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../SocialIcons/SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons-container">
      <div className="follow-me-wrapper">
        <h1 style={{ fontSize: "100%", color: "grey" }}>Follow Me</h1>
      </div>

      <div className="social-icons-wrapper">
        <a
          href="https://github.com/ron-thecertifiedbomb"
          target="_blank"
          rel="noopener noreferrer"
        >
         
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/ronan-sibunga-2747a5252/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.twitter.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://web.facebook.com/profile.php?id=100086490460104"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
