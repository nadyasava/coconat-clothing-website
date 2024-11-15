import React from 'react';
import '../styles/Hero.css';
import backgroundImage from '../assets/hero-img.jpg';

const Hero = () => {
  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1 className='hero-title'>Welcome to Coconat Store</h1>
        <p className='hero-text'>Your one-stop shop for everything stylish.</p>
        <button className="hero-button" onClick={handleScroll}>Take a Look</button>
      </div>
    </section>
  );
};

export default Hero;
