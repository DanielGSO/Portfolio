/**
 * About Component - Personal and professional timeline
 * 
 * Features:
 * - Personal description with professional background
 * - Interactive timeline with education, work, and personal milestones
 * - Status indicators for completed and ongoing items
 * - Category-based color coding and icons
 * - Responsive layout with animations
 */

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, User, CheckCircle, Clock } from 'lucide-react';
import { useLanguage } from '../providers/LanguageProvider';

export default function About() {
  const { t, language } = useLanguage();

  const getTypeIcon = (type) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-5 h-5" />;
      case 'work':
        return <Briefcase className="w-5 h-5" />;
      case 'personal':
        return <User className="w-5 h-5" />;
      default:
        return <User className="w-5 h-5" />;
    }
  };

  const getStatusIcon = (status) => {
    return status === 'completed' 
      ? <CheckCircle className="w-4 h-4 text-green-500" />
      : <Clock className="w-4 h-4 text-blue-500" />;
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'education':
        return 'from-blue-500 to-cyan-500';
      case 'work':
        return 'from-green-500 to-emerald-500';
      case 'personal':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-primary to-secondary';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" className="py-24 px-6 relative bg-background overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-30 particle-background">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" 
             style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        <div className="absolute top-10 right-1/4 w-20 h-20 bg-primary/8 rounded-full blur-lg animate-pulse" 
             style={{ animationDuration: '7s', animationDelay: '3s' }}></div>
        <div className="absolute bottom-32 left-1/2 w-36 h-36 bg-secondary/8 rounded-full blur-2xl animate-pulse" 
             style={{ animationDuration: '9s', animationDelay: '1.5s' }}></div>
        <div className="absolute top-3/4 right-16 w-28 h-28 bg-accent/8 rounded-full blur-xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative content-layer">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.about.title}
            </h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              {t.about.description}
            </p>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              {language === 'es' ? 'Mi Trayectoria' : 'Journey Timeline'}
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>
              
              {t.about.timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative flex items-center gap-4 mb-4 group"
                >
                  <motion.div
                    className={`relative z-10 w-12 h-12 rounded-full bg-gradient-to-r ${getTypeColor(item.type)} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {getTypeIcon(item.type)}
                  </motion.div>
                  <div className="flex-1 bg-surface/30 rounded-lg p-3 group-hover:bg-surface/50 transition-colors duration-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-accent font-semibold text-sm">{item.year}</span>
                      {getStatusIcon(item.status)}
                      <div className="flex gap-1 ml-auto">
                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                          item.type === 'education' ? 'bg-blue-500/20 text-blue-600' :
                          item.type === 'work' ? 'bg-green-500/20 text-green-600' :
                          'bg-purple-500/20 text-purple-600'
                        }`}>
                          {item.type === 'education' 
                            ? (language === 'es' ? 'Educación' : 'Education')
                            : item.type === 'work' 
                            ? (language === 'es' ? 'Trabajo' : 'Work') 
                            : (language === 'es' ? 'Personal' : 'Personal')}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-text-primary font-medium text-sm leading-tight">{item.event}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}