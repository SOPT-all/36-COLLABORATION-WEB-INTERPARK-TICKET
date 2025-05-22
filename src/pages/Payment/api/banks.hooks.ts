import { useQuery } from '@tanstack/react-query';
import { fetchPaymentMethods } from './banks.api';
import { QUERY_KEY } from '@/shared/constants/queryKey';

export const useBanks = () => {
  return useQuery({
    queryKey: [QUERY_KEY.BANKS],
    queryFn: fetchPaymentMethods,
  });
};
