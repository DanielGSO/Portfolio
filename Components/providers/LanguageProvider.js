import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills', 
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, I\'m',
      name: 'Daniel González',
      title: 'Full Stack Developer',
      subtitle: 'Specialized in Backend Development & Automation Solutions',
      cta: 'Explore My Work'
    },
    about: {
      title: 'About Me',
      description: 'I\'m a passionate full-stack developer specialized in backend development. I have expertise in Java with Spring Boot, JPA, Swing, Python, VBA, C#, JavaScript, and SQL. I create automation solutions for industrial design software and business processes. I\'m also passionate about finance and constantly monitor macroeconomic markets. I have experience with Telegram bots and I\'m deeply involved in the blockchain world, having learned about smart contracts, networks, layers, and I know Solidity development.',
      timeline: [
        { year: '2013', event: 'Created first game in Scratch (Space Invaders) at age 12', type: 'personal', status: 'completed' },
        { year: '2019', event: 'Financial Markets Course - Benowu', type: 'education', status: 'completed' },
        { year: '2019-Present', event: 'Personal Trading & Financial Analysis Project', type: 'personal', status: 'ongoing' },
        { year: '2021-2023', event: 'Technical Superior Degree in Administration & Finance - EUSA', type: 'education', status: 'completed' },
        { year: '2023', event: 'Administrative Legal Department - AQUAJET', type: 'work', status: 'completed' },
        { year: '2023-2025', event: 'Technical Superior Degree in Cross-Platform App Development - CEU', type: 'education', status: 'completed' },
        { year: '2025', event: 'Software Developer/Automation Technician - ORIGEN CAD CAM', type: 'work', status: 'completed' },
        { year: '2025-Present', event: 'Master\'s in Big Data & Business Intelligence + AI - ENEB', type: 'education', status: 'ongoing' }
      ]
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technologies I work with'
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Some things I\'ve built',
      viewProject: 'View Project',
      viewCode: 'View Code'
    },
    contact: {
      title: 'Let\'s Work Together',
      subtitle: 'Have a project in mind? Let\'s discuss!',
      name: 'Your Name',
      email: 'Your Email', 
      message: 'Your Message',
      send: 'Send Message',
      sending: 'Sending...'
    }
  },
  es: {
    nav: {
      about: 'Acerca',
      skills: 'Habilidades',
      projects: 'Proyectos', 
      contact: 'Contacto'
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Daniel González',
      title: 'Desarrollador Full Stack',
      subtitle: 'Especializado en Desarrollo Backend y Soluciones de Automatización',
      cta: 'Explora Mi Trabajo'
    },
    about: {
      title: 'Acerca de Mí',
      description: 'Soy un desarrollador full-stack apasionado especializado en desarrollo backend. Tengo experiencia en Java con Spring Boot, JPA, Swing, Python, VBA, C#, JavaScript y SQL. Creo soluciones de automatización para software de diseño industrial y procesos empresariales. También soy un apasionado de las finanzas, constantemente pendiente del mercado macroeconómico. Tengo experiencia con bots de Telegram y estoy muy metido en el mundo blockchain, habiendo aprendido sobre contratos inteligentes, redes, layers y sé desarrollo en Solidity.',
      timeline: [
        { year: '2013', event: 'Creé mi primer juego en Scratch (Space Invaders) a los 12 años', type: 'personal', status: 'completed' },
        { year: '2019', event: 'Curso en Mercados Financieros - Benowu', type: 'education', status: 'completed' },
        { year: '2019-Presente', event: 'Proyecto Personal de Trading y Análisis Financiero', type: 'personal', status: 'ongoing' },
        { year: '2021-2023', event: 'Técnico Superior en Administración y Finanzas - EUSA', type: 'education', status: 'completed' },
        { year: '2023', event: 'Administrativo Departamento Jurídico - AQUAJET', type: 'work', status: 'completed' },
        { year: '2023-2025', event: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma - CEU', type: 'education', status: 'completed' },
        { year: '2025', event: 'Desarrollador Software/Técnico Automatización - ORIGEN CAD CAM', type: 'work', status: 'completed' },
        { year: '2025-Presente', event: 'Máster en Big Data y Business Intelligence + IA - ENEB', type: 'education', status: 'ongoing' }
      ]
    },
    skills: {
      title: 'Habilidades Técnicas',
      subtitle: 'Tecnologías con las que trabajo'
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Algunas cosas que he construido',
      viewProject: 'Ver Proyecto',
      viewCode: 'Ver Código'
    },
    contact: {
      title: 'Trabajemos Juntos',
      subtitle: '¿Tienes un proyecto en mente? ¡Hablemos!',
      name: 'Tu Nombre',
      email: 'Tu Email',
      message: 'Tu Mensaje', 
      send: 'Enviar Mensaje',
      sending: 'Enviando...'
    }
  }
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') || 'en';
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}