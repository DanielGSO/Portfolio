/**
 * Language Toggle Component
 * 
 * Dropdown selector for switching between English and Spanish
 * Features flag icons and smooth dropdown animations
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../providers/LanguageProvider';

// Flag icon mappings for each language
const flags = {
  en: 'fi-gb',
  es: 'fi-es'
};

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' }
  ];

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-lg bg-surface/80 border border-border-custom hover:bg-surface transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className={`fi ${flags[language]}`}></span>
        <span className="text-sm font-medium text-text-primary">{language.toUpperCase()}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-text-muted" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-12 right-0 w-32 backdrop-blur-lg bg-surface/90 border border-border-custom rounded-lg p-1 z-50"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => {
                  toggleLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                  language === lang.code 
                    ? 'bg-primary/20 text-text-primary' 
                    : 'hover:bg-primary/10 text-text-secondary'
                }`}
                whileHover={{ x: 2 }}
              >
                <span className={`fi ${flags[lang.code]}`}></span>
                <span>{lang.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}