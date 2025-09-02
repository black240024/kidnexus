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
      description: "Women Construction",
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
      <section className="py-20 bg-gradient-to-r from-teal-400 to-orange-400 text-white text-center">
        <h1 className="text-5xl font-bold mb-6">About</h1>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
  {/* Floating Emojis */}
  <div className="absolute top-0 left-0 w-full h-full">
    <div className="absolute top-10 right-10 animate-pulse">
      <span className="text-6xl opacity-10">🎯</span>
    </div>
    <div className="absolute bottom-10 left-10 animate-bounce delay-700">
      <span className="text-4xl opacity-10">👁️</span>
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
    {/* INTRODUCTION SECTION */}
    <div className="grid grid-cols-1 lg:grid-cols-1">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 transform hover:scale-105 hover:rotate-1 transition-all duration-300 animate-fade-in relative overflow-hidden h-full">
        <div className="absolute top-2 right-2 animate-spin">
          <span className="text-2xl">🌟</span>
        </div>
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 animate-bounce">
            <span className="text-white text-2xl">🚀</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Our Story 📖</h2>
        </div>
        <h3 className="text-xl font-bold text-blue-600 mb-4">
          Reimagining Childhood. Redefining Community Solutions. ✨
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          KidNexus is a child-centered innovation hub based in Nairobi, Kenya, transforming how children grow, learn, and lead—especially in informal settlements and underserved rural areas. We equip children aged 3–12 with the tools to play, design, and create local solutions in education, health, and climate resilience.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Whether it's storytelling circles, biogas-powered kitchens, or AI-powered emergency health transport, our programs are rooted in the belief that children aren't just the future—they're active changemakers today! 🌍
        </p>
      </div>
    </div>

    {/* MISSION & VISION SECTION */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Mission Section */}
      <div className="bg-orange-50 rounded-xl p-8 transform hover:scale-105 hover:rotate-1 transition-all duration-300 animate-fade-in relative overflow-hidden">
        <div className="absolute top-2 right-2 animate-spin">
          <span className="text-2xl">⭐</span>
        </div>
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
            <Target className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Our Mission 🎯</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed">
          To co-create playful, tech-enabled, and scalable solutions that empower children to thrive as creative leaders, innovators, and community problem-solvers.
        </p>
      </div>

      {/* Vision Section */}
      <div className="bg-teal-50 rounded-xl p-8 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 animate-fade-in delay-200 relative overflow-hidden">
        <div className="absolute top-2 left-2 animate-pulse">
          <span className="text-3xl">✨</span>
        </div>
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4">
            <Eye className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Our Vision 👁️</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed">
          A future where every child in Kenya—regardless of geography—has access to joyful learning, clean water, safe food, and the opportunity to shape their world.
        </p>
      </div>
    </div>
  </div>
</section>


      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Our Story"
            subtitle="From inspiration to impact"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">From Simple Idea</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
             Founded in 2024 by a team of educators, designers, technologists, and community leaders, KidNexus grew from a simple idea: What if children were treated as designers of their own destiny? Today, we're planning to launch children innovation labs in schools, launching biogas in ECDEs, and moving emergency health care through mobile tech—all designed with, and for, children/ women.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-pink-200 rounded-lg p-6 text-center">
                <div className="text-6xl mb-4">🎨</div>
                <h4 className="text-xl font-bold text-gray-800">Creative Learning</h4>
              </div>
              <div className="bg-blue-200 rounded-lg p-6 text-center">
                <div className="text-6xl mb-4">🚀</div>
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
            title="🌍 What Makes Us Different"
            subtitle="Our unique approach to child-centered innovation and community transformation! 💫"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center animate-fade-in transform hover:scale-105 hover:rotate-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-2 right-2 animate-pulse">
                <span className="text-xl">✨</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <span className="text-2xl">🧩</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Child-Led Design</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Children co-design the very solutions that impact them, from play kits to school gardens and clean energy systems.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 text-center animate-fade-in delay-100 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-2 left-2 animate-bounce">
                <span className="text-xl">💖</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce delay-100">
                <span className="text-2xl">🚲</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Health as a Right, Not a Privilege</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Through the Paraboda system, we link children and caregivers to urgent health services, hygiene tools, and clean water access.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center animate-fade-in delay-200 transform hover:scale-105 hover:rotate-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute bottom-2 right-2 animate-spin">
                <span className="text-xl">🌱</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce delay-200">
                <span className="text-2xl">🍲</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Circular, Eco-Smart ECDEs</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our EcoToto initiative transforms early childhood centers with biogas kitchens, water filters, and vertical gardens—all tracked with smart tech.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 text-center animate-fade-in delay-300 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-2 right-2 animate-pulse">
                <span className="text-xl">🎭</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce delay-300">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Play Meets Purpose</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We blend storytelling, STEM, and design thinking into learning that's fun, cultural, and locally relevant.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 text-center animate-fade-in delay-400 transform hover:scale-105 hover:rotate-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute bottom-2 left-2 animate-bounce">
                <span className="text-xl">📱</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce delay-400">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Digital Transparency</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We use IoT sensors, mobile dashboards, and real-time data to measure impact and guide scaling.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 text-center animate-fade-in delay-500 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-2 left-2 animate-pulse">
                <span className="text-xl">🤗</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce delay-500">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Community First</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our models are built with local teachers, caregivers, artisans, and youth—because solutions must last beyond projects.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-xl p-6 text-center animate-fade-in delay-600 transform hover:scale-105 hover:rotate-1 transition-all duration-300 relative overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute bottom-2 right-2 animate-spin">
                <span className="text-xl">🌍</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce delay-600">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Climate-Conscious from the Start</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Children learn eco-leadership from age 3, while our programs reduce emissions and waste through innovative clean tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Our Partners"
            subtitle="Working together to create impact"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`${partner.color} rounded-xl p-6 text-center`}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-lg bg-white shadow-lg flex items-center justify-center p-2">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
  <SectionTitle
    title="🌟 Why Partner with Us?"
    subtitle="What makes our movement irresistible"
  />
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition duration-300">
      <div className="text-5xl mb-4">📈</div>
      <h4 className="text-lg font-bold text-gray-800 mb-2">700+ Children Reached</h4>
      <p className="text-sm text-gray-600">
        Creative learning programs rolled out in pilot sites.
      </p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition duration-300">
      <div className="text-5xl mb-4">💧</div>
      <h4 className="text-lg font-bold text-gray-800 mb-2">92% Caregiver Confidence</h4>
      <p className="text-sm text-gray-600">
        Improved hygiene and wellbeing reported by families.
      </p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition duration-300">
      <div className="text-5xl mb-4">⚡</div>
      <h4 className="text-lg font-bold text-gray-800 mb-2">Real-Time Dashboards</h4>
      <p className="text-sm text-gray-600">
        Transparent giving powered by live data and smart analytics.
      </p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition duration-300">
      <div className="text-5xl mb-4">🧠</div>
      <h4 className="text-lg font-bold text-gray-800 mb-2">Built in Kenya, Ready for the World</h4>
      <p className="text-sm text-gray-600">
        Designed by Kenyan educators, engineers, and creatives. Scalable globally.
      </p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition duration-300 md:col-span-2 lg:col-span-1">
      <div className="text-5xl mb-4">🤝</div>
      <h4 className="text-lg font-bold text-gray-800 mb-2">Join Our Ecosystem</h4>
      <p className="text-sm text-gray-600">
        We co-create with CBOs, corporates, government, and global donors.
      </p>
    </div>
  </div>
</div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg inline-block">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Want to Partner?</h3>
              <p className="text-gray-600 mb-6">Join us in building brighter futures.</p>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-orange-500 to-teal-500 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg"
              >
                Let's Partner
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;