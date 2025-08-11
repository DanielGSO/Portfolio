/**
 * Theme Provider Component
 * 
 * Provides theme context throughout the application with support for:
 * - Dark/Light mode switching
 * - Persistent theme preference using localStorage
 * - SSR-safe implementation with proper hydration
 * - Dynamic CSS custom properties switching
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create theme context for global state management
const ThemeContext = createContext();

/**
 * Custom hook to consume theme context
 * @returns {Object} Theme state and toggle function
 * @throws {Error} If used outside of ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

/**
 * Theme Provider Component
 * 
 * Manages global theme state with persistence and SSR compatibility.
 * Automatically applies theme to document root for CSS custom properties.
 */
export default function ThemeProvider({ children }) {
  // Default to dark theme
  const [theme, setTheme] = useState('dark');

  // Initialize theme from localStorage on client-side hydration
  useEffect(() => {
    // Check if we're on the client side to avoid SSR issues
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'dark';
      setTheme(savedTheme);
      // Apply theme to document for CSS custom properties
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  /**
   * Toggle theme between light and dark modes
   */
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Ensure we're on client side before accessing localStorage/DOM
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}