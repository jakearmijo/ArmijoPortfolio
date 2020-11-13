import React from 'react'

export default function Hello() {
  return (
    <div id="top">
      <div className="nameDiv">
        <h2
          id="helloh2"
          data-aos-anchor="#top"
          data-aos-anchor-placment="top-center"
          data-aos-delay="150"
          data-aos="fade-up"
          className="aos-init-aos-animate"
        >
          Hello! My Name is
        </h2>
        <h1
          id="nameh1"
          data-aos-anchor="#top"
          data-aos-anchor-placment="top-center"
          data-aos-delay="300"
          data-aos="fade-up"
          className="aos-init-aos-animate"
        >
          Jake Armijo.
        </h1>
        <h2
          id="seh2"
          data-aos-anchor="#top"
          data-aos-anchor-placment="top-center"
          data-aos-delay="450"
          data-aos="fade-up"
          className="aos-init-aos-animate"
        >
          I'm a software engineer.
        </h2>
      </div>
      <div
        id="projectButton"
        data-aos-anchor="#top"
        data-aos-anchor-placment="top-center"
        data-aos-delay="600"
        data-aos="fade-up"
        className="aos-init-aos-animate"
      >
        <a href="#projects">View Portfolio</a>
      </div>
    </div>
  )
}
