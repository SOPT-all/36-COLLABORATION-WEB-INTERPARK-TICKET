import type {
  CreatePaymentRequest,
  CreatePaymentResponse,
} from './payment.types';
import { request, HTTPMethod } from '@/shared/network/request';

export const createPayment = async (paymentData: CreatePaymentRequest) => {
  return request<CreatePaymentResponse>({
    method: HTTPMethod.POST,
    url: '/api/v1/tickets/payment',
    body: paymentData,
  });
};
