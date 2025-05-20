import { useQuery } from '@tanstack/react-query';
import { getHomeData } from './api';
import { QUERY_KEY } from '@/shared/constants/queryKey';

export const useSeatData = () => {
  return useQuery({
    queryKey: [QUERY_KEY.HOME],
    queryFn: getHomeData,
  });
};
