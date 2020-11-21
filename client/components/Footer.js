import React from 'react'
import {useRef, useState, useEffect} from 'react'

export default function Footer() {
  //   const [hoverRef, isHovered] = useHover()
  return (
    <div>
      <footer>
        <div id="footer-links">
          {/* {isHovered ? 'armijojake@yahoo.com' : useHover()} */}
          <a href="mailto:armijojake@yahoo.com" />
          <img src="sendit.png" />

          <a href="https://www.linkedin.com/in/jake-armijo/" />
          <img src="LinkedIn.png" />

          <a href="https://github.com/jakearmijo" />
          <img src="GitHubLogo.png" />
        </div>
        <div id="copyright">
          © <span id="year">2020</span> Jake Armijo. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
