/**
 * Main Application Layout
 * 
 * This component wraps the entire application providing:
 * - Global providers (Theme and Language)
 * - Global styles and custom CSS
 * - Custom scrollbar configuration
 * - Glassmorphism and glow effects
 * - Responsive design configurations
 */

import React from 'react';
import ThemeProvider from './Components/providers/ThemeProvider';
import LanguageProvider from './Components/providers/LanguageProvider';

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-text-primary overflow-x-hidden transition-colors duration-300">
          <style jsx global>{`
            * {
              scroll-behavior: smooth;
            }
            
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            }

            .line-clamp-2 {
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }

            /* Custom scrollbar */
            ::-webkit-scrollbar {
              width: 8px;
            }
            
            ::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.1);
            }
            
            ::-webkit-scrollbar-thumb {
              background: linear-gradient(to bottom, #8b5cf6, #ec4899);
              border-radius: 4px;
            }
            
            ::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(to bottom, #7c3aed, #db2777);
            }

            /* Glassmorphism utilities */
            .glass {
              backdrop-filter: blur(16px);
              background: rgba(255, 255, 255, 0.1);
              border: 1px solid rgba(255, 255, 255, 0.2);
            }

            /* Glow effects */
            .glow-purple {
              box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
            }
            
            .glow-pink {
              box-shadow: 0 0 20px rgba(236, 72, 153, 0.3);
            }
          `}</style>
          {children}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}