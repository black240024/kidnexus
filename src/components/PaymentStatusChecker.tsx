
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { paymentService } from '@/services/paymentService';
import { useToast } from '@/hooks/use-toast';

const PaymentStatusChecker = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'checking' | 'success' | 'failed' | 'cancelled'>('checking');
  const [paymentDetails, setPaymentDetails] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    const checkPaymentStatus = async () => {
      const paymentParam = searchParams.get('payment');
      const transactionId = searchParams.get('transactionId');
      
      if (paymentParam === 'success') {
        try {
          // If we have a transaction ID, check the status
          if (transactionId) {
            const statusResponse = await paymentService.checkPaymentStatus(transactionId);
            setPaymentDetails(statusResponse);
            setStatus(statusResponse.status === 'completed' ? 'success' : 'failed');
          } else {
            // Assume success if redirected with success parameter
            setStatus('success');
          }

          toast({
            title: "Payment Status Updated",
            description: "Thank you for your generous donation! 💖",
          });

        } catch (error) {
          console.error('Error checking payment status:', error);
          setStatus('failed');
          
          toast({
            title: "Status Check Failed",
            description: "We'll verify your payment and contact you if needed.",
            variant: "destructive"
          });
        }
      } else if (paymentParam === 'cancelled') {
        setStatus('cancelled');
      }
    };

    if (searchParams.has('payment')) {
      checkPaymentStatus();
    }
  }, [searchParams, toast]);

  if (!searchParams.has('payment')) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-3xl p-8 max-w-md mx-4 text-center relative overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50" />
        
        <div className="relative z-10">
          {status === 'checking' && (
            <>
              <Loader2 className="h-16 w-16 text-purple-600 animate-spin mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Checking Payment Status...
              </h3>
              <p className="text-gray-600">
                Please wait while we verify your payment.
              </p>
            </>
          )}

          {status === 'success' && (
            <>
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-4"
              >
                💖
              </motion.div>
              
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Payment Successful! ✨
              </h3>
              <p className="text-gray-600 mb-4">
                Thank you for your generous donation to KIDNEXUS! Your support will help nurture the next generation of innovators.
              </p>
              
              {paymentDetails && (
                <div className="bg-green-50 rounded-xl p-4 text-left">
                  <h4 className="font-semibold text-green-800 mb-2">Payment Details:</h4>
                  <p className="text-sm text-green-700">
                    Amount: {paymentDetails.currency} {paymentDetails.amount}
                  </p>
                  <p className="text-sm text-green-700">
                    Transaction ID: {paymentDetails.transactionId}
                  </p>
                </div>
              )}
            </>
          )}

          {status === 'failed' && (
            <>
              <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Payment Issue
              </h3>
              <p className="text-gray-600 mb-4">
                There was an issue processing your payment. Please try again or contact our support team.
              </p>
              
              <div className="bg-red-50 rounded-xl p-4">
                <p className="text-sm text-red-700">
                  If you believe this is an error, please contact us at kidnexus.ke@gmail.com
                </p>
              </div>
            </>
          )}

          {status === 'cancelled' && (
            <>
              <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Payment Cancelled
              </h3>
              <p className="text-gray-600">
                Your payment was cancelled. You can try again anytime!
              </p>
            </>
          )}

          <button
            onClick={() => {
              // Clear URL parameters and reload
              window.location.href = '/support';
            }}
            className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Continue
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PaymentStatusChecker;
