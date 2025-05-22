import { useMutation, useQuery } from '@tanstack/react-query';
import { getSeatData, patchSelectedSeat } from './api';
import { QUERY_KEY } from '@/shared/constants/queryKey';

// 좌석 조회
export const useSeatData = () => {
  return useQuery({
    queryKey: [QUERY_KEY.SEAT_STATUS],
    queryFn: getSeatData,
  });
};

// 좌석 선택
export const usePatchSeatData = () => {
  return useMutation({
    mutationFn: patchSelectedSeat,
  });
};
