import { useState } from 'react';
import { Container } from './Container.css';
import Btn from './Btn/Btn';
import IconBank from '@/shared/assets/icon/ic_payment_28(1).svg?react';
import IconCard from '@/shared/assets/icon/ic_payment_28.svg?react';
import IconMobile from '@/shared/assets/icon/ic_payment_28(2).svg?react';
import IconEasy from '@/shared/assets/icon/ic_payment_28(3).svg?react';

interface MethodContainerProps {
  onBankSelect?: () => void;
}

export default function MethodContainer({ onBankSelect }: MethodContainerProps) {
  const [selected, setSelected] = useState<string>('');

  const methodList = [
    { name: '무통장', icon: <IconBank width={28} height={28} /> },
    { name: '신용카드', icon: <IconCard width={28} height={28} /> },
    { name: '휴대폰', icon: <IconMobile width={28} height={28} /> },
    { name: '간편결제', icon: <IconEasy width={28} height={28} /> },
  ];

  const handleMethodClick = (methodName: string) => {
    setSelected(methodName);
    if (methodName === '무통장') {
      onBankSelect?.();
    }
  };

  return (
    <div className={Container}>
      {methodList.map((method) => (
        <Btn
          key={method.name}
          label={method.name}
          icon={method.icon}
          isSelected={selected === method.name}
          onClick={() => handleMethodClick(method.name)}
        />
      ))}
    </div>
  );
}
