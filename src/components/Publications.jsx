import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, BookOpen, ExternalLink, ArrowUpRight, 
  Calendar, Award, Database, FileText, Sparkles 
} from 'lucide-react';

const Publications = () => {
  const publication = {
    title: "Penerapan Metode Ensemble Bagging-SVR untuk Multivariate Time Series pada Peramalan Curah Hujan (Studi Kasus: Stasiun Meteorologi Perak I)",
    journal: "Sains Data - Jurnal Studi Matematika dan Teknologi",
    date: "10 February 2026",
    year: "2026",
    doi: "10.55927/sainsdata.v3i1.294",
    link: "https://pub.nuris.ac.id/sainsdata/article/view/294",
    summary: "This research explores the implementation of Ensemble Bagging-SVR for multivariate time series rainfall forecasting using climate data from Meteorological Station Perak I, aiming to improve prediction accuracy through ensemble machine learning approaches.",
    focus: [
      { name: "Ensemble Learning", color: "#00F5FF" }, // Cyan
      { name: "Support Vector Regression (SVR)", color: "#ec4899" }, // Pink
      { name: "Multivariate Time Series", color: "#7B2FF7" }, // Purple
      { name: "Rainfall Forecasting", color: "#38bdf8" }, // Sky Blue
      { name: "Climate Data Analysis", color: "#4ade80" }, // Green
      { name: "Machine Learning", color: "#facc15" } // Yellow
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Generating coordinates for decorative floating particles
  const floatingParticles = [
    { x: '10%', y: '20%', size: 4, delay: 0 },
    { x: '85%', y: '15%', size: 6, delay: 1.5 },
    { x: '25%', y: '80%', size: 5, delay: 0.8 },
    { x: '75%', y: '75%', size: 4, delay: 2.2 }
  ];

  return (
    <section className="py-28 relative z-10 overflow-hidden" id="publications">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan/5 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-accent-purple">
              Research & Publications
            </span>
          </h2>
          <div className="w-28 h-[3px] bg-gradient-to-r from-neon-cyan to-accent-purple mx-auto rounded-full shadow-[0_0_15px_#00F5FF]"></div>
          <p className="text-gray-400 mt-4 text-sm md:text-base font-sans max-w-lg mx-auto">
            Scientific contributions pushing the boundaries of machine learning, time-series forecasting, and environmental analytics.
          </p>
        </div>

        {/* Featured Card Wrapper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative group rounded-3xl p-[1px] overflow-hidden transition-all duration-500"
        >
          {/* Ambient Glowing Background Border */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-neon-cyan via-accent-purple to-pink-500 blur opacity-20 group-hover:opacity-85 transition duration-700 group-hover:duration-200" />
          
          <div className="relative bg-[#0B1120]/90 backdrop-blur-2xl p-8 md:p-12 rounded-3xl border border-white/5 flex flex-col justify-between overflow-hidden shadow-2xl">
            
            {/* Soft backdrop radial light spot */}
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent-purple/10 blur-3xl opacity-50 group-hover:opacity-100 group-hover:bg-neon-cyan/15 transition-all duration-500 pointer-events-none" />

            {/* Futuristic Floating Particles inside the card */}
            {floatingParticles.map((particle, idx) => (
              <motion.div
                key={idx}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.15, 0.45, 0.15]
                }}
                transition={{
                  duration: 4 + idx,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: particle.delay
                }}
                className="absolute rounded-full bg-white pointer-events-none"
                style={{
                  left: particle.x,
                  top: particle.y,
                  width: particle.size,
                  height: particle.size,
                  boxShadow: `0 0 10px rgba(255,255,255,0.8)`
                }}
              />
            ))}

            {/* Content Body */}
            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 relative z-10">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan font-mono text-[10px] font-bold tracking-widest uppercase shadow-[0_0_12px_rgba(0,245,255,0.1)]">
                  <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
                  <span>Featured Research Paper</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{publication.date}</span>
                  </span>
                </div>
              </div>

              {/* Research Title */}
              <h3 className="text-xl md:text-3xl font-space font-bold text-white mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-cyan group-hover:to-white transition-all duration-500 relative z-10">
                {publication.title}
              </h3>

              {/* Journal and Metadata Info */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8 relative z-10">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold">
                  <GraduationCap className="w-4 h-4 text-accent-purple" />
                  <span>{publication.journal}</span>
                </span>
                
                <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs font-mono">
                  <span>Year: {publication.year}</span>
                </span>

                <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs font-mono tracking-wider flex items-center gap-1">
                  <span className="text-neon-cyan/80 font-bold">DOI:</span>
                  <span>{publication.doi}</span>
                </span>
              </div>

              {/* Research Abstract/Summary */}
              <div className="mb-8 p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 leading-relaxed relative z-10 group-hover:bg-white/[0.04] transition-all duration-500">
                <h4 className="text-xs font-mono font-bold text-gray-400 tracking-wider uppercase mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-neon-cyan" />
                  <span>Research Summary</span>
                </h4>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-sans">
                  {publication.summary}
                </p>
              </div>

              {/* Focus Areas / Research Tags */}
              <div className="mb-10 relative z-10">
                <h4 className="text-xs font-mono font-bold text-gray-400 tracking-wider uppercase mb-4 flex items-center gap-2">
                  <Database className="w-4 h-4 text-pink-400" />
                  <span>Research Focus & Methodology</span>
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {publication.focus.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: `${tag.color}40`,
                        boxShadow: `0 0 15px ${tag.color}25`,
                        backgroundColor: `${tag.color}08`,
                        color: '#ffffff'
                      }}
                      className="px-3.5 py-2 text-xs md:text-sm font-medium rounded-xl bg-white/5 border border-white/10 text-gray-400 cursor-default transition-all duration-300 flex items-center gap-2"
                    >
                      <span 
                        className="w-1.5 h-1.5 rounded-full" 
                        style={{ backgroundColor: tag.color, boxShadow: `0 0 8px ${tag.color}` }}
                      />
                      {tag.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-4 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-6 relative z-10">
              <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
                DOMAIN: CLIMATE_INTELLIGENCE_LAYER
              </span>

              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-neon-cyan to-accent-purple text-sm font-space font-bold text-white shadow-[0_0_20px_rgba(0,245,255,0.25)] hover:shadow-[0_0_30px_rgba(0,245,255,0.45)] transition-all duration-500 hover:scale-[1.03] active:scale-[0.98]"
              >
                <BookOpen className="w-4.5 h-4.5 group-hover/btn:rotate-6 transition-transform" />
                <span>View Full Publication</span>
                <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
