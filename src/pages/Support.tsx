import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Smartphone, Building2, Copy, CheckCircle, Star, Shield, Users, Handshake, GraduationCap, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

<script src="https://donorbox.org/widget.js" paypalExpress="true"></script>

interface DonationSectionProps {
  onSuccess?: () => void;
}

const DonationSection = ({ onSuccess }: DonationSectionProps) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<'volunteer' | 'partnership' | 'apprenticeship' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const { toast } = useToast();

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(label);
      toast({
        title: `${label} Copied! 📋`,
        description: "Payment details copied to clipboard",
      });
      
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Please copy the details manually",
        variant: "destructive"
      });
    }
  };

  const handleDonationSuccess = () => {
    setShowSuccess(true);
    onSuccess?.();
  };

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
          _subject: `New ${formType} Application - KIDNEXUS`
        }),
      });

      if (response.ok) {
        toast({
          title: "Application Submitted! 🎉",
          description: `Thank you for your interest in ${formType}! We'll review your application and get back to you soon.`,
        });
        
        // Reset forms
        if (formType === 'Volunteer') {
          setVolunteerForm({ name: '', email: '', phone: '', role: '', availability: '', experience: '', motivation: '' });
        } else if (formType === 'Partnership') {
          setPartnershipForm({ organizationName: '', contactName: '', email: '', phone: '', partnershipType: '', description: '', goals: '' });
        } else if (formType === 'Apprenticeship') {
          setApprenticeshipForm({ name: '', email: '', phone: '', age: '', education: '', interests: '', motivation: '' });
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

  return (
    <div className="relative">
      {/* Success Celebration */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white rounded-3xl p-8 max-w-md mx-4 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50" />
              
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-4 relative z-10"
              >
                💖
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2 relative z-10">
                Thank You, Beautiful Soul! ✨
              </h3>
              
              <p className="text-gray-600 mb-4 relative z-10">
                Your generosity will create magical moments for Kenyan children. You're not just donating - you're nurturing dreams! 🌟
              </p>
              
              <div className="flex justify-center space-x-2 relative z-10">
                {['🎨', '📚', '🌱', '💡', '🎯'].map((emoji, i) => (
                  <motion.span
                    key={i}
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                    className="text-2xl"
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sunset-orange via-magenta-pink to-vivid-purple bg-clip-text text-transparent">
              Transform Lives Through Play ✨
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              Every donation you make plants seeds of creativity, innovation, and hope in the hearts of Kenyan children. 
              Together, we're not just changing lives - we're nurturing the next generation of problem-solvers and dreamers! 💫
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span>Direct Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-magenta-pink" />
                <span>100% Goes to Programs</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-golden-yellow" />
                <span>Transparent Impact</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Payment Methods - M-Pesa and Bank Details */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
  {/* M-Pesa Payment */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-green-100"
        >
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">M-Pesa Payment 📱</h3>
            <p className="text-gray-600">Send money directly via M-Pesa</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-600 font-medium">Paybill Number</p>
                    <p className="text-2xl font-bold text-green-800">522533</p>
                  </div>
                  <Button
                    onClick={() => copyToClipboard('522533', 'Paybill Number')}
                    variant="outline"
                    size="sm"
                    className="border-green-300 text-green-700 hover:bg-green-100"
                  >
                    {copiedItem === 'Paybill Number' ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-600 font-medium">Account Number</p>
                    <p className="text-2xl font-bold text-green-800">9006955</p>
                  </div>
                  <Button
                    onClick={() => copyToClipboard('9006955', 'Account Number')}
                    variant="outline"
                    size="sm"
                    className="border-green-300 text-green-700 hover:bg-green-100"
                  >
                    {copiedItem === 'Account Number' ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-4">
              <p className="text-sm font-medium">💡 How to send:</p>
              <p className="text-sm mt-1">Go to M-Pesa → Lipa na M-Pesa → Pay Bill → Enter details → Send</p>
            </div>
          </div>
        </motion.div>

        {/* Bank Payment */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100"
        >
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Bank Transfer 🏦</h3>
            <p className="text-gray-600">Direct bank transfer to our account</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Bank Country</p>
                    <p className="text-lg font-bold text-blue-800">Kenya</p>
                  </div>
                  <Button
                    onClick={() => copyToClipboard('Kenya', 'Bank Country')}
                    variant="outline"
                    size="sm"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100"
                  >
                    {copiedItem === 'Bank Country' ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Bank Name</p>
                    <p className="text-lg font-bold text-blue-800">KCB Bank</p>
                  </div>
                  <Button
                    onClick={() => copyToClipboard('KCB Bank', 'Bank Name')}
                    variant="outline"
                    size="sm"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100"
                  >
                    {copiedItem === 'Bank Name' ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Bank Code</p>
                    <p className="text-lg font-bold text-blue-800">01308</p>
                  </div>
                  <Button
                    onClick={() => copyToClipboard('01308', 'Bank Code')}
                    variant="outline"
                    size="sm"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100"
                  >
                    {copiedItem === 'Bank Code' ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Branch Name</p>
                    <p className="text-lg font-bold text-blue-800">KCB Thika Road Mall</p>
                  </div>
                  <Button
                    onClick={() => copyToClipboard('KCB Thika Road Mall', 'Branch Name')}
                    variant="outline"
                    size="sm"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100"
                  >
                    {copiedItem === 'Branch Name' ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Swift Code/BIC</p>
                    <p className="text-lg font-bold text-blue-800">KCBLKENX</p>
                  </div>
                  <Button
                    onClick={() => copyToClipboard('KCBLKENX', 'Swift Code')}
                    variant="outline"
                    size="sm"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100"
                  >
                    {copiedItem === 'Swift Code' ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Account Number</p>
                    <p className="text-xl font-bold text-blue-800">1337979317</p>
                  </div>
                  <Button
                    onClick={() => copyToClipboard('1337979317', 'Account Number')}
                    variant="outline"
                    size="sm"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100"
                  >
                    {copiedItem === 'Account Number' ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Account Name</p>
                    <p className="text-lg font-bold text-blue-800">KIDNEXUS</p>
                  </div>
                  <Button
                    onClick={() => copyToClipboard('KIDNEXUS', 'Account Name')}
                    variant="outline"
                    size="sm"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100"
                  >
                    {copiedItem === 'Account Name' ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-4">
              <p className="text-sm font-medium">💡 Please include:</p>
              <p className="text-sm mt-1">Your name and "KIDNEXUS DONATION" in the reference</p>
            </div>
          </div>
        </motion.div>

        {/* Donorbox Widget */}
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-3xl p-4 shadow-xl border border-purple-100 flex flex-col items-center justify-center"
  >
    <div className="w-full">
      <script src="https://donorbox.org/widget.js" paypalExpress="true"></script>
      <iframe
        src="https://donorbox.org/embed/kidnexus-donation?"
        name="donorbox"
        allowPaymentRequest
        seamless
        frameBorder="0"
        scrolling="no"
        height="900px"
        width="100%"
        style={{
          maxWidth: '100%',
          minWidth: '250px',
          maxHeight: 'none',
        }}
        allow="payment"
        title="KidNexus Donation Form"
      ></iframe>
    </div>
  </motion.div>
      </div>



      {/* Call to Action */}
      <div className="text-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={handleDonationSuccess}
            className="bg-gradient-to-r from-vivid-purple to-magenta-pink hover:from-vivid-purple/90 hover:to-magenta-pink/90 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg transform transition-all duration-300"
          >
            <Heart className="h-5 w-5 mr-2" />
            I've Sent My Donation 💖
          </Button>
        </motion.div>

        <p className="text-sm text-gray-500 mt-6 max-w-2xl mx-auto">
          After sending your donation, please contact us at 
          <a href="mailto:kidnexus.ke@gmail.com" className="text-vivid-purple hover:underline ml-1">
            kidnexus.ke@gmail.com
          </a> with your transaction details so we can acknowledge your generous support.
        </p>
      </div>

      {/* Get Involved Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-midnight-navy mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-magenta-pink mr-3 animate-pulse" />
              Get Involved 💫
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to make a magical difference? Choose how you'd like to join our mission! ✨
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 'volunteer',
                icon: <Users className="h-10 w-10" />,
                title: 'Volunteer 🙋‍♀️',
                description: 'Share your skills and passion to directly impact children\'s lives through our programs.',
                color: 'from-sunset-orange to-golden-yellow',
                bgColor: 'bg-sunset-orange/10'
              },
              {
                id: 'partnership',
                icon: <Handshake className="h-10 w-10" />,
                title: 'Partnership 🤝',
                description: 'Join forces with us to create sustainable impact and expand our reach across Kenya.',
                color: 'from-cyan-blue to-sky-teal',
                bgColor: 'bg-cyan-blue/10'
              },
              {
                id: 'apprenticeship',
                icon: <GraduationCap className="h-10 w-10" />,
                title: 'Apprenticeship 🌱',
                description: 'Learn, grow, and make a difference while gaining hands-on experience with our team.',
                color: 'from-vivid-purple to-magenta-pink',
                bgColor: 'bg-vivid-purple/10'
              }
            ].map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${option.bgColor} rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-white/50 cursor-pointer`}
                viewport={{ once: true }}
                onClick={() => setActiveModal(option.id as any)}
              >
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 animate-pulse">
                  <Star className="h-5 w-5 text-golden-yellow" />
                </div>
                <div className="absolute bottom-4 left-4 animate-bounce">
                  <Heart className="h-4 w-4 text-magenta-pink" />
                </div>

                <div className={`w-20 h-20 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg animate-bounce`}>
                  {option.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-midnight-navy mb-4">{option.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                
                <Button
                  className={`bg-gradient-to-r ${option.color} text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                >
                  Apply Now 🚀
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Forms */}
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
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Volunteer Form */}
              {activeModal === 'volunteer' && (
                <div>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-sunset-orange to-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-midnight-navy mb-2">
                      Volunteer Application 🙋‍♀️
                    </h3>
                    <p className="text-gray-600">Join our magical team and help transform children's lives!</p>
                  </div>
                  
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleFormSubmit('Volunteer', volunteerForm);
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
                        <SelectItem value="facilitator">👨‍🏫 Program Facilitator</SelectItem>
                        <SelectItem value="mentor">💫 Mentor</SelectItem>
                        <SelectItem value="event-support">🎪 Event Support</SelectItem>
                        <SelectItem value="technical">💻 Technical Support</SelectItem>
                        <SelectItem value="creative">🎨 Creative Arts</SelectItem>
                        <SelectItem value="administrative">📋 Administrative</SelectItem>
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
                      className="border-sunset-orange/30 focus:border-sunset-orange min-h-[80px]"
                    />
                    <Textarea
                      placeholder="Why do you want to volunteer with KIDNEXUS? *"
                      value={volunteerForm.motivation}
                      onChange={(e) => setVolunteerForm({...volunteerForm, motivation: e.target.value})}
                      required
                      className="border-sunset-orange/30 focus:border-sunset-orange min-h-[80px]"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-sunset-orange to-golden-yellow text-white font-semibold py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Submit Application 🚀
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              )}

              {/* Partnership Form */}
              {activeModal === 'partnership' && (
                <div>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-blue to-sky-teal rounded-full flex items-center justify-center mx-auto mb-4">
                      <Handshake className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-midnight-navy mb-2">
                      Partnership Application 🤝
                    </h3>
                    <p className="text-gray-600">Let's explore how we can work together!</p>
                  </div>
                  
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleFormSubmit('Partnership', partnershipForm);
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
                        <SelectItem value="funding">💰 Funding/Sponsorship</SelectItem>
                        <SelectItem value="program">🎪 Program Implementation</SelectItem>
                        <SelectItem value="resource">📚 Resource Sharing</SelectItem>
                        <SelectItem value="technical">💻 Technical Expertise</SelectItem>
                        <SelectItem value="venue">🏢 Venue/Space Provision</SelectItem>
                        <SelectItem value="advocacy">📢 Advocacy Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea
                      placeholder="Organization Description *"
                      value={partnershipForm.description}
                      onChange={(e) => setPartnershipForm({...partnershipForm, description: e.target.value})}
                      required
                      className="border-cyan-blue/30 focus:border-cyan-blue min-h-[80px]"
                    />
                    <Textarea
                      placeholder="Partnership Goals & How We Can Work Together *"
                      value={partnershipForm.goals}
                      onChange={(e) => setPartnershipForm({...partnershipForm, goals: e.target.value})}
                      required
                      className="border-cyan-blue/30 focus:border-cyan-blue min-h-[80px]"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-blue to-sky-teal text-white font-semibold py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Submit Application 🚀
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              )}

              {/* Apprenticeship Form */}
              {activeModal === 'apprenticeship' && (
                <div>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-vivid-purple to-magenta-pink rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-midnight-navy mb-2">
                      Apprenticeship Application 🌱
                    </h3>
                    <p className="text-gray-600">Ready to learn, grow, and make a difference?</p>
                  </div>
                  
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleFormSubmit('Apprenticeship', apprenticeshipForm);
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
                      placeholder="Areas of Interest (e.g., education, technology, arts) *"
                      value={apprenticeshipForm.interests}
                      onChange={(e) => setApprenticeshipForm({...apprenticeshipForm, interests: e.target.value})}
                      required
                      className="border-vivid-purple/30 focus:border-vivid-purple min-h-[80px]"
                    />
                    <Textarea
                      placeholder="Why do you want to join our apprenticeship program? *"
                      value={apprenticeshipForm.motivation}
                      onChange={(e) => setApprenticeshipForm({...apprenticeshipForm, motivation: e.target.value})}
                      required
                      className="border-vivid-purple/30 focus:border-vivid-purple min-h-[80px]"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-vivid-purple to-magenta-pink text-white font-semibold py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Submit Application 🚀
                        </>
                      )}
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

export default DonationSection;