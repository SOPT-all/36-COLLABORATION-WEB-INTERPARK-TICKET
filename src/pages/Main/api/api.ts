import type { HomeResponse } from '@/pages/Main/api/types';
import { request, HTTPMethod } from '@/shared/network/request';

export const getHomeData = () => {
  return request<HomeResponse>({
    method: HTTPMethod.GET,
    url: '/api/v1/home',
  });
};
