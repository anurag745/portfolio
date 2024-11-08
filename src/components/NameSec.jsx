import "./NameSec.css"
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
            <h1 className="typewriter">A Software Developer</h1>
        <div>
        <Link to="/projects" className="btn">PROJECTS</Link>
        <Link to="/contact" className="btn btn-light">CONTACT</Link>
        
        </div>
        <button className="btn resume-btn"><a href="https://drive.google.com/file/d/1CJP2hIFpDM4JoMXsH3keLQY5QkLzCCgu/view?usp=drive_link">Download my resume</a></button>
        </div>
    </div>
  )
}

export default NameSec
