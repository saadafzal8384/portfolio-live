import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/saad-afzal-495958103" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/saadafzal8384" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/saadafzal.97/" target="_blank">
        <ImInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
