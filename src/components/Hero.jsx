import React from "react";
import "../styles/Hero.css";
import backgroundImage from "../assets/hero-img.jpg";

const Hero = () => {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content">
        <h1 className="hero-title" data-aos="fade-down">
          Welcome to Coconat Store
        </h1>
        <p className="hero-text" data-aos="zoom-in">
          Your one-stop shop for everything stylish.
        </p>
        <div className="scroll-wrapper">
          <div className="scrolldown" onClick={handleScroll}>
            <div className="chevrons">
              <div className="chevrondown"></div>
              <div className="chevrondown"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
