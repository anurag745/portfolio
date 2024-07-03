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
        <button className="btn resume-btn">Download my resume</button>
        </div>
    </div>
  )
}

export default NameSec