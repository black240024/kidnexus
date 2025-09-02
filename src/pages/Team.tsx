import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import TeamCard from '../components/TeamCard';
import { Star, Sparkles, Heart, Zap } from 'lucide-react';

const Team = () => {
  const [activeTab, setActiveTab] = useState('program');

  const programTeam = [
    {
      name: "Emmanuel Njihia Ndua",
      role: "Director of Technology, EdTech and Digital Transformation and co-founder 👑",
      bio: "Passionate about leveraging technology to transform education and empower communities across Kenya.",
      image: "https://i.imgur.com/FqWTS4O.jpeg"
    },
    {
      name: "Keneth Ndua Mitambo",
      role: "Program Director | Child-Cenered Design & Behavioral Strategy in Health, Climate & Enterprise ( Co-Founder ) 🎨",
      bio: "Leading innovative design solutions and sustainable practices to create lasting impact in education.",
      image: "https://i.imgur.com/zC2QsSJ.jpeg",
      linkedin: "https://ke.linkedin.com/in/kennethndua"
    },
    {
      name: "Jane Nyagah",
      role: "Technical & Community Engagement Adviser 🌍",
      bio: "Dedicated to building strong community connections and providing technical guidance for educational initiatives.",
      image: "https://i.imgur.com/I153SKC.png",
      linkedin: "https://www.linkedin.com/in/janenjokinyagah/"
    },
  ];

  const advisoryTeam = [
    {
      name: "Anne Njine",
      role: "Country Director at Tushinde Children's Trust • Play-Based Learning Specialist 📚",
      bio: "Expert in play-based learning methodologies with extensive experience in children's educational development.",
      image: "https://i.imgur.com/zhRqOOF.png",
      linkedin: "https://www.linkedin.com/in/anne-w-njine-42a08a31/"
    },
    {
      name: "Ann Rubia",
      role: "Country Director at ICRI-Africa • ECD & Inclusion Advocate 💻",
      bio: "Champion of early childhood development and inclusive education practices across Africa.",
      image: "https://i.imgur.com/LAowmdF.jpeg",
      linkedin: "https://www.linkedin.com/in/ann-rubia-16b86a65/"
    },
    {
      name: "Dr. Michael Plal Chemorei",
      role: "DBA, MPhil, MSc, MIHRM . Director - Talent & Organizational Effectiveness 🤝",
      bio: "Organizational development expert focused on talent management and building effective teams.",
      image: "https://i.imgur.com/WDjy0Ly.png",
      linkedin: "https://www.linkedin.com/in/dr-michael-plal-chemorei-dba-mphil-msc-mihrm-46753b20/"
    },
    {
      name: "Reverend Moses Anungo",
      role: "Strategic Leadership & Community Development Advisor 🙏",
      bio: "Spiritual leader and community development advocate with extensive experience in youth empowerment and social transformation.",
      image: "https://i.imgur.com/vOjZuPM.jpeg"
    },
    {
      name: "Sr. Peris Muchiri",
      role: "Manager for social enterprise innovation at Sister Blended Program (Strathmore Business) 🤝",
      bio: "Social enterprise innovation leader driving sustainable business solutions for community impact.",
      image: "https://i.imgur.com/REuXZtC.png",
      linkedin: "https://sbs.strathmore.edu/peris-muchiri/"
    },
    {
      name: "Monica Sena Kundu",
      role: "A seasoned tech lead with deep expertise in IT transformation, Salesforce, and cyber-resilience. 🤝",
      bio: "Technology transformation expert specializing in Salesforce solutions and cybersecurity frameworks.",
      image: "https://i.imgur.com/CqMzIqp.jpeg",
      linkedin: "https://www.linkedin.com/in/monica-sena-kundu-4b5a411a/"
    },
    {
      name: "Charity Muchiri",
      role: "System Administrator, marketing and communicate 🤝",
      bio: "Technical systems expert with strong marketing and communication skills driving organizational efficiency.",
      image: "https://i.imgur.com/0alGgtn.jpeg",
      linkedin: "https://www.linkedin.com/in/charity-muchiri-66756461"
    }
  ];

  const apprentices = [
    {
      name: "John Wesley Ndua",
      role: "Co-Founder & Apprentice – Social Innovation & Impact' 🎨",
      bio: "Emerging leader in social innovation, learning to create meaningful impact in communities through creative solutions.",
      image: "https://i.imgur.com/ydFnatx.jpeg"
    },
    {
      name: "James Wesley Ndua",
      role: "Co-Founder & Apprentice – UX, Creative Writing & Cybersecurity 🌍",
      bio: "Multi-talented apprentice developing skills in user experience design, creative storytelling, and cybersecurity.",
      image: "https://i.imgur.com/HTAqUH2.jpeg",
      linkedin: "https://www.linkedin.com/in/jamesndua/"
    }
  ];

  const tabs = [
    { id: 'program', label: 'Program Team', count: programTeam.length, emoji: '👥' },
    { id: 'advisory', label: 'Advisory Team', count: advisoryTeam.length, emoji: '🎯' },
    { id: 'apprentices', label: 'Apprentices', count: apprentices.length, emoji: '🌱' }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-midnight-navy to-vivid-purple text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-bounce">
            <Star className="h-8 w-8 text-golden-yellow" />
          </div>
          <div className="absolute top-20 right-20 animate-pulse">
            <Sparkles className="h-6 w-6 text-magenta-pink" />
          </div>
          <div className="absolute bottom-10 left-1/4 animate-bounce delay-300">
            <Heart className="h-6 w-6 text-magenta-pink" />
          </div>
          <div className="absolute bottom-20 right-1/3 animate-pulse delay-500">
            <Zap className="h-4 w-4 text-cyan-blue" />
          </div>
          <div className="absolute top-1/2 left-20 animate-pulse delay-700">
            <Star className="h-5 w-5 text-sky-teal" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Amazing Team 🌟</h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-200">
              Meet the passionate individuals working to transform education and empower children across Kenya! Together, we're making magic happen! ✨
            </p>
          </div>
        </div>
      </section>

      {/* Team Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 mx-2 mb-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-sunset-orange to-magenta-pink text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-sunset-orange/10 shadow-md'
                }`}
              >
                {tab.emoji} {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* Program Team */}
          {activeTab === 'program' && (
            <div className="animate-fade-in">
              <SectionTitle
                title="Program Team 👥"
                subtitle="The dedicated professionals who design and deliver our innovative programs! 🎨"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {programTeam.map((member, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                    <TeamCard {...member} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Advisory Team */}
          {activeTab === 'advisory' && (
            <div className="animate-fade-in">
              <SectionTitle
                title="Technical Advisory Team 🎯"
                subtitle="Expert advisors who provide strategic guidance and specialized knowledge! 🧠"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {advisoryTeam.map((member, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                    <TeamCard {...member} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Apprentices */}
          {activeTab === 'apprentices' && (
            <div className="animate-fade-in">
              <SectionTitle
                title="Apprentices 🌱"
                subtitle="Young professionals learning and growing with experienced mentors! 📚"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {apprentices.map((member, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                    <TeamCard {...member} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Join Our Magical Team 🚀"
            subtitle="Are you passionate about transforming education and empowering children? We're always looking for dedicated individuals to join our mission! ✨"
          />
          <div className="bg-gradient-to-r from-sunset-orange to-cyan-blue rounded-xl p-8 text-white relative overflow-hidden animate-fade-in">
            <div className="absolute top-4 right-4 animate-pulse">
              <Star className="h-6 w-6 text-golden-yellow" />
            </div>
            <div className="absolute bottom-4 left-4 animate-bounce">
              <Sparkles className="h-5 w-5 text-magenta-pink" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Open Opportunities 🌟</h3>
              <p className="text-lg mb-6 opacity-90">
                We regularly have openings for program facilitators, community coordinators, and apprenticeship positions. Come make magic with us! 🎪
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-midnight-navy font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get in Touch 💌
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
