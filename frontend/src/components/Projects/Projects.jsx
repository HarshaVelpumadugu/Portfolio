import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { ProjectsData } from "../../utils/data/ProjectsData.js";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="project-section-content">
          <h2>Projects</h2>
          <div className="project-cards-grid">
            {ProjectsData.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3>{project.title}</h3>
                <div className="project-image-container">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                </div>
                <div className="description">{project.description}</div>
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} className="project-link">
                    <Code size={16} />
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="project-link">
                    <FaGithub size={16} />
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Projects;
