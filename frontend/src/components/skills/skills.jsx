import React from "react";
import { motion } from "framer-motion";
import "./skills.css";
import { skillsData } from "../../utils/data/skillsData.js";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-content">
          <h2>My Skills</h2>
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                style={{
                  borderColor: skill.color,
                  boxShadow: `0 0 20px ${skill.color}20`,
                }}
              >
                <div className="skill-icon">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="skill-name" style={{ color: skill.color }}>
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Skills;
