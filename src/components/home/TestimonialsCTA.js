import React from 'react'

const TestimonialsCTA = () => {
  return (
    <section className="testimonials-cta">
      <h2>What Our Customers Are Saying</h2>
      <p>Read the stories from our satisfied customers and see why AmeriBakes is their favorite bakery.</p>
      <button onClick={() => window.location.href='/testimonials'}>Read Testimonials & FAQ</button>
    </section>
  )
}

export default TestimonialsCTA