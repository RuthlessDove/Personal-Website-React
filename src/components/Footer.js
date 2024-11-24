// Dependencies
import React from "react";
import { Link } from "react-scroll";

// Styles
import "./css/Footer.css";

// Assets
import github from "../assets/icons8-github.svg";
import linkedin from "../assets/icons8-linkedin.svg";

const assets = [
  {
    image: github,
    ref: "https://github.com/RuthlessDove",
  },
  {
    image: linkedin,
    ref: "https://www.linkedin.com/in/grace-royle-uwumagbe",
  },
];

const Footer = () => {
  return (
    <>
      <div className="f-container">
        <div className="f-subcontainer">
          <div className="f-content">
            {assets.map((asset) => (
              <a
                rel="noopener noreferrer"
                href={asset.ref}
                className="f-link"
                target="_blank"
              >
                <span className="f-icons">
                  <img src={asset.image} className="f-icon-img" />
                </span>
              </a>
            ))}
          </div>
          
          <div className="f-nav">
            <Link to="home" className="f-nav-item">
              Home
            </Link>
            <Link to="about" className="f-nav-item">
              About
            </Link>
            <Link to="skills" className="f-nav-item">
              Skills
            </Link>
            <Link to="projects" className="f-nav-item">
              Projects
            </Link>
            <Link to="experience" className="f-nav-item">
              Experience
            </Link>
            <Link to="contact" className="f-nav-item">
              Contact
            </Link>
          </div>

          <div className="f-line">
            <p className="f-rights">© Grace Royle Uwumagbe 2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
