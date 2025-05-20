import { request, HTTPMethod } from '@/shared/network/request';

export interface PaymentMethod {
  name: string;
  imageUrl: string;
}

export interface PaymentMethodResponse {
  status: number;
  message: string;
  data: {
    paymentMethodList: PaymentMethod[];
  };
}

export const fetchPaymentMethods = async (): Promise<PaymentMethod[]> => {
  const data = await request<{
    paymentMethodList: PaymentMethod[];
  }>({
    method: HTTPMethod.GET,
    url: '/api/v1/tickets/payment',
  });
  console.log(data.paymentMethodList); 
  return data.paymentMethodList;
};
