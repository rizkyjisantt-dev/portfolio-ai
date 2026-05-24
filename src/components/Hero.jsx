import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = () => {
  const textRef = useRef(null);
  const roles = ['Data Engineer', 'Data Analyst', 'AI & ML Developer', 'Web Enthusiast', 'Adventurer', 'Gamer'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1.2, ease: 'power4.out', delay: 0.2 }
      );
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">

      {/* Background Cinematic Visuals */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">

        {/* Animated Holographic Core */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotateZ: [0, 90, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-[600px] h-[600px] rounded-full blur-[100px] bg-gradient-to-tr from-accent-purple/20 to-neon-cyan/20 mix-blend-screen"
        />

        {/* Floating Glassmorphism Elements */}
        <motion.div
          animate={{
            y: [-30, 30, -30],
            rotateX: [0, 20, 0],
            rotateY: [0, -20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-2xl glass border border-white/10 opacity-60 backdrop-blur-3xl"
          style={{ boxShadow: '0 0 40px rgba(0, 245, 255, 0.1)' }}
        />

        <motion.div
          animate={{
            y: [30, -30, 30],
            rotateX: [0, -20, 0],
            rotateY: [0, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full glass border border-accent-purple/20 opacity-40 backdrop-blur-3xl"
          style={{ boxShadow: '0 0 60px rgba(123, 47, 247, 0.15)' }}
        />

        {/* Neural Network Abstract Lines (SVG) */}
        <svg className="absolute w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F5FF" stopOpacity="0" />
              <stop offset="50%" stopColor="#7B2FF7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00F5FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            d="M 100,200 Q 400,100 700,300 T 1300,200"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="1"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1 }}
            d="M -100,500 Q 300,600 600,400 T 1400,500"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="1"
          />
        </svg>

        {/* Subtle grid mesh overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMCAwdjQwIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-50" />
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 w-full z-10 flex flex-col items-center text-center mt-[-5vh]">
        <div ref={textRef} className="space-y-8 w-full flex flex-col items-center">
          <div className="hero-anim relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-space leading-tight text-white tracking-tight pb-4 drop-shadow-2xl">
              Hi, I'm <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-accent-purple inline-block" style={{ filter: 'drop-shadow(0 0 20px rgba(123,47,247,0.3))' }}>
                Mochammad Rizki
              </span>
            </h1>
          </div>

          {/* Animated Role Text */}
          <div className="hero-anim h-20 md:h-24 flex items-center justify-center relative w-full overflow-visible">
            <h3 className="text-3xl md:text-5xl font-semibold text-gray-300 w-full relative h-full flex justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ opacity: 0, y: 25, filter: 'blur(10px)', scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                  exit={{ opacity: 0, y: -25, filter: 'blur(10px)', scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-neon-cyan whitespace-nowrap py-4 px-2"
                  style={{ textShadow: '0 0 30px rgba(123, 47, 247, 0.5)' }}
                >
                  {roles[currentRole]}
                </motion.div>
              </AnimatePresence>
            </h3>
          </div>

          <div className="hero-anim">
            <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed pt-4 font-light">
              Bachelor of Informatics Engineering | Fast Learning & Flexible <br className="hidden md:block" />
              Open to Entry-Level Positions in Various Fields
            </p>
          </div>
        </div>
      </div>

      {/* Cinematic bottom gradient fade to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
