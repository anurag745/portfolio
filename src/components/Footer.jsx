import './FooterStyles.css' 
import {Link} from "react-router-dom"
import InstaIcon from "../assets/footer-icons/instagram.png";
import FbIcon from "../assets/footer-icons/facebook.png";
import LinkedinIcon from "../assets/footer-icons/linkedin.png";
import GitIcon from "../assets/footer-icons/github.png";

const Footer = () => {
  return (
    <>
    <div className="footer-icons">
        <div className='icons'>
          <a href="https://www.instagram.com/anurag__745/"><img src={InstaIcon} alt="Instagram"/></a>
          <a><img src={FbIcon} alt="Facebook"/></a>
          <a href="https://github.com/anurag745"><img src={GitIcon} alt="Github"/></a>
          <a href="https://www.linkedin.com/in/anurag-sharma-2a828424b/"><img src={LinkedinIcon} alt="Linkedin"/></a>
        </div>
      </div>
      <div className='footer-middle'>
        <div className='footer-list'>
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>
          <div className="reply-container">
            <input type="email" className="input-box" placeholder="anuragb745@gmail.com"/>
            <button type="submit" className="submit-button">Submit</button>
          </div>
        
    </div>
    <div className='copy'>
    <p>Developed by : Anurag</p>
  </div>
  </>
  )
}

export default Footer