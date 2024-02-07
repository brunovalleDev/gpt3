import React from 'react'
import { Navbar} from './components';
import {Hero} from './container/index';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App
