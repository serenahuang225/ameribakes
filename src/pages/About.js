import React from "react";
import "./About.css"; // Optional: for additional styling
import founderPic from '../assets/founder-pic.jpg'

function About() {
  return (
    <div className="about">
      <div className="header tan-background">
        <h1>About Us</h1>
      </div>

      <section className="company-history light-background">
        <div className="content">
          <h2>Company History</h2>
          <p>
            AmeriBakes was founded with a passion for baking and a mission to spread homemade goodness while giving back to the community. Recognizing that 1 in 10 people in our area face food insecurity, we’re committed to doing our part. Along with sharing our delicious treats, we donate surplus baked goods to local homeless shelters, providing comfort to those in need and fostering connections within our community.
          </p>
        </div>
      </section>

      <section className="mission-statement tan-background">
        <div className="content">
          <h2>Mission Statement</h2>
          <blockquote>
            "At AmeriBakes, our mission is to create moments of joy and connection through handcrafted, high-quality baked goods, while giving back to our community."
          </blockquote>
        </div>
      </section>

      <section className="meet-the-founder">
        <div className="content">
          <h2>Meet the Founder</h2>
          <div className="founder-bio">
            <img src={founderPic} alt="Grace" />
            <p>
              Hi, I'm Grace, the founder of AmeriBakes. My journey began during the COVID-19 pandemic when baking became a way to bring comfort to my family and friends. With AmeriBakes, I aim to spread that same warmth and joy to everyone. Besides sharing delicious treats, I'm dedicated to giving back to the community. That's why 50% of our proceeds go to non-profits, and we regularly donate treats to homeless shelters.
            </p>
          </div>
        </div>
      </section>

      <section className="youtube-channel tan-background">
        <div className="content">
          <h2>Our YouTube Channel</h2>
          <p>
            Check out our YouTube channel, <a className="lighter" href="https://www.youtube.com/c/ChefMeow" target="_blank" rel="noopener noreferrer">Chef Meow</a>, for easy and efficient recipe videos. Chef Meow aims to make cooking and baking accessible to everyone.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;