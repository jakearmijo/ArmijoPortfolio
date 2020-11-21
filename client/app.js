import React from 'react'

import {Navbar} from './components'
import AboutMe from './components/AboutMe'
import Hello from './components/Hello'
import Hobbies from './components/Hobbies'
import Projects from './components/Projects'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Routes /> */}
      <Hello />
      <Projects />
      <AboutMe />
      <Hobbies />
    </div>
  )
}

export default App
