import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import SelectionContainer from './SelectionContainer';
import type { PaymentMethod } from '@/pages/Payment/api/banks.types';
import { useBanks } from '@/pages/Payment/api/banks.hooks';
import { QUERY_KEY } from '@/shared/constants/queryKey';
import { fetchPaymentMethods } from '@/pages/Payment/api/banks.api';

interface BankContainerProps {
  onSelect?: (bank: string) => void;
}

function BankImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      width={28}
      height={28}
      style={{ borderRadius: 6, width: 28, height: 28 }}
    />
  );
}

export default function BankContainer({ onSelect }: BankContainerProps) {
  const [selected, setSelected] = useState<string>('');
  const { data, isLoading, error } = useBanks();
  const queryClient = useQueryClient();

  const banks: PaymentMethod[] = data?.paymentMethodList || [];

  const handleSelect = (bank: string) => {
    setSelected(bank);
    onSelect?.(bank);
  };

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: [QUERY_KEY.BANKS],
      queryFn: fetchPaymentMethods,
    });
  }, [queryClient]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return (
      <div>
        에러:{' '}
        {error instanceof Error
          ? error.message
          : '은행 목록을 불러오는데 실패했습니다.'}
      </div>
    );
  }

  const items = banks.map((bank) => ({
    name: bank.name,
    icon: <BankImage src={bank.imageUrl} alt={bank.name} />,
  }));

  return (
    <SelectionContainer
      items={items}
      selected={selected}
      onSelect={handleSelect}
    />
  );
}
