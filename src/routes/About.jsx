import React from 'react'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Heroimg from '../components/Heroimg'
import Aboutcontent from '../components/Aboutcontent'
import Skillset from '../components/Skillset'

const About = () => {
  return (
    <>
    <NavBar/>
    <Heroimg heading="ABOUT." text="I'm a Full Stack Web Developer"/>
    <Aboutcontent/>
    <Skillset/>
    <Footer/>
    </>
  )
}

export default About