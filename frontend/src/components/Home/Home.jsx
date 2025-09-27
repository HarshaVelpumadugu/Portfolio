import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import "./Home.css";
import CodingGif from "../../assets/AnimatedGif.gif";
import myPic from "../../assets/mypic.jpg";
import myResume from "../../assets/Harsha's_Resume_Updated.pdf";

const Home = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = myResume;
    link.download = "Harsha_Velpumadugu_Resume.pdf";
    link.click();
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="section hero">
        <motion.div
          className="container hero-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Side - Text Content */}
          <div className="hero-content">
            <motion.div
              className="hero-greeting"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi There!
              <motion.span
                className="wave-emoji"
                animate={{ rotate: [0, 20, 0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              >
                👋
              </motion.span>
            </motion.div>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm Harsha Velpumadugu
            </motion.h1>

            <motion.p
              className="hero-role"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              FullStack Developer & Problem Solver
            </motion.p>
          </div>
          <motion.div
            className="hero-gif"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={CodingGif}
              alt="Coding Animation"
              className="hero-gif-image"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <motion.div
          className="container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about">
            <img src={myPic} alt="Profile" className="about-image" />
            <div className="about-content">
              <h2>About Me</h2>
              <p>
                I'm a passionate full-stack developer with expertise in modern
                web technologies. I love creating efficient, scalable solutions
                and have a strong foundation in both front-end and back-end
                development. My journey in programming has equipped me with
                problem-solving skills and the ability to adapt to new
                technologies quickly.
              </p>
              <motion.button
                className="download-resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
              >
                <Download size={20} />
                Download Resume
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
