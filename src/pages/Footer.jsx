import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-cont">
      <div className="first">
        <h3>Personal Portfolio</h3>
        <div className="btn-container">
          <a
            href="https://www.facebook.com/profile.php?id=61551033714157"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/adeelimran89/" target="_blank">
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/adeel-imran-532a84328/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/adeel420?tab=repositories"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
      </div>
      <div className="second">
        <h3>Quick Links</h3>
        <div className="links">
          <a href="#first-section">
            &rarr; <span>Home</span>
          </a>
          <a href="#second-section">
            &rarr; <span>About Me</span>
          </a>
          <a href="#third-section">
            &rarr; <span>Skills</span>
          </a>
          <a href="#forth-section">
            &rarr; <span>Testimonals</span>
          </a>
          <a href="#fifth-section">
            &rarr; <span>Projects</span>
          </a>
          <a href="#sixth-section">
            &rarr; <span>Services</span>
          </a>
          <a href="#seventh-section">
            &rarr; <span>Contact</span>
          </a>
        </div>
      </div>
      <div className="third">
        <h3>Get In Touch</h3>
        <div className="links">
          <a href="">
            <div>
              <FaPhoneAlt />
            </div>
            <div>
              0320-9430934 <br /> <span>Call us</span>
            </div>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
            target="_blank"
          >
            <div>
              <FaEnvelope />
            </div>
            <div>
              Email Address <br />
              <span>adeelparacha186@gmail.com</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
