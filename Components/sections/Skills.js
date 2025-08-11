/**
 * Skills Component - Technical skills showcase
 * 
 * Features:
 * - Responsive grid of skill cards
 * - Technology-specific icons from react-icons
 * - Hover effects and animations with Framer Motion
 * - Organization by categories (backend, frontend, databases, etc.)
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../providers/LanguageProvider';
import { Code, Server, Database, Terminal, Languages, Zap } from 'lucide-react';
// Simple Icons - For specific technologies
import { 
  SiSpring, 
  SiMysql, 
  SiApache, 
  SiJavascript, 
  SiHtml5, 
  SiMongodb, 
  SiPython, 
  SiMicrosoftsqlserver,
  SiGoogle,
  SiNodedotjs,
  SiMaven,
  SiMariadb
} from 'react-icons/si';

// Font Awesome - For common programming languages and tools
import { 
  FaJava,          // Java programming language
  FaMicrosoft      // Microsoft technologies (VBA)
} from 'react-icons/fa';

// DevIcons - Alternative for programming languages (not used currently, keeping for future reference)
// import { DiJava, DiPython, DiMsqlServer } from 'react-icons/di';

// Additional Simple Icons for missing technologies
import {
  SiDotnet, // .NET icon (alternative for C#)
  SiMicrosoftazure // Microsoft Azure (has C# support indicator)
} from 'react-icons/si';

// Font Awesome for automation and generic icons
import { 
  FaCog,           // Settings/automation generic icon
  FaCode,          // Generic code icon
  FaRobot          // Automation/bot icon
} from 'react-icons/fa';

const categoryIcons = {
  frontend: <Code className="w-8 h-8 mx-auto mb-4 text-accent" />,
  backend: <Server className="w-8 h-8 mx-auto mb-4 text-accent" />,
  database: <Database className="w-8 h-8 mx-auto mb-4 text-accent" />,
  tools: <Terminal className="w-8 h-8 mx-auto mb-4 text-accent" />,
  languages: <Languages className="w-8 h-8 mx-auto mb-4 text-accent" />,
  automation: <Zap className="w-8 h-8 mx-auto mb-4 text-accent" />,
  default: <Zap className="w-8 h-8 mx-auto mb-4 text-accent" />,
};

export default function Skills() {
  const { t, language } = useLanguage();
  const [skills, setSkills] = useState([]);

  // Technology icons mapping using multiple react-icons libraries
  const getTechIcon = (skillName) => {
    const iconMap = {
      // Programming Languages - Using specific icons for better recognition
      'Java': FaJava,           // Font Awesome Java icon - distinctive
      'Python': SiPython,       // Simple Icons Python - official colors
      'JavaScript': SiJavascript, // Simple Icons JavaScript - official yellow
      'C#': SiDotnet,          // .NET icon (works better than C# specific)
      
      // Backend Frameworks & Tools
      'Spring Boot': SiSpring,  // Simple Icons Spring - green official
      'JPA/Hibernate': SiSpring, // Use Spring icon (related technology)
      'Maven': SiMaven,         // Simple Icons Maven - orange
      'Swing': FaJava,          // Java icon for Swing framework
      
      // Frontend Technologies
      'HTML/CSS': SiHtml5,      // Simple Icons HTML5 - official orange
      
      // Database Technologies
      'SQL Server': SiMicrosoftsqlserver, // Microsoft SQL Server
      'MySQL': SiMysql,         // MySQL official blue/orange
      'MariaDB': SiMariadb,     // MariaDB official brown
      'MongoDB': SiMongodb,     // MongoDB official green
      
      // Automation & Productivity Tools
      'VBA': FaMicrosoft,       // Microsoft icon for VBA
      'Google Apps Script': SiGoogle, // Google official colors
      'SolidWorks Macros': FaCode, // Generic code icon for macros
      'Make': FaRobot,      // Robot icon for automation platform
      'n8n': FaRobot            // Robot icon for automation platform (unified)
    };
    
    return iconMap[skillName] || Code;
  };

  useEffect(() => {
    loadSkills();
  }, []);

  const loadSkills = async () => {
    // Technical skills data
    const skillsData = [
      { id: 1, name: 'Java', category: 'languages', proficiency: 95 },
      { id: 2, name: 'Spring Boot', category: 'backend', proficiency: 90 },
      { id: 3, name: 'JPA/Hibernate', category: 'backend', proficiency: 85 },
      { id: 4, name: 'Maven', category: 'tools', proficiency: 85 },
      { id: 5, name: 'Swing', category: 'frontend', proficiency: 80 },
      { id: 6, name: 'Python', category: 'languages', proficiency: 88 },
      { id: 7, name: 'VBA', category: 'automation', proficiency: 92 },
      { id: 8, name: 'C#', category: 'languages', proficiency: 75 },
      { id: 9, name: 'JavaScript', category: 'languages', proficiency: 85 },
      { id: 10, name: 'HTML/CSS', category: 'frontend', proficiency: 85 },
      { id: 11, name: 'SQL Server', category: 'database', proficiency: 90 },
      { id: 12, name: 'MySQL', category: 'database', proficiency: 88 },
      { id: 13, name: 'MariaDB', category: 'database', proficiency: 85 },
      { id: 14, name: 'MongoDB', category: 'database', proficiency: 75 },
      { id: 15, name: 'Google Apps Script', category: 'automation', proficiency: 85 },
      { id: 16, name: 'Make', category: 'automation', proficiency: 80 },
      { id: 17, name: 'n8n', category: 'automation', proficiency: 80 },
      { id: 18, name: 'SolidWorks Macros', category: 'automation', proficiency: 85 }
    ];
    // Sort skills by proficiency in descending order
    const sortedSkills = skillsData.sort((a, b) => b.proficiency - a.proficiency);
    setSkills(sortedSkills);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="py-24 px-6 relative bg-background overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-20 particle-background">
        <div className="absolute top-32 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '7s' }}></div>
        <div className="absolute bottom-32 left-20 w-56 h-56 bg-secondary/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-accent/10 rounded-full blur-xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '1.5s' }}></div>
        <div className="absolute top-16 left-1/4 w-32 h-32 bg-primary/8 rounded-full blur-2xl animate-pulse" 
             style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-16 right-1/2 w-44 h-44 bg-secondary/8 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '4s' }}></div>
        <div className="absolute top-2/3 left-12 w-24 h-24 bg-accent/8 rounded-full blur-lg animate-pulse" 
             style={{ animationDuration: '7s', animationDelay: '5s' }}></div>
        <div className="absolute top-8 right-8 w-20 h-20 bg-primary/6 rounded-full blur-md animate-pulse" 
             style={{ animationDuration: '9s', animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative content-layer">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.skills.title}
          </h2>
          <p className="text-xl text-text-muted">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative p-6 text-center bg-surface/50 border border-border-custom rounded-2xl transition-all duration-300 hover:bg-surface hover:border-border-hover"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10">
                {/* Technology icon */}
                <div className="mb-4 flex justify-center">
                  {React.createElement(getTechIcon(skill.name), {
                    className: "w-12 h-12 text-accent group-hover:text-primary transition-colors duration-300",
                    size: 48
                  })}
                </div>
                
                {/* Skill name */}
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors duration-300 text-center">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}