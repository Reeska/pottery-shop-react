import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Header/Header'
import Library from './Library/Library'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Library/>
      </Router>
    </div>
  )
}

export default App
