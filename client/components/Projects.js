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
        <div className="carousel-container">
          <Carousel center infinite showArrows showIndicator slidesToShow={1}>
            <div>
              <img
                className="projectImage"
                src="phutBol-GAME-OVER-screen.png"
              />

              <div className="text">
                Game Over - The game is over when a team scores 7 points.
              </div>
            </div>
            <div>
              <img className="projectImage" src="phutBol-loading-screen.png" />
              <div className="text">
                Start Screen - Enter your username and the room code to join
                your friends.
              </div>
            </div>
            <div>
              <img className="projectImage" src="phutBol-Player-screen.png" />

              <div className="text">
                Player Screen - With a arcade feel and a joystick for movement.
                Phutbol is nostalgic while still being modern.
              </div>
            </div>
          </Carousel>
        </div>
        <div className="project-description">
          <p className="p-project">
            Built on Phaser with Javascript as its bones. This socket driven app
            gives friends and family a chance to play soccer against each other
            during the pandemic. An easy appealing GUI makes it seamless to set
            up or join a new game. At project conception, our entire team wanted
            to make a game. Everyone stayed energized and motivated until the
            end and beyond. This project offered all of us a chance to use new
            technologies that we had never previously ventured into. We gained
            Phaser experience that was not only fun but worthwhile. Phaser as
            the main component of the game really made it the most interesting
            piece of the puzzle. Socket.io is the library driving the real-time
            link to all the players. This had its challenges and offered the
            team a good chance to collaborate and pair code. We do have future
            plans to use Firebase for things such as a player leaderboard,
            profile creation, character editing, and much more. We are pleased
            with the product we have to offer on this day and are all on board
            to continue to improve this app.
          </p>
          <p className="p-project p-tech">
            Technologies: JavaScript, Phaser, Socket.IO, Firebase
          </p>
        </div>
        <div className="projectLinks">
          <a href="http://phutbol.herokuapp.com/">
            Try Demo{' '}
            <img src="https://chrischindev.com/assets/externallink2.png" />
          </a>
          <a href="https://github.com/2006-links-light/phutbol">
            View Code <img src="https://chrischindev.com/assets/github3.png" />
          </a>
          <a href="https://youtu.be/XtMdD3XnvXQ">
            Watch Presentation{' '}
            <img src="https://chrischindev.com/assets/video.png" />
          </a>
        </div>
      </div>
    </div>
  )
}
