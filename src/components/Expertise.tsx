import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faNode, faReact, faDocker, faPython, faLinux, faMicrosoft, faAws } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

const labelsFirst = [
    "Java",
    "Spring Boot",
    "Node",
    "Maven",
    "React",
    "TypeScript",
    "JavaScript",
    "Python",
    "SQL",
    "NoSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Kubernetes",
    "Terraform",
    "Helm",
    "Linux",
    "Bash",
    "Python",
];

const labelsThird = [
    "OpenAI",
    "LangChain",
    "DeepSeek",
    "MS Semantic Kernel",
    "Python",
    "LLMOps"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <FontAwesomeIcon icon={faJava} size="3x" />
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <FontAwesomeIcon icon={faNode} size="3x" />
                    </div>
                    <h3>Full Stack Web Development</h3>
                    <p>I have developed multiple applications in the frontend and backend. Proficient in the analysis, design and development of distributed, scalable systems. Led inititatives to solve complex problems and deliver efficient solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <FontAwesomeIcon icon={faMicrosoft} size="3x" />
                        <FontAwesomeIcon icon={faAws} size="3x" />
                        <FontAwesomeIcon icon={faLinux} size="3x" />
                    </div>
                    <h3>Cloud & DevOps</h3>
                    <p>Advanced knowledge in Azure and AWS cloud solutions. Skilled with multiple DevOps tools, I create pipelines with GitHub actions to deploy infrastructure, deliver and release applications. I automate tasks to reduce overhead and optimize the SDLC.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                <div style={{ display: 'flex', gap: '20px' }}>
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <FontAwesomeIcon icon={faRobot} size="3x" />
                    </div>
                    <h3>GenAI & LLM</h3>
                    <p>I have professional experience building enterprise grade GenAI-enabled solutions that empower end users with transformative transaction capabilities. I develop autonomous agents and LLMOps processes that redefine next-gen app experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;