import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import "./NavBar.css"; // Import styles

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/locations">Locations</Link></li>
        <li><Link to="/testimonials">Testimonials & FAQs</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar