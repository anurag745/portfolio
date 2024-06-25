import "./NameSec.css"
import React from 'react'
import IntroImg from "../assets/intro-img.jpg"
import {Link} from "react-router-dom"

const NameSec = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntoImg"/>
        </div>
        <div className="content">
            <p>HI, I'M ANURAG</p>
            <h1>A Full Stack Web Developer</h1>
        <div>
        <Link to="/projects" className="btn">PROJECTS</Link>
        <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
        </div>
    </div>
  )
}

export default NameSec