import az104 from '../assets/certs/az104.png';
import az204 from '../assets/certs/az204.png';
import az305 from '../assets/certs/az305.png';
import az900 from '../assets/certs/az900.png';
import dp900 from '../assets/certs/dp900.png';
import ai102 from '../assets/certs/ai102.png';
import dl from '../assets/certs/dl.png';
import cka from '../assets/certs/cka.png';
import aws_p from '../assets/certs/aws_practitioner.png';
import ood from '../assets/certs/ood.png';
import sg from '../assets/certs/spring_gcp.png';


import '../assets/styles/Certifications.scss';

const certifications = [
    {
        id: 1,
        href: "https://learn.microsoft.com/en-us/users/gustavoelmermezanuez-9098/credentials/ff0325ccbc0beee4?ref=https%3A%2F%2Fwww.linkedin.com%2F",
        imgSrc: az305,
        alt: "Azure Solutions Architect Expert"
    },
    {
        id: 2,
        href: "https://www.credly.com/badges/8ae290a4-21b7-48e4-b4e2-128c2a66d474/linked_in_profile",
        imgSrc: cka,
        alt: "Certified Kubernetes Administrator"
    },
    {
        id: 3,
        href: "https://learn.microsoft.com/api/credentials/share/en-us/GustavoElmerMezaNuez-9098/3CDDEDFC4BE71D2A?sharingId=F71D1E7BBB4438EC",
        imgSrc: ai102,
        alt: "Azure Administrator Associate"
    },
    {
        id: 4,
        href: "https://learn.microsoft.com/en-us/users/GustavoElmerMezaNuez-9098/credentials/1486E50AAEE93EB1?ref=https%3A%2F%2Fwww.linkedin.com%2F",
        imgSrc: az104,
        alt: "Azure Administrator Associate"
    },
    {
        id: 5,
        href: "https://learn.microsoft.com/en-us/users/GustavoElmerMezaNuez-9098/credentials/3C726B210F4DADBF?ref=https%3A%2F%2Fwww.linkedin.com%2F",
        imgSrc: az204,
        alt: "Azure Developer Associate"
    },
    {
        id: 6,
        href: "https://www.credly.com/badges/bbf9de56-85b2-4125-8842-a3c20fd53cf5/public_url",
        imgSrc: aws_p,
        alt: "AWS Certified Solutions Architect"
    },
    {
        id: 7,
        href: "https://www.credly.com/badges/a8b275e3-70bf-4371-ba16-6db06686b324/public_url",
        imgSrc: az900,
        alt: "Azure Fundamentals"
    },
    {
        id: 8,
        href: "https://www.credly.com/badges/f1d8d970-5af5-4883-a79e-dc43cb7d83b0/public_url",
        imgSrc: dp900,
        alt: "Azure Data Fundamentals"
    },
    {
        id: 9,
        href: "https://coursera.org/share/70173d86f697bd8a15e2fc96b035d09d",
        imgSrc: dl,
        alt: "Deep Learning Specialization"
    },
    {
        id: 10,
        href: "https://coursera.org/share/4a157787b94b8a3e903ad2d08aa3ae06",
        imgSrc: ood,
        alt: "Object-Oriented Design"
    },
    {
        id: 11,
        href: "https://coursera.org/share/46893b101e29df5f6ba554444fca9f64",
        imgSrc: sg,
        alt: "Software Engineering Specialization"
    }
];

function Certifications() {
    return (
    <div className="container" id="certifications">
        <div className="certs-container">
            <h1>Certifications</h1>
            <div className="certs-grid">
                {certifications.map((cert) => (
                    <div className="cert" key={cert.id}>
                        <a href={cert.href} target="_blank" rel="noreferrer">
                            <img 
                                src={cert.imgSrc} 
                                className="zoom" 
                                alt={cert.alt} 
                                width="100%"
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Certifications;