import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Mail, MapPin, Send, Facebook, Linkedin, Star, Sparkles, Heart, Zap, Rainbow, ExternalLink, Navigation, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [mapHovered, setMapHovered] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/mzzdvlba', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("✨ Message sent successfully! We'll be in touch.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert('⚠️ Oops! Something went wrong.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-8 relative overflow-hidden">
      {/* Magical floating background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10"
        >
          <div className="text-4xl sm:text-6xl opacity-10">📬</div>
        </motion.div>
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20"
        >
          <div className="text-3xl sm:text-5xl opacity-15">💌</div>
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-40 left-1/4"
        >
          <div className="text-2xl sm:text-4xl opacity-12">✉️</div>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 text-white relative z-10">
        {/* Floating animations */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              className={`absolute ${
                i % 4 === 0 ? 'top-10' : i % 4 === 1 ? 'top-20' : i % 4 === 2 ? 'bottom-10' : 'bottom-20'
              } ${
                i % 3 === 0 ? 'left-10' : i % 3 === 1 ? 'right-20' : 'left-1/2'
              }`}
            >
              {i % 5 === 0 && <Star className="h-3 w-3 sm:h-5 sm:w-5 text-yellow-200" />}
              {i % 5 === 1 && <Sparkles className="h-2 w-2 sm:h-4 sm:w-4 text-pink-200" />}
              {i % 5 === 2 && <Heart className="h-2 w-2 sm:h-4 sm:w-4 text-red-200" />}
              {i % 5 === 3 && <Zap className="h-3 w-3 sm:h-5 sm:w-5 text-blue-200" />}
              {i % 5 === 4 && <Rainbow className="h-2 w-2 sm:h-4 sm:w-4 text-green-200" />}
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.6 }}
              className="mb-6"
            >
              <div className="text-6xl sm:text-8xl animate-bounce">📞</div>
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Get in Touch 💫
            </motion.h1>

            <motion.p 
              className="text-lg sm:text-xl max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              We'd love to hear from you! Whether you want to learn about our programs, volunteer, or partner with us - let's connect! ✨
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <SectionTitle
                title="Send Us a Message 📝"
                subtitle="We'd love to hear from you! Drop us a line and we'll get back to you soon! 💌"
                centered={false}
              />
              
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-4 sm:space-y-6 relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Form fields with enhanced styling */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <span className="mr-2">👤</span> Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-orange-300 bg-gradient-to-r from-white to-orange-50 text-sm sm:text-base"
                    placeholder="Your magical name ✨"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <span className="mr-2">📧</span> Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-orange-300 bg-gradient-to-r from-white to-blue-50 text-sm sm:text-base"
                    placeholder="your.magical.email@example.com 🌟"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <span className="mr-2">🎯</span> Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-orange-300 bg-gradient-to-r from-white to-purple-50 text-sm sm:text-base"
                  >
                    <option value="">Select a magical topic ✨</option>
                    <option value="program-enrollment">🎪 Program Enrollment</option>
                    <option value="volunteer">🙋‍♀️ Volunteer Opportunities</option>
                    <option value="partnership">🤝 Partnership Inquiry</option>
                    <option value="donation">💖 Donation Questions</option>
                    <option value="media">📺 Media & Press</option>
                    <option value="other">🌟 Other</option>
                  </select>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <span className="mr-2">💬</span> Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none hover:border-orange-300 bg-gradient-to-r from-white to-pink-50 text-sm sm:text-base"
                    placeholder="Tell us your magical ideas and how we can help! 🌈✨"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 20px 40px rgba(255,165,0,0.4)' 
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden group text-sm sm:text-base"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2 relative z-10" />
                  <span className="relative z-10">Send Message 🚀</span>
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <SectionTitle
                title="Contact Information 📞"
                subtitle="Reach out to us through any of these magical channels! ✨"
                centered={false}
              />
              
              <div className="space-y-6 sm:space-y-8">
                {/* Contact Details with enhanced animations */}
                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email Us 📧",
                      content: "kidnexus.ke@gmail.com",
                      subtitle: "We'll respond within 24 hours! 💌",
                      color: "from-orange-100 to-pink-100",
                      iconColor: "text-orange-600",
                      link: "mailto:kidnexus.ke@gmail.com"
                    },
                    {
                      icon: MapPin,
                      title: "Visit Us 📍",
                      content: "Konza, Machakos County",
                      subtitle: "Our magical headquarters! 🏢",
                      color: "from-indigo-100 to-purple-100",
                      iconColor: "text-indigo-600"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start relative"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mr-3 sm:mr-4 border-2 border-white shadow-lg flex-shrink-0`}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: [0, -10, 10, 0],
                          boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                        }}
                      >
                        <item.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${item.iconColor}`} />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                        {item.link ? (
                          <a 
                            href={item.link}
                            className="text-gray-600 hover:text-orange-600 transition-colors duration-300 break-words text-sm sm:text-base"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 text-sm sm:text-base">{item.content}</p>
                        )}
                        <p className="text-xs sm:text-sm text-gray-500">{item.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Media with enhanced styling */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2 text-xl sm:text-2xl">📱</span> Follow Us on Social Media
                  </h3>
                  <div className="flex space-x-3 sm:space-x-4">
                    {[
                      { Icon: Facebook, url: '#', color: 'from-blue-600 to-blue-700', delay: 0 },
                      { Icon: Linkedin, url: 'https://www.linkedin.com/company/kidnexus/', color: 'from-blue-700 to-blue-800', delay: 0.1 }
                    ].map(({ Icon, url, color, delay }, index) => (
                      <motion.a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay, type: "spring", bounce: 0.6 }}
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: [0, -10, 10, 0],
                          boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                        }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${color} rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg`}
                        viewport={{ once: true }}
                      >
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Office Hours with magical styling */}
                <motion.div 
                  className="bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 border-2 border-blue-100 relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.02, boxShadow: '0 15px 30px rgba(59,130,246,0.2)' }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-200/20"
                    animate={{ 
                      background: [
                        'linear-gradient(45deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1))',
                        'linear-gradient(45deg, rgba(147,51,234,0.1), rgba(236,72,153,0.1))',
                        'linear-gradient(45deg, rgba(236,72,153,0.1), rgba(59,130,246,0.1))'
                      ]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                  
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 flex items-center relative z-10">
                    <span className="mr-2 text-xl sm:text-2xl">🕐</span> Office Hours
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm relative z-10">
                    {[
                      { day: "Monday - Friday", time: "9:00 AM - 5:00 PM" },
                      { day: "Saturday", time: "10:00 AM - 2:00 PM" },
                      { day: "Sunday", time: "Closed" }
                    ].map((schedule, index) => (
                      <motion.div
                        key={index}
                        className="flex justify-between items-center p-2 rounded-lg hover:bg-white/50 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-gray-600">{schedule.day}</span>
                        <span className="text-gray-800 font-medium">{schedule.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Animated Map Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-10 left-10 opacity-10"
          >
            <div className="text-6xl sm:text-8xl">🗺️</div>
          </motion.div>
          
          {/* Floating navigation elements */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 15, -15, 0]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 right-20 opacity-20"
          >
            <Compass className="h-8 w-8 sm:h-12 sm:w-12 text-blue-500" />
          </motion.div>
          
          <motion.div
            animate={{ 
              x: [0, 30, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-20 left-20 opacity-15"
          >
            <Navigation className="h-6 w-6 sm:h-10 sm:w-10 text-green-500" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="Find Us on the Map 🗺️"
              subtitle="Visit our magical campus and see where the innovation happens! ✨"
            />
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-4 border-gradient-to-r from-orange-200 to-pink-200 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, boxShadow: '0 25px 50px rgba(0,0,0,0.2)' }}
            viewport={{ once: true }}
            onMouseEnter={() => setMapHovered(true)}
            onMouseLeave={() => setMapHovered(false)}
          >
            {/* Animated Map Container */}
            <div className="h-64 sm:h-96 bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 flex items-center justify-center relative overflow-hidden">
              {/* Animated background layers */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-300/20 to-blue-300/20"
                animate={{ 
                  background: [
                    'linear-gradient(45deg, rgba(34,197,94,0.2), rgba(59,130,246,0.2))',
                    'linear-gradient(45deg, rgba(59,130,246,0.2), rgba(147,51,234,0.2))',
                    'linear-gradient(45deg, rgba(147,51,234,0.2), rgba(34,197,94,0.2))'
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              {/* Animated grid pattern */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
                animate={{
                  backgroundPosition: ['0px 0px', '20px 20px', '0px 0px']
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Floating location markers */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${30 + (i % 2) * 20}%`
                  }}
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full shadow-lg"></div>
                </motion.div>
              ))}
              
              {/* Main location pin */}
              <div className="text-center relative z-10 px-4">
                <motion.div
                  animate={{ 
                    scale: mapHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: mapHovered ? 1 : 3, 
                    repeat: Infinity 
                  }}
                  className="relative"
                >
                  <MapPin className="h-12 w-12 sm:h-20 sm:w-20 text-green-600 mx-auto mb-4 drop-shadow-lg" />
                  
                  {/* Pulsing rings around the pin */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.8, 0, 0.8]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-12 h-12 sm:w-20 sm:h-20 border-4 border-green-400 rounded-full"></div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 0, 0.6]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <div className="w-12 h-12 sm:w-20 sm:h-20 border-4 border-blue-400 rounded-full"></div>
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  className="text-lg sm:text-2xl font-bold text-gray-800 mb-2"
                  animate={{
                    scale: mapHovered ? 1.05 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  KIDNEXUS Proposed Campus 🏢
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 text-sm sm:text-lg mb-4 sm:mb-6"
                  animate={{
                    y: mapHovered ? -2 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Konza, Machakos County
                </motion.p>
                
                {/* Interactive elements that appear on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: mapHovered ? 1 : 0.7,
                    y: mapHovered ? 0 : 10
                  }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2 sm:space-y-4"
                >
                  {/* Animated route line */}
                  <motion.div
                    className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-500"
                    animate={{
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span>📍</span>
                    <motion.div
                      className="flex space-x-1"
                      animate={{
                        x: [0, 10, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 h-1 bg-blue-400 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 1, 0.3]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.1
                          }}
                        />
                      ))}
                    </motion.div>
                    <span>🗺️</span>
                  </motion.div>
                  
                  <motion.a
                    href="https://maps.app.goo.gl/5XpSQeZo5oC4chkVA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-xs sm:text-base"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 10px 25px rgba(34,197,94,0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="mr-2"
                    >
                      🗺️
                    </motion.div>
                    View Interactive Map
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-2" />
                  </motion.a>
                </motion.div>
                
                <motion.p 
                  className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-4 flex items-center justify-center px-2"
                  animate={{
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.span 
                    className="mr-2"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨
                  </motion.span>
                  Click to explore our future magical campus in 3D!
                  <motion.span 
                    className="ml-2"
                    animate={{ 
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    ✨
                  </motion.span>
                </motion.p>
              </div>
              
              {/* Animated compass in corner */}
              <motion.div
                className="absolute top-4 right-4"
                animate={{
                  rotate: [0, 360]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Compass className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 opacity-60" />
              </motion.div>
              
              {/* Distance indicator */}
              <motion.div
                className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-xs font-medium text-gray-700"
                animate={{
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📏 60km from Nairobi
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;