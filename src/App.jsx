import { BrowserRouter } from 'react-router-dom'

import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </BrowserRouter>
    </>
  )
}

export default App
