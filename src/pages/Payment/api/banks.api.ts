import type { FetchPaymentMethodsResponse } from './banks.types';
import { request, HTTPMethod } from '@/shared/network/request';

export const fetchPaymentMethods = async () => {
  return request<FetchPaymentMethodsResponse>({
    method: HTTPMethod.GET,
    url: '/api/v1/tickets/payment',
  });
};
