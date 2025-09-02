import { Mail, MapPin, Facebook, Linkedin, Heart, Star, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { Icon: Facebook, url: '#', color: 'hover:text-cyan-blue', delay: 0 },
    { Icon: Linkedin, url: 'https://www.linkedin.com/company/kidnexus/', color: 'hover:text-cyan-blue', delay: 0.1 }
  ];

  const quickLinks = [
    { text: 'About Us', href: '/about', emoji: '📖' },
    { text: 'Programs', href: '/programs', emoji: '🎪' },
    { text: 'Our Team', href: '/team', emoji: '👥' },
    { text: 'Impact', href: '/impact', emoji: '📊' },
    { text: 'Support Us', href: '/support', emoji: '💖' }
  ];

  const contactInfo = [
    { Icon: Mail, text: 'kidnexus.ke@gmail.com', delay: '400ms', emoji: '📧' },
    { Icon: MapPin, text: 'Konza Technology City, Kenya', delay: '600ms', emoji: '📍' }
  ];

  return (
    <footer className="bg-midnight-navy text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {i % 4 === 0 && <Star className="h-3 w-3 sm:h-4 sm:w-4 text-golden-yellow opacity-20" />}
            {i % 4 === 1 && <Heart className="h-2 w-2 sm:h-3 sm:w-3 text-magenta-pink opacity-20" />}
            {i % 4 === 2 && <Sparkles className="h-2 w-2 sm:h-3 sm:w-3 text-sky-teal opacity-20" />}
            {i % 4 === 3 && <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-vivid-purple opacity-20" />}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative"
                >
                  <img 
                    src="/lovable-uploads/7838d7bc-fedc-45e8-a23a-5cdf75a4b2df.png" 
                    alt="KIDNEXUS Logo" 
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain clickable"
                  />
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="h-2 w-2 sm:h-3 sm:w-3 text-golden-yellow" />
                  </motion.div>
                </motion.div>
                <div className="ml-3">
                  <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-sunset-orange to-magenta-pink bg-clip-text text-transparent">
                    KIDNEXUS
                  </span>
                  <motion.div
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-xs text-sky-teal"
                  >
                    ✨ Unlocking the Power of Childhood Innovation in Kenya
                  </motion.div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base">
               Empowering children aged 3–12 to build healthier, greener, and more equitable communities—through play, design, and purpose-driven learning.
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block ml-2"
                >
                  ✨
                </motion.span>
              </p>
              
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map(({ Icon, url, color, delay }, index) => (
                  <motion.a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay, type: "spring", bounce: 0.6 }}
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: [0, -10, 10, 0],
                      boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-sunset-orange to-magenta-pink rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg ${color} relative overflow-hidden group`}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center text-sunset-orange">
              <motion.span 
                className="text-xl sm:text-2xl mr-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🔗
              </motion.span>
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a 
                    href={link.href} 
                    className="text-gray-300 hover:text-sunset-orange transition-all duration-300 hover:translate-x-2 inline-flex items-center space-x-2 group text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      className="text-base sm:text-lg"
                    >
                      {link.emoji}
                    </motion.span>
                    <span className="group-hover:text-sunset-orange transition-colors duration-300">
                      {link.text}
                    </span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center text-cyan-blue">
              <motion.span 
                className="text-xl sm:text-2xl mr-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📞
              </motion.span>
              Contact Us
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map(({ Icon, text, delay, emoji }, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-sunset-orange to-magenta-pink rounded-full flex items-center justify-center mr-3 shadow-lg flex-shrink-0"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                    }}
                  >
                    <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center space-x-2">
                      <motion.span
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {emoji}
                      </motion.span>
                      <span className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors duration-300 break-words">
                        {text}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-sunset-orange/30 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center space-y-3 sm:space-y-4">
            <motion.p 
              className="text-gray-300 text-xs sm:text-sm flex items-center justify-center flex-wrap gap-2"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span>© {new Date().getFullYear()} KIDNEXUS. All rights reserved. Made with</span>
              <motion.span
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-magenta-pink" />
              </motion.span>
              <span>for children's futures.</span>
              <motion.span
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </motion.p>

            {/* Personal Signature */}
            <motion.a 
              href="www.linkedin.com/in/emmanuel-ndua-5a1387372" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-sky-teal hover:text-cyan-blue hover:underline transition duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💬
              </motion.span>
              <span>— Emmanuel Njihia Ndua</span>
            </motion.a>

            {/* Good Market Logo */}
            <motion.a 
              href="https://www.goodmarket.global/kidnexus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://goodmarket-assets-optimized.s3.amazonaws.com/widget/gm-logo-approved-url.jpg" 
                width="80px" 
                height="80px" 
                alt="Good Market Logo" 
                className="rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 sm:w-[100px] sm:h-[100px] clickable"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;