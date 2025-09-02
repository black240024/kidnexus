
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Lock, AlertCircle, CheckCircle2, Loader2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { paymentService, PaymentRequest } from '@/services/paymentService';
import { formatCurrency, convertUSDToKES } from '@/utils/currencyUtils';

interface CardPaymentFormProps {
  amount: number;
  exchangeRate: number;
  onSuccess: () => void;
  onCancel: () => void;
}

const CardPaymentForm = ({ amount, exchangeRate, onSuccess, onCancel }: CardPaymentFormProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please check your details",
        description: "Some fields need your attention 💛",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const paymentRequest: PaymentRequest = {
        amount: amount,
        currency: 'USD',
        customerInfo: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone || undefined
        },
        description: `KIDNEXUS Donation - ${formatCurrency(amount, 'USD')}`
      };

      console.log('Submitting payment request:', paymentRequest);

      const response = await paymentService.processPayment(paymentRequest);
      
      if (response.success && response.paymentUrl) {
        toast({
          title: "Redirecting to secure payment 🔒",
          description: "Taking you to complete your payment safely...",
        });
        
        // Open payment in new tab
        window.open(response.paymentUrl, '_blank');
        
        // Show success after short delay
        setTimeout(() => {
          onSuccess();
        }, 2000);

      } else {
        throw new Error(response.error || 'Payment initiation failed');
      }

    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Error",
        description: error instanceof Error ? error.message : "Unable to process payment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CreditCard className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Complete Your Donation 💖
        </h2>
        <p className="text-gray-600">
          Your support helps build the next generation of creators!
        </p>
        
        {/* Amount Display */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 mt-4">
          <div className="text-3xl font-bold text-purple-600">
            {formatCurrency(amount, 'USD')}
          </div>
          <div className="text-sm text-gray-600">
            ≈ {formatCurrency(convertUSDToKES(amount, exchangeRate), 'KES')}
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-3">
          <Lock className="h-5 w-5 text-green-600" />
          <div>
            <p className="text-sm font-medium text-green-800">
              Secure Payment Processing 🔒
            </p>
            <p className="text-xs text-green-600">
              Powered by Pesapal with bank-level encryption
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <Input
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              placeholder="John"
              className={errors.firstName ? 'border-red-300' : ''}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.firstName}
              </p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <Input
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              placeholder="Doe"
              className={errors.lastName ? 'border-red-300' : ''}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="john@example.com"
            className={errors.email ? 'border-red-300' : ''}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number (Optional)
          </label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="+254 700 000 000"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className="flex-1"
            disabled={isLoading}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Options
          </Button>
          
          <Button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                Processing...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Proceed to Payment {formatCurrency(amount, 'USD')}
              </div>
            )}
          </Button>
        </div>
      </form>

      {/* Trust Indicators */}
      <div className="text-center mt-6 pt-6 border-t">
        <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Lock className="h-3 w-3" />
            <span>256-bit SSL</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" />
            <span>Secure Processing</span>
          </div>
          <div className="flex items-center gap-1">
            <CreditCard className="h-3 w-3" />
            <span>PCI Compliant</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardPaymentForm;
