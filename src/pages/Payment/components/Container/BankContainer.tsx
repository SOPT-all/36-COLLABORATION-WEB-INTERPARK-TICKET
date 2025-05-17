import { useState } from 'react';
import { Container } from './Container.css';
import BtnBank from './Btn/Btn';

export default function BankContainer() {
  const [selected, setSelected] = useState<string>('');

  const bankList = [
    {
      name: '농협(중앙)',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/5/5e/Nonghyup_BI.svg',
    },
    {
      name: '국민은행',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/2/20/Kookmin_Bank_logo.svg',
    },
    {
      name: '우리은행',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/2/2c/Woori_Bank_logo.svg',
    },
    {
      name: '기업은행',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/4/44/IBK_Bank_Logo.svg',
    },
    {
      name: '신한은행',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/2/2d/Shinhan_Bank_logo.svg',
    },
    {
      name: '우체국',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/32/Korea_Post_logo.svg',
    },
    {
      name: '하나은행',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/d/d7/Hana_Bank_logo.svg',
    },
  ];

  return (
    <div className={Container}>
      {bankList.map((bank) => (
        <BtnBank
          key={bank.name}
          label={bank.name}
          icon={
            <img src={bank.imageUrl} alt={bank.name} width={28} height={28} />
          }
          isSelected={selected === bank.name}
          onClick={() => setSelected(bank.name)}
        />
      ))}
    </div>
  );
}
