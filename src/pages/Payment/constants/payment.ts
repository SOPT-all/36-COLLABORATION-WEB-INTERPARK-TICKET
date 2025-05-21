import { request, HTTPMethod } from '@/shared/network/request';

export interface UserInfo {
  name: string;
  birth: string;
  phoneNumber: string;
  email: string;
}

export interface PaymentRequest {
  ticketCount: number;
  totalPrice: number;
  deliveryMethod: string;
  userInfo: UserInfo;
  paymentMethod: string;
}

export const createPayment = async (paymentData: PaymentRequest) => {
  const response = await request({
    method: HTTPMethod.POST,
    url: '/api/v1/tickets/payment',
    body: paymentData,
  });

  return response;
};
