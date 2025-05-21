<<<<<<< HEAD:src/pages/Payment/api/payment.api.ts
=======
import { request, HTTPMethod } from '@/shared/network/request';
>>>>>>> 3a1772a (fix: 리뷰반영):src/pages/Payment/constants/payment.api.ts
import type {
  CreatePaymentRequest,
  CreatePaymentResponse,
} from './payment.types';
<<<<<<< HEAD:src/pages/Payment/api/payment.api.ts
import { request, HTTPMethod } from '@/shared/network/request';
=======
>>>>>>> 3a1772a (fix: 리뷰반영):src/pages/Payment/constants/payment.api.ts

export const createPayment = async (paymentData: CreatePaymentRequest) => {
  return request<CreatePaymentResponse>({
    method: HTTPMethod.POST,
    url: '/api/v1/tickets/payment',
    body: paymentData,
  });
};
