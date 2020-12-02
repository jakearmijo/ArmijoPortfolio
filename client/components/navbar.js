import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Link} from 'react-scroll'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      <div>
        <a href="top" id="logo">
          Armijo Algorithm
        </a>
      </div>
      {isLoggedIn ? (
        <div className="nav-links">
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          {/* <a href="#" onClick={handleClick}>
            Logout
          </a> */}
          <Link to="projects" activeClass="active" spy={true} smooth={true}>
            PORTFOLIO
          </Link>
          <Link to="aboutMe" activeClass="active" spy={true} smooth={true}>
            ABOUT
          </Link>
          <Link to="resume" activeClass="active" spy={true} smooth={true}>
            RESUME
          </Link>
          <Link to="contactTitle" activeClass="active" spy={true} smooth={true}>
            CONTACT
          </Link>
          <Link to="https://github.com/jakearmijo">GITHUB</Link>
          <Link to="https://www.linkedin.com/in/jake-armijo/">LINKEDIN</Link>
        </div>
      ) : (
        <div className="nav-links">
          {/* The navbar will show these links before you log in */}
          {/* <Link to="/login">LOGIN</Link>
          <Link to="/signup">SIGN UP</Link> */}
          <Link to="projects" activeClass="active" spy={true} smooth={true}>
            PORTFOLIO
          </Link>
          <Link to="aboutMe" activeClass="active" spy={true} smooth={true}>
            ABOUT
          </Link>
          <Link to="resume" activeClass="active" spy={true} smooth={true}>
            RESUME
          </Link>
          <Link to="contactTitle" activeClass="active" spy={true} smooth={true}>
            CONTACT
          </Link>
          <a href="https://github.com/jakearmijo">GITHUB</a>
          <a href="https://www.linkedin.com/in/jake-armijo/">LINKEDIN</a>
        </div>
      )}
    </nav>
    {/* <div>
      <a href="top" id="logo">
        Armijo Algorithm
      </a>
    </div> */}
  </div>
)

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    },
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}
