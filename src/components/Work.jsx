import "./Workcard.css"
import Workcard from "./Workcard.jsx"
import Wellnest from "../assets/wellnest.png"
import Billing from "../assets/billing.png"
import Order from "../assets/order.png"

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <Workcard 
                imgsrc={Billing}
                title="Billing Software"
                text="This is a billing software I made using python where I used Tkintr library for the UI."
                source="https://github.com/anurag745/billing-software.git"
            />
            <Workcard
                imgsrc={Order}
                title="Food Order Prediction System"
                text="This is a machine learning mdoel which provides suggestions based on the previous orders and current items in the basket."
                source="https://github.com/anurag745/food-order-prediction-system.git"
            />
            <Workcard
                imgsrc={Wellnest}
                title="WellNest"
                text="This is a landing page for a mental health support website made using ejs components."
                
            />
        </div>
    </div>
  )
}

export default Work;