import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProjectsData } from "../../utils/data/ProjectsData.js";
import "./Projects.css";

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (index) => {
    navigate(`/project/${index}`);
  };

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
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <button
                    className="project-details-icon"
                    onClick={() => handleProjectClick(index)}
                    aria-label="View project details"
                  >
                    <ExternalLink size={24} />
                  </button>
                </div>
                <div className="project-image-container">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
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
