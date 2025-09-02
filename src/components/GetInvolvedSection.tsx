import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Handshake, GraduationCap, X, Heart, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface GetInvolvedSectionProps {
  className?: string;
}

const GetInvolvedSection = ({ className = "" }: GetInvolvedSectionProps) => {
  const [activeModal, setActiveModal] = useState<'volunteer' | 'partnership' | 'apprenticeship' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    availability: '',
    experience: '',
    motivation: ''
  });

  const [partnershipForm, setPartnershipForm] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: '',
    description: '',
    goals: ''
  });

  const [apprenticeshipForm, setApprenticeshipForm] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    education: '',
    interests: '',
    motivation: ''
  });

  const handleSubmit = async (formType: string, formData: any) => {
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
          _subject: `New ${formType} Application - KIDNEXUS`
        }),
      });

      if (response.ok) {
        toast({
          title: "Application Submitted! 🎉",
          description: `Thank you for your interest in ${formType}! We'll review your application and get back to you soon.`,
        });
        
        // Reset form
        if (formType === 'Volunteer') {
          setVolunteerForm({
            name: '', email: '', phone: '', role: '', availability: '', experience: '', motivation: ''
          });
        } else if (formType === 'Partnership') {
          setPartnershipForm({
            organizationName: '', contactName: '', email: '', phone: '', partnershipType: '', description: '', goals: ''
          });
        } else if (formType === 'Apprenticeship') {
          setApprenticeshipForm({
            name: '', email: '', phone: '', age: '', education: '', interests: '', motivation: ''
          });
        }
        
        setActiveModal(null);
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

  const closeModal = () => {
    setActiveModal(null);
  };

  const getInvolvedOptions = [
    {
      id: 'volunteer',
      icon: <Users className="h-8 w-8" />,
      title: 'Volunteer 🙋‍♀️',
      description: 'Share your skills and passion to directly impact children\'s lives through our programs.',
      color: 'from-sunset-orange to-golden-yellow',
      bgColor: 'bg-sunset-orange/10'
    },
    {
      id: 'partnership',
      icon: <Handshake className="h-8 w-8" />,
      title: 'Partnership 🤝',
      description: 'Join forces with us to create sustainable impact and expand our reach across Kenya.',
      color: 'from-cyan-blue to-sky-teal',
      bgColor: 'bg-cyan-blue/10'
    },
    {
      id: 'apprenticeship',
      icon: <GraduationCap className="h-8 w-8" />,
      title: 'Apprenticeship 🌱',
      description: 'Learn, grow, and make a difference while gaining hands-on experience with our team.',
      color: 'from-vivid-purple to-magenta-pink',
      bgColor: 'bg-vivid-purple/10'
    }
  ];

  return (
    <div className={`py-16 ${className}`}>
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-midnight-navy mb-4 flex items-center justify-center">
          <Heart className="h-8 w-8 text-magenta-pink mr-3 animate-pulse" />
          Get Involved 💫
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ready to make a magical difference? Choose how you'd like to join our mission! ✨
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {getInvolvedOptions.map((option, index) => (
          <motion.div
            key={option.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
            className={`${option.bgColor} rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-white/50`}
            viewport={{ once: true }}
          >
            {/* Decorative elements */}
            <div className="absolute top-2 right-2 animate-pulse">
              <Star className="h-4 w-4 text-golden-yellow" />
            </div>
            <div className="absolute bottom-2 left-2 animate-bounce">
              <Sparkles className="h-3 w-3 text-magenta-pink" />
            </div>

            <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}>
              {option.icon}
            </div>
            
            <h4 className="text-xl font-bold text-midnight-navy mb-3">{option.title}</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
            
            <Button
              onClick={() => setActiveModal(option.id as any)}
              className={`bg-gradient-to-r ${option.color} text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
            >
              Apply Now 🚀
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Modal Overlays */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Volunteer Form */}
              {activeModal === 'volunteer' && (
                <div>
                  <h3 className="text-2xl font-bold text-midnight-navy mb-6 text-center">
                    Volunteer Application 🙋‍♀️
                  </h3>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit('Volunteer', volunteerForm);
                  }} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Full Name *"
                        value={volunteerForm.name}
                        onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})}
                        required
                        className="border-sunset-orange/30 focus:border-sunset-orange"
                      />
                      <Input
                        type="email"
                        placeholder="Email Address *"
                        value={volunteerForm.email}
                        onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
                        required
                        className="border-sunset-orange/30 focus:border-sunset-orange"
                      />
                    </div>
                    <Input
                      placeholder="Phone Number *"
                      value={volunteerForm.phone}
                      onChange={(e) => setVolunteerForm({...volunteerForm, phone: e.target.value})}
                      required
                      className="border-sunset-orange/30 focus:border-sunset-orange"
                    />
                    <Select onValueChange={(value) => setVolunteerForm({...volunteerForm, role: value})}>
                      <SelectTrigger className="border-sunset-orange/30 focus:border-sunset-orange">
                        <SelectValue placeholder="Preferred Volunteer Role *" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="facilitator">Program Facilitator</SelectItem>
                        <SelectItem value="mentor">Mentor</SelectItem>
                        <SelectItem value="event-support">Event Support</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="creative">Creative Arts</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="Availability (e.g., Weekends, Evenings) *"
                      value={volunteerForm.availability}
                      onChange={(e) => setVolunteerForm({...volunteerForm, availability: e.target.value})}
                      required
                      className="border-sunset-orange/30 focus:border-sunset-orange"
                    />
                    <Textarea
                      placeholder="Relevant Experience *"
                      value={volunteerForm.experience}
                      onChange={(e) => setVolunteerForm({...volunteerForm, experience: e.target.value})}
                      required
                      className="border-sunset-orange/30 focus:border-sunset-orange"
                    />
                    <Textarea
                      placeholder="Why do you want to volunteer with KIDNEXUS? *"
                      value={volunteerForm.motivation}
                      onChange={(e) => setVolunteerForm({...volunteerForm, motivation: e.target.value})}
                      required
                      className="border-sunset-orange/30 focus:border-sunset-orange"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-sunset-orange to-golden-yellow text-white font-semibold py-3 rounded-full"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application 🚀'}
                    </Button>
                  </form>
                </div>
              )}

              {/* Partnership Form */}
              {activeModal === 'partnership' && (
                <div>
                  <h3 className="text-2xl font-bold text-midnight-navy mb-6 text-center">
                    Partnership Application 🤝
                  </h3>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit('Partnership', partnershipForm);
                  }} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Organization Name *"
                        value={partnershipForm.organizationName}
                        onChange={(e) => setPartnershipForm({...partnershipForm, organizationName: e.target.value})}
                        required
                        className="border-cyan-blue/30 focus:border-cyan-blue"
                      />
                      <Input
                        placeholder="Contact Name *"
                        value={partnershipForm.contactName}
                        onChange={(e) => setPartnershipForm({...partnershipForm, contactName: e.target.value})}
                        required
                        className="border-cyan-blue/30 focus:border-cyan-blue"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        type="email"
                        placeholder="Email Address *"
                        value={partnershipForm.email}
                        onChange={(e) => setPartnershipForm({...partnershipForm, email: e.target.value})}
                        required
                        className="border-cyan-blue/30 focus:border-cyan-blue"
                      />
                      <Input
                        placeholder="Phone Number *"
                        value={partnershipForm.phone}
                        onChange={(e) => setPartnershipForm({...partnershipForm, phone: e.target.value})}
                        required
                        className="border-cyan-blue/30 focus:border-cyan-blue"
                      />
                    </div>
                    <Select onValueChange={(value) => setPartnershipForm({...partnershipForm, partnershipType: value})}>
                      <SelectTrigger className="border-cyan-blue/30 focus:border-cyan-blue">
                        <SelectValue placeholder="Partnership Type *" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="funding">Funding/Sponsorship</SelectItem>
                        <SelectItem value="program">Program Implementation</SelectItem>
                        <SelectItem value="resource">Resource Sharing</SelectItem>
                        <SelectItem value="technical">Technical Expertise</SelectItem>
                        <SelectItem value="venue">Venue/Space Provision</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea
                      placeholder="Organization Description *"
                      value={partnershipForm.description}
                      onChange={(e) => setPartnershipForm({...partnershipForm, description: e.target.value})}
                      required
                      className="border-cyan-blue/30 focus:border-cyan-blue"
                    />
                    <Textarea
                      placeholder="Partnership Goals *"
                      value={partnershipForm.goals}
                      onChange={(e) => setPartnershipForm({...partnershipForm, goals: e.target.value})}
                      required
                      className="border-cyan-blue/30 focus:border-cyan-blue"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-blue to-sky-teal text-white font-semibold py-3 rounded-full"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application 🚀'}
                    </Button>
                  </form>
                </div>
              )}

              {/* Apprenticeship Form */}
              {activeModal === 'apprenticeship' && (
                <div>
                  <h3 className="text-2xl font-bold text-midnight-navy mb-6 text-center">
                    Apprenticeship Application 🌱
                  </h3>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit('Apprenticeship', apprenticeshipForm);
                  }} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Full Name *"
                        value={apprenticeshipForm.name}
                        onChange={(e) => setApprenticeshipForm({...apprenticeshipForm, name: e.target.value})}
                        required
                        className="border-vivid-purple/30 focus:border-vivid-purple"
                      />
                      <Input
                        type="email"
                        placeholder="Email Address *"
                        value={apprenticeshipForm.email}
                        onChange={(e) => setApprenticeshipForm({...apprenticeshipForm, email: e.target.value})}
                        required
                        className="border-vivid-purple/30 focus:border-vivid-purple"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Phone Number *"
                        value={apprenticeshipForm.phone}
                        onChange={(e) => setApprenticeshipForm({...apprenticeshipForm, phone: e.target.value})}
                        required
                        className="border-vivid-purple/30 focus:border-vivid-purple"
                      />
                      <Input
                        placeholder="Age *"
                        value={apprenticeshipForm.age}
                        onChange={(e) => setApprenticeshipForm({...apprenticeshipForm, age: e.target.value})}
                        required
                        className="border-vivid-purple/30 focus:border-vivid-purple"
                      />
                    </div>
                    <Input
                      placeholder="Educational Background *"
                      value={apprenticeshipForm.education}
                      onChange={(e) => setApprenticeshipForm({...apprenticeshipForm, education: e.target.value})}
                      required
                      className="border-vivid-purple/30 focus:border-vivid-purple"
                    />
                    <Textarea
                      placeholder="Areas of Interest *"
                      value={apprenticeshipForm.interests}
                      onChange={(e) => setApprenticeshipForm({...apprenticeshipForm, interests: e.target.value})}
                      required
                      className="border-vivid-purple/30 focus:border-vivid-purple"
                    />
                    <Textarea
                      placeholder="Why do you want to join our apprenticeship program? *"
                      value={apprenticeshipForm.motivation}
                      onChange={(e) => setApprenticeshipForm({...apprenticeshipForm, motivation: e.target.value})}
                      required
                      className="border-vivid-purple/30 focus:border-vivid-purple"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-vivid-purple to-magenta-pink text-white font-semibold py-3 rounded-full"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application 🚀'}
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GetInvolvedSection;