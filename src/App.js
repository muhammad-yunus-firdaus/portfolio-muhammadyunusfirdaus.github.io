import React, { useEffect, Suspense, lazy } from 'react';

import { LanguageProvider } from './context/LanguageContext';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import LazySection from './components/LazySection';

const Experience   = lazy(() => import('./components/Experience'));
const Certificates = lazy(() => import('./components/Certificates'));
const Projects     = lazy(() => import('./components/Projects'));
const Contact      = lazy(() => import('./components/Contact'));
const Footer       = lazy(() => import('./components/Footer'));

export default function App() {
  useEffect(() => {
    // AOS is only useful on desktop (it's already disabled on mobile via config).
    // Dynamic-import both AOS JS and its CSS so mobile devices never download them.
    const isMobile = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (!isMobile) {
      Promise.all([
        import('aos'),
        import('aos/dist/aos.css'),
      ]).then(([{ default: AOS }]) => {
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
          disable: false, // already guarded by the isMobile check above
        });
        AOS.refresh();
      });
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-black text-white min-h-screen w-full overflow-x-hidden custom-cursor">
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />

          {/* Experience — ~900px tall on mobile */}
          <Suspense fallback={<SectionSkeleton minHeight="900px" />}>
            <LazySection id="experience">
              <Experience />
            </LazySection>
          </Suspense>

          <Skills />

          {/* Certificates — ~600px tall on mobile */}
          <Suspense fallback={<SectionSkeleton minHeight="600px" />}>
            <LazySection id="certificates">
              <Certificates />
            </LazySection>
          </Suspense>

          {/* Projects — ~1200px tall on mobile */}
          <Suspense fallback={<SectionSkeleton minHeight="1200px" />}>
            <LazySection id="projects">
              <Projects />
            </LazySection>
          </Suspense>

          {/* Contact — ~500px tall on mobile */}
          <Suspense fallback={<SectionSkeleton minHeight="500px" />}>
            <LazySection id="contact">
              <Contact />
            </LazySection>
          </Suspense>
        </main>

        {/* Footer — ~150px tall */}
        <Suspense fallback={<SectionSkeleton minHeight="150px" />}>
          <LazySection>
            <Footer />
          </LazySection>
        </Suspense>

        <BackToTop />
      </div>
    </LanguageProvider>
  );
}

/* ─── Skeleton placeholder ─── */
function SectionSkeleton({ minHeight = '400px' }) {
  return (
    <div
      style={{ minHeight }}
      className="w-full py-12 px-4"
      aria-hidden="true"
    >
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="h-8 w-40 rounded-lg bg-white/5 animate-pulse" />
        <div className="h-px w-full bg-white/5" />
        <div className="space-y-4">
          <div className="h-32 rounded-xl bg-white/5 animate-pulse" />
          <div className="h-32 rounded-xl bg-white/5 animate-pulse" />
          <div className="h-32 rounded-xl bg-white/5 animate-pulse" />
        </div>
      </div>
    </div>
  );
}