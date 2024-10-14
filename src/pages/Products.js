import React from "react";
import "./Products.css"; // Optional: for additional styling
import cccookies from '../assets/cc-cookies.jpg'
import snicker from '../assets/sn-cookies.jpg'
import lemon from '../assets/lemon.jpg'
import brownie from '../assets/brownies.jpg'
import merenge from '../assets/merenge.jpg'

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

      <section className="featured-products">
        <h2>Featured Products</h2>
        
        <div className="holder content">
          <div className="product">
            <img src={cccookies} alt="Chocolate Chip Cookies" />
            <div>
              <h3>Chocolate Chip Cookies</h3>
              <p>Classic cookies loaded with chocolate chips, a timeless favorite!</p>
            </div>
          </div>
          
          <div className="product">
            <img src={snicker} alt="Snickerdoodles" />
            <div>
              <h3>Snickerdoodles</h3>
              <p>Soft and chewy cookies rolled in cinnamon sugar, simply irresistible.</p>
            </div>
          </div>
          
          <div className="product">
            <img src={lemon} alt="Lemon Bars" />
            <div>
              <h3>Lemon Bars</h3>
              <p>Tart and sweet, our lemon bars are the perfect refreshing treat.</p>
            </div>
          </div>
          
          <div className="product">
            <img src={brownie} alt="Brownies" />
            <div>
              <h3>Brownies</h3>
              <p>Fudgy and rich, our brownies are sure to satisfy your chocolate cravings.</p>
            </div>
          </div>

          <div className="product">
            <img src={merenge} alt="Meringue Cookies" />
            <div>
              <h3>Meringue Cookies</h3>
              <p>Light and airy, these cookies melt in your mouth for a delightful treat.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="subscription-info tan-background">
        <div className="content">
          <h2>Subscription Information</h2>
          <p>
            Sign up for our subscription and get $2 off each box! Enjoy a selection of our best-selling treats delivered to your door each month.
          </p>
          <br/>
          <a href="https://form.jotform.com/241070612243140" target="_blank" rel="noopener noreferrer" className="subscribe-button">
            Subscribe Now
          </a>
        </div>
      </section>

      <section className="order-now">
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