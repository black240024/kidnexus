import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { Lightbulb, Users, Star, Sparkles, Heart, ShieldCheck, Leaf, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Programs = () => {
  const corePrograms = [
    {
      id: 'kuwa',
      slug: 'kuwa-program',
      title: "KUWA Program 🧠",
      description: "KUWA (Kutunza Ubunifu wa Watoto) merges playful exploration with real-world innovation, empowering kids aged 3–12 to become changemakers in their communities. A bold leap in how we teach, nurture, and unleash children's full potential through imagination, action, and community innovation!",
      ageGroup: "3–12 years",
      impact: "Launched Kenya's first co-designed Children's Design Workbook and scaled play labs across urban informal settlements, reaching over 700 children.",
      icon: <Users className="h-8 w-8" />,
      color: "bg-gradient-to-r from-yellow-400 to-green-500",
      bgGradient: "from-yellow-50 to-green-50"
    },
    {
      id: 'health',
      slug: 'health-safety',
      title: "Health & Safety 🛡️",
      description: "Tech meets child health: Safe water, first response, and smarter ECDE wellness systems in low-resource settings. We work at the intersection of tech, community, and child health to dismantle wellness barriers through smart, safe, and scalable care systems.",
      ageGroup: "3–8 years",
      impact: "Reduced water-related absences by 40% in ECDE centers using playful WASH programs and community-based responses.",
      icon: <ShieldCheck className="h-8 w-8" />,
      color: "bg-gradient-to-r from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50"
    },
    {
      id: 'ecototo',
      slug: 'ecototo-initiative',
      title: "EcoToto Initiative 🌱",
      description: "From waste to wonder: Clean energy, safe food, and joyful learning—powered by children, for the planet. EcoToto turns under-resourced ECDEs into green hubs of innovation where children drive environmental action and learn climate justice!",
      ageGroup: "3–8 years",
      impact: "Piloted in 6 counties, with plans to expand to 100+ ECDEs through public-private partnerships.",
      icon: <Leaf className="h-8 w-8" />,
      color: "bg-gradient-to-r from-green-400 to-lime-500",
      bgGradient: "from-green-50 to-lime-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-orange-400 to-teal-400 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-bounce">
            <Star className="h-8 w-8 text-yellow-300" />
          </div>
          <div className="absolute top-20 right-20 animate-pulse">
            <Sparkles className="h-6 w-6 text-purple-300" />
          </div>
          <div className="absolute bottom-10 left-1/4 animate-bounce delay-300">
            <Heart className="h-6 w-6 text-red-300" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.6 }}
              className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span className="text-4xl">🎪</span>
            </motion.div>
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Programs 🎪</h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-200">
              Innovative learning experiences designed to unlock every child's potential and nurture the creative thinkers and social innovators of tomorrow! ✨
            </p>
          </div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Core Programs 🌟"
            subtitle="Transformative learning experiences that empower children to become creative leaders and community changemakers"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {corePrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden relative group cursor-pointer"
                viewport={{ once: true }}
              >
                {/* Floating decorative elements */}
                <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Sparkles className="h-5 w-5 text-yellow-500" />
                  </motion.div>
                </div>

                <div className="absolute top-6 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <Star className="h-4 w-4 text-pink-500" />
                  </motion.div>
                </div>

                {/* Header section */}
                <div className={`${program.color} p-8 text-white relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                      background: [
                        "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 50% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6 backdrop-blur-sm border-2 border-white border-opacity-30"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -10, 10, 0],
                        boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                      }}
                      animate={{
                        y: [0, -3, 0]
                      }}
                      transition={{ 
                        y: { duration: 2, repeat: Infinity },
                        hover: { duration: 0.3 }
                      }}
                    >
                      {program.icon}
                    </motion.div>

                    <h3 className="text-3xl font-bold mb-3">{program.title}</h3>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white border-opacity-30">
                        👶 {program.ageGroup}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-8 relative">
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {program.description}
                  </p>

                  <div className={`bg-gradient-to-r ${program.bgGradient} rounded-2xl p-6 border-l-4 border-gradient-to-b from-orange-400 to-pink-400 relative overflow-hidden mb-6`}>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-pink-100/50"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <div className="relative z-10">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center text-lg">
                        <motion.span
                          animate={{ 
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="mr-2 text-2xl"
                        >
                          🌟
                        </motion.span>
                        Impact & Results:
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{program.impact}</p>
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <div className="text-center">
                    <Link
                      to={`/programs/${program.slug}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Approach */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Program Approach 🎯"
            subtitle="Every KIDNEXUS program is built on proven educational principles that make learning magical! ✨"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-8 w-8 text-orange-600" />,
                title: "Learning by Doing 🙌",
                description: "Children learn best through hands-on experiences. Our programs emphasize practical application over theoretical knowledge, making every lesson an adventure!",
                color: "bg-orange-100"
              },
              {
                icon: <Users className="h-8 w-8 text-teal-600" />,
                title: "Collaborative Learning 🤝",
                description: "Working together builds social skills and teaches children that the best solutions often come from diverse perspectives and teamwork!",
                color: "bg-teal-100"
              },
              {
                icon: <Heart className="h-8 w-8 text-indigo-600" />,
                title: "Child-Centered 💖",
                description: "Every child is unique and magical! Our programs adapt to individual learning styles, interests, and developmental needs to ensure every child thrives!",
                color: "bg-indigo-100"
              }
            ].map((approach, index) => (
              <motion.div 
                key={index} 
                className="text-center p-8 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in" 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 ${approach.color} rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce`} style={{ animationDelay: `${index * 300}ms` }}>
                  {approach.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-400 to-orange-400 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-pulse">
            <Sparkles className="h-8 w-8 text-yellow-300 opacity-50" />
          </div>
          <div className="absolute bottom-10 right-10 animate-bounce">
            <Star className="h-6 w-6 text-purple-300 opacity-50" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-3xl font-bold mb-6 animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Get Involved? 🚀
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 opacity-90 animate-fade-in delay-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you want to enroll your child, volunteer, or learn more about our magical programs, we'd love to hear from you! ✨
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="inline-block bg-white text-teal-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us 📞
            </Link>
            <Link
              to="/support"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-105"
            >
              Support Our Programs 💖
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;