import React from "react";
import { motion } from "framer-motion";
import { certificationsData } from "../../utils/data/CertificationsData.js";
import "./Certifications.css";

const Certifications = () => {
  const handleCertificateClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <section id="certifications" className="section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="certificate-section-content">
          <h2>Certifications</h2>
          <div className="certificate-cards-grid">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                className="certificate-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3>{cert.title}</h3>
                <div
                  className="certification-image-container"
                  onClick={() => handleCertificateClick(cert.url)}
                  style={{ cursor: cert.url ? "pointer" : "default" }}
                >
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="certification-image"
                    loading="lazy"
                  />
                </div>
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
