/**
 * Theme Toggle Component
 * 
 * Interactive button for switching between light and dark themes
 * Features animated icon transitions and smooth state changes
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../providers/ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full backdrop-blur-lg bg-surface/50 border border-border-custom flex items-center justify-center hover:bg-surface transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : 180,
          opacity: theme === 'light' ? 1 : 0
        }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-secondary" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : -180,
          opacity: theme === 'dark' ? 1 : 0
        }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-accent" />
      </motion.div>
    </motion.button>
  );
}