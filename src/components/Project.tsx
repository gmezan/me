import aco from '../assets/images/aco.png';
import dpd from '../assets/images/dpd.png';
import levelfy from '../assets/images/levelfy.png';
import snake from '../assets/images/snake.png';
import rag from '../assets/images/rag.png'
import infra from '../assets/images/infra.png'
import sd from '../assets/images/spring_devops.png'
import ds from '../assets/images/deepseek.png'

import '../assets/styles/Project.scss';

const projects = [
    {
        href: "https://github.com/gmezan/ai-agent-langchain",
        title: "WIP: Agents with LangChain and DeepSeek",
        content: "Currently working on a multi agent architecture using LangChain powered by DeepSeek. Will provide a front end to interact and will be hosted on the cloud.",
        imgSrc: ds,
        alt: "Agents"
    },
    {
        href: "https://github.com/gmezan/azure-openai-search-rag",
        title: "Chat with your Data app",
        content: "AI powered RAG application using Azure OpenAI and AI Search. The agent answers questions related to Azure certifications exams. Developed and deployed the infra with terraform, backend with Spring & Java  and frontend with React.",
        imgSrc: rag,
        alt: "Chat with Data application interface"
    },
    {
        href: "https://github.com/gmezan/azure-k8s-devops-java",
        title: "CI/CD Pipeline for Spring Apps on Azure Kubernetes Service",
        content: "Automated GitHub Actions pipelines deploy Terraform-defined Azure infrastructure (AKS, ACR) and Spring Boot apps to ACR. Azure AD federated credentials enable secure, secretless authentication for automated AKS deployments via IaC and unified CI/CD, eliminating manual steps from code to production.",
        imgSrc: sd,
        alt: "Chat with Data application interface"
    },
    {
        href: "https://github.com/gmezan/terraform-infra-gh-actions",
        title: "Infra CI/CD Management",
        content: "Developed with GH actions and terraform. CI/CD pipelines deploying to Azure and AWS cloud. Secured with encryption and GH secrets, support for multiple infra solutions for different projects.",
        imgSrc: infra,
        alt: "CI/CD pipeline diagram"
    },
    {
        href: "https://github.com/gmezan/levelfy-frontend",
        title: "Levelfy",
        content: "During my studies, led the development of front and back-end for a web platform offering workshops created by and tailored to students. Developed with Angular and Java. Deployed infra, configured services, and managed operations using AWS.",
        imgSrc: levelfy,
        alt: "Levelfy platform screenshot"
    },
    {
        href: "https://github.com/gmezan/ant-colony-implementation-for-tsp",
        title: "Ant Colony Optimization for TSP",
        content: "Ant Colony algorithm implementation to efficiently solve the traveling salesman problem (TSP). Extended the algorithm to solve the multidimensional knapsack problem and applied it to the virtual machine placement (VMP) problem.",
        imgSrc: aco,
        alt: "Algorithm visualization"
    },
    {
        href: "https://github.com/gmezan/pucp-1iee15-digital-pulse-detector",
        title: "Digital Pulse Detector",
        content: "Measured heart rate with sensors and ATmega328p microcontroller. Developed in C++ from scratch.",
        imgSrc: dpd,
        alt: "Pulse detector hardware"
    },
    {
        href: "https://github.com/gmezan/snake-game-atmega32",
        title: "ATmega Snake Game",
        content: "Developed snake game from scratch using 8-bits microcontroller ATmega32, 8x8 LED Matrix and transistors. Designed, manufactured, and developed in C language.",
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
                    <div className="project" key={project.href}>
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