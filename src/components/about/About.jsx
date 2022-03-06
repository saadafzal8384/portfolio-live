import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import ME from "../../assets/saad.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about__card">
              <BsCodeSlash className="about__icon" />
              <h5>Projects Completed</h5>
              <small>20+</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Language & Frameworks</h5>
              <small>10+</small>
            </article>
          </div>

          <p>
            Highly competent Software Developer with 3 years experience in
            developing a wide range of solutions for the Web. Proven expertise
            in building enterprise web applications. In-depth understanding of
            the Web app project lifecycle and very capable at all aspects of
            development - from project planning to requirements gathering
            through to writing and testing code, creating documentation, and
            support.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
