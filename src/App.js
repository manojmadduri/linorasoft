import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BurgerIcon from './components/BurgerIcon';
import BurgerMenu from './components/BurgerMenu';
import './styles/Global.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* Burger Icon and Menu for Mobile Screens */}
        <BurgerIcon toggleMenu={toggleMenu} isOpen={menuOpen} />
        <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
