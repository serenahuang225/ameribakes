import React from 'react'
import MapChart from '../components/locations/MapChart'

const Locations = () => {
  return (
    <div>
      <div className="header tan-background">
        <h1>Locations</h1>
      </div>
      <section className="global-presence">
        <div className='content'>
          <h2>Global Presence</h2>
          <p>
            AmeriBakes is expanding! We are excited to bring our homemade treats to more communities around the globe.
          </p>
          <p>
            Here are some of the wonderful places you can find AmeriBakes:
          </p>
        </div>
      </section>

      <MapChart />
      
      <section className="testimonials-cta">
        <div className='content'>
          <h2>Start a Location</h2>
          <p>
            Interested in bringing AmeriBakes to your community? <br/> Contact us to learn how you can start a location.
          </p>
          <button onClick={() => window.location.href='/contact'}>Contact Us</button>
        </div>
      </section>
    </div>
  )
}

export default Locations