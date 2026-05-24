import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Organization & Volunteer', 'Publications', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          className="text-2xl font-space font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-accent-purple cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Rizky jisantt Dev
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            let href = '';
            if (link === 'Home') href = '#home';
            else if (link === 'Organization & Volunteer') href = '#organization-volunteer';
            else href = `#${link.toLowerCase()}`;
            return (
              <a key={link} href={href} className="relative group cursor-pointer block">
                <span className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">
                  {link}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-cyan transition-all duration-300 group-hover:w-full" style={{ boxShadow: '0 0 8px #00F5FF' }}></span>
              </a>
            )
          })}
        </div>



        {/* Mobile menu button could go here */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
