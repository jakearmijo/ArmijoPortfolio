import React from 'react'
import Carousel from 'styled-components-carousel'

export default function Projects() {
  return (
    <div id="projects">
      <div
        id="projectsTitle"
        data-aos="fade-up"
        className="aos-init aos-animate"
      >
        <h1>Portfolio</h1>
      </div>
      <div id="phutbol" data-aos="fade-up" className="aos-init aos-animate">
        <h1 className="projectTitle">Phutbol</h1>
        <div>
          <Carousel center infinite showArrows showIndicator slidesToShow={3}>
            <div>
              <span>
                <img src="phutBol-loading-screen.png" />
                Log In Screen
              </span>
            </div>
            <div>
              <span>2</span>
            </div>
            <div>
              <span>3</span>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
