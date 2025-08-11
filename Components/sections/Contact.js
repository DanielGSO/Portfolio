/**
 * Contact Component - Contact information section
 * 
 * Features:
 * - Visible contact information (email, phone, social media)
 * - Functional buttons for calling, emailing and visiting profiles
 * - Copy to clipboard buttons for email and phone
 * - Responsive layout for mobile and desktop
 * - Smooth animations with Framer Motion
 * - List of available services
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Copy, ExternalLink } from 'lucide-react';
import { useLanguage } from '../providers/LanguageProvider';

export default function Contact() {
  const { t, language } = useLanguage();

  // Function to copy to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
    });
  };

  // Contact information with visible values
  const contactInfo = [
    { 
      icon: Mail, 
      href: 'mailto:dgonzalezsabido@gmail.com', 
      label: 'Email',
      value: 'dgonzalezsabido@gmail.com',
      copyable: true
    },
    { 
      icon: Phone, 
      href: 'tel:+34640816410', 
      label: language === 'es' ? 'Teléfono' : 'Phone',
      value: '+34 640 816 410',
      copyable: true
    },
    { 
      icon: Github, 
      href: 'https://github.com/DanielGSO/Portfolio', 
      label: 'GitHub',
      value: 'DanielGSO/Portfolio',
      copyable: false
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/daniel-gonz%C3%A1lez-sabido-656130293/', 
      label: 'LinkedIn',
      value: 'Daniel González Sabido',
      copyable: false
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative bg-background overflow-hidden">
      {/* Elementos de fondo decorativos */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-16 left-16 w-36 h-36 bg-primary/10 rounded-full blur-2xl animate-pulse" 
             style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-16 right-16 w-44 h-44 bg-secondary/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2.5s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse" 
             style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
            {t.contact.title}
          </h2>
          <p className="text-xl text-text-muted">
            {language === 'es' 
              ? 'Ponte en contacto conmigo para colaborar en proyectos increíbles'
              : 'Get in touch with me to collaborate on amazing projects'
            }
          </p>
        </motion.div>

        {/* Información de contacto con valores visibles */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-surface/50 border border-border-custom hover:bg-surface hover:border-border-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {contact.label}
                    </h3>
                    <div className="text-text-secondary mb-3 break-all">
                      {contact.value}
                    </div>
                    
                    <div className="flex gap-2">
                      {/* Botón principal (abrir enlace) */}
                      <motion.a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? "_blank" : "_self"}
                        rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        {contact.href.startsWith('mailto:') ? (language === 'es' ? 'Enviar Email' : 'Send Email') :
                         contact.href.startsWith('tel:') ? (language === 'es' ? 'Llamar' : 'Call') :
                         (language === 'es' ? 'Visitar' : 'Visit')}
                      </motion.a>
                      
                      {/* Botón copiar (solo para email y teléfono) */}
                      {contact.copyable && (
                        <motion.button
                          onClick={() => copyToClipboard(contact.value)}
                          className="flex items-center gap-2 px-4 py-2 bg-surface border border-border-custom rounded-lg text-text-secondary text-sm font-medium hover:bg-surface hover:text-text-primary transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Copy className="w-4 h-4" />
                          {language === 'es' ? 'Copiar' : 'Copy'}
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Información adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-text-primary mb-4 text-center">
            {language === 'es' ? 'Disponible para proyectos de:' : 'Available for projects involving:'}
          </h3>
          <div className="grid md:grid-cols-2 gap-3 text-text-secondary">
            {language === 'es' ? (
              <>
                <div>• Desarrollo backend</div>
                <div>• Diseño de bases de datos</div>
                <div>• Automatización empresarial</div>
                <div>• Macros y scripts personalizados</div>
                <div>• Integraciones de software</div>
                <div>• APIs REST y microservicios</div>
              </>
            ) : (
              <>
                <div>• Backend development</div>
                <div>• Database design & optimization</div>
                <div>• Business process automation</div>
                <div>• Custom macros & scripts</div>
                <div>• Software integrations</div>
                <div>• REST APIs & microservices</div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}