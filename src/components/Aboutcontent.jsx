import "./Aboutcontent.css"
import React from 'react'
import {Link} from "react-router-dom"


const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a full stack web developer. I create responsive secure websites for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src="https://www.animaapp.com/blog/wp-content/uploads/2022/12/8-free-React-app-hosting-services-Cover.png" alt="iamge" className="img"/>
                </div>
                <div className="img-stack bottom">
                    <img src="https://assets-global.website-files.com/61ade8b25c29d61e883b12a4/657c32d39d485a2f2d14b0ae_image%20301.webp" alt="iamge" className="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent