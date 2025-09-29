import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { ContactsData } from "../../utils/data/ContactsData";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Contact Me</h2>
        <div className="contact-info">
          <div className="contact-item">
            <a href={`mailto:${ContactsData.email}`} className="contact-item">
              <Mail size={20} />
              <span>{ContactsData.email}</span>
            </a>
          </div>
          <div className="contact-item">
            <Phone size={20} />
            <span>{ContactsData.phone}</span>
          </div>
          <div className="contact-item">
            <MapPin size={20} />
            <span>{ContactsData.address}</span>
          </div>
        </div>
        <div className="social-links">
          <motion.a
            href={ContactsData.github}
            className="social-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href={ContactsData.linkedIn}
            className="social-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href={ContactsData.leetcode}
            className="social-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <SiLeetcode size={24} />
          </motion.a>
        </div>
        <p style={{ marginTop: "2rem", opacity: 0.6 }}>
          Designed and Developed by Harsha Velpumadugu
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
