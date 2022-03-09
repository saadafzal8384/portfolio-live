import React from "react";
import "./portfolio.css";
import WoodpeckerIMG from "../../assets/woodpecker.jpg";
import gutjharIMG from "../../assets/gutjahr.jpg";
import indicieduIMG from "../../assets/indici-edu-logo.jpg";
import indiciconnectIMG from "../../assets/Indici-connect.jpg";
import igniteIMG from "../../assets/Ignite-Startup-Portal.jpg";
import ehsaasIMG from "../../assets/ehsaaslogo.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className=" portfolio__item">
          <div className="portfolio__item-image">
            <img src={WoodpeckerIMG} alt="Project Thumnail" />
          </div>
          <h3>Floor and Terrace Planner</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://woodpeckerag.ch/woodpecker/"
              className="btn btn-primary"
              target="_blank"
            >
              To the Project
            </a>
          </div>
        </article>
        <article className=" portfolio__item">
          <div className="portfolio__item-image">
            <img src={gutjharIMG} alt="Project Thumnail" />
          </div>
          <h3>Balcony & drainage Planner</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://kosy.gutjahr.com/step/view/1"
              className="btn btn-primary"
              target="_blank"
            >
              To the Project
            </a>
          </div>
        </article>
        <article className=" portfolio__item">
          <div className="portfolio__item-image">
            <img src={indicieduIMG} alt="Project Thumnail" />
          </div>
          <h3>Virtual Eduction Startup</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://indiciedu.com.pk/"
              className="btn btn-primary"
              target="_blank"
            >
              To the Project
            </a>
          </div>
        </article>
        <article className=" portfolio__item">
          <div className="portfolio__item-image">
            <img src={indiciconnectIMG} alt="Project Thumnail" />
          </div>
          <h3>Virtual Meetings System</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://indiciconnect.com/"
              className="btn btn-primary"
              target="_blank"
            >
              To the Project
            </a>
          </div>
        </article>
        <article className=" portfolio__item">
          <div className="portfolio__item-image">
            <img src={igniteIMG} alt="Project Thumnail" />
          </div>
          <h3> Government Startup Portal</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://ignite.org.pk/nic/"
              className="btn btn-primary"
              target="_blank"
            >
              To the Project
            </a>
          </div>
        </article>
        <article className=" portfolio__item">
          <div className="portfolio__item-image">
            <img src={ehsaasIMG} alt="Project Thumnail" />
          </div>
          <h3>People Welfare Portal</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://ehsaas.hec.gov.pk/#/login"
              className="btn btn-primary"
              target="_blank"
            >
              To the Project
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
