import az104 from '../assets/certs/az104.png';
import az204 from '../assets/certs/az204.png';
import az305 from '../assets/certs/az305.png';
import az900 from '../assets/certs/az900.png';
import dp900 from '../assets/certs/dp900.png';
import dl from '../assets/certs/dl.png';
import cka from '../assets/certs/cka.png';
import aws_p from '../assets/certs/aws_practitioner.png';
import ood from '../assets/certs/ood.png';
import sg from '../assets/certs/spring_gcp.png';


import '../assets/styles/Certifications.scss';

function Certifications() {
    return (
    <div className="container" id="certifications">
        <div className="certs-container">
            <h1>Certifications</h1>
            <div className="certs-grid">
                <div className="cert">
                    <a href="https://learn.microsoft.com/en-us/users/gustavoelmermezanuez-9098/credentials/ff0325ccbc0beee4?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noreferrer">
                        <img src={az305} className="zoom" alt="thumbnail" width="100%"/></a>
                </div>
                <div className="cert">
                    <a href="https://www.credly.com/badges/8ae290a4-21b7-48e4-b4e2-128c2a66d474/linked_in_profile" target="_blank" rel="noreferrer">
                        <img src={cka} className="zoom" alt="thumbnail" width="100%"/></a>
                </div>
                <div className="cert">
                    <a href="https://learn.microsoft.com/en-us/users/GustavoElmerMezaNuez-9098/credentials/1486E50AAEE93EB1?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noreferrer">
                        <img src={az104} className="zoom" alt="thumbnail" width="100%"/></a>
                </div>
                <div className="cert">
                    <a href="https://learn.microsoft.com/en-us/users/GustavoElmerMezaNuez-9098/credentials/3C726B210F4DADBF?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noreferrer">
                        <img src={az204} className="zoom" alt="thumbnail" width="100%"/></a>
                </div>
                <div className="cert">
                    <a href="https://www.credly.com/badges/bbf9de56-85b2-4125-8842-a3c20fd53cf5/public_url" target="_blank" rel="noreferrer">
                        <img src={aws_p} className="zoom" alt="thumbnail" width="100%"/></a>
                </div>
                <div className="cert">
                    <a href="https://www.credly.com/badges/a8b275e3-70bf-4371-ba16-6db06686b324/public_url" target="_blank" rel="noreferrer">
                        <img src={az900} className="zoom" alt="thumbnail" width="100%"/></a>
                </div>
                <div className="cert">
                    <a href="https://www.credly.com/badges/f1d8d970-5af5-4883-a79e-dc43cb7d83b0/public_url" target="_blank" rel="noreferrer">
                        <img src={dp900} className="zoom" alt="thumbnail" width="100%"/></a>
                </div>
                <div className="cert">
                    <a href="https://coursera.org/share/70173d86f697bd8a15e2fc96b035d09d" target="_blank" rel="noreferrer">
                        <img src={dl} className="zoom" alt="thumbnail" width="100%"/></a>
                </div>
                <div className="cert">
                    <a href="https://coursera.org/share/4a157787b94b8a3e903ad2d08aa3ae06" target="_blank" rel="noreferrer">
                        <img src={ood} className="zoom" alt="thumbnail" width="100%"/></a>
                </div>
                <div className="cert">
                    <a href="https://coursera.org/share/46893b101e29df5f6ba554444fca9f64" target="_blank" rel="noreferrer">
                        <img  src={sg} className="zoom" alt="thumbnail" width="100%"/></a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Certifications;