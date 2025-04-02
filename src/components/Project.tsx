import aco from '../assets/images/aco.png';
import dpd from '../assets/images/dpd.png';
import levelfy from '../assets/images/levelfy.png';
import snake from '../assets/images/snake.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/gmezan/levelfy-frontend" target="_blank" rel="noreferrer"><img src={levelfy} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/gmezan/levelfy-frontend" target="_blank" rel="noreferrer"><h2>Levelfy</h2></a>
                <p>Led the development of front and back-end for a web platform offering workshops created by and tailored to students. Developed with Angular and Java. Deployed infra, configured services, and managed operations using AWS.</p>
            </div>
            <div className="project">
                <a href="https://github.com/gmezan/ant-colony-implementation-for-tsp" target="_blank" rel="noreferrer"><img src={aco} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/gmezan/ant-colony-implementation-for-tsp" target="_blank" rel="noreferrer"><h2>Ant Colony Optimization for TSP</h2></a>
                <p>Multiple Ant Colony algorithm implementations to efficiently solve the traveling salesman problem (TSP)</p>
            </div>
            <div className="project">
                <a href="https://github.com/gmezan/pucp-1iee15-digital-pulse-detector" target="_blank" rel="noreferrer"><img src={dpd} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/gmezan/pucp-1iee15-digital-pulse-detector" target="_blank" rel="noreferrer"><h2>Digital Pulse Detector</h2></a>
                <p>Measured heart rate with sensors and ATmega328p microcontroller. Developed with C++ from scratch.</p>
            </div>
            <div className="project">
                <a href="https://github.com/gmezan/snake-game-atmega32" target="_blank" rel="noreferrer"><img src={snake} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/gmezan/snake-game-atmega32" target="_blank" rel="noreferrer"><h2>ATmega Snake Game</h2></a>
                <p>Developed snake game from scratch using 8-bits uC ATmega32, 8x8 LED Matrix and transistors. Designed, manufactured, and programmed in C.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;