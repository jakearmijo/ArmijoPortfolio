import React from 'react'

import {Navbar} from './components'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hello from './components/Hello'
import Hobbies from './components/Hobbies'
import Projects from './components/Projects'
import Resume from './components/Resume'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Routes /> */}
      <Hello />
      <Projects />
      <AboutMe />
      <Hobbies />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
