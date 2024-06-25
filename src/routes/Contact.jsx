import React from 'react'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Heroimg from '../components/Heroimg'
import Form from '../components/Form'

const Contact = () => {
  return (
    <>
    <NavBar/>
    <Heroimg heading="CONTACT." text="Let's have a chat."/>
    <Form/>
    <Footer/>
    </>
  )
}

export default Contact