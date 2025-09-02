
export interface PesapalConfig {
  consumerKey: string;
  consumerSecret: string;
  environment: 'sandbox' | 'live';
}

export interface PesapalPaymentData {
  amount: number;
  currency: string;
  description: string;
  callback_url: string;
  redirect_mode: string;
  notification_id: string;
  billing_address: {
    email_address: string;
    phone_number?: string;
    country_code: string;
    first_name: string;
    last_name: string;
  };
}

export interface PesapalTransactionStatus {
  payment_method: string;
  amount: number;
  created_date: string;
  confirmation_code: string;
  payment_status_description: string;
  description: string;
  message: string;
  payment_account: string;
  call_back_url: string;
  status_code: number;
  merchant_reference: string;
  payment_status_code: string;
  currency: string;
  error_message?: string;
  status: string;
}

const PESAPAL_CONFIG: PesapalConfig = {
  consumerKey: 'W2JLkp66w3wJ/gyfeG/G3id9WHCSyl5y',
  consumerSecret: '8cBnKUy2/IXAusiFILqO0u/YR1g=',
  environment: 'sandbox' // Change to 'live' for production
};

const PESAPAL_BASE_URL = PESAPAL_CONFIG.environment === 'sandbox' 
  ? 'https://cybqa.pesapal.com/pesapalv3/api' 
  : 'https://pay.pesapal.com/v3/api';

export const initiatePesapalPayment = async (paymentData: PesapalPaymentData): Promise<string> => {
  try {
    console.log('Initiating Pesapal payment with data:', paymentData);
    
    const token = await getPesapalToken();
    console.log('Got Pesapal token successfully');
    
    const response = await fetch(`${PESAPAL_BASE_URL}/Transactions/SubmitOrderRequest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(paymentData)
    });

    console.log('Payment response status:', response.status);
    const result = await response.json();
    console.log('Payment response:', result);
    
    if (response.ok && (result.status === '200' || result.redirect_url)) {
      return result.redirect_url;
    } else {
      throw new Error(result.error_message || result.message || 'Payment initiation failed');
    }
  } catch (error) {
    console.error('Pesapal payment error:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to initiate payment');
  }
};

export const checkTransactionStatus = async (orderTrackingId: string): Promise<PesapalTransactionStatus> => {
  try {
    const token = await getPesapalToken();
    
    const response = await fetch(`${PESAPAL_BASE_URL}/Transactions/GetTransactionStatus?orderTrackingId=${orderTrackingId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    const result = await response.json();
    
    if (response.ok) {
      return result;
    } else {
      throw new Error(result.error_message || 'Failed to check transaction status');
    }
  } catch (error) {
    console.error('Transaction status check error:', error);
    throw error;
  }
};

const getPesapalToken = async (): Promise<string> => {
  try {
    console.log('Requesting Pesapal token...');
    
    const response = await fetch(`${PESAPAL_BASE_URL}/Auth/RequestToken`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        consumer_key: PESAPAL_CONFIG.consumerKey,
        consumer_secret: PESAPAL_CONFIG.consumerSecret
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Token response:', result);
    
    if (result.token) {
      return result.token;
    } else {
      throw new Error(result.error_message || 'Failed to get authentication token');
    }
  } catch (error) {
    console.error('Failed to get Pesapal token:', error);
    throw new Error('Unable to authenticate with payment provider');
  }
};

export const validatePesapalWebhook = (webhookData: any): boolean => {
  // Add webhook validation logic here
  return webhookData && webhookData.OrderTrackingId;
};
