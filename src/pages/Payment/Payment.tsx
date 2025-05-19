import { useState, useEffect } from 'react';
import BookingInfoSection from './components/Booking/BookingInfoSection';
import ListInfo from './components/Dropdown/listInfo/ListInfo';
import TicketPriceInfo from './components/TicketPriceInfo/TicketPriceInfo';
import * as styles from './Payment.css';
import PriceQuantityInfo from './components/PriceQuantityInfo/PriceQuantityInfo';
import TicketReceiveSelect from './components/TicketReceiveSelect/TicketReceiverSelect';
import TextField from './components/TextField/TextField';
import PhoneTextField from './components/TextField/PhoneTextField';
import PriceQuantityCard from './components/PriceQuantityInfo/PriceQuantityCard/PriceQuantityCard';
import * as listInfoStyles from './components/Dropdown/listInfo/ListInfo.css.ts';
import { validateForm } from './utils/validateForm';
import {
  Rectangle94,
  Rectangle95,
} from '@/shared/components/Rectangle/Rectangle';
import PayHeader from '@/shared/components/Header/PayHeader/PayHeader';
import LargeButton from '@/shared/components/LargeButton/LargeButton';

export default function PaymentPage() {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phone, setPhone] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [quantities, setQuantities] = useState({
    normal: 1,
    veteran: 0,
    disability13: 0,
    disability46: 0,
  });

  const handleBack = () => {
    console.log('뒤로가기');
  };

  const handleClose = () => {
    console.log('닫기');
  };

  const handleSubmit = () => {
    console.log('결제 진행');
  };

  const handleQuantityChange =
    (type: keyof typeof quantities) => (newCount: number) => {
      setQuantities((prev) => ({ ...prev, [type]: newCount }));
    };

  const totalQuantity = Object.values(quantities).reduce(
    (sum, count) => sum + count,
    0
  );

  useEffect(() => {
    setIsFormValid(validateForm(name, birthdate, phone) && totalQuantity > 0);
  }, [name, birthdate, phone, totalQuantity]);

  return (
    <>
      <PayHeader step={1} onBackClick={handleBack} onCloseClick={handleClose} />
      <main className={styles.mainContent}>
        <div className={styles.page}>
          <BookingInfoSection />
        </div>
        <Rectangle94 />

        <ListInfo label="예매자 정보 입력">
          <div className={listInfoStyles.textFieldsContainer}>
            <TextField placeholder="예약자명" value={name} onChange={setName} />
            <TextField
              placeholder="생년월일 6글자"
              value={birthdate}
              onChange={setBirthdate}
            />
            <PhoneTextField
              placeholder="전화번호"
              value={phone}
              onChange={setPhone}
            />
            <TextField
              placeholder="추가 정보"
              value={additionalInfo}
              onChange={setAdditionalInfo}
            />
          </div>
        </ListInfo>

        <Rectangle94 />
        <TicketPriceInfo />
        <PriceQuantityInfo
          onQuantityChange={handleQuantityChange('normal')}
          quantity={quantities.normal}
        />

        <ListInfo label="일반 할인">
          <div className={listInfoStyles.quantityCardsContainer}>
            <PriceQuantityCard
              label="국가유공자"
              price="48,000원"
              initial={0}
              count={quantities.veteran}
              onCountChange={handleQuantityChange('veteran')}
            />
            <Rectangle95 />
            <PriceQuantityCard
              label="장애인(1~3급)"
              price="48,000원"
              initial={0}
              count={quantities.disability13}
              onCountChange={handleQuantityChange('disability13')}
            />
            <Rectangle95 />
            <PriceQuantityCard
              label="장애인(4~6급)"
              price="48,000원"
              initial={0}
              count={quantities.disability46}
              onCountChange={handleQuantityChange('disability46')}
            />
          </div>
        </ListInfo>

        <Rectangle94 />
        <TicketReceiveSelect />

        <div className={styles.buttonContainer}>
          <LargeButton
            isActive={isFormValid}
            disabled={!isFormValid}
            onClick={handleSubmit}
          >
            다음
          </LargeButton>
        </div>
      </main>
    </>
  );
}
