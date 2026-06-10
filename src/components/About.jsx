import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 relative z-10" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full shadow-neon-cyan"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-space font-bold mb-4 text-white">AI Engineer & Software Developer</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Passionate AI, Data Science, and Software Engineering enthusiast with hands-on experience in machine learning, deep learning, natural language processing, data analytics, business intelligence, and modern web development. Experienced in building intelligent systems, data-driven solutions, and scalable digital products.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Continuously learning new technologies and methodologies related to AI research and software architecture. Proven adaptability and strong motivation to design high-impact solutions, collaborate across multi-disciplinary teams, and contribute to cutting-edge digital transformation initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "Experience", value: "1+ Year", color: "from-neon-cyan" },
              { title: "Projects", value: "9+", color: "from-accent-purple" },
              { title: "Technologies & Methods", value: "60+", color: "from-pink-500" },
              { title: "Certifications", value: "18", color: "from-blue-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(0, 245, 255, 0.3)' }}
                className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center border-t border-white/10 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color} to-transparent opacity-50`} />
                <h4 className="text-3xl font-bold font-space text-white mb-2">{stat.value}</h4>
                <p className="text-sm text-gray-400 uppercase tracking-wider">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
