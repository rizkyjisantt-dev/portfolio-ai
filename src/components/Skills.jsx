import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Terminal, Cpu, Database, Wrench, Briefcase, Globe, Brain, Network, BarChart3 } from 'lucide-react';

const Skills = () => {
  // Core AI & Data Science skills (Highly featured)
  const aiSkills = {
    libraries: {
      title: "Libraries & Frameworks",
      subtitle: "Primary Tools & Analytics Environments",
      sector: "DATA_ENGINEERING",
      node: "ACTIVE_NODE_01",
      icon: <Brain className="w-7 h-7" />,
      color: "#00F5FF", // Neon Cyan
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "Matplotlib", "Seaborn", "Streamlit", "NLP"]
    },
    models: {
      title: "Models & Methods",
      subtitle: "Architectures, Algorithms & Deep Learning",
      sector: "INTELLIGENCE_SYSTEMS",
      node: "ACTIVE_NODE_02",
      icon: <Network className="w-7 h-7" />,
      color: "#ec4899", // Neon Pink/Rose
      skills: ["CNN", "KNN", "Naive Bayes", "SVM", "Decision Tree", "SVR", "K-Means", "PCA", "Ensemble Learning"]
    },
    visualization: {
      title: "Visualization & Business Intelligence",
      subtitle: "Analytical Dashboards & Reporting Platforms",
      sector: "DECISION_SUPPORT",
      node: "ACTIVE_NODE_03",
      icon: <BarChart3 className="w-7 h-7" />,
      color: "#7B2FF7", // Accent Purple
      skills: ["Tableau", "Power BI"]
    }
  };

  // General software engineering skills
  const standardSkillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      color: "#00F5FF",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Back-End Development",
      icon: <Terminal className="w-6 h-6" />,
      color: "#4ade80",
      skills: ["Python", "PHP", "Node.js", "Laravel", "Django", "Flask"]
    },
    {
      title: "Database Systems",
      icon: <Database className="w-6 h-6" />,
      color: "#fbbf24",
      skills: ["MySQL", "PostgreSQL"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      color: "#7B2FF7",
      skills: ["Git", "GitHub", "VS Code", "Google Colab", "Antigravity", "Figma", "Canva", "CapCut"]
    },
    {
      title: "CMS & Platforms",
      icon: <Globe className="w-6 h-6" />,
      color: "#38bdf8",
      skills: ["WordPress", "Blogger"]
    },
    {
      title: "Productivity Tools",
      icon: <Briefcase className="w-6 h-6" />,
      color: "#facc15",
      skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-28 relative z-10 overflow-hidden" id="skills">


      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-accent-purple">
              Expertise & Skills
            </span>
          </h2>
          <div className="w-28 h-[3px] bg-gradient-to-r from-neon-cyan to-accent-purple mx-auto rounded-full shadow-[0_0_15px_#00F5FF]"></div>
          <p className="text-gray-400 mt-4 text-sm md:text-base font-sans max-w-md mx-auto">
            Specialized in Artificial Intelligence, Machine Learning, and Full-Stack Software Engineering.
          </p>
        </div>

        {/* 1. PRIMARY SECTION: ARTIFICIAL INTELLIGENCE & DATA SCIENCE */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20">
              <Brain className="w-6 h-6 text-neon-cyan animate-pulse" />
            </div>
            <div>
              <h3 className="text-2xl font-space font-bold text-white tracking-wide">
                Artificial Intelligence & Data Science
              </h3>
              <p className="text-xs text-gray-500 font-mono mt-0.5">CORE_EXPERTISE_LAYER</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Libraries & Frameworks */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group rounded-3xl p-[1px] overflow-hidden transition-all duration-500"
            >
              {/* Glowing animated background border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan via-accent-purple to-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-80 transition duration-500 group-hover:duration-200" />
              
              <div className="relative h-full bg-[#0B1120]/90 backdrop-blur-xl p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
                {/* Inner radial gradient light */}
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-neon-cyan/10 blur-3xl opacity-50 group-hover:opacity-100 group-hover:bg-neon-cyan/20 transition-all duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="p-3.5 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan shadow-[0_0_20px_rgba(0,245,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,245,255,0.4)] transition-all duration-500">
                      {aiSkills.libraries.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-space font-bold text-white group-hover:text-neon-cyan transition-colors">
                        {aiSkills.libraries.title}
                      </h4>
                      <p className="text-xs text-neon-cyan/70 font-mono mt-0.5">{aiSkills.libraries.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5 relative z-10">
                    {aiSkills.libraries.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ 
                          scale: 1.05,
                          borderColor: "rgba(0, 245, 255, 0.4)",
                          boxShadow: "0 0 15px rgba(0, 245, 255, 0.2)",
                          backgroundColor: "rgba(0, 245, 255, 0.08)",
                          color: "#ffffff"
                        }}
                        className="px-3.5 py-2 text-sm font-medium rounded-xl bg-white/5 border border-white/10 text-gray-300 cursor-default transition-all duration-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500 font-mono tracking-wider">
                  <span>SECTOR: {aiSkills.libraries.sector}</span>
                  <span className="text-neon-cyan/70">{aiSkills.libraries.node}</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: ML Models & Methods */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group rounded-3xl p-[1px] overflow-hidden transition-all duration-500"
            >
              {/* Glowing animated background border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-accent-purple to-neon-cyan rounded-3xl blur opacity-20 group-hover:opacity-80 transition duration-500 group-hover:duration-200" />
              
              <div className="relative h-full bg-[#0B1120]/90 backdrop-blur-xl p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
                {/* Inner radial gradient light */}
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-pink-500/10 blur-3xl opacity-50 group-hover:opacity-100 group-hover:bg-pink-500/20 transition-all duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="p-3.5 rounded-2xl bg-pink-500/10 border border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.2)] group-hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] transition-all duration-500">
                      {aiSkills.models.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-space font-bold text-white group-hover:text-pink-400 transition-colors">
                        {aiSkills.models.title}
                      </h4>
                      <p className="text-xs text-pink-400/70 font-mono mt-0.5">{aiSkills.models.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5 relative z-10">
                    {aiSkills.models.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ 
                          scale: 1.05,
                          borderColor: "rgba(236, 72, 153, 0.4)",
                          boxShadow: "0 0 15px rgba(236, 72, 153, 0.2)",
                          backgroundColor: "rgba(236, 72, 153, 0.08)",
                          color: "#ffffff"
                        }}
                        className="px-3.5 py-2 text-sm font-medium rounded-xl bg-white/5 border border-white/10 text-gray-300 cursor-default transition-all duration-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500 font-mono tracking-wider">
                  <span>SECTOR: {aiSkills.models.sector}</span>
                  <span className="text-pink-400/70">{aiSkills.models.node}</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Visualization & Business Intelligence */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group rounded-3xl p-[1px] overflow-hidden transition-all duration-500"
            >
              {/* Glowing animated background border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-purple via-neon-cyan to-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-80 transition duration-500 group-hover:duration-200" />
              
              <div className="relative h-full bg-[#0B1120]/90 backdrop-blur-xl p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
                {/* Inner radial gradient light */}
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-accent-purple/10 blur-3xl opacity-50 group-hover:opacity-100 group-hover:bg-accent-purple/20 transition-all duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="p-3.5 rounded-2xl bg-accent-purple/10 border border-accent-purple/30 text-accent-purple shadow-[0_0_20px_rgba(123,47,247,0.2)] group-hover:shadow-[0_0_25px_rgba(123,47,247,0.4)] transition-all duration-500">
                      {aiSkills.visualization.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-space font-bold text-white group-hover:text-accent-purple transition-colors">
                        {aiSkills.visualization.title}
                      </h4>
                      <p className="text-xs text-accent-purple/70 font-mono mt-0.5">{aiSkills.visualization.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5 relative z-10">
                    {aiSkills.visualization.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ 
                          scale: 1.05,
                          borderColor: "rgba(123, 47, 247, 0.4)",
                          boxShadow: "0 0 15px rgba(123, 47, 247, 0.2)",
                          backgroundColor: "rgba(123, 47, 247, 0.08)",
                          color: "#ffffff"
                        }}
                        className="px-3.5 py-2 text-sm font-medium rounded-xl bg-white/5 border border-white/10 text-gray-300 cursor-default transition-all duration-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse" />
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500 font-mono tracking-wider">
                  <span>SECTOR: {aiSkills.visualization.sector}</span>
                  <span className="text-accent-purple/70">{aiSkills.visualization.node}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 2. SECONDARY SECTION: GENERAL SOFTWARE ENGINEERING */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-accent-purple/10 border border-accent-purple/20">
              <Terminal className="w-6 h-6 text-accent-purple" />
            </div>
            <div>
              <h3 className="text-2xl font-space font-bold text-white/90 tracking-wide">
                General Software Engineering
              </h3>
              <p className="text-xs text-gray-500 font-mono mt-0.5">SUPPORTING_CAPABILITIES_LAYER</p>
            </div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {standardSkillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  backgroundColor: "rgba(255,255,255,0.03)",
                  boxShadow: `0 12px 30px -10px ${category.color}30`,
                  borderColor: `${category.color}30`
                }}
                className="glass p-7 rounded-2xl flex flex-col h-full transition-all duration-300 border border-white/5 relative overflow-hidden group"
              >
                {/* Subtle background glow based on category color */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-5 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: category.color, transform: 'translate(30%, -30%)' }}
                />

                <div className="flex items-center mb-5 relative z-10">
                  <div 
                    className="p-3 rounded-xl mr-4 bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors"
                    style={{ 
                      color: category.color,
                      boxShadow: `0 0 15px ${category.color}15 inset`
                    }}
                  >
                    {React.cloneElement(category.icon, { style: { color: category.color } })}
                  </div>
                  <h4 className="text-lg font-space font-bold text-gray-200 group-hover:text-white transition-colors">
                    {category.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {category.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300 hover:bg-white/10 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
