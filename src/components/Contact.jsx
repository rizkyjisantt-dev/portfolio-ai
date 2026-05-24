import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="py-24 relative z-10" id="contact">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-accent-purple">Connect</span>
          </h2>
          <p className="text-gray-400">Ready to start your next futuristic project?</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-10 rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400 font-medium ml-2">Name</label>
              <input
                type="text"
                placeholder="Mulyono"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 font-medium ml-2">Email</label>
              <input
                type="email"
                placeholder="mulyono@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
              />
            </div>
          </div>

          <div className="space-y-2 mb-8">
            <label className="text-sm text-gray-400 font-medium ml-2">Message</label>
            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 245, 255, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-accent-purple text-white font-bold text-lg tracking-wide shadow-lg"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
