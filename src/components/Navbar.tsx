import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), path: '/', emoji: '🏠' },
    { name: t('nav.about'), path: '/about', emoji: '📖' },
    { name: t('nav.team'), path: '/team', emoji: '👥' },
    { name: t('nav.programs'), path: '/programs', emoji: '🎪' },
    { name: t('nav.impact'), path: '/impact', emoji: '📊' },
    { name: t('nav.support'), path: '/support', emoji: '💖' },
    { name: t('nav.contact'), path: '/contact', emoji: '📞' },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMobileMenuOpen(false), [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className={`bg-midnight-navy/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 transition-all duration-500 border-b-2 border-sunset-orange/30 ${scrolled ? 'shadow-2xl bg-midnight-navy/90' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  className="w-8 h-8 object-contain clickable"
            <Link to="/" className="flex items-center group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0], filter: 'drop-shadow(0 0 15px rgba(247, 148, 30, 0.6))' }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex-shrink-0"
                >
                  <img 
                    src="/lovable-uploads/7838d7bc-fedc-45e8-a23a-5cdf75a4b2df.png" 
                    alt="KIDNEXUS Logo" 
                    className="w-8 h-8 object-contain"
                  />
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="h-3 w-3 text-golden-yellow" />
                  </motion.div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="ml-2 min-w-0">
                  <div className="text-lg font-bold bg-gradient-to-r from-sunset-orange to-magenta-pink bg-clip-text text-transparent whitespace-nowrap">
                    KIDNEXUS
                  </div>
                  <motion.div animate={{ y: [0, -2, 0], rotate: [0, 3, -3, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="text-xs text-sky-teal font-medium whitespace-nowrap leading-none">
                    ✨ Magic Happens
                  </motion.div>
                </motion.div>
            </Link>

            <div className="hidden lg:flex items-center justify-center flex-wrap gap-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    isActive(item.path)
                      ? 'text-white bg-gradient-to-r from-sunset-orange to-magenta-pink shadow-md'
                      : 'text-white hover:text-sunset-orange hover:bg-sunset-orange/10'
                  }`}
                >
                  <span className="mr-1">{item.emoji}</span> {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-3 flex-shrink-0">
              <div className="hidden md:flex items-center">
                <motion.a 
                  href="https://www.goodmarket.global/kidnexus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img 
                    src="https://goodmarket-assets-optimized.s3.amazonaws.com/widget/gm-logo-approved-url.jpg" 
                    alt="Good Market"
                    className="w-10 h-10 object-contain rounded-lg shadow-md"
                  />
                </motion.a>
              </div>

              <div className="lg:hidden">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-white hover:text-sunset-orange p-2 rounded-lg hover:bg-sunset-orange/10 transition-all duration-300"
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-midnight-navy border-t border-sunset-orange/30"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-white bg-gradient-to-r from-sunset-orange to-magenta-pink'
                      : 'text-white hover:text-sunset-orange hover:bg-sunset-orange/10'
                  }`}
                >
                  <span className="mr-2">{item.emoji}</span> {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;