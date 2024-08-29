import React from 'react'
import heroImage from '../../assets/hero-image.jpg'
import heroImage2 from '../../assets/hero-image2.jpg'
import heroImage3 from '../../assets/hero-image3.jpg'
import heroImage4 from '../../assets/hero-image4.jpg'
import './Hero.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Hero = () => {
  return (
    <section className="hero-section">
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={2000}
        infinite
        showDots={false}
        arrows={true}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        <img src={heroImage} alt="Baked goods 1" />
        <img src={heroImage2} alt="Baked goods 2" />
        <img src={heroImage3} alt="Baked goods 3" />
        <img src={heroImage4} alt="Baked goods 4" />
      </Carousel>
      <div className="hero-text">
        <h1>Welcome to AmeriBakes</h1>
        <p>Where every bite is a taste of home. Our handcrafted treats are made with love and the finest ingredients.</p>
        <button onClick={() => window.location.href='/locations'}>Discover Our Locations</button>
      </div>
    </section>
  )
}

export default Hero