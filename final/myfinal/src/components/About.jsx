import React from 'react';
import Orca from '../static/images/orca.jpg';
import '../static/css/About.css';
import '../static/css/css-gg.css';

function About({ darkModeClass }) {
  return (
    <div className="about">
      <div className={`about__img-wrap ${darkModeClass}`}>
        <img src={Orca} alt="Orca" className="about__img" />
      </div>

      <div className="about__content">

        <div className={`about__section-header ${darkModeClass}`}>
          <div className="about__section-title">About OrcaSecure</div>
        </div>

        <div className={`about__section-content ${darkModeClass}`}>
          <p className={`about__section-text ${darkModeClass}`}>
            OrcaSecure BV aims to make security effective. Effective security will be achieved through an integrated approach, a proactive security concept in accordance with the Israeli security method and experienced security personnel
          </p>
        </div>

        <div className={`about__section-header ${darkModeClass}`}>
          <div className="about__section-title">About Us</div>
        </div>

        <div className={`about__section-content ${darkModeClass}`}>
          <p className={`about__section-text ${darkModeClass}`}>
            In the proactive security concept, people are the key to success and that is why we focus on the human factor in the proactive security concept. Through this people-oriented approach we bring the security of organizations and companies to a high-quality level, so that the security meets all expectations in all facets.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
