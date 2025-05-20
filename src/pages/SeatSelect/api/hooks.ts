import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
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
    onSuccess: () => {
      console.log('좌석 선택 성공');
    },
    onError: () => {
      console.log('좌석 선택 실패');
    },
  });
};
