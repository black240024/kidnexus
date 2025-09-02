
import { initiatePesapalPayment, checkTransactionStatus, PesapalPaymentData } from '@/utils/pesapalUtils';

export interface PaymentRequest {
  amount: number;
  currency: string;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  };
  description?: string;
}

export interface PaymentResponse {
  success: boolean;
  paymentUrl?: string;
  transactionId?: string;
  error?: string;
}

export interface PaymentStatus {
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  transactionId: string;
  amount: number;
  currency: string;
  details?: any;
}

class PaymentService {
  private baseUrl = window.location.origin;

  async processPayment(request: PaymentRequest): Promise<PaymentResponse> {
    try {
      console.log('Processing payment request:', request);

      // Validate payment request
      if (!this.validatePaymentRequest(request)) {
        throw new Error('Invalid payment request data');
      }

      // Prepare Pesapal payment data
      const paymentData: PesapalPaymentData = {
        amount: request.amount,
        currency: request.currency.toUpperCase(),
        description: request.description || `KIDNEXUS Donation - $${request.amount}`,
        callback_url: `${this.baseUrl}/support?payment=success`,
        redirect_mode: 'REDIRECT',
        notification_id: this.generateNotificationId(),
        billing_address: {
          email_address: request.customerInfo.email,
          phone_number: request.customerInfo.phone,
          country_code: 'KE',
          first_name: request.customerInfo.firstName,
          last_name: request.customerInfo.lastName
        }
      };

      // Initiate payment with Pesapal
      const paymentUrl = await initiatePesapalPayment(paymentData);

      // Store payment details in local storage for tracking
      this.storePaymentData({
        transactionId: paymentData.notification_id,
        amount: request.amount,
        currency: request.currency,
        customerEmail: request.customerInfo.email,
        status: 'pending',
        timestamp: new Date().toISOString()
      });

      return {
        success: true,
        paymentUrl,
        transactionId: paymentData.notification_id
      };

    } catch (error) {
      console.error('Payment processing error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Payment processing failed'
      };
    }
  }

  async checkPaymentStatus(transactionId: string): Promise<PaymentStatus> {
    try {
      console.log('Checking payment status for transaction:', transactionId);

      const statusResponse = await checkTransactionStatus(transactionId);
      
      let status: PaymentStatus['status'] = 'pending';
      
      // Map Pesapal status to our status
      if (statusResponse.payment_status_code === '1') {
        status = 'completed';
      } else if (statusResponse.payment_status_code === '2') {
        status = 'failed';
      } else if (statusResponse.payment_status_code === '3') {
        status = 'cancelled';
      }

      // Update stored payment data
      this.updateStoredPaymentStatus(transactionId, status);

      return {
        status,
        transactionId,
        amount: statusResponse.amount,
        currency: statusResponse.currency,
        details: statusResponse
      };

    } catch (error) {
      console.error('Payment status check error:', error);
      return {
        status: 'failed',
        transactionId,
        amount: 0,
        currency: 'USD'
      };
    }
  }

  private validatePaymentRequest(request: PaymentRequest): boolean {
    const { amount, currency, customerInfo } = request;
    
    // Validate amount
    if (!amount || amount <= 0) {
      console.error('Invalid amount:', amount);
      return false;
    }

    // Validate currency
    if (!currency || !['USD', 'KES'].includes(currency.toUpperCase())) {
      console.error('Invalid currency:', currency);
      return false;
    }

    // Validate customer info
    if (!customerInfo.firstName || !customerInfo.lastName || !customerInfo.email) {
      console.error('Missing required customer information');
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerInfo.email)) {
      console.error('Invalid email format:', customerInfo.email);
      return false;
    }

    return true;
  }

  private generateNotificationId(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    return `kidnexus_donation_${timestamp}_${random}`;
  }

  private storePaymentData(data: any): void {
    try {
      const existingData = this.getStoredPayments();
      existingData.push(data);
      localStorage.setItem('kidnexus_payments', JSON.stringify(existingData));
    } catch (error) {
      console.error('Error storing payment data:', error);
    }
  }

  private updateStoredPaymentStatus(transactionId: string, status: string): void {
    try {
      const payments = this.getStoredPayments();
      const paymentIndex = payments.findIndex(p => p.transactionId === transactionId);
      
      if (paymentIndex !== -1) {
        payments[paymentIndex].status = status;
        payments[paymentIndex].updatedAt = new Date().toISOString();
        localStorage.setItem('kidnexus_payments', JSON.stringify(payments));
      }
    } catch (error) {
      console.error('Error updating payment status:', error);
    }
  }

  private getStoredPayments(): any[] {
    try {
      const stored = localStorage.getItem('kidnexus_payments');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error retrieving stored payments:', error);
      return [];
    }
  }

  // Get payment history for the user
  getPaymentHistory(): any[] {
    return this.getStoredPayments();
  }

  // Clean up old payment records (older than 30 days)
  cleanupOldPayments(): void {
    try {
      const payments = this.getStoredPayments();
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const filteredPayments = payments.filter(payment => {
        const paymentDate = new Date(payment.timestamp);
        return paymentDate > thirtyDaysAgo;
      });

      localStorage.setItem('kidnexus_payments', JSON.stringify(filteredPayments));
    } catch (error) {
      console.error('Error cleaning up old payments:', error);
    }
  }
}

export const paymentService = new PaymentService();
