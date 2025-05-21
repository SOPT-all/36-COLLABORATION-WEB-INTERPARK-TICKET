import type {
  PatchSeatRequest,
  PatchSeatResponse,
  SeatDataResponse,
} from './types';
import { HTTPMethod, request } from '@/shared/network/request';

export const getSeatData = () => {
  return request<SeatDataResponse>({
    method: HTTPMethod.GET,
    url: '/api/v1/tickets/seat',
  });
};

export const patchSelectedSeat = (data: PatchSeatRequest) => {
  return request<PatchSeatResponse>({
    method: HTTPMethod.PATCH,
    url: '/api/v1/tickets/seat',
    body: data,
  });
};
