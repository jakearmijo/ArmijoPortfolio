import React from 'react'

import {Navbar} from './components'
import Hello from './components/Hello'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Hello />
    </div>
  )
}

export default App
