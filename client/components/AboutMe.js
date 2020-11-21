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
            [ Hello, World, ! ] My name is Jake Armijo. I am embedded with a
            love to create things. As a kid, I had Legos and Erector sets. As an
            adult, I received a degree in Applied Engineering and went into the
            construction field. I have been a PM and cost estimator working for
            the last 5 years. What I like about construction is collaborating
            with teams, working on a wide variety of projects, battling critical
            timelines, and successfully completing goals. I enjoyed what I was
            doing in the construction industry and it was exciting to see your
            hard work go from plan to product, what I found was missing was that
            it simply wasn’t enough. It always interested me to see how I could
            use technology. I researched coding, and coding boot camps leveraged
            a lot of free resources and I landed on joining FullStack Academy.
            Now it has been a challenging ride filled with peaks and valleys,
            but hard work always pays off! I am looking to join an innovative
            company where I can leverage my past experiences in project
            management and teamwork combined with my Bootcamp education to
            create new exciting things and make old ones better.
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
            <div className="tech tooltip">
              <img src="ReduxLogo.png" alt="Redux" />
              <span className="tooltiptext">Redux</span>
            </div>
            <div className="tech tooltip">
              <img src="HTMLLogo.png" alt="HTML" />
              <span className="tooltiptext">HTML</span>
            </div>
            <div className="tech tooltip">
              <img src="CSSLogo.png" alt="CSS" />
              <span className="tooltiptext">CSS</span>
            </div>
            <div className="tech tooltip">
              <img src="styled-components.png" alt="Styled Components" />
              <span className="tooltiptext">Styled Components</span>
            </div>
            <div className="tech tooltip">
              <img src="Bootstrap-Logo.png" alt="Bootstrap" />
              <span className="tooltiptext">Bootstrap</span>
            </div>
          </div>
          <div
            className="techDiv aos-init aos-animate"
            id="backend"
            data-aos="fade-up"
          >
            <div className="techDivTitle">BackEnd</div>
            <div className="tech tooltip">
              <img src="NodeLogo.png" alt="Node" />
              <span className="tooltiptext">Node</span>
            </div>
            <div className="tech tooltip">
              <img src="ExpressLogo.png" alt="Express" />
              <span className="tooltiptext">Express</span>
            </div>
            <div className="tech tooltip">
              <img src="SequelizeLogo.png" alt="HTML" />
              <span className="tooltiptext">Sequelize</span>
            </div>
            <div className="tech tooltip">
              <img src="PostgresLogo.png" alt="CSS" />
              <span className="tooltiptext">Postgres</span>
            </div>
            <div className="tech tooltip">
              <img src="SocketIO.png" alt="Socket.io" />
              <span className="tooltiptext">Socket.io</span>
            </div>
          </div>
          <div
            className="techDiv aos-init aos-animate"
            id="devops"
            data-aos="fade-up"
          >
            <div className="techDivTitle">DevOps</div>
            <div className="tech tooltip">
              <img src="GitLogo.png" alt="Git" />
              <span className="tooltiptext">Git</span>
            </div>
            <div className="tech tooltip">
              <img src="GitHubLogo.png" alt="GitHub" />
              <span className="tooltiptext">GitHub</span>
            </div>
            <div className="tech tooltip">
              <img src="Npm-logo.png" alt="Npm" />
              <span className="tooltiptext">Npm</span>
            </div>
            <div className="tech tooltip">
              <img src="WebpackLogo.png" alt="Webpack" />
              <span className="tooltiptext">Webpack</span>
            </div>
            <div className="tech tooltip">
              <img src="HerokuLogo.png" alt="Heroku" />
              <span className="tooltiptext">Heroku</span>
            </div>
            <div className="tech tooltip">
              <img src="TravisCILogo.png" alt="TravisCI" />
              <span className="tooltiptext">TravisCI</span>
            </div>
          </div>
          <div
            className="techDiv aos-init aos-animate"
            id="languages"
            data-aos="fade-up"
          >
            <div className="techDivTitle">Languages</div>
            <div className="tech tooltip">
              <img src="Javascript-Logo.png" alt="Javascript" />
              <span className="tooltiptext">Javascript</span>
            </div>
            <div className="tech tooltip">
              <img src="Python-Logo.png" alt="Python" />
              <span className="tooltiptext">Python</span>
            </div>
          </div>
          <div
            className="techDiv aos-init aos-animate"
            id="tools"
            data-aos="fade-up"
          >
            <div className="techDivTitle">Tools</div>
            <div className="tech tooltip">
              <img src="VSCODE-Logo.png" alt="VSCode" />
              <span className="tooltiptext">VS Code</span>
            </div>
            <div className="tech tooltip">
              <img src="Postman-Logo.png" alt="Postman" />
              <span className="tooltiptext">Postman</span>
            </div>
            <div className="tech tooltip">
              <img src="Postico-Logo.png" alt="Postico" />
              <span className="tooltiptext">Postico</span>
            </div>
          </div>
          <div
            className="techDiv aos-init aos-animate"
            id="testing"
            data-aos="fade-up"
          >
            <div className="techDivTitle">Testing</div>
            <div className="tech tooltip">
              <img src="Mocha-Logo.png" alt="Mocha" />
              <span className="tooltiptext">Mocha</span>
            </div>
            <div className="tech tooltip">
              <img src="Chai-Logo.png" alt="Chai" />
              <span className="tooltiptext">Chai</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
