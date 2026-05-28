import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop dimensions
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Organization & Volunteer', 'Publications', 'Contact'];

  // Smooth scroll handler for mobile links to prevent rapid unmount cancellation
  const handleMobileLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'
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

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            let href = '';
            if (link === 'Home') href = '#home';
            else if (link === 'Organization & Volunteer') href = '#organization';
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

        {/* Right Side: Hamburger Button (Visible on Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-neon-cyan focus:outline-none transition-all duration-300 relative group p-2 rounded-lg border border-transparent hover:border-neon-cyan/20 hover:bg-neon-cyan/5"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X size={24} className="text-neon-cyan drop-shadow-[0_0_8px_#00F5FF]" />
            ) : (
              <Menu size={24} className="text-white group-hover:text-neon-cyan group-hover:drop-shadow-[0_0_8px_#00F5FF] transition-all duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Cyberpunk Animated Mobile Menu Dropdown Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-full left-0 right-0 overflow-hidden bg-primary/95 backdrop-blur-xl border-b border-neon-cyan/20 shadow-[0_15px_30px_rgba(0,245,255,0.2)]"
          >
            <div className="px-6 py-6 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link, idx) => {
                let href = '';
                if (link === 'Home') href = '#home';
                else if (link === 'Organization & Volunteer') href = '#organization';
                else href = `#${link.toLowerCase()}`;
                return (
                  <motion.a
                    key={link}
                    href={href}
                    onClick={(e) => handleMobileLinkClick(e, href)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.04, duration: 0.3, ease: 'easeOut' }}
                    className="relative group py-2 block"
                  >
                    <div className="flex items-center justify-between border-b border-white/5 pb-2 group-hover:border-neon-cyan/30 transition-colors duration-300">
                      <span className="text-base font-space font-medium text-gray-300 group-hover:text-neon-cyan group-hover:text-glow transition-all duration-300">
                        {link}
                      </span>
                      <motion.span
                        className="text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                      >
                        &rarr;
                      </motion.span>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
