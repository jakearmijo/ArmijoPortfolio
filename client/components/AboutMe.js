import React from 'react'

export default function AboutMe() {
  return (
    <div>
      <div id="aboutMe">
        <div
          id="aboutMeTitle"
          data-aos="fade-up"
          className="aos-init aos-animate"
        >
          <h1>About Me</h1>
        </div>

        <div id="aboutMeMain">
          <div
            id="selfpic"
            data-aos="fade-up"
            className="aos-init aos-animate"
          ></div>

          <p data-aos="fade-up" id="pIntro" className="aos-init aos-animate">
            [Hello, World, !] My name is Jake Armijo. I am embedded with a love
            to create things. As a kid, I had Legos and Erector sets. As an
            adult, I received a degree in Applied Engineering and went into the
            construction field. I have been a PM and cost estimator working for
            the last 5 years. What I enjoy about construction is collaborating
            with teams, working on a wide variety of projects, battling critical
            timelines, and successfully completing goals. I enjoyed what I was
            doing in the construction industry and it was exciting to see your
            hard work go from plan to product, what I found was missing was that
            innovation wasn’t there. It always interested me to see how I could
            use tech to do my job better. I researched coding, and coding boot
            camps, leveraged a lot of free resources and I landed on joining
            FullStack Academy. Now it has been a challenging ride filled with
            peaks and valleys, but hard work always pays off! I am looking to
            join an innovative company where I can leverage my past experiences
            in project management and teamwork combined with my bootcamp
            education to create new exciting things and make old ones better.
          </p>
        </div>
      </div>
      <div id="skillsDiv">
        <div id="techTitle" data-aos="fade-up" className="aos-init aos-animate">
          <h3>Technologies I've Worked With</h3>
        </div>
        <div id="skillsMain">
          <div
            className="techDiv aos-init aos-animate"
            id="frontend"
            data-aos="fade-up"
          >
            <div className="techDivTitle">FrontEnd</div>
            <div className="tech tooltip">
              <img src="ReactLogo.png" alt="React" />
              <span className="tooltiptext">React</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
