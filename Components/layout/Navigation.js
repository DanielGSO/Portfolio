/**
 * Main Navigation Component
 * 
 * Features:
 * - Fixed navigation bar at the top of the page
 * - Responsive menu that collapses on mobile
 * - Smooth scrolling to sections
 * - Integrated theme and language toggles
 * - Smooth animations with Framer Motion
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../providers/LanguageProvider';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageToggle from '../ui/LanguageToggle';

export default function Navigation() {
  // State to control mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  // Navigation items with their respective anchors
  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' }
  ];

  // Function for smooth scrolling to sections and closing mobile menu
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 p-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Empty space for balance */}
        <div className="flex-1">
          {/* Intentionally empty for balance */}
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.key}
              onClick={() => scrollToSection(item.href)}
              className="text-text-secondary hover:text-text-primary transition-colors duration-300 font-medium"
              whileHover={{ y: -2 }}
            >
              {t.nav[item.key]}
            </motion.button>
          ))}
        </div>

        {/* Controls - More to the right */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <ThemeToggle />
          <LanguageToggle />
          
          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-12 h-12 rounded-full backdrop-blur-lg bg-surface/50 border border-border-custom flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="w-5 h-5 text-text-primary" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu className="w-5 h-5 text-text-primary" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 mt-2 mx-6 bg-surface/95 backdrop-blur-xl border border-border-custom rounded-2xl shadow-2xl z-[9999] md:hidden overflow-hidden"
          >
            <div className="py-4">
              {navItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 px-6 text-text-secondary hover:text-text-primary hover:bg-primary/10 transition-all duration-200 font-medium text-base"
                >
                  {t.nav[item.key]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}