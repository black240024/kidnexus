import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Star, Sparkles, Heart, Target, CheckCircle, Lightbulb, Palette, BookOpen, Users2, Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import SectionTitle from '../components/SectionTitle';

const KuwaProgram = () => {
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [enrollForm, setEnrollForm] = useState({
    childName: '',
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    location: '',
    program: '',
    additionalInfo: ''
  });

  const [partnerForm, setPartnerForm] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: '',
    description: '',
    goals: ''
  });

  const handleFormSubmit = async (formType: string, formData: any) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mzzdvlba', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: formType,
          program: 'KUWA Program',
          _subject: `New ${formType} Application - KUWA Program`
        }),
      });

      if (response.ok) {
        toast({
          title: "Application Submitted! 🎉",
          description: `Thank you for your interest in the KUWA program! We'll review your application and get back to you soon.`,
        });
        
        // Reset forms
        if (formType === 'Enrollment') {
          setEnrollForm({
            childName: '', parentName: '', email: '', phone: '', childAge: '', location: '', program: '', additionalInfo: ''
          });
          setShowEnrollForm(false);
        } else if (formType === 'Partnership') {
          setPartnerForm({
            organizationName: '', contactName: '', email: '', phone: '', partnershipType: '', description: '', goals: ''
          });
          setShowPartnerForm(false);
        }
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Submission Failed 😢",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const activities = [
    {
      title: "PILIPA Play Labs (Ages 3–6)",
      description: "Storytelling, sensory exploration, and empathy building through guided play",
      icon: <Palette className="h-6 w-6" />,
      color: "from-pink-400 to-purple-500"
    },
    {
      title: "Design for Change Studios (Ages 6–12)",
      description: "Low-cost prototypes for sanitation, safety, and inclusion challenges",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Children's Design Workbook",
      description: "Co-created resource that guides children through design thinking processes",
      icon: <BookOpen className="h-6 w-6" />,
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Train-the-Trainer Program",
      description: "Design-thinking workshops for teachers, caregivers, and youth mentors",
      icon: <Users2 className="h-6 w-6" />,
      color: "from-blue-400 to-indigo-500"
    }
  ];

  const outcomes = [
    "Children become confident community designers",
    "Boosts empathy, critical thinking, and imagination",
    "Educators adopt child-centered design methodologies",
    "Inspires real-world impact from a young age",
    "Develops problem-solving and leadership skills",
    "Strengthens community connections and awareness"
  ];

  const impactStats = [
    { number: "700+", label: "Children Reached", icon: "👶" },
    { number: "15", label: "Communities", icon: "🏘️" },
    { number: "25", label: "Design Projects", icon: "🎨" },
    { number: "95%", label: "Parent Satisfaction", icon: "💖" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-green-50 to-blue-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-green-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-bounce">
            <Star className="h-8 w-8 text-yellow-200" />
          </div>
          <div className="absolute top-20 right-20 animate-pulse">
            <Sparkles className="h-6 w-6 text-green-200" />
          </div>
          <div className="absolute bottom-10 right-1/4 animate-bounce delay-300">
            <Heart className="h-6 w-6 text-pink-200" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center mb-6">
            <Link
              to="/programs"
              className="inline-flex items-center text-white hover:text-yellow-200 transition-colors mr-6"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Programs
            </Link>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.6 }}
              className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Users className="h-12 w-12 text-white" />
            </motion.div>
            
            <h1 className="text-5xl font-bold mb-6">KUWA Program 🧠</h1>
            <p className="text-xl max-w-4xl mx-auto mb-8">
              Kutunza Ubunifu wa Watoto - Nurturing Children's Creativity
            </p>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              A bold leap in how we teach, nurture, and unleash children's full potential through 
              imagination, action, and community innovation! ✨
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Empowering Young Changemakers 🌟
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                KUWA merges playful exploration with real-world innovation, empowering kids aged 3–12 
                to become changemakers in their communities. From nature play and storytelling to 
                community innovation labs, KUWA activates grassroots problem-solving.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our approach blends imagination with action, helping children develop the confidence 
                and skills to tackle real challenges in their communities while having fun and 
                learning through play.
              </p>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <Target className="h-6 w-6 text-green-600 mr-2" />
                  Key Impact
                </h3>
                <p className="text-gray-700">
                  Launched Kenya's first co-designed Children's Design Workbook and scaled 
                  play labs across urban informal settlements, reaching over 700 children.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-yellow-100 to-green-100 rounded-xl p-6 text-center transform transition-all duration-300"
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="text-4xl mb-2"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Activities */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Program Activities 🎯"
            subtitle="Discover the magical learning experiences that make KUWA special!"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden"
                viewport={{ once: true }}
              >
                <div className="absolute top-4 right-4 animate-pulse">
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${activity.color} rounded-full flex items-center justify-center mb-6 text-white`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, 0]
                  }}
                  animate={{
                    y: [0, -3, 0]
                  }}
                  transition={{ 
                    y: { duration: 2, repeat: Infinity }
                  }}
                >
                  {activity.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">{activity.title}</h3>
                <p className="text-gray-600 leading-relaxed">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Learning Outcomes 🏆"
            subtitle="What children achieve through the KUWA program"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start space-x-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 transform transition-all duration-300"
                viewport={{ once: true }}
              >
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-yellow-400 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Join KUWA? 🚀
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Help us nurture the next generation of creative thinkers and community changemakers!
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => setShowEnrollForm(true)}
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Enroll Your Child 📝
            </Button>
            <Button
              onClick={() => setShowPartnerForm(true)}
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
            >
              Partner With Us 🤝
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Enrollment Form Modal */}
      <AnimatePresence>
        {showEnrollForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowEnrollForm(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowEnrollForm(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  Enroll in KUWA Program 🧠
                </h3>
                <p className="text-gray-600">Give your child the gift of creative thinking and innovation!</p>
              </div>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit('Enrollment', enrollForm);
              }} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Child's Full Name *"
                    value={enrollForm.childName}
                    onChange={(e) => setEnrollForm({...enrollForm, childName: e.target.value})}
                    required
                    className="border-yellow-500/30 focus:border-yellow-500"
                  />
                  <Input
                    placeholder="Parent/Guardian Name *"
                    value={enrollForm.parentName}
                    onChange={(e) => setEnrollForm({...enrollForm, parentName: e.target.value})}
                    required
                    className="border-yellow-500/30 focus:border-yellow-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={enrollForm.email}
                    onChange={(e) => setEnrollForm({...enrollForm, email: e.target.value})}
                    required
                    className="border-yellow-500/30 focus:border-yellow-500"
                  />
                  <Input
                    placeholder="Phone Number *"
                    value={enrollForm.phone}
                    onChange={(e) => setEnrollForm({...enrollForm, phone: e.target.value})}
                    required
                    className="border-yellow-500/30 focus:border-yellow-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Child's Age *"
                    value={enrollForm.childAge}
                    onChange={(e) => setEnrollForm({...enrollForm, childAge: e.target.value})}
                    required
                    className="border-yellow-500/30 focus:border-yellow-500"
                  />
                  <Input
                    placeholder="Location (County/Area) *"
                    value={enrollForm.location}
                    onChange={(e) => setEnrollForm({...enrollForm, location: e.target.value})}
                    required
                    className="border-yellow-500/30 focus:border-yellow-500"
                  />
                </div>
                <Select onValueChange={(value) => setEnrollForm({...enrollForm, program: value})}>
                  <SelectTrigger className="border-yellow-500/30 focus:border-yellow-500">
                    <SelectValue placeholder="Preferred Program Component *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pilipa-labs">🎨 PILIPA Play Labs (Ages 3-6)</SelectItem>
                    <SelectItem value="design-studios">🔧 Design for Change Studios (Ages 6-12)</SelectItem>
                    <SelectItem value="full-program">🌟 Full KUWA Program</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="Additional Information (Optional)"
                  value={enrollForm.additionalInfo}
                  onChange={(e) => setEnrollForm({...enrollForm, additionalInfo: e.target.value})}
                  className="border-yellow-500/30 focus:border-yellow-500 min-h-[80px]"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-500 to-green-500 text-white font-semibold py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Enrollment 🚀
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Partnership Form Modal */}
      <AnimatePresence>
        {showPartnerForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowPartnerForm(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPartnerForm(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  Partner for KUWA Program 🤝
                </h3>
                <p className="text-gray-600">Join us in nurturing creative thinkers and innovators!</p>
              </div>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit('Partnership', partnerForm);
              }} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Organization Name *"
                    value={partnerForm.organizationName}
                    onChange={(e) => setPartnerForm({...partnerForm, organizationName: e.target.value})}
                    required
                    className="border-green-500/30 focus:border-green-500"
                  />
                  <Input
                    placeholder="Contact Name *"
                    value={partnerForm.contactName}
                    onChange={(e) => setPartnerForm({...partnerForm, contactName: e.target.value})}
                    required
                    className="border-green-500/30 focus:border-green-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({...partnerForm, email: e.target.value})}
                    required
                    className="border-green-500/30 focus:border-green-500"
                  />
                  <Input
                    placeholder="Phone Number *"
                    value={partnerForm.phone}
                    onChange={(e) => setPartnerForm({...partnerForm, phone: e.target.value})}
                    required
                    className="border-green-500/30 focus:border-green-500"
                  />
                </div>
                <Select onValueChange={(value) => setPartnerForm({...partnerForm, partnershipType: value})}>
                  <SelectTrigger className="border-green-500/30 focus:border-green-500">
                    <SelectValue placeholder="Partnership Type *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="funding">💰 Funding/Sponsorship</SelectItem>
                    <SelectItem value="implementation">🎪 Program Implementation</SelectItem>
                    <SelectItem value="training">👨‍🏫 Training & Facilitation</SelectItem>
                    <SelectItem value="resource">📚 Resource Sharing</SelectItem>
                    <SelectItem value="venue">🏢 Venue/Space Provision</SelectItem>
                    <SelectItem value="community">🏘️ Community Outreach</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="Organization Description *"
                  value={partnerForm.description}
                  onChange={(e) => setPartnerForm({...partnerForm, description: e.target.value})}
                  required
                  className="border-green-500/30 focus:border-green-500 min-h-[80px]"
                />
                <Textarea
                  placeholder="Partnership Goals & How We Can Work Together *"
                  value={partnerForm.goals}
                  onChange={(e) => setPartnerForm({...partnerForm, goals: e.target.value})}
                  required
                  className="border-green-500/30 focus:border-green-500 min-h-[80px]"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-yellow-500 text-white font-semibold py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Partnership Application 🚀
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default KuwaProgram;
