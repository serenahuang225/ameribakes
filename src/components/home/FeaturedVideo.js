import React from 'react'

const FeaturedVideo = () => {
  return (
    <section className="featured-video">
      <h2>Watch our latest recipe video!</h2>
      <iframe
        width={"100%"}
        height="480"
        src="https://www.youtube.com/embed/fQR9h7TzONI?si=btv_-VuSgfR_nprA"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Welcome Video from Chef Meow"
      />
    </section>
  )
}

export default FeaturedVideo