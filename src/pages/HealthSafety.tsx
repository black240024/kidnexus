import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Star, Sparkles, Heart, Droplet, Smartphone, Target, CheckCircle, Activity, Zap, Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import SectionTitle from '../components/SectionTitle';

const HealthSafety = () => {
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
          program: 'Health & Safety Program',
          _subject: `New ${formType} Application - Health & Safety Program`
        }),
      });

      if (response.ok) {
        toast({
          title: "Application Submitted! 🎉",
          description: `Thank you for your interest in our Health & Safety program! We'll review your application and get back to you soon.`,
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

  const projects = [
    {
      id: 'water-wellness',
      title: "💧 Water for Wellness",
      subtitle: "Safe water points for drinking & handwashing at ECDEs",
      description: "Comprehensive water, sanitation, and hygiene solutions that create healthier learning environments for children.",
      icon: <Droplet className="h-12 w-12" />,
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      features: [
        "🚰 Safe water points for drinking & handwashing at ECDEs",
        "🧼 Hygiene behavior change through playful, age-appropriate WASH lessons",
        "🏠 Subsidized water filters for homes of enrolled children",
        "👨‍👩‍👧‍👦 Parent workshops on waterborne disease prevention"
      ],
      impact: "40%+ of child absences in low-resource ECDEs are water-related. Our work prevents illness and boosts daily attendance.",
      beneficiaries: "450+ children and families"
    },
    {
      id: 'paraboda-health',
      title: "🚲 Paraboda Health Platform",
      subtitle: "AI Meets Community Caregiving",
      description: "Paraboda is our award-winning mobile platform that turns boda boda riders into trained first responders, caregivers into empowered decision-makers, and health data into actionable insights.",
      icon: <Smartphone className="h-12 w-12" />,
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      features: [
        "🤖 AI-powered alert & transport coordination",
        "📱 USSD/SMS-compatible dashboards for low-tech environments",
        "💰 M-SUPU: Micro-savings for emergency health rides",
        "🏆 Royalty Rewards: Incentives for consistent rider participation",
        "👨‍⚕️ CHV engagement for triage and local response",
        "🏥 Integrated with county health teams & digital records"
      ],
      impact: "Built for impact, designed for scale—connecting underserved children to emergency care within 10–15 minutes.",
      beneficiaries: "380+ children in pilot sites"
    }
  ];

  const overallImpact = [
    { metric: "40%", description: "Reduction in water-related absences", icon: "💧" },
    { metric: "15", description: "ECDE centers transformed", icon: "🏫" },
    { metric: "830+", description: "Children directly benefited", icon: "👶" },
    { metric: "92%", description: "Caregiver confidence improvement", icon: "👨‍👩‍👧‍👦" }
  ];

  const healthComponents = [
    {
      title: "Water for Wellness",
      description: "Safe water access and WASH education",
      icon: "💧",
      color: "bg-blue-100"
    },
    {
      title: "Paraboda Health Platform",
      description: "AI-enabled emergency health response",
      icon: "🚲",
      color: "bg-green-100"
    },
    {
      title: "Clean Energy Solutions",
      description: "Biogas systems for healthier environments",
      icon: "⚡",
      color: "bg-yellow-100"
    },
    {
      title: "Community Health Networks",
      description: "Connecting families to health resources",
      icon: "🤝",
      color: "bg-purple-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-400 to-blue-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-bounce">
            <Star className="h-8 w-8 text-cyan-200" />
          </div>
          <div className="absolute top-20 right-20 animate-pulse">
            <Sparkles className="h-6 w-6 text-blue-200" />
          </div>
          <div className="absolute bottom-10 right-1/4 animate-bounce delay-300">
            <Heart className="h-6 w-6 text-pink-200" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center mb-6">
            <Link
              to="/programs"
              className="inline-flex items-center text-white hover:text-cyan-200 transition-colors mr-6"
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
              <ShieldCheck className="h-12 w-12 text-white" />
            </motion.div>
            
            <h1 className="text-5xl font-bold mb-6">Health & Safety Program 🛡️</h1>
            <p className="text-xl max-w-4xl mx-auto mb-8">
              Tech meets child health: Safe water, first response, and smarter ECDE wellness systems
            </p>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              We work at the intersection of tech, community, and child health to dismantle wellness 
              barriers in ECDE centers and homes. Smart, safe, and scalable care systems that work! ✨
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Health & Safety Components 🏥"
            subtitle="Comprehensive wellness solutions for children and communities"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {healthComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${component.color} rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300`}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{component.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{component.title}</h3>
                <p className="text-sm text-gray-600">{component.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Overall Impact Stats */}
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Program Impact 📊</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {overallImpact.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.metric}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Main Projects */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Health & Safety Projects 🎯"
            subtitle="Two innovative approaches to improving child health and wellness"
          />
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
                viewport={{ once: true }}
              >
                <div className={`bg-gradient-to-r ${project.color} text-white p-8`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div 
                      className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
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
                      {project.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                      <p className="text-xl opacity-90 mb-2">{project.subtitle}</p>
                      <p className="text-lg opacity-80">{project.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <h4 className="font-bold mb-2">📈 Impact</h4>
                      <p className="text-sm">{project.impact}</p>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <h4 className="font-bold mb-2">👥 Beneficiaries</h4>
                      <p className="text-sm">{project.beneficiaries}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <Target className="h-6 w-6 text-cyan-600 mr-2" />
                    Key Features & Activities
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: featureIndex * 0.1 }}
                        className={`bg-gradient-to-r ${project.bgColor} rounded-lg p-4 border border-gray-100 transform hover:scale-105 transition-all duration-300`}
                        viewport={{ once: true }}
                      >
                        <p className="text-gray-700">{feature}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => setShowEnrollForm(true)}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                    >
                      Enroll Your Child 📝
                    </Button>
                    <Button
                      onClick={() => setShowPartnerForm(true)}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                    >
                      Partner With Us 🤝
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Implementation Approach 🎯"
            subtitle="How we ensure sustainable health and safety improvements"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Community-Led Solutions",
                description: "Working with local leaders, CHVs, and caregivers to ensure solutions are culturally appropriate and sustainable.",
                icon: "🤝",
                color: "bg-blue-100"
              },
              {
                title: "Technology Integration",
                description: "Using mobile platforms, IoT sensors, and data dashboards to track progress and ensure accountability.",
                icon: "📱",
                color: "bg-green-100"
              },
              {
                title: "Child-Centered Design",
                description: "Every solution is designed with children's needs, safety, and development at the center.",
                icon: "👶",
                color: "bg-purple-100"
              }
            ].map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`${approach.color} rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300`}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{approach.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-cyan-400 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Health & Safety Mission 🚀</h2>
          <p className="text-xl mb-8 opacity-90">
            Help us create healthier, safer environments for children across Kenya!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setShowPartnerForm(true)}
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Partner With Us 🤝
            </Button>
            <Link
              to="/support"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Support Health Programs 💖
            </Link>
          </div>
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
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  Enroll in Health & Safety Program 🏥
                </h3>
                <p className="text-gray-600">Give your child access to our comprehensive health and wellness programs!</p>
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
                    className="border-cyan-500/30 focus:border-cyan-500"
                  />
                  <Input
                    placeholder="Parent/Guardian Name *"
                    value={enrollForm.parentName}
                    onChange={(e) => setEnrollForm({...enrollForm, parentName: e.target.value})}
                    required
                    className="border-cyan-500/30 focus:border-cyan-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={enrollForm.email}
                    onChange={(e) => setEnrollForm({...enrollForm, email: e.target.value})}
                    required
                    className="border-cyan-500/30 focus:border-cyan-500"
                  />
                  <Input
                    placeholder="Phone Number *"
                    value={enrollForm.phone}
                    onChange={(e) => setEnrollForm({...enrollForm, phone: e.target.value})}
                    required
                    className="border-cyan-500/30 focus:border-cyan-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Child's Age *"
                    value={enrollForm.childAge}
                    onChange={(e) => setEnrollForm({...enrollForm, childAge: e.target.value})}
                    required
                    className="border-cyan-500/30 focus:border-cyan-500"
                  />
                  <Input
                    placeholder="Location (County/Area) *"
                    value={enrollForm.location}
                    onChange={(e) => setEnrollForm({...enrollForm, location: e.target.value})}
                    required
                    className="border-cyan-500/30 focus:border-cyan-500"
                  />
                </div>
                <Select onValueChange={(value) => setEnrollForm({...enrollForm, program: value})}>
                  <SelectTrigger className="border-cyan-500/30 focus:border-cyan-500">
                    <SelectValue placeholder="Preferred Program Component *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="water-wellness">💧 Water for Wellness</SelectItem>
                    <SelectItem value="paraboda-health">🚲 Paraboda Health Platform</SelectItem>
                    <SelectItem value="both">🌟 Both Programs</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="Additional Information (Optional)"
                  value={enrollForm.additionalInfo}
                  onChange={(e) => setEnrollForm({...enrollForm, additionalInfo: e.target.value})}
                  className="border-cyan-500/30 focus:border-cyan-500 min-h-[80px]"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
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
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  Partner for Health & Safety 🤝
                </h3>
                <p className="text-gray-600">Join us in creating healthier environments for children!</p>
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
                    <SelectItem value="implementation">🏥 Program Implementation</SelectItem>
                    <SelectItem value="technical">💻 Technical Support</SelectItem>
                    <SelectItem value="infrastructure">🏗️ Infrastructure Support</SelectItem>
                    <SelectItem value="training">👨‍🏫 Training & Capacity Building</SelectItem>
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
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
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

export default HealthSafety;