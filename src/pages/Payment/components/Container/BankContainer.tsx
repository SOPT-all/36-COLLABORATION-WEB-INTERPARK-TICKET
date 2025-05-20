import { useState, useEffect } from 'react';
import SelectionContainer from './SelectionContainer';
import type { PaymentMethod } from '@/pages/Payment/constants/banks';
import { fetchPaymentMethods } from '@/pages/Payment/constants/banks';

interface BankContainerProps {
  onSelect?: (bank: string) => void;
}

export default function BankContainer({ onSelect }: BankContainerProps) {
  const [selected, setSelected] = useState<string>('');
  const [banks, setBanks] = useState<PaymentMethod[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBanks = async () => {
      try {
        const paymentMethods = await fetchPaymentMethods();
        setBanks(paymentMethods);
      } catch (err) {
        setError(err instanceof Error ? err.message : '은행 목록을 불러오는데 실패했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    loadBanks();
  }, []);

  const handleSelect = (bank: string) => {
    setSelected(bank);
    onSelect?.(bank);
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>에러: {error}</div>;
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
