import type { PatchSeatRequest } from './types';
import type { SeatData } from '../types/SeatData';
import { HTTPMethod, request } from '@/shared/network/request';

export const getSeatData = () => {
  return request<SeatData[]>({
    method: HTTPMethod.GET,
    url: '/api/v1/seats',
  });
};

export const patchSelectedSeat = (data: PatchSeatRequest) => {
  return request<SeatData[]>({
    method: HTTPMethod.PATCH,
    url: '/api/v1/seats',
    body: data,
  });
};
