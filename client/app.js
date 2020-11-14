import React from 'react'

import {Navbar} from './components'
import AboutMe from './components/AboutMe'
import Hello from './components/Hello'
import Projects from './components/Projects'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Routes /> */}
      <Hello />
      <Projects />
      <AboutMe />
    </div>
  )
}

export default App
