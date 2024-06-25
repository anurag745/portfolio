import { useState } from 'react'
import './index.css'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'
import Projects from './routes/Projects.jsx'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App() {

  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/projects" element={<Projects />} />
      <Route path= "/contact" element={<Contact />} />
    </Routes>
    </Router>
    </>
  )
}

export default App
