import React from 'react'
import './App.css'
import Navbar from './components/layouts/Navbar'
import SlideShow from './components/slider/Slideshow'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ArtGrid from './components/layouts/ArtGrid'
import Survey from './components/layouts/Survey'
function App () {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <SlideShow />
        <ArtGrid />
        <Survey></Survey>
      </Router>
    </div>
  )
}

export default App
