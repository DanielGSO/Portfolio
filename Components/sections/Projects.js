/**
 * Projects Component - Portfolio projects showcase
 * 
 * Features:
 * - Responsive grid of project cards
 * - Category filters (All, Completed, In Progress)
 * - Project detail modal
 * - Bilingual content (Spanish/English)
 * - Progress bars for projects in development
 * - Smooth animations with Framer Motion
 * - Links to GitHub and live versions
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useLanguage } from '../providers/LanguageProvider';

export default function Projects() {
  const { t, language } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const projectsData = [
      {
        id: 1,
        title: {
          en: 'Personal Portfolio Website',
          es: 'Portafolio Personal'
        },
        description: {
          en: 'A modern, responsive portfolio website built with Next.js featuring dark/light themes, multilingual support, and interactive animations',
          es: 'Un sitio web de portafolio moderno y responsivo construido con Next.js con temas oscuro/claro, soporte multiidioma y animaciones interactivas'
        },
        tech_stack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
        image_url: '/images/portfolio.png',
        github_url: null,
        category: 'completed',
        progress: 100
      },
      {
        id: 2,
        title: {
          en: 'Cloud Notes Application',
          es: 'Aplicación de Notas en la Nube'
        },
        description: {
          en: 'A cloud-based notes application with real-time synchronization and collaboration features',
          es: 'Una aplicación de notas en la nube con sincronización en tiempo real y funciones de colaboración'
        },
        tech_stack: ['Java', 'Spring Boot', 'Maven', 'React'],
        image_url: '/images/cloudnotes.png',
        github_url: null,
        category: 'in_progress',
        progress: 70
      },
      {
        id: 3,
        title: {
          en: 'SolidWorks Add-in',
          es: 'Complemento SolidWorks'
        },
        description: {
          en: 'A powerful add-in for SolidWorks that enhances CAD workflow and automation',
          es: 'Un potente complemento para SolidWorks que mejora el flujo de trabajo y automatización CAD'
        },
        tech_stack: ['C#', 'MVC', 'Windows Forms'],
        image_url: '/images/fastpace.png',
        github_url: null,
        category: 'in_progress',
        progress: 20
      }
    ];
    setProjects(projectsData);
  };

  const categories = [
    { key: 'all', label: { en: 'All', es: 'Todos' } },
    { key: 'completed', label: { en: 'Completed', es: 'Terminados' } },
    { key: 'in_progress', label: { en: 'In Progress', es: 'En Progreso' } }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 px-6 relative bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            {t.projects.title}
          </h2>
          <p className="text-xl text-text-muted mb-8">
            {t.projects.subtitle}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category.key
                    ? 'bg-primary text-white'
                    : 'bg-surface border border-border-custom text-text-secondary hover:bg-primary/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label[language] || category.label.en}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative backdrop-blur-lg bg-surface border border-border-custom rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  {project.image_url && (
                    <img 
                      src={project.image_url} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title?.[language] || project.title}
                  </h3>
                  <p className="text-text-muted mb-4 line-clamp-2">
                    {project.description?.[language] || project.description?.en}
                  </p>

                  {/* Progress Bar (for in-progress projects) */}
                  {project.progress && (
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-text-secondary">
                          {language === 'es' ? 'Progreso' : 'Progress'}
                        </span>
                        <span className="text-sm text-text-primary font-semibold">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-border-custom rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${project.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech_stack?.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2 px-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {language === 'es' ? 'Ver Detalles' : 'View Details'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Message for in-progress projects */}
        {filteredProjects.some(project => project.category === 'in_progress') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="max-w-2xl mx-auto p-6 backdrop-blur-lg bg-primary/10 border border-primary/20 rounded-2xl">
              <p className="text-text-secondary text-lg">
                {language === 'es' 
                  ? 'Si quieres ver el código de cómo van avanzando estos proyectos, no dudes en contactarme.'
                  : 'If you want to see the code of how these projects are progressing, don\'t hesitate to contact me.'}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full bg-white/10 border border-white/20 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProject.title?.[language] || selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg overflow-hidden">
                    {selectedProject.image_url && (
                      <img 
                        src={selectedProject.image_url} 
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <div>
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {selectedProject.description?.[language] || selectedProject.description?.en}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech_stack?.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      {selectedProject.live_url && (
                        <motion.a
                          href={selectedProject.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                          {t.projects.viewProject}
                        </motion.a>
                      )}
                      {selectedProject.github_url && (
                        <motion.a
                          href={selectedProject.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5" />
                          {t.projects.viewCode}
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}