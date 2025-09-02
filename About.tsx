
import SectionTitle from '../components/SectionTitle';
import { Target, Eye, Heart, Users, Star, Sparkles } from 'lucide-react';

const About = () => {
  const partners = [
    {
      name: "Eye Of Compassion",
      logo: "https://i.imgur.com/nKPIUWY.jpeg",
      description: "Supporting child-centered programming",
      color: "bg-blue-100"
    },
    {
      name: "SYI", 
      logo: "https://i.imgur.com/OwxYLgQ.png",
      description: "Educational innovation partnership",
      color: "bg-green-100"
    },
    {
      name: "Kuwa Innovation",
      logo: "https://i.imgur.com/LwAoGle.jpeg",
      description: "Technology and infrastructure support",
      color: "bg-purple-100"
    },
    {
      name: "lmuroot",
      logo: "https://i.imgur.com/l8vdqqe.jpeg",
      description: "Innovation methodology development", 
      color: "bg-yellow-100"
    },
    {
      name: "Ajira Yangu",
      logo: "https://i.imgur.com/xFt7uLc.jpeg",
      description: "Child protection and development",
      color: "bg-pink-100"
    },
    {
      name: "Good Market",
      logo: "https://i.imgur.com/SyGQJi3.jpeg",
      description: "Education and cultural programs",
      color: "bg-indigo-100"
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-400 to-orange-400 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-bounce">
            <Star className="h-8 w-8 text-yellow-300" />
          </div>
          <div className="absolute top-20 right-20 animate-pulse">
            <Sparkles className="h-6 w-6 text-pink-300" />
          </div>
          <div className="absolute bottom-10 left-1/4 animate-bounce delay-300">
            <Heart className="h-6 w-6 text-red-300" />
          </div>
          <div className="absolute bottom-20 right-1/3 animate-pulse delay-500">
            <Star className="h-4 w-4 text-yellow-300" />
          </div>
          <div className="absolute top-1/2 left-10 animate-spin slow">
            <span className="text-6xl">🎨</span>
          </div>
          <div className="absolute top-1/3 right-10 animate-bounce delay-1000">
            <span className="text-4xl">🚀</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">About KIDNEXUS 🌟</h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-200">
              We're on a magical mission to transform education and empower the next generation of creative thinkers and social innovators across Kenya! ✨
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 animate-pulse">
            <span className="text-8xl opacity-10">🎯</span>
          </div>
          <div className="absolute bottom-10 left-10 animate-bounce delay-700">
            <span className="text-6xl opacity-10">👁️</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-orange-50 rounded-xl p-8 transform hover:scale-105 hover:rotate-1 transition-all duration-300 animate-fade-in relative overflow-hidden">
              <div className="absolute top-2 right-2 animate-spin">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 animate-bounce">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Mission 🎯</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
To nurture creativity, emotional intelligence, and social innovation in children through child-centered programs PILIPA and KUWA, using playful, culturally relevant approaches integrated with Human-Centered Design (HCD), Artificial Intelligence (AI), and ICT tools—helping children turn ideas into solutions that matter.              </p>
            </div>
            <div className="bg-teal-50 rounded-xl p-8 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 animate-fade-in delay-200 relative overflow-hidden">
              <div className="absolute top-2 left-2 animate-pulse">
                <span className="text-3xl">✨</span>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4 animate-bounce delay-100">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Vision 👁️</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
To create a future where every Kenyan child is a confident creator, joyful learner, and empowered innovator—ready to imagine, lead, and build sustainable, positive change in their communities and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 animate-bounce delay-500">
            <span className="text-8xl opacity-10">📖</span>
          </div>
          <div className="absolute bottom-20 right-20 animate-spin slow">
            <span className="text-6xl opacity-10">💫</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            title="Our Magical Story 📖"
            subtitle="How KIDNEXUS came to be and why our work matters for children everywhere! ✨"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">From Idea to Impact 💫</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
At KIDNEXUS, we believe every child is a builder of bright ideas and bold dreams. But before there was KIDNEXUS, there was KUWA Innovations—a bold initiative launched in 2023 with a single goal: to reimagine how Kenyan children engage with learning, creativity, and leadership. Born out of a deep passion for empowering young minds, KUWA began as a grassroots vision to cultivate imagination and curiosity in early learners through play-based approaches rooted in local culture and global best practices.              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
As the vision grew, so did the movement. In December 2024, following formal registration and a renewed strategic direction, KUWA Innovations transformed into KIDNEXUS—a name reflecting our belief in interconnected learning, community-driven innovation, and the limitless potential of children. With this shift, we embraced a bolder identity and a clearer mission: to be the nexus where playful learning meets real-world impact, and where children don't just learn—they lead.              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
In 2025, we proudly launched our flagship programs—KUWA (Kutunza Ubunifu wa Watoto) and PILIPA (Play, Imagine, Learn, Inspire, Progress, Achieve). These programs are more than just educational experiences—they're joyful, inclusive ecosystems where children aged 3–12 can explore their creativity, build their confidence, and grow as problem-solvers, artists, and changemakers. Through KUWA and PILIPA, KIDNEXUS is not just teaching the future—we’re co-creating it, one brilliant young mind at a time.              </p>
            </div>
            <div className="space-y-4 animate-fade-in delay-300">
              <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-lg p-6 text-center transform hover:scale-110 hover:rotate-3 transition-all duration-300">
                <div className="text-6xl mb-4 animate-bounce">🎨</div>
                <h4 className="text-xl font-bold text-gray-800">Creative Learning</h4>
              </div>
              <div className="bg-gradient-to-r from-blue-200 to-teal-200 rounded-lg p-6 text-center transform hover:scale-110 hover:-rotate-3 transition-all duration-300">
                <div className="text-6xl mb-4 animate-spin slow">🚀</div>
                <h4 className="text-xl font-bold text-gray-800">Innovation Focus</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-pulse">
            <span className="text-8xl opacity-10">🪄</span>
          </div>
          <div className="absolute bottom-10 right-10 animate-bounce delay-1000">
            <span className="text-6xl opacity-10">💖</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            title="Our Magical Approach 🪄"
            subtitle="Child-centered innovation that puts young learners at the heart of everything we do! 💖"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in transform hover:scale-105 hover:rotate-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Child-Centered 💝</h3>
              <p className="text-gray-600 leading-relaxed">
                Every program is designed with the child's natural curiosity, interests, and developmental needs at the center. We believe children learn best when they're engaged and having fun! 🎉
              </p>
            </div>
            <div className="text-center animate-fade-in delay-200 transform hover:scale-105 hover:-rotate-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce delay-100">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Community-Based 🏘️</h3>
              <p className="text-gray-600 leading-relaxed">
                Our programs connect children with their communities, encouraging them to identify real problems and develop practical solutions that make a positive impact! 🌍
              </p>
            </div>
            <div className="text-center animate-fade-in delay-300 transform hover:scale-105 hover:rotate-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce delay-200">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation-Focused 💡</h3>
              <p className="text-gray-600 leading-relaxed">
                We encourage creative thinking, experimentation, and iterative problem-solving. Children learn that failure is part of the innovation process and persistence leads to breakthroughs! 🔬
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-spin">
            <span className="text-8xl opacity-10">🤝</span>
          </div>
          <div className="absolute bottom-10 right-10 animate-bounce delay-700">
            <span className="text-6xl opacity-10">🌟</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            title="Our Amazing Partners 🤝"
            subtitle="We work with incredible organizations that share our vision for child empowerment! 🌟"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className={`${partner.color} rounded-xl p-6 text-center transform hover:scale-105 hover:rotate-1 transition-all duration-300 animate-fade-in relative overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-2 right-2 animate-pulse">
                  <span className="text-2xl">✨</span>
                </div>
                <div className="w-20 h-20 mx-auto mb-4 rounded-lg bg-white shadow-lg flex items-center justify-center p-2 animate-bounce" style={{ animationDelay: `${index * 200}ms` }}>
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in delay-500">
            <div className="bg-white rounded-xl p-8 shadow-lg inline-block transform hover:scale-105 hover:rotate-1 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Want to Partner With Us? 🤗</h3>
              <p className="text-gray-600 mb-6">Join our mission to transform children's education across Kenya!</p>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-orange-500 to-teal-500 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Let's Partner! 🚀
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-gradient-to-r from-orange-400 to-teal-400 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-pulse">
            <Star className="h-12 w-12 text-yellow-300" />
          </div>
          <div className="absolute top-1/2 right-20 animate-bounce">
            <Sparkles className="h-8 w-8 text-pink-300" />
          </div>
          <div className="absolute bottom-10 left-1/3 animate-pulse delay-300">
            <Heart className="h-10 w-10 text-red-300" />
          </div>
          <div className="absolute top-20 left-1/2 animate-spin slow">
            <span className="text-8xl opacity-20">✨</span>
          </div>
          <div className="absolute bottom-20 right-1/4 animate-bounce delay-1000">
            <span className="text-6xl opacity-20">📊</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            title="Our Magical Impact by Numbers ✨"
            subtitle="Measuring the incredible difference we're making in children's lives! 📊"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in transform hover:scale-110 hover:rotate-3 transition-all duration-300">
              <div className="text-4xl font-bold mb-2 animate-bounce">1,000+ 🎉</div>
              <div className="text-lg opacity-90">Children Reached</div>
            </div>
            <div className="animate-fade-in delay-200 transform hover:scale-110 hover:-rotate-3 transition-all duration-300">
              <div className="text-4xl font-bold mb-2 animate-bounce delay-100">50+ 🏘️</div>
              <div className="text-lg opacity-90">Communities Served</div>
            </div>
            <div className="animate-fade-in delay-300 transform hover:scale-110 hover:rotate-3 transition-all duration-300">
              <div className="text-4xl font-bold mb-2 animate-bounce delay-200">200+ 🚀</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div className="animate-fade-in delay-500 transform hover:scale-110 hover:-rotate-3 transition-all duration-300">
              <div className="text-4xl font-bold mb-2 animate-bounce delay-300">95% ⭐</div>
              <div className="text-lg opacity-90">Parent Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
