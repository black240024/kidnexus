import { Link } from 'react-router-dom';
import { ArrowRight, Users, Lightbulb, Heart, Star, Sparkles, Zap, Gift } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionTitle from '../components/SectionTitle';
import ProgramCard from '../components/ProgramCard';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-teal/10 via-cyan-blue/10 to-magenta-pink/10">
      {/* Hero Section */}
<section className="bg-gradient-to-br from-midnight-navy via-vivid-purple to-magenta-pink text-white pt-16 sm:pt-20 pb-16 sm:pb-20 relative overflow-hidden">
  {/* Floating animations */}
  <div className="absolute inset-0">
    <div className="absolute top-10 left-10 animate-bounce">
      <Star className="h-6 w-6 sm:h-8 sm:w-8 text-golden-yellow" />
    </div>
    <div className="absolute top-20 right-20 animate-pulse">
      <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-sky-teal" />
    </div>
    <div className="absolute bottom-10 left-1/4 animate-bounce delay-300">
      <Heart className="h-4 w-4 sm:h-6 sm:w-6 text-magenta-pink" />
    </div>
    <div className="absolute bottom-20 right-1/3 animate-pulse delay-500">
      <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-blue" />
    </div>
    <div className="absolute top-1/2 left-20 animate-spin">
      <Gift className="h-4 w-4 sm:h-5 sm:w-5 text-golden-yellow" />
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center">
      <div className="mb-6 sm:mb-8">
        <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-bounce">
          <span className="text-2xl sm:text-4xl font-bold">🌟</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Unlocking the Power of Childhood Innovation in Kenya
        </h1>
      </div>
      <h2 className="text-lg sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200 px-4">
        Empowering children aged 3–12 to build healthier, greener, and more equitable communities—through play, design, and purpose-driven learning.
      </h2>
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center animate-fade-in delay-500 px-4">
        <Link
          to="/about"
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-sunset-orange to-golden-yellow text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
        >
          Join Us
          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </Link>
        <Link
          to="/support"
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-midnight-navy font-semibold rounded-full border-2 border-white hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
        >
          Donate Now
          <Heart className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </Link>
        <Link
          to="/programs"
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-midnight-navy transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
        >
          Explore Programs
          <Lightbulb className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* Brief About Section */}
      <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
        {/* Animated Elements Instead of Images */}
        <div className="absolute top-10 right-10 animate-pulse">
          <span className="text-4xl sm:text-6xl opacity-20">🎨</span>
        </div>
        <div className="absolute bottom-10 left-10 animate-bounce">
          <span className="text-3xl sm:text-4xl opacity-20">🧠</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in order-2 lg:order-1">
              <SectionTitle
                title={t('home.about.title')}
                centered={false}
              />
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {t('home.about.description1')}
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                {t('home.about.description2')}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-sunset-orange font-semibold hover:text-sunset-orange/80 transition-colors transform hover:scale-105 text-sm sm:text-base"
              >
                {t('home.about.learnMore')}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
            
            {/* Animated Illustration Area */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 animate-fade-in delay-300 order-1 lg:order-2">
              <div className="relative bg-gradient-to-br from-sunset-orange/20 to-magenta-pink/20 rounded-lg p-4 sm:p-8 h-32 sm:h-48 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl animate-bounce mb-2">📚</div>
                  <p className="text-xs sm:text-sm font-medium text-gray-700">Learning</p>
                </div>
                <div className="absolute top-2 right-2 animate-pulse">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-golden-yellow" />
                </div>
              </div>
              <div className="relative bg-gradient-to-br from-cyan-blue/20 to-sky-teal/20 rounded-lg p-4 sm:p-8 h-32 sm:h-48 flex items-center justify-center mt-4 sm:mt-8 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl animate-pulse mb-2">🎨</div>
                  <p className="text-xs sm:text-sm font-medium text-gray-700">Creating</p>
                </div>
                <div className="absolute top-2 left-2 animate-bounce">
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-vivid-purple" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Preview */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-sky-teal/10 to-vivid-purple/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 animate-spin">
            <span className="text-6xl sm:text-8xl opacity-10">⭐</span>
          </div>
          <div className="absolute bottom-20 right-20 animate-bounce delay-700">
            <span className="text-4xl sm:text-6xl opacity-10">🎪</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            title={t('home.programs.title')}
            subtitle={t('home.programs.subtitle')}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
  <div className="animate-fade-in">
    <ProgramCard
      title="1️⃣ KUWA Program"
      description="A bold leap in reimagining early learning. KUWA empowers children (ages 3–12) through storytelling, design-thinking, and play-based problem solving. From PILIPA Play Labs to Design for Change Studios, KUWA nurtures Kenya's next generation of community changemakers."
      ageGroup="Ages 3–12"
      impact="From Nairobi to rural counties: building grassroots problem-solvers."
      icon={<Lightbulb className="h-6 w-6 sm:h-8 sm:w-8" />}
      color="bg-gradient-to-r from-sunset-orange to-golden-yellow"
    />
  </div>

  <div className="animate-fade-in delay-200">
    <ProgramCard
      title="2️⃣ Health & Safety"
      description="Smart, scalable child health systems at the community level. From WASH to the AI-powered Paraboda Health Platform, we connect ECDEs and homes to lifesaving resources, water, and emergency care—within 10–15 minutes."
      ageGroup="Early Childhood"
      impact="Reduced absences, better health, faster emergency response."
      icon={<Zap className="h-6 w-6 sm:h-8 sm:w-8" />}
      color="bg-gradient-to-r from-cyan-blue to-sky-teal"
    />
  </div>

  <div className="animate-fade-in delay-400">
    <ProgramCard
      title="3️⃣ EcoToto Initiative"
      description="Turning waste into wonder. EcoToto transforms ECDE centers into climate-positive spaces—biogas kitchens, micro-gardens, cleantech dashboards, and hands-on EcoEd Labs for kids. A greener future, led by little hands."
      ageGroup="Schools & ECDEs"
      impact="15 centers in Phase One. Scaling to 100+ with partners."
      icon={<Sparkles className="h-6 w-6 sm:h-8 sm:w-8" />}
      color="bg-gradient-to-r from-green-400 to-emerald-600"
    />
  </div>
</div>

          <div className="text-center mt-8 sm:mt-12 animate-fade-in delay-400">
            <Link
              to="/programs"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-sunset-orange to-magenta-pink text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              {t('home.programs.exploreAll')}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-pulse">
            <span className="text-3xl sm:text-4xl opacity-20">💬</span>
          </div>
          <div className="absolute bottom-10 right-10 animate-bounce">
            <span className="text-4xl sm:text-5xl opacity-20">💖</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            title={t('home.testimonials.title')}
            subtitle={t('home.testimonials.subtitle')}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "KIDNEXUS helped me believe in myself! I learned how to solve problems in my community through the KUWA program. Now I'm teaching other kids too!",
                author: "Amina, Age 14",
                role: "KUWA Program Graduate",
                emoji: "🎓"
              },
              {
                quote: "The transformation in my daughter is incredible! She's more confident, creative, and actually excited about learning. KIDNEXUS has been a true blessing for our family.",
                author: "Grace Wanjiku",
                role: "Parent",
                emoji: "👩‍👧"
              },
              {
                quote: "KIDNEXUS brings something special to our community. Their programs don't just teach children—they inspire them to become leaders and problem-solvers.",
                author: "James Ochieng",
                role: "Community Leader",
                emoji: "🏘️"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-sky-teal/10 rounded-xl p-6 sm:p-8 shadow-md transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-golden-yellow fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <div className="text-3xl sm:text-4xl mb-4 text-center animate-bounce">{testimonial.emoji}</div>
                <blockquote className="text-gray-600 mb-6 italic text-sm sm:text-base">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-midnight-navy text-sm sm:text-base">{testimonial.author}</div>
                  <div className="text-sunset-orange text-xs sm:text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;