import { useMutation } from '@tanstack/react-query';
import { createPayment } from './payment.api';

export const useCreatePayment = () => {
  return useMutation({
    mutationFn: createPayment,
  });
};
