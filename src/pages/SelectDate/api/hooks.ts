import { useQuery } from '@tanstack/react-query';
import { getDateData } from './api';
import { QUERY_KEY } from '@/shared/constants/queryKey';

export const useDateData = () => {
  return useQuery({
    queryKey: [QUERY_KEY.HOME],
    queryFn: getDateData,
    refetchOnWindowFocus: true,
  });
};
