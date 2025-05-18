import { useState, useEffect } from 'react';
import BookingInfoSection from './components/Booking/BookingInfoSection';
import ListInfo from './components/Dropdown/listInfo/ListInfo';
import { Rectangle94, Rectangle95 } from './components/Rectangle/Rectangle';
import TicketPriceInfo from './components/TicketPriceInfo/TicketPriceInfo';
import * as styles from './Payment.css';
import PriceQuantityInfo from './components/PriceQuantityInfo/PriceQuantityInfo';
import TicketReceiveSelect from './components/TicketReceiveSelect/TicketReceiverSelect';
import TextField from './components/TextField/TextField';
import PhoneTextField from './components/TextField/PhoneTextField';
import PriceQuantityCard from './components/PriceQuantityInfo/PriceQuantityCard/PriceQuantityCard';
import * as listInfoStyles from './components/Dropdown/listInfo/ListInfo.css.ts';
import PayHeader from '@/shared/components/Header/PayHeader/PayHeader';
import LargeButton from '@/shared/components/LargeButton/LargeButton';

export default function PaymentPage() {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phone, setPhone] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleBack = () => {
    console.log('뒤로가기');
  };

  const handleClose = () => {
    console.log('닫기');
  };

  const handleSubmit = () => {
    console.log('결제 진행');
  };

  useEffect(() => {
    setIsFormValid(
      name.trim() !== '' && 
      birthdate.trim() !== '' && 
      phone.trim() !== '' &&
      phone.length >= 12 
    );
  }, [name, birthdate, phone]);

  return (
    <>
      <PayHeader 
        step={1} 
        onBackClick={handleBack} 
        onCloseClick={handleClose} 
      />
      <main className={styles.mainContent}>
        <div className={styles.page}>
          <BookingInfoSection />
        </div>
        <Rectangle94 />
        
        <ListInfo label="예매자 정보 입력">
          <div className={listInfoStyles.textFieldsContainer}>
            <TextField
              placeholder="예약자명"
              value={name}
              onChange={setName}
            />
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
        <PriceQuantityInfo />
        
        <ListInfo label="일반 할인">
          <div className={listInfoStyles.quantityCardsContainer}>
            <PriceQuantityCard 
              label="국가유공자" 
              price="48,000원" 
              initial={0} 
            />
                 <Rectangle95 />
            <PriceQuantityCard 
              label="장애인(1~3급)" 
              price="48,000원" 
              initial={0} 
            />
                 <Rectangle95 />
            <PriceQuantityCard 
              label="장애인(4~6급)" 
              price="48,000원" 
              initial={0} 
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
