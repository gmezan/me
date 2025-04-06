import aco from '../assets/images/aco.png';
import dpd from '../assets/images/dpd.png';
import levelfy from '../assets/images/levelfy.png';
import snake from '../assets/images/snake.png';
import rag from '../assets/images/rag.png'
import infra from '../assets/images/infra.png'

import '../assets/styles/Project.scss';

const projects = [
    {
        id: 1,
        href: "https://github.com/gmezan/azure-openai-search-rag",
        title: "Chat with your Data app",
        content: "AI powered RAG application using Azure OpenAI and AI Search. The agent answers questions related to Azure certifications exams. Developed and deployed the infra, backend and frontend.",
        imgSrc: rag,
        alt: "Chat with Data application interface"
    },
    {
        id: 2,
        href: "https://github.com/gmezan/terraform-infra-gh-actions",
        title: "Infra CI/CD Management",
        content: "Developed with GH actions and terraform. CI/CD pipelines deploying to Azure and AWS cloud. Secured with encryption and GH secrets, support for multiple infra solutions for different projects.",
        imgSrc: infra,
        alt: "CI/CD pipeline diagram"
    },
    {
        id: 3,
        href: "https://github.com/gmezan/levelfy-frontend",
        title: "Levelfy",
        content: "Led the development of front and back-end for a web platform offering workshops created by and tailored to students. Developed with Angular and Java. Deployed infra, configured services, and managed operations using AWS.",
        imgSrc: levelfy,
        alt: "Levelfy platform screenshot"
    },
    {
        id: 4,
        href: "https://github.com/gmezan/ant-colony-implementation-for-tsp",
        title: "Ant Colony Optimization for TSP",
        content: "Multiple Ant Colony algorithm implementations to efficiently solve the traveling salesman problem (TSP).",
        imgSrc: aco,
        alt: "Algorithm visualization"
    },
    {
        id: 5,
        href: "https://github.com/gmezan/pucp-1iee15-digital-pulse-detector",
        title: "Digital Pulse Detector",
        content: "Measured heart rate with sensors and ATmega328p microcontroller. Developed with C++ from scratch.",
        imgSrc: dpd,
        alt: "Pulse detector hardware"
    },
    {
        id: 6,
        href: "https://github.com/gmezan/snake-game-atmega32",
        title: "ATmega Snake Game",
        content: "Developed snake game from scratch using 8-bits microcontroller ATmega32, 8x8 LED Matrix and transistors. Designed, manufactured, and programmed in C.",
        imgSrc: snake,
        alt: "Snake game on LED matrix"
    }
];

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project" key={project.id}>
                        <a href={project.href} target="_blank" rel="noreferrer">
                            <img 
                                src={project.imgSrc} 
                                className="zoom" 
                                alt={project.alt} 
                                width="100%"
                            />
                        </a>
                        <a href={project.href} target="_blank" rel="noreferrer">
                            <h2>{project.title}</h2>
                        </a>
                        <p>{project.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;