import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { LanguageProvider } from './context/LanguageContext';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
      offset: 60,
      delay: 0,
    });
    AOS.refresh();
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-[#0a0f1c] text-white min-h-screen w-full overflow-x-hidden custom-cursor">
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </LanguageProvider>
  );
}