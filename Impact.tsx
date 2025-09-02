import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import { MapPin, Award, Users, TrendingUp, Heart, Star, Target, BarChart3, Zap, CheckCircle, ArrowRight, Calendar, Globe, BookOpen, Lightbulb, Smartphone, RefreshCw, Droplet } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

const Impact = () => {
  const { t } = useLanguage();
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  const impactStats = [
    { number: "1,200+", label: t('impact.children.reached'), icon: <Users className="h-8 w-8" />, trend: "+20%", color: "from-blue-400 to-blue-600" },
    { number: "250+", label: t('impact.sessions.held'), icon: <Award className="h-8 w-8" />, trend: "+15%", color: "from-green-400 to-green-600" },
    { number: "65+", label: t('impact.communities.impacted'), icon: <MapPin className="h-8 w-8" />, trend: "+30%", color: "from-purple-400 to-purple-600" },
    { number: "98%", label: t('impact.parent.satisfaction'), icon: <Heart className="h-8 w-8" />, trend: "+3%", color: "from-pink-400 to-pink-600" }
  ];

  const programImpacts = [
    {
      program: "KUWA (Water & Environment)",
      participants: 450,
      projects: 25,
      outcomes: [
        "15 rainwater harvesting systems installed",
        "8 community gardens established",
        "200+ families with improved water access"
      ],
      color: "bg-blue-500"
    },
    {
      program: "PILIPA (Tech & Innovation)",
      participants: 380,
      projects: 18,
      outcomes: [
        "12 mobile apps developed by children",
        "6 coding clubs established",
        "150+ children learned basic programming"
      ],
      color: "bg-green-500"
    },
    {
      program: "SANAA (Arts & Creativity)",
      participants: 370,
      projects: 22,
      outcomes: [
        "20 community art exhibitions",
        "10 children's books published",
        "5 school art programs launched"
      ],
      color: "bg-purple-500"
    }
  ];

  const successStories = [
    {
      name: "Amina Hassan",
      age: 14,
      story: "After participating in the KUWA program, Amina identified the lack of clean water access in her community. She designed and implemented a rainwater harvesting system that now serves 20 families, and she's training other children to replicate the model.",
      impact: "Clean water access for 20 families + 3 replica systems",
      program: "KUWA",
      achievement: "Young Water Engineer Award 2023",
      followUp: "Now mentoring 12 younger children in water conservation projects",
      Icon: Droplet,
      iconColor: "text-blue-500",
      bgGradient: "from-blue-100 to-cyan-100"
    },
    {
      name: "Brian Kipchoge",
      age: 12,
      story: "Through PILIPA, Brian discovered his love for mathematics and problem-solving. He created a mobile app that helps farmers calculate optimal planting seasons, which is now used by over 150 local farmers and has been featured in the Kenya Tech Innovation Fair.",
      impact: "Digital tool used by 150+ farmers, 25% increase in crop yields",
      program: "PILIPA",
      achievement: "Best Youth Innovation 2023",
      followUp: "Developing a second app for livestock management",
      Icon: Smartphone,
      iconColor: "text-green-500",
      bgGradient: "from-green-100 to-emerald-100"
    },
    {
      name: "Grace Wanjiku",
      age: 16,
      story: "Grace started a peer tutoring program in her school after learning leadership skills through our programs. She has helped improve academic performance for over 80 students and established study groups in 5 neighboring schools.",
      impact: "Academic improvement for 80+ students across 5 schools",
      program: "Leadership Development",
      achievement: "Outstanding Youth Leader 2023",
      followUp: "Training to become a program facilitator",
      Icon: Users,
      iconColor: "text-yellow-500",
      bgGradient: "from-yellow-100 to-orange-100"
    },
    {
      name: "David Mutua",
      age: 13,
      story: "Inspired by our environmental focus, David launched a school recycling initiative that has diverted over 3 tons of waste from landfills, raised funds for new library books, and expanded to 8 schools in his district.",
      impact: "3+ tons waste recycled, 8 schools participating",
      program: "Environmental Leadership",
      achievement: "Green Champion Award 2023",
      followUp: "Establishing a youth environmental network",
      Icon: RefreshCw,
      iconColor: "text-green-600",
      bgGradient: "from-green-100 to-teal-100"
    }
  ];

  const locations = [
    { 
      name: "Konza", 
      children: 280, 
      projects: 18, 
      coordinates: { x: 45, y: 60 },
      programs: ["PILIPA", "KUWA"],
      highlight: "Tech Innovation Hub"
    },
    { 
      name: "Machakos Town", 
      children: 210, 
      projects: 15, 
      coordinates: { x: 40, y: 55 },
      programs: ["SANAA", "KUWA"],
      highlight: "Arts & Culture Center"
    },
    { 
      name: "Kitui County", 
      children: 180, 
      projects: 12, 
      coordinates: { x: 55, y: 50 },
      programs: ["KUWA", "PILIPA"],
      highlight: "Water Solutions Focus"
    },
    { 
      name: "Makueni County", 
      children: 150, 
      projects: 8, 
      coordinates: { x: 35, y: 65 },
      programs: ["SANAA", "Leadership"],
      highlight: "Community Leadership"
    },
    { 
      name: "Nairobi East", 
      children: 380, 
      projects: 25, 
      coordinates: { x: 30, y: 45 },
      programs: ["All Programs"],
      highlight: "Flagship Location"
    }
  ];

  const milestones = [
    { year: "2023", event: "KUWA Founded", icon: <Star className="h-5 w-5" /> },
    { year: "2024", event: "Changed to KIDNEXUS", icon: <Users className="h-5 w-5" /> },
    { year: "2025", event: "Program Expansion", description: "Launched KUWA and PILIPA programs", icon: <Target className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Enhanced Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-bounce">
            <Star className="h-12 w-12 text-yellow-400" />
          </div>
          <div className="absolute top-20 right-20 animate-pulse">
            <Heart className="h-8 w-8 text-pink-400" />
          </div>
          <div className="absolute bottom-10 left-1/4 animate-bounce delay-300">
            <Zap className="h-6 w-6 text-blue-400" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('impact.title')}
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              {t('impact.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <span className="text-lg font-bold text-purple-600">{t('impact.childCentered')}</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <span className="text-lg font-bold text-teal-600">{t('impact.communityDriven')}</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <span className="text-lg font-bold text-orange-600">{t('impact.innovationFocused')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Impact Statistics */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t('impact.glance.title')}
            subtitle={t('impact.glance.subtitle')}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-lg text-gray-600 mb-2">{stat.label}</div>
                  <div className="flex items-center justify-center text-green-600 font-semibold">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm">{stat.trend} {t('impact.thisYear')}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Program Impact Breakdown */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl mb-12">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Program Impact Breakdown 🎯</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {programImpacts.map((program, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <div className={`w-4 h-4 ${program.color} rounded-full mr-3`}></div>
                      {program.program}
                    </CardTitle>
                    <CardDescription>
                      <div className="flex justify-between text-lg font-semibold">
                        <span>{program.participants} children</span>
                        <span>{program.projects} projects</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {program.outcomes.map((outcome, outcomeIndex) => (
                        <div key={outcomeIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recognition Section */}
          <div className="bg-gradient-to-r from-orange-400 to-teal-400 rounded-3xl p-8 text-white text-center shadow-xl">
            <div className="flex justify-center items-center mb-6">
              <Award className="h-12 w-12 mr-4" />
              <h3 className="text-3xl font-bold">Awards & Recognition 🏆</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-xl mb-2">Kenya Education Innovation Award</h4>
                <p className="opacity-90">2023 • Outstanding Innovation in Child Education</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-xl mb-2">UNICEF Partnership Recognition</h4>
                <p className="opacity-90">2023 • Excellence in Child-Centered Programming</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-xl mb-2">African Innovation Foundation</h4>
                <p className="opacity-90">2024 • Best Community Impact Program</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Success Stories with Animated Icons */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t('success.stories.title')}
            subtitle={t('success.stories.subtitle')}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <Card 
                key={index} 
                className={`bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  selectedStory === index ? 'scale-105 ring-4 ring-purple-300' : 'hover:scale-102'
                }`}
                onClick={() => setSelectedStory(selectedStory === index ? null : index)}
              >
                <div className={`h-64 bg-gradient-to-br ${story.bgGradient} rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <story.Icon 
                      className={`w-24 h-24 ${story.iconColor} animate-pulse hover:animate-bounce transition-all duration-300`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-8 h-8 ${story.iconColor.replace('text-', 'bg-')} rounded-full opacity-20 animate-ping`}></div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-6 h-6 ${story.iconColor.replace('text-', 'bg-')} rounded-full opacity-30 animate-pulse`}></div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{story.name}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-orange-600 font-medium">Age {story.age}</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">{story.program}</span>
                      </div>
                    </div>
                    <div className="text-yellow-500">
                      <Award className="h-8 w-8" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{story.story}</p>
                  
                  <div className="space-y-4">
                    <div className="bg-teal-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="h-5 w-5 text-teal-600 mr-2" />
                        <span className="text-teal-800 font-semibold">{t('impact.direct')}</span>
                      </div>
                      <p className="text-teal-700">{story.impact}</p>
                    </div>
                    
                    {selectedStory === index && (
                      <div className="animate-fade-in space-y-3">
                        <div className="bg-orange-50 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <Award className="h-5 w-5 text-orange-600 mr-2" />
                            <span className="text-orange-800 font-semibold">{t('achievement')}</span>
                          </div>
                          <p className="text-orange-700">{story.achievement}</p>
                        </div>
                        
                        <div className="bg-purple-50 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <ArrowRight className="h-5 w-5 text-purple-600 mr-2" />
                            <span className="text-purple-800 font-semibold">{t('whatsNext')}</span>
                          </div>
                          <p className="text-purple-700">{story.followUp}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline of Milestones */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Journey 🛤️"
            subtitle="Key milestones in our mission to transform children's education"
          />
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 to-teal-400"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl font-bold text-purple-600">{milestone.year}</span>
                          <div className="p-2 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full text-white">
                            {milestone.icon}
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{milestone.event}</h4>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Impact Map */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Impact Across Kenya 🗺️"
            subtitle="Discover where KIDNEXUS is creating magical transformations across communities"
          />
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <div className="relative max-w-5xl mx-auto">
              <div className="relative w-full h-96 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl overflow-hidden shadow-inner">
                <div className="absolute inset-4 bg-green-400 rounded-xl opacity-80"></div>
                
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: `${location.coordinates.x}%`, top: `${location.coordinates.y}%` }}
                    onClick={() => setSelectedLocation(selectedLocation === location.name ? null : location.name)}
                  >
                    <div className="relative">
                      <div className="animate-pulse">
                        <div className="w-8 h-8 bg-orange-500 rounded-full shadow-lg group-hover:bg-orange-600 transition-colors"></div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{location.projects}</span>
                        </div>
                      </div>
                      
                      {selectedLocation === location.name && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-white rounded-xl shadow-2xl p-6 min-w-80 z-20 animate-fade-in">
                          <h4 className="font-bold text-gray-800 text-xl mb-3">{location.name}</h4>
                          <div className="space-y-2 mb-4">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Children Reached:</span>
                              <span className="font-bold text-blue-600">{location.children}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Projects Completed:</span>
                              <span className="font-bold text-green-600">{location.projects}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Active Programs:</span>
                              <span className="font-bold text-purple-600">{location.programs.join(', ')}</span>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-orange-100 to-teal-100 rounded-lg p-3">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-orange-500 mr-2" />
                              <span className="text-gray-700 font-medium">{location.highlight}</span>
                            </div>
                          </div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-white"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4 text-lg">Click on the pins to explore detailed impact information for each location</p>
                <div className="flex justify-center items-center space-x-8 text-sm">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
                    <span className="font-medium">Active Location</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span className="font-medium">Projects Count</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-medium">Special Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Future Goals */}
      <section className="py-20 bg-gradient-to-r from-teal-400 to-orange-400 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Looking Ahead 🚀"
            subtitle="Our ambitious goals for expanding impact and reaching more children across Kenya and beyond"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-5xl font-bold mb-3">5,000</div>
              <div className="text-lg opacity-90 mb-2">Children by 2025</div>
              <Progress value={24} className="h-2 bg-white/30" />
              <div className="text-sm opacity-75 mt-2">24% achieved</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-5xl font-bold mb-3">100</div>
              <div className="text-lg opacity-90 mb-2">Communities by 2025</div>
              <Progress value={65} className="h-2 bg-white/30" />
              <div className="text-sm opacity-75 mt-2">65% achieved</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-5xl font-bold mb-3">500</div>
              <div className="text-lg opacity-90 mb-2">Innovation Projects</div>
              <Progress value={16} className="h-2 bg-white/30" />
              <div className="text-sm opacity-75 mt-2">16% achieved</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-5xl font-bold mb-3">10</div>
              <div className="text-lg opacity-90 mb-2">Counties Reached</div>
              <Progress value={30} className="h-2 bg-white/30" />
              <div className="text-sm opacity-75 mt-2">3 counties active</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Regional Expansion</h3>
                <p className="opacity-90">Expanding to Uganda and Tanzania by 2026</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Digital Platform</h3>
                <p className="opacity-90">Launching online learning platform in 2024</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Train the Trainers</h3>
                <p className="opacity-90">200 community facilitators by 2025</p>
              </CardContent>
            </Card>
          </div>

          <Button
            asChild
            className="bg-white text-teal-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <a href="/support">
              Help Us Reach Our Goals ✨
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Impact;
