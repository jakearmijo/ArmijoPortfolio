import React from 'react'

import {Navbar} from './components'
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
    </div>
  )
}

export default App
