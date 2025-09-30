import React from "react";
import { motion } from "framer-motion";
import { Code, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectsData } from "../../utils/data/ProjectsData.js";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = ProjectsData[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="project-detail-section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
          Back to Projects
        </button>

        <div className="project-detail-content">
          <h1 className="project-detail-title">{project.title}</h1>

          <div className="project-detail-image-container">
            <img
              src={project.img}
              alt={project.title}
              className="project-detail-image"
            />
          </div>

          <div className="project-detail-description">
            <h2>About the Project</h2>
            <p>{project.description}</p>
          </div>

          <div className="project-detail-tech">
            <h2>Technologies Used</h2>
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="project-detail-links">
            <a
              href={project.liveLink}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code size={20} />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectDetail;
