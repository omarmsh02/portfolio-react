import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/MainSection/MainSection';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './assests/css/global.css';

const App = () => {
  return (
    <Router>
      {/* Header is always visible */}
      <Header />

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer is always visible */}
      <Footer />
    </Router>
  );
};

export default App;