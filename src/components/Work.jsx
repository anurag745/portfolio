import "./Workcard.css"
import Workcard from "./Workcard.jsx"

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <Workcard 
                imgsrc="https://cdn.psdrepo.com/images/2x/ecommerce-landing-page-psd-t7.jpg"
                title="E-commerce landing page"
                text="This is a landing page for an e-commerce web application that I made using HTML, CSS and vanilla Javascript."
            />
            <Workcard
                imgsrc="https://cdn.dribbble.com/users/2520129/screenshots/7315837/media/4fa795cda047331418fddc4198ebea39.png?resize=400x300&vertical=center"
                title="Payment Splitting app"
                text="This is a payment splitting app like Splitwise that I made using React components. The backend is written in express.js and I have used Mongodb to manage the database."
            />
            <Workcard
                imgsrc="https://cdn.dribbble.com/userupload/12352864/file/original-3d8c6766686d47cabacca947900e3751.jpg?resize=400x300&vertical=center"
                title="Rhode EV landing page"
                text="This is a landing page of a company that sells Electric vehicles and their parts. I amde the webpage using React.js and designed the UI by myself."
            />
        </div>
    </div>
  )
}

export default Work;