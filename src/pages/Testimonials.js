import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <div className="testimonials-faqs">
      <div className="header tan-background">
        <h1>Testimonials & FAQs</h1>
      </div>
      
      <section className="testimonials">
        <h2>Customer Reviews</h2>
        <div className="align-left">
          <blockquote className="content">"AmeriBakes has the best cookies I've ever tasted!"- Sarah</blockquote>
          <blockquote className="content">"I love the variety and quality of the baked goods. Highly recommend!" - John</blockquote>
        </div>
      </section>
      
      <section className="faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="content align-left">
          <div className="faq-item">
            <p><strong>How do I place an order?</strong></p>
            <p>You can place an order directly through our website by filling out the order form under the "Products" section.</p>
          </div>
          <div className="faq-item">
            <p><strong>Do you offer custom orders?</strong></p>
            <p>At this time, we do not offer custom orders, but our subscription boxes feature a variety of rotating treats each month.</p>
          </div>
          <div className="faq-item">
            <p><strong>What is the subscription service, and how does it work?</strong></p>
            <p>Our subscription service offers a box of fresh baked goods delivered to your door monthly, with $2 off each box. You can subscribe through the Products page.</p>
          </div>
          <div className="faq-item">
            <p><strong>Where do you donate your leftover treats?</strong></p>
            <p>We donate our surplus baked goods to local homeless shelters, partnering with community organizations to help those in need.</p>
          </div>
          <div className="faq-item">
            <p><strong>How much of your proceeds go to non-profits?</strong></p>
            <p>We are proud to donate 50% of our proceeds to local non-profits that work to fight hunger and support community wellness.</p>
          </div>
          <div className="faq-item">
            <p><strong>How can I start an AmeriBakes location in my area?</strong></p>
            <p>If you’re interested in starting an AmeriBakes location, head over to our "Locations" page for more information and get in touch with us to learn how you can bring AmeriBakes to your community.</p>
          </div>
          <div className="faq-item">
            <p><strong>Are your products nut-free/gluten-free?</strong></p>
            <p>Some of our products are made without nuts or gluten, but we do bake in a kitchen that handles these ingredients. Please contact us for more information about specific allergens.</p>
          </div>
          <div className="faq-item">
            <p><strong>What's the best way to store my baked goods?</strong></p>
            <p>We recommend storing our baked goods in an airtight container at room temperature for maximum freshness. Some items may also be frozen to enjoy later.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;