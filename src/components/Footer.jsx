import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const socials = [
    { name: 'Instagram', url: 'https://instagram.com/rizky_jisantt', icon: <Instagram className="w-5 h-5" /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/moch.rizki', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'GitHub', url: 'https://github.com/rizkyjisantt-dev', icon: <Github className="w-5 h-5" /> }
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 glass">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-space font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-accent-purple">
          RizkyJisantt.Dev
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} RizkyJisantt.Dev Portfolio. All rights reserved.
        </p>

        <div className="flex gap-4">
          {socials.map((social) => (
            <div key={social.name} className="relative group">
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2, boxShadow: '0 0 15px rgba(0, 245, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-colors duration-300"
              >
                {social.icon}
              </motion.a>
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-[#050816] backdrop-blur-md text-white text-xs py-1.5 px-3 rounded-lg border border-white/10 shadow-[0_0_15px_rgba(0,245,255,0.2)] whitespace-nowrap font-space font-medium tracking-wide">
                  {social.name}
                </div>
                {/* Tooltip arrow */}
                <div className="w-2 h-2 bg-[#050816] border-b border-r border-white/10 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
