<<<<<<< HEAD:src/pages/Payment/api/banks.api.ts
import type { FetchPaymentMethodsResponse } from './banks.types';
import { request, HTTPMethod } from '@/shared/network/request';
=======
import { request, HTTPMethod } from '@/shared/network/request';
import type { FetchPaymentMethodsResponse } from './banks.types';
>>>>>>> 3a1772a (fix: 리뷰반영):src/pages/Payment/constants/banks.api.ts

export const fetchPaymentMethods = async () => {
  return request<FetchPaymentMethodsResponse>({
    method: HTTPMethod.GET,
    url: '/api/v1/tickets/payment',
  });
};
