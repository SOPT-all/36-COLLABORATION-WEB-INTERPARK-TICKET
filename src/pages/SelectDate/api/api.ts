import type { DatePageResponse } from '@/pages/SelectDate/api/types';
import { request, HTTPMethod } from '@/shared/network/request';

export const getDateData = async (): Promise<DatePageResponse> => {
  const response = await request<DatePageResponse>({
    method: HTTPMethod.GET,
    url: '/api/v1/tickets/date',
  });

  return response;
};
