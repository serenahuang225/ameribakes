import React from 'react'
import Hero from '../components/home/Hero'
import FeaturedVideo from '../components/home/FeaturedVideo'
import TestimonialsCTA from '../components/home/TestimonialsCTA'
import OrderNow from '../components/home/OrderNow'

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedVideo />
      <TestimonialsCTA />
      <OrderNow />
    </div>
  )
}

export default Home