import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <ul className="footer-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/locations">Locations</Link></li>
          <li><Link to="/testimonials">Testimonials & FAQs</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul> */}

        <div className="social-media">
          <a href="https://www.youtube.com/@ChefMeow/featured" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://www.instagram.com/ameribakes/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <p className="footer-note">© 2024 AmeriBakes. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer