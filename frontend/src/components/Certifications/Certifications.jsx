import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { certificationsData } from "../../utils/data/CertificationsData.js";
import "./Certifications.css";

const Certifications = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCertificateClick = (e, url) => {
    e.stopPropagation();
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const toggleExpand = (index) => {
    console.log("Toggling index:", index, "Current expanded:", expandedIndex);
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
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
            {certificationsData.map((cert, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <motion.div
                  key={`cert-${index}-${cert.title}`}
                  className={`certificate-card ${isExpanded ? "expanded" : ""}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div
                    className="certificate-header"
                    onClick={() => toggleExpand(index)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        toggleExpand(index);
                      }
                    }}
                  >
                    <h3>{cert.title}</h3>
                    <motion.div
                      className="expand-icon"
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        className="certificate-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="certificate-inner-content">
                          <div
                            className="certification-image-container"
                            onClick={(e) => handleCertificateClick(e, cert.url)}
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
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
