/**
 * Portfolio Component - Main Single Page Application
 * 
 * Contains all portfolio sections and handles:
 * - Smooth scroll behavior
 * - Custom cursor effects
 * - Background decorative elements
 * - Section composition and layout
 */

import React, { useEffect } from 'react';
import Navigation from '../Components/layout/Navigation';
import Hero from '../Components/sections/Hero';
import About from '../Components/sections/About';
import Skills from '../Components/sections/Skills';
import Projects from '../Components/sections/Projects';
import Contact from '../Components/sections/Contact';

export default function Portfolio() {
  useEffect(() => {
    // Enable smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Create custom cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference';
    cursor.style.background = 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)';
    cursor.style.borderRadius = '50%';
    cursor.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Animated particles for visual enhancement */}
        <div className="absolute top-16 right-1/4 w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }} />
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }} />
        <div className="absolute top-1/3 right-16 w-1 h-1 bg-accent rounded-full animate-ping" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/4 left-20 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '2s' }} />
        <div className="absolute top-3/5 right-32 w-1 h-1 bg-secondary/60 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
}