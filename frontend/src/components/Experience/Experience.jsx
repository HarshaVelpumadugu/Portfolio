import React from "react";
import { motion } from "framer-motion";
import { ExperienceData } from "../../utils/data/ExperienceData.js";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-content">
          <h2>Experience</h2>
          <div className="cards-grid">
            {ExperienceData.map((exp, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3>{exp.title}</h3>
                <div className="company">{exp.company}</div>
                <div className="date">{exp.date}</div>
                <div className="description">{exp.description}</div>
                <div className="tech-stack">
                  {exp.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Experience;
