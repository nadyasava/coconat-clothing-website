import React from "react";
import "../styles/Footer.css";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from '../assets/coconat-logo.png';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
        <img className="footer-logo" src={logo} alt="Coconat Store" />
          <p className="text-justify">
            At Coconat, we are committed to offering the best selection of
            products that cater to your needs. Our team is dedicated to curating
            high-quality items with a focus on style, affordability, and
            sustainability. Join us in our journey to bring you closer to the
            products you love.
          </p>
        </div>

        <div className="footer-section">
          <h6>Our Products</h6>
          <ul className="footer-links">
            <li>
              <a>Clothes</a>
            </li>
            <li>
              <a>Joggers</a>
            </li>
            <li>
              <a>Sweatpants</a>
            </li>
            <li>
              <a>Caps</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#our-products">Our Products</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      <div className="footer-bottom">
        <div className="copyright">
          <p>© 2024 Nadya Sava Maritza</p>
        </div>
        <div className="social-icons">
          <a
            className="email"
            href="mailto:nadyasavaa@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/nadyasavamaritza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            className="github"
            href="https://github.com/nadyasava"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
