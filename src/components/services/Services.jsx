import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Website Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Static Website Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Dynamic Website Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CMS Websites Development i.e. WordPress</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Resposive Website Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Basic SEO</p>
            </li>
          </ul>
        </article>
        {/* End of Article */}

        {/* Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Web App Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Access based web App Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cloud Hosted Web Application Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Serverside Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Payment Gateways Integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Knowledge of MySQL, PostgreSQL and Mongo DB</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Familiar with Docker, GitHub, JIRA</p>
            </li>
          </ul>
        </article>
        {/* End of Article */}

        {/* Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>UI / UX</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Logo, banner, broucher Designing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Pixel Perfect User Interface Design, using Adobe XD</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Expertise with Adobe PS, AI and XD</p>
            </li>
          </ul>
        </article>
        {/* End of Article */}
      </div>
    </section>
  );
};

export default Services;
