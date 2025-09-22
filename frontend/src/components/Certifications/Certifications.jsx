import React from "react";
import { motion } from "framer-motion";
import { certificationsData } from "../../utils/data/CertificationsData.js";
import "./Certifications.css";

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <motion.div
        className="container"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-content">
          <h2>Certifications</h2>
          <div className="cards-grid">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3>{cert.title}</h3>
                <div className="institution">{cert.institution}</div>
                <div className="date">{cert.date}</div>
                <div className="description">{cert.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Certifications;
