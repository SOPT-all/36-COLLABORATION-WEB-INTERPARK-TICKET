import { useQuery } from '@tanstack/react-query';
import { getDateData } from './api';
import { QUERY_KEY } from '@/shared/constants/queryKey';

export const useDateData = () => {
  return useQuery({
    queryKey: [QUERY_KEY.DATE_PERFORMANCE],
    queryFn: getDateData,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 5,
  });
};
