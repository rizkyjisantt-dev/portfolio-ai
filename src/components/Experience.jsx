import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      type: "Professional Work",
      date: "November 2025 – Present",
      role: "Web Editor",
      company: "NIS Group",
      description: "As a Web Editor at NIS Group, I am responsible for managing and updating content on a sports news website as part of the web team. My work includes writing and editing sports articles, ensuring optimal SEO structure and keyword optimization, as well as maintaining consistency and quality across the entire site.\n\nIn addition, I also manage content across various digital platforms such as Instagram and TikTok. I conduct research on current sports trends and collaborate with the Social Media Specialist team to produce informative, relevant, and engaging content for both website readers and social media audiences."
    },
    {
      type: "Independent Study",
      date: "August 2023 – December 2023",
      role: "Data Analyst",
      company: "Zenius Education",
      program: "MSIB Batch 5 – Data Analytics For Climate Change Resolution And Sustainable Development",
      subtitle: "Certified Independent Study Program, Kampus Merdeka Batch 5 x Zenius Education",
      description: "Participated in an intensive data analytics program focused on climate change resolution and sustainable development. Leveraged analytical thinking to process and analyze real-world environmental datasets. Developed interactive dashboards and comprehensive reports using modern data visualization techniques to uncover actionable insights. Collaborated with cross-functional teams in a fast-paced learning environment, applying advanced data techniques to solve complex sustainability challenges and drive impactful solutions."
    }
  ];

  return (
    <section className="py-24 relative z-10" id="experience">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">My</span> Experience
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full shadow-[0_0_10px_#fff]"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-cyan via-accent-purple to-transparent opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 top-6 w-3 h-3 rounded-full bg-neon-cyan z-10 shadow-neon-cyan" />
                
                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="glass-card p-8 rounded-2xl hover:border-neon-cyan/30 transition-colors duration-300 group">
                    <div className={`flex flex-col gap-3 mb-6 ${index % 2 === 0 ? 'items-start' : 'md:items-end items-start'}`}>
                      <span className="inline-block py-1 px-4 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-neon-cyan text-xs font-bold tracking-wider shadow-[0_0_10px_rgba(0,245,255,0.2)]">
                        {exp.type}
                      </span>
                      <span className="inline-block py-1 px-4 rounded-full bg-accent-purple/20 text-accent-purple text-xs font-bold tracking-wider border border-accent-purple/30 group-hover:border-accent-purple group-hover:shadow-neon-purple transition-all">
                        {exp.date}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">{exp.role}</h3>
                    <h4 className="text-lg text-gray-200 font-medium mb-1">{exp.company}</h4>
                    
                    {exp.program && (
                      <h5 className="text-sm text-neon-cyan/90 font-medium mb-1">{exp.program}</h5>
                    )}
                    {exp.subtitle && (
                      <h6 className="text-xs text-gray-400 font-space mb-4">{exp.subtitle}</h6>
                    )}
                    {!exp.subtitle && <div className="mb-4"></div>}

                    <div className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
