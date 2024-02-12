import React from 'react'
import {Navbar} from './components';
import {Hero, WhatGPT3, Features, Possibilities, Blog, Footer} from './container/index';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Hero />
      </div>
      <WhatGPT3 />
      <Features />
      <Possibilities />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
