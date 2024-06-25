import React from 'react'
import NavBar from "../components/NavBar"
import NameSec from "../components/NameSec"
import  Footer from "../components/Footer"
import Work from "../components/Work"
const Home = () => {
  return (
    <div>
        <NavBar />
        <NameSec/>
        <Work/>
        <Footer/>
    </div>
  )
}

export default Home