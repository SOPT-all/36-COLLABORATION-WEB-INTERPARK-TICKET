import { useState } from 'react';
import TicketReceiveSelectCard from './TicketReceicerSelectCard/TicketReceiveSelectCard';
export default function PaymentPage() {
  const [selected, setSelected] = useState<'현장수령' | '배송'>('현장수령');

  return (
    <main>
      <TicketReceiveSelectCard selected={selected} onSelect={setSelected} />
    </main>
  );
}
