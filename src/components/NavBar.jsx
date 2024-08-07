import React, { useEffect } from 'react'
import "./NavbarStyles.css"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from 'react'

const NavBar = () => {
    const [click, setClick] = useState(false)
    const [color, setColor] = useState(false)

    const handleClick = () => setClick(!click)

    const handleColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleColor)

        return () => {
            window.removeEventListener('scroll', handleColor)
        }
    }, [])

    return (
        <div className={color ? "header header-bg" : "header"} >
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? ('nav-menu active') : ('nav-menu')}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={25} style={{ color: "white" }} />) : (
                    <FaBars size={25} style={{ color: "white" }} />)}
            </div>
        </div>
    )
}

export default NavBar