import React from "react";
import "./certificate.css";
import WebDesignIMG from "../../assets/fcc-rwd.jpg";
import JSIMG from "../../assets/fcc-js.jpg";
import reactIMG from "../../assets/fcc-react.jpg";

const Certificate = () => {
  return (
    <section id="portfolio">
      <h5>I'm</h5>
      <h2>Certified In</h2>
      <div className="container portfolio__container">
        <article className=" portfolio__item">
          <div className="portfolio__item-image">
            <img src={WebDesignIMG} alt="Certificate Thumnail" />
          </div>
          <h3>Responsive Web Design and Development</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://www.freecodecamp.org/certification/saadafzal/responsive-web-design"
              className="btn btn-primary"
              target="_blank"
            >
              View Certificate
            </a>
          </div>
        </article>
        <article className=" portfolio__item">
          <div className="portfolio__item-image">
            <img src={JSIMG} alt="Certificate Thumnail" />
          </div>
          <h3>JavaScript Algorithms and Data Structures</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://www.freecodecamp.org/certification/saadafzal/javascript-algorithms-and-data-structures"
              className="btn btn-primary"
              target="_blank"
            >
              View Certificate
            </a>
          </div>
        </article>
        <article className=" portfolio__item">
          <div className="portfolio__item-image">
            <img src={reactIMG} alt="Certificate Thumnail" />
          </div>
          <h3>Front End Development Libraries</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://www.freecodecamp.org/certification/saadafzal/front-end-development-libraries"
              className="btn btn-primary"
              target="_blank"
            >
              View Certificate
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Certificate;
