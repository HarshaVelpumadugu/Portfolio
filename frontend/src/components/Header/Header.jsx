import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Sun, Moon, X } from "lucide-react";
import logoImg from "../../assets/Portfolio-logo.png";
import "./Header.css";

const Header = ({ isDarkMode, toggleTheme, isMenuOpen, toggleMenu }) => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.header
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-content">
          <div className="logo-container">
            <div className="logo-img-container">
              <img className="logo-img" src={logoImg} />
            </div>
            <Link to="/" className="logo">
              Harsha .
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item, index) => (
              <motion.div key={item.name}>
                <Link
                  to={item.path}
                  className={`desktop-nav-link ${
                    isActive(item.path) ? "active" : ""
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="nav-buttons">
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button className="menu-toggle" onClick={toggleMenu}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="menu-header">
                <Link to="/" className="logo">
                  Harsha.
                </Link>
                <button className="close-menu" onClick={toggleMenu}>
                  <X size={24} />
                </button>
              </div>
              <nav className="nav-links">
                {navItems.map((item, index) => (
                  <motion.div key={item.name}>
                    <Link
                      to={item.path}
                      className={`nav-link ${
                        isActive(item.path) ? "active" : ""
                      }`}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
