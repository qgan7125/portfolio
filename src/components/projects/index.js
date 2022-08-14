import React, { useState } from 'react';
import projects from "./projectsInfo.json";
import "./projects.css";

const Projects = () => {
    const [expanded, setExpanded] = useState(projects.projects[0].name);

    const handleClick = (e) => {
        const name = e.currentTarget.getAttribute("name");
        setExpanded(name);
    }

    return (
        <section id="ProjectsSection">
            <h1>Projects</h1>
            <div className='projects__container'>
                {
                    projects.projects.map(project => (
                        <div
                            key={project.name}
                            name={project.name}
                            className={'expanding__cards ' + (expanded === project.name ? "active" : "")}
                            onClick={handleClick}>
                            <img src={process.env.PUBLIC_URL + project.src} alt={project.name} />
                            <div className='project__info'>
                                <h4>{project.name}</h4>
                                <p>
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default Projects;