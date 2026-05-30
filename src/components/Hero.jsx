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
      <div className="max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-24 pb-16 lg:pt-32 lg:pb-24">

        {/* Left Column: Intro Text */}
        <div ref={textRef} className="lg:col-span-7 space-y-8 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="hero-anim relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-space leading-tight text-white tracking-tight pb-4 drop-shadow-2xl">
              Hi, I'm <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-accent-purple inline-block" style={{ filter: 'drop-shadow(0 0 20px rgba(123,47,247,0.3))' }}>
                Mochammad Rizki Aji Santoso
              </span>
            </h1>
          </div>

          {/* Animated Role Text */}
          <div className="hero-anim h-20 md:h-24 flex items-center justify-center lg:justify-start relative w-full overflow-visible">
            <h3 className="text-3xl md:text-5xl font-semibold text-gray-300 w-full relative h-full flex justify-center lg:justify-start items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ opacity: 0, y: 25, filter: 'blur(10px)', scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                  exit={{ opacity: 0, y: -25, filter: 'blur(10px)', scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-neon-cyan whitespace-nowrap py-4 lg:px-0 px-2"
                  style={{ textShadow: '0 0 30px rgba(123, 47, 247, 0.5)' }}
                >
                  {roles[currentRole]}
                </motion.div>
              </AnimatePresence>
            </h3>
          </div>

          <div className="hero-anim">
            <p className="text-gray-400 max-w-2xl lg:mx-0 mx-auto text-lg md:text-xl leading-relaxed pt-4 font-light">
              Bachelor of Informatics Engineering | Fast Learning & Flexible <br className="hidden md:block" />
              Open to Entry-Level Positions in Various Fields
            </p>
          </div>
        </div>

        {/* Right Column: Cyberpunk Brand Identity Card Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="lg:col-span-5 flex justify-center items-center relative w-full max-w-[380px] lg:max-w-[400px] mx-auto order-first lg:order-none px-4 lg:px-0"
        >
          {/* Card Outer Glow Border Container (Layered card look) */}
          <div className="relative w-full rounded-[30px] p-[1.5px] bg-gradient-to-br from-neon-cyan/40 via-white/5 to-accent-purple/40 shadow-[0_20px_50px_rgba(5,8,22,0.7)]">

            {/* Cyber-tech container */}
            <div className="relative w-full rounded-[28px] bg-secondary/85 backdrop-blur-2xl p-6 border border-white/5 overflow-hidden flex flex-col items-stretch">

              {/* Card Static Background Details (HUD grid line / radial shine) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.06)_0%,transparent_75%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />

              {/* Decorative corner accents on the overall card */}
              {/* Top Left Bracket */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-neon-cyan/40 pointer-events-none" />
              <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-neon-cyan/50 pointer-events-none" />
              {/* Top Right Bracket */}
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-accent-purple/40 pointer-events-none" />
              <div className="absolute top-4 right-8 text-[8px] font-mono text-neon-cyan/60 tracking-wider pointer-events-none select-none">
                RX-903
              </div>
              {/* Bottom Left Bracket */}
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-accent-purple/40 pointer-events-none" />
              {/* Bottom Right Bracket */}
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-neon-cyan/40 pointer-events-none" />

              {/* Card Header Section: Digital contact chip & System Status */}
              <div className="flex justify-between items-center mb-5 relative z-10">
                {/* Simulated EMV secure microchip */}
                <div className="w-9 h-7 bg-gradient-to-br from-neon-cyan/20 to-accent-purple/20 border border-neon-cyan/40 rounded flex flex-col justify-between p-[4px] relative shadow-[inset_0_0_8px_rgba(0,245,255,0.2)]">
                  <div className="flex justify-between h-[30%]">
                    <span className="w-[1.5px] bg-neon-cyan/40 rounded-full" />
                    <span className="w-[1.5px] bg-neon-cyan/40 rounded-full" />
                    <span className="w-[1.5px] bg-neon-cyan/40 rounded-full" />
                  </div>
                  <div className="absolute inset-x-[8px] inset-y-[4px] border-l border-r border-neon-cyan/40" />
                  <div className="flex justify-between h-[30%]">
                    <span className="w-[1.5px] bg-neon-cyan/40 rounded-full" />
                    <span className="w-[1.5px] bg-neon-cyan/40 rounded-full" />
                    <span className="w-[1.5px] bg-neon-cyan/40 rounded-full" />
                  </div>
                </div>

                {/* Cybertech branding & online dot */}
                <div className="text-right flex flex-col justify-center">
                  <div className="flex items-center justify-end gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_6px_#00F5FF]" />
                    <span className="text-[9px] font-mono text-neon-cyan tracking-wider font-semibold">SECURE NODE // ONLINE</span>
                  </div>
                  <span className="text-[7px] font-mono text-gray-500 uppercase tracking-widest mt-0.5">AUTH LEVEL: 04</span>
                </div>
              </div>

              {/* Main Static Profile Image Section */}
              <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-neon-cyan/30 via-white/5 to-accent-purple/30 z-10">

                {/* Tech Bracket corners directly around image frame */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-neon-cyan pointer-events-none" />
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-accent-purple pointer-events-none" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-accent-purple pointer-events-none" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-neon-cyan pointer-events-none" />

                <div className="rounded-[15px] overflow-hidden bg-[#050816]/90 border border-white/5 p-1.5">
                  <img
                    src="/logo.png"
                    alt="Rizky Jisantt Dev Logo"
                    className="w-full aspect-square object-cover rounded-xl border border-white/5 pointer-events-none select-none filter brightness-[1.05] contrast-[1.02]"
                    style={{
                      boxShadow: 'inset 0 0 15px rgba(0, 245, 255, 0.15)'
                    }}
                  />
                </div>
              </div>

              {/* Fine technical dividing line with a notch */}
              <div className="relative my-5 z-10 flex items-center">
                <div className="flex-grow h-[1px] bg-gradient-to-r from-neon-cyan/40 to-transparent" />
                <div className="w-3 h-1.5 bg-neon-cyan/20 border border-neon-cyan/40 rounded-[2px] mx-1 flex items-center justify-center">
                  <div className="w-1 h-0.5 bg-neon-cyan" />
                </div>
                <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent to-accent-purple/40" />
              </div>

              {/* Developer Metadata & Professional ID Details */}
              <div className="relative z-10 flex justify-between items-end">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-neon-cyan/80 tracking-widest uppercase font-semibold">
                    IDENTITY CARD
                  </div>
                  <h4 className="text-xl font-space font-bold text-white tracking-tight leading-none">
                    Rizky Jisantt
                  </h4>
                  <p className="text-[10px] font-mono text-gray-400 tracking-wider font-light pt-0.5">
                    AI / DATA SCIENCE / WEB DEVELOPMENT / INF.ENG
                  </p>
                </div>

                {/* Cyber Barcode graphic */}
                <div className="flex flex-col items-end gap-1">
                  {/* Decorative Barcode */}
                  <div className="flex gap-[1.5px] items-stretch h-[18px] opacity-75">
                    <span className="w-[1px] bg-white" />
                    <span className="w-[2px] bg-white" />
                    <span className="w-[1px] bg-white" />
                    <span className="w-[3px] bg-white" />
                    <span className="w-[1px] bg-white" />
                    <span className="w-[1px] bg-white" />
                    <span className="w-[2px] bg-white" />
                    <span className="w-[1px] bg-white" />
                    <span className="w-[3px] bg-white" />
                    <span className="w-[1px] bg-white" />
                    <span className="w-[1px] bg-white" />
                    <span className="w-[2px] bg-white" />
                    <span className="w-[1px] bg-white" />
                  </div>
                  <span className="text-[6px] font-mono text-gray-500 tracking-[0.2em] leading-none select-none">*00245255*</span>
                </div>
              </div>

              {/* Tiny footer tech data block */}
              <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[7px] font-mono text-gray-600 relative z-10">
                <span>SYSTEM REGISTRY: ID-2026.SYS</span>
                <span>CHASSIS PORT: COM_04</span>
              </div>

            </div>
          </div>

          {/* Underlay Subtle static accent shadow glow */}
          <div className="absolute -bottom-6 w-[80%] h-6 bg-gradient-to-r from-neon-cyan/20 to-accent-purple/20 blur-[25px] rounded-full pointer-events-none select-none opacity-80" />
        </motion.div>

      </div>

      {/* Cinematic bottom gradient fade to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
