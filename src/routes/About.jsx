import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Heroimg from '../components/Heroimg'
import Aboutcontent from '../components/Aboutcontent'
import Skillset from '../components/Skillset'
import Certificates from '../components/Certificates'

const About = () => {
  return (
    <>
    <NavBar/>
    <Heroimg heading="ABOUT." text="I'm a Full Stack Web Developer"/>
    <Aboutcontent/>
    <Skillset/>
    <Certificates/>
    <Footer/>
    </>
  )
}

export default About