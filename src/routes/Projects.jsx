import React from 'react'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Heroimg from '../components/Heroimg'
import Work from '../components/Work'

const Projects = () => {
  return (
    <>
    <NavBar/>
    <Heroimg heading="PROJECTS." text="Some of my most recent wroks."/>
    <Work/>
    <Footer/>
    </>
  )
}

export default Projects