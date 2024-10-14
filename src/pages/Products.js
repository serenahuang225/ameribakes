import React from "react";
import "./Products.css"; // Optional: for additional styling

function Products() {
  return (
    <div className="products">
      <div className="header tan-background">
        <h1>Products</h1>
      </div>

      <section className="product-categories">
        <h2>Product Categories</h2>
        <p>
          Explore our delightful range of baked goods, from cookies to cakes.
        </p>
      </section>

      <section className="featured-products tan-background">
        <h2>Featured Products</h2>
        <div className="product">
          <img src="path/to/cookie-image.jpg" alt="Delicious Cookies" />
          <h3>Delicious Cookies</h3>
          <p>Our cookies are freshly baked with the finest ingredients.</p>
        </div>
        <div className="product">
          <img src="path/to/cake-image.jpg" alt="Indulgent Cake" />
          <h3>Indulgent Cake</h3>
          <p>A rich and moist cake perfect for any celebration.</p>
        </div>
        {/* Add more featured products as needed */}
      </section>

      <section className="subscription-info">
        <h2>Subscription Information</h2>
        <p>
          Sign up for our subscription and get $2 off each box! Enjoy a selection of our best-selling treats delivered to your door each month.
        </p>
        <a href="https://form.jotform.com/241070612243140" target="_blank" rel="noopener noreferrer" className="subscribe-button">
          Subscribe Now
        </a>
      </section>

      <section className="order-now tan-background">
        <h2>Order Now</h2>
        <p>Ready to enjoy our treats? Place your order now!</p>
        <a href="https://form.jotform.com/241070612243140" target="_blank" rel="noopener noreferrer" className="order-button">
          Order Now
        </a>
      </section>
    </div>
  );
}

export default Products;