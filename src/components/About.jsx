import React from "react";
import "../styles/About.css";
import aboutimage from "../assets/about-img.jpg";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src={aboutimage} alt="About Us" />
        </div>
        <div className="about-text">
          <h2>About Coconat</h2>
          <p className="about-paragraph">
            At Coconat, we are committed to offering the best selection of
            products that cater to your needs. Our team is dedicated to curating
            high-quality items with a focus on style, affordability, and
            sustainability. Join us in our journey to bring you closer to the
            products you love.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
