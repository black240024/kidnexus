
export interface ExchangeRate {
  USD_KES: number;
  timestamp: string;
}

export const fetchExchangeRate = async (): Promise<number> => {
  try {
    // Using a free exchange rate API
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    return data.rates.KES || 150; // Fallback to ~150 if API fails
  } catch (error) {
    console.error('Failed to fetch exchange rate:', error);
    return 150; // Fallback rate
  }
};

export const convertUSDToKES = (usdAmount: number, exchangeRate: number): number => {
  return Math.round(usdAmount * exchangeRate);
};

export const formatCurrency = (amount: number, currency: 'USD' | 'KES'): string => {
  if (currency === 'USD') {
    return `$${amount.toLocaleString()}`;
  }
  return `KES ${amount.toLocaleString()}`;
};
