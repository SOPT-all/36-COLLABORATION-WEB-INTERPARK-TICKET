import { useQuery } from '@tanstack/react-query';
import { fetchPaymentMethods } from './banks.api';

export const useBanks = () => {
  return useQuery({
    queryKey: ['banks'],
    queryFn: fetchPaymentMethods,
  });
};
