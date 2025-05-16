import axios from 'axios';

export interface PaymentMethod {
  name: string;
  imageUrl: string;
}

export const fetchPaymentList = async (): Promise<PaymentMethod[]> => {
  const response = await axios.get('/api/v1/tickets/payment', {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data.data.paymentList;
};
