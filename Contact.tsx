
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Star, Sparkles, Heart, Zap, Rainbow } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
          <div className="text-6xl opacity-10">📬</div>
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
          <div className="text-5xl opacity-15">💌</div>
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-40 left-1/4"
        >
          <div className="text-4xl opacity-12">✉️</div>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 text-white relative z-10">
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
              {i % 5 === 0 && <Star className="h-5 w-5 text-yellow-200" />}
              {i % 5 === 1 && <Sparkles className="h-4 w-4 text-pink-200" />}
              {i % 5 === 2 && <Heart className="h-4 w-4 text-red-200" />}
              {i % 5 === 3 && <Zap className="h-5 w-5 text-blue-200" />}
              {i % 5 === 4 && <Rainbow className="h-4 w-4 text-green-200" />}
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
              <div className="text-8xl animate-bounce">📞</div>
            </motion.div>

            <motion.h1 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {t('contact.hero.title')}
            </motion.h1>

            <motion.p 
              className="text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t('contact.hero.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                title={t('contact.form.title')}
                subtitle={t('contact.form.subtitle')}
                centered={false}
              />
              
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6 relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Form fields with enhanced styling */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <span className="mr-2">👤</span> {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-orange-300 bg-gradient-to-r from-white to-orange-50"
                    placeholder="Your magical name ✨"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <span className="mr-2">📧</span> {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-orange-300 bg-gradient-to-r from-white to-blue-50"
                    placeholder="your.magical.email@example.com 🌟"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <span className="mr-2">🎯</span> {t('contact.form.subject')} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-orange-300 bg-gradient-to-r from-white to-purple-50"
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
                    <span className="mr-2">💬</span> {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none hover:border-orange-300 bg-gradient-to-r from-white to-pink-50"
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
                  className="w-full bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Send className="h-5 w-5 mr-2 relative z-10" />
                  <span className="relative z-10">{t('contact.form.send')}</span>
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                title={t('contact.info.title')}
                subtitle={t('contact.info.subtitle')}
                centered={false}
              />
              
              <div className="space-y-8">
                {/* Contact Details with enhanced animations */}
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: t('contact.email.title'),
                      content: "kidnexus.ke@gmail.com",
                      subtitle: t('contact.email.subtitle'),
                      color: "from-orange-100 to-pink-100",
                      iconColor: "text-orange-600"
                    },
                    {
                      icon: Phone,
                      title: t('contact.phone.title'),
                      content: "+254 725 308 302",
                      subtitle: t('contact.phone.subtitle'),
                      color: "from-teal-100 to-blue-100",
                      iconColor: "text-teal-600"
                    },
                    {
                      icon: MapPin,
                      title: t('contact.location.title'),
                      content: "Konza",
                      subtitle: t('contact.location.subtitle'),
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
                        className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mr-4 border-2 border-white shadow-lg`}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: [0, -10, 10, 0],
                          boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                        }}
                      >
                        <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.content}</p>
                        <p className="text-sm text-gray-500">{item.subtitle}</p>
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
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2 text-2xl">📱</span> {t('contact.follow.title')}
                  </h3>
                  <div className="flex space-x-4">
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
                        className={`w-12 h-12 bg-gradient-to-r ${color} rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg`}
                        viewport={{ once: true }}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Office Hours with magical styling */}
                <motion.div 
                  className="bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-100 relative overflow-hidden"
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
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center relative z-10">
                    <span className="mr-2 text-2xl">🕐</span> {t('contact.hours.title')}
                  </h3>
                  <div className="space-y-2 text-sm relative z-10">
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

      {/* Enhanced Map Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-10 left-10 opacity-10"
          >
            <div className="text-8xl">🗺️</div>
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
              title={t('contact.map.title')}
              subtitle={t('contact.map.subtitle')}
            />
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-xl overflow-hidden border-4 border-gradient-to-r from-orange-200 to-pink-200"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, boxShadow: '0 25px 50px rgba(0,0,0,0.2)' }}
            viewport={{ once: true }}
          >
            <div className="h-96 bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 flex items-center justify-center relative overflow-hidden">
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
              
              <div className="text-center relative z-10">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">KIDNEXUS Magical Office 🏢</h3>
                <p className="text-gray-600 text-lg">Konza, Machakos County</p>
                <p className="text-sm text-gray-500 mt-2 flex items-center justify-center">
                  <span className="mr-2">🗺️</span>
                  Interactive map coming soon - it'll be magical!
                  <span className="ml-2">✨</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
