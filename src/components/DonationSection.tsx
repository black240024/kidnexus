import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Smartphone, Building2, Copy, CheckCircle, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface DonationSectionProps {
  onSuccess?: () => void;
}

const DonationSection = ({ onSuccess }: DonationSectionProps) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
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
    </div>
  );
};

export default DonationSection;