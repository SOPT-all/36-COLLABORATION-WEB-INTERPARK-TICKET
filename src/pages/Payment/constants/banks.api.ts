import { request, HTTPMethod } from '@/shared/network/request';
import type { FetchPaymentMethodsResponse } from './banks.types';

export const fetchPaymentMethods = async () => {
  return request<FetchPaymentMethodsResponse>({
    method: HTTPMethod.GET,
    url: '/api/v1/tickets/payment',
  });
};
