import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Saad Afzal
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/saadafzal97/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/saadafzal.97/" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://github.com/saadafzal8384" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Saad Afzal. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
