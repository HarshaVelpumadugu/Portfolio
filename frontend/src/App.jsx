import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Skills from "./components/skills/skills.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Certifications from "./components/Certifications/Certifications.jsx";
import ProjectDetail from "./components/Projects/ProjectDetail.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = ({ isDarkMode, toggleTheme, isMenuOpen, toggleMenu }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`portfolio ${isDarkMode ? "dark" : "light"}`}>
      <ScrollToTop />
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {isHomePage && <Footer />}
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <Layout
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
    </Router>
  );
};

export default App;
