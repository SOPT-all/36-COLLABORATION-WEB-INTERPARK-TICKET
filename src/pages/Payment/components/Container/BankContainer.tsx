import { useState } from 'react';
import SelectionContainer from './SelectionContainer';
import { BANK_LIST } from '../../constants/banks';

interface BankContainerProps {
  onSelect?: (bank: string) => void;
}

export default function BankContainer({ onSelect }: BankContainerProps) {
  const [selected, setSelected] = useState<string>('');

  const handleSelect = (bank: string) => {
    setSelected(bank);
    onSelect?.(bank);
  };

  const items = BANK_LIST.map((bank) => ({
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
