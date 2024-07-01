
import './Certificates.css';
import JPMorgan from '../assets/certificates/jpmorgan.png' 
import Goldman from '../assets/certificates/goldman.png'

const Certificates = () => {
  const certificateUrl = 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_8a4j7LQt4keaLBwXY_1709235039474_completion_certificate.pdf';
  const certificateUrl1 = 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_8a4j7LQt4keaLBwXY_1718273900574_completion_certificate.pdf';
  const handleViewCertificate = () => {
    window.open(certificateUrl, '_blank');
  };
  const handleViewCertificate1 = () => {
    window.open(certificateUrl1, '_blank');
  };

  return (
    <>
    <div className='cert-title'><h1>Certifications</h1></div>
    <div className='cert-container'>
    <div className="certificate-container">
      <div className="certificate-title">
        <h3>J.P. Morgan Software Job Simulation</h3>
      </div>

      <div className="certificate-img">
        <img src={JPMorgan} alt="Certificate" />
      </div>

      <button className="btn" onClick={handleViewCertificate}>
        View Certificate
      </button>
    </div>
    <div className="certificate-container">
    <div className="certificate-title">
      <h3>Goldman Sachs Software Job Simulation</h3>
    </div>

    <div className="certificate-img">
      <img src={Goldman} alt="Certificate" />
    </div>

    <button className="btn" onClick={handleViewCertificate1}>
      View Certificate
    </button>
  </div>
  </div>
  </>
  );
};

export default Certificates;
