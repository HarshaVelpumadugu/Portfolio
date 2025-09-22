import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Sun, Moon, X } from "lucide-react";
import "./Header.css";

const Header = ({ isDarkMode, toggleTheme, isMenuOpen, toggleMenu }) => {
  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Certifications",
  ];

  return (
    <>
      <motion.header
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-content">
          <div className="logo">Harsha .</div>
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
                <div className="logo">Harsha.</div>
                <button className="close-menu" onClick={toggleMenu}>
                  <X size={24} />
                </button>
              </div>
              <nav className="nav-links">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="nav-link"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={toggleMenu}
                  >
                    {item}
                  </motion.a>
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
