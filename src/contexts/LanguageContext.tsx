
import React, { createContext, useContext } from 'react';

type LanguageContextType = {
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

type LanguageProviderProps = {
  children: React.ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const t = (key: string): string => {
    // Simple English-only translations
    const translations: Record<string, string> = {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.team': 'Team',
      'nav.programs': 'Programs',
      'nav.impact': 'Impact',
      'nav.support': 'Support Us',
      'nav.contact': 'Contact',

      // Home Page
      'home.hero.title': 'KIDNEXUS ✨',
      'home.hero.subtitle': '🌟 Nurturing Creative Thinkers and Social Innovators 🌟',
      'home.hero.description': 'Empowering children through magical, child-centered learning adventures that foster creativity, critical thinking, and social innovation across Kenya! 🎨🧠',
      'home.hero.explorePrograms': '🎪 Explore Our Programs',
      'home.hero.supportUs': '💖 Support Us',
      'home.about.title': 'Transforming Education Through Innovation 🎯',
      'home.about.description1': 'At KIDNEXUS, we believe every child has the potential to be a creative thinker and social innovator! 🌟 Our mission is to unlock this magical potential through engaging, hands-on learning experiences that prepare children for the challenges of tomorrow.',
      'home.about.description2': 'From our innovative PILIPA and KUWA programs to our community-centered approach, we\'re building a generation of young leaders who will shape Kenya\'s bright future! 🚀✨',
      'home.about.learnMore': '🔍 Learn More About Us',
      'home.programs.title': 'Our Magical Programs 🎪',
      'home.programs.subtitle': 'Innovative learning adventures designed to nurture young minds and foster creativity! ✨',
      'home.programs.pilipa.title': 'PILIPA 🎨',
      'home.programs.pilipa.description': 'PILIPA stands for Play, Imagine, Learn, Inspire, Progress, and Achieve. It\'s a joyful journey of growth where children learn through hands-on play, explore their creativity, and build confidence while having fun.',
      'home.programs.pilipa.ageGroup': '3-6 years',
      'home.programs.pilipa.impact': 'Over 500 children have participated, showing 40% improvement in creative thinking assessments! 🌟',
      'home.programs.kuwa.title': 'KUWA 🌍',
      'home.programs.kuwa.description': 'Welcome to KUWA (Kutunza Ubunifu wa Watoto) – a vibrant space for kids to explore, create, and lead! Through exciting, age-tailored adventures, every child becomes a thinker, artist, leader, and dreamer.',
      'home.programs.kuwa.ageGroup': '6-12 years',
      'home.programs.kuwa.impact': '30+ community projects launched by participants, impacting over 1,000 community members! 🚀',
      'home.programs.exploreAll': '🎪 Explore All Programs',
      'home.testimonials.title': 'What People Say 💬',
      'home.testimonials.subtitle': 'Hear from children, parents, and community members about the magical impact of KIDNEXUS! ✨',

      // Common
      'learnMore': 'Learn More',
      'getStarted': 'Get Started',
      'joinUs': 'Join Us',
      'contactUs': 'Contact Us',
    };

    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};
