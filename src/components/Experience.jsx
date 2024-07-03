import './Certificates.css'
import Internship from '../assets/certificates/internship.png'

const Experience = () => {
    const handleViewCertificate = () => {
        window.open('https://certificate.givemycertificate.com/c/696021e7-0326-4997-84ae-93edd0c0c724', '_blank');
      };
      const handleViewCertificate1 = () => {
        window.open('https://verification.givemycertificate.com/v/696021e7-0326-4997-84ae-93edd0c0c724', '_blank');
      };
  return (
    <>
    <div className='cert-title'><h1>Experience</h1></div>
    <div className='cert-container'>
    <div className="certificate-container">
      <div className="certificate-title">
        <h3>Web Developement Internship</h3>
        
      </div>
      <div className="dates">
        <p>March 2024 - May 2024</p>
      </div>
        <ul className="job-desc">
            <li>• Developed and maintained websites using HTML, CSS, and JavaScript.</li>
            <li>• Built dynamic web applications with React.</li>
            <li>• Assisted in debugging and improving website performance.</li></ul>
      <div className="certificate-img">
        <img src={Internship} alt="Certificate" />
      </div>

      <button className="btn" onClick={handleViewCertificate}>
        View Certificate
      </button>
      <button className="btn" onClick={handleViewCertificate1}>
        Verify Certificate
      </button>
    </div>
  </div>
  </>
  )
}

export default Experience