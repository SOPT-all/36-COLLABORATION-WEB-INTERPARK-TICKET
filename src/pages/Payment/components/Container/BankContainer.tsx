import { useState } from 'react';
import SelectionContainer from './SelectionContainer';
import { BANK_LIST } from '../../constants/banks';

export default function BankContainer() {
  const [selected, setSelected] = useState<string>('');

  const items = BANK_LIST.map((bank) => ({
    name: bank.name,
    icon: <img src={bank.imageUrl} alt={bank.name} width={28} height={28} />,
  }));

  return (
    <SelectionContainer
      items={items}
      selected={selected}
      onSelect={setSelected}
    />
  );
}
