import { useState } from 'react';
import { useNavigate } from 'react-router';
import BookingInfoSection from './components/Booking/BookingInfoSection';
import * as ListInfoStyles from './components/Dropdown/ListInfo/ListInfo.css';
import TicketPriceInfo from './components/TicketPriceInfo/TicketPriceInfo';
import * as styles from './Payment.css';
import PriceQuantityInfo from './components/PriceQuantityInfo/PriceQuantityInfo';
import TicketReceiveSelect from './components/TicketReceiveSelect/TicketReceiverSelect';
import TextField from './components/TextField/TextField';
import PhoneTextField from './components/TextField/PhoneTextField';
import PriceQuantityCard from './components/PriceQuantityInfo/PriceQuantityCard/PriceQuantityCard';
import ListInfo from './components/Dropdown/ListInfo/ListInfo';
import { validateForm } from './utils/validateForm';
import LargeButton from '@/shared/components/LargeButton/LargeButton';
import PayHeader from '@/shared/components/Header/PayHeader/PayHeader';
import {
  Rectangle94,
  Rectangle95,
} from '@/shared/components/Rectangle/Rectangle';
import { LAYOUT } from '@/shared/styles/layoutConstants';
import { fontStyle } from '@/shared/styles/fontStyle';

export default function PaymentStep1() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phone, setPhone] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleBack = () => {
    navigate(-1);
  };

  const handleClose = () => {
    navigate('/');
  };

  const handleSubmit = () => {
    window.scrollTo(0, 0);
    navigate('/payment/step2');
  };

  const isFormValid = validateForm(name, birthdate, phone) && quantity > 0;

  return (
    <>
      <PayHeader step={1} onBackClick={handleBack} onCloseClick={handleClose} />
      <main className={styles.mainContent}>
        <div>
          <div className={styles.page}>
            <BookingInfoSection />
          </div>
          <Rectangle94 />

          <ListInfo label="예매자 정보 입력">
            <div className={ListInfoStyles.textFieldsContainer}>
              <TextField
                placeholder="예약자명"
                value={name}
                onChange={setName}
              />
              <TextField
                placeholder="생년월일 6글자"
                value={birthdate}
                onChange={setBirthdate}
                maxLength={6}
                numbersOnly
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
            quantity={quantity}
            onQuantityChange={setQuantity}
          />

          <ListInfo label="일반 할인">
            <div className={ListInfoStyles.quantityCardsContainer}>
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
        </div>

        <div className={styles.buttonContainer}>
          <LargeButton
            onClick={handleSubmit}
            isActive={isFormValid}
            style={{
              maxWidth: '37.5rem',
              height: LAYOUT.HEIGHT.SM,
              borderRadius: LAYOUT.BORDER_RADIUS.MD,
              ...fontStyle('b2_b_16'),
            }}
          >
            다음
          </LargeButton>
        </div>
      </main>
    </>
  );
}
