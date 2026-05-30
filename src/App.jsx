import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrgVolunteer from './components/OrgVolunteer';
import Publications from './components/Publications';

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="relative w-full h-full font-sans">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neon-cyan pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block transition-transform duration-100 ease-out"
        style={{
          boxShadow: '0 0 10px #00F5FF, inset 0 0 10px #00F5FF',
        }}
      >
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-neon-cyan rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <ParticleBackground />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <OrgVolunteer />
          <Publications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
