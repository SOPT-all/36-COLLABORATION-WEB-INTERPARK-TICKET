import { useState } from 'react';
import SelectionContainer from './SelectionContainer';
import { useBanks } from '@/pages/Payment/constants/banks.hooks';
import type { PaymentMethod } from '@/pages/Payment/constants/banks.types';

interface BankContainerProps {
  onSelect?: (bank: string) => void;
}

export default function BankContainer({ onSelect }: BankContainerProps) {
  const [selected, setSelected] = useState<string>('');
  const { data, isLoading, error } = useBanks();

  const banks: PaymentMethod[] = data?.paymentMethodList || [];

  const handleSelect = (bank: string) => {
    setSelected(bank);
    onSelect?.(bank);
  };

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
    icon: <img src={bank.imageUrl} alt={bank.name} width={28} height={28} />,
  }));

  return (
    <SelectionContainer
      items={items}
      selected={selected}
      onSelect={handleSelect}
    />
  );
}
