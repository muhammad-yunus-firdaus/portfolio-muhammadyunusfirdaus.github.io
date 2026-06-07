import React, { useEffect, Suspense, lazy } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { LanguageProvider } from './context/LanguageContext';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import LazySection from './components/LazySection';

const Experience = lazy(() => import('./components/Experience'));
const Certificates = lazy(() => import('./components/Certificates'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true,
      easing: 'ease-out-quad',
      offset: 50,
      delay: 0,
      anchorPlacement: 'bottom-bottom',
      throttleDelay: 99,
      debounceDelay: 50,
      disable: 'mobile', // Disable on mobile for performance
    });
    AOS.refresh();
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-black text-white min-h-screen w-full overflow-x-hidden custom-cursor">
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Suspense fallback={<div className="h-40 bg-white/5 animate-pulse rounded-xl m-4" />}>
          <LazySection id="experience">
            <Experience />
          </LazySection>
        </Suspense>
        <Skills />
        <Suspense fallback={<div className="h-40 bg-white/5 animate-pulse rounded-xl m-4" />}>
          <LazySection id="certificates">
            <Certificates />
          </LazySection>
          <LazySection id="projects">
            <Projects />
          </LazySection>
          <LazySection id="contact">
            <Contact />
          </LazySection>
          <LazySection>
            <Footer />
          </LazySection>
        </Suspense>

        <BackToTop />
      </div>
    </LanguageProvider>
  );
}