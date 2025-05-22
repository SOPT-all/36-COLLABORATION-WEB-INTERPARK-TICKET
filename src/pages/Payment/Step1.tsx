import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import BookingInfoSection from './components/Booking/BookingInfoSection';
import * as ListInfoStyles from './components/Dropdown/ListInfomation/ListInfo.css';
import TicketPriceInfo from './components/TicketPriceInfo/TicketPriceInfo';
import * as styles from './Payment.css';
import PriceQuantityInfo from './components/PriceQuantityInfo/PriceQuantityInfo';
import TicketReceiveSelect from './components/TicketReceiveSelect/TicketReceiverSelect';
import TextField from './components/TextField/TextField';
import PhoneTextField from './components/TextField/PhoneTextField';
import PriceQuantityCard from './components/PriceQuantityInfo/PriceQuantityCard/PriceQuantityCard';
import ListInfo from './components/Dropdown/ListInfomation/ListInfo';
import { validateForm } from './utils/validateForm';
import { usePaymentStore } from './store/paymentStore';
import LargeButton from '@/shared/components/LargeButton/LargeButton';
import PayHeader from '@/shared/components/Header/PayHeader/PayHeader';
import {
  Rectangle94,
  Rectangle95,
  PaddedRectangle95,
} from '@/shared/components/Rectangle/Rectangle';

export default function PaymentStep1() {
  const { state } = useLocation();
  const selectedSeatInfo = state?.selectedSeatInfo;

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phone, setPhone] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [quantity, setQuantity] = useState(1);

  const { setUserInfo, setTicketCount, setTotalPrice } = usePaymentStore();

  if (!selectedSeatInfo) {
    navigate('/seat-select');
    return null;
  }

  const seatInfo = selectedSeatInfo;

  const handleBack = () => {
    navigate('/seat-select');
  };

  const handleClose = () => {
    navigate('/');
  };

  function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleSubmit = () => {
    if (!isFormValid) return;

    setUserInfo({
      name,
      birth: birthdate,
      phoneNumber: phone,
      email: additionalInfo,
    });

    setTicketCount(quantity);

    const ticketPrice = selectedSeatInfo?.price ?? 0;
    const totalPrice = ticketPrice * quantity;
    setTotalPrice(totalPrice);

    window.scrollTo(0, 0);
    navigate('/payment/step2');
  };

  const isFormValid =
    validateForm(name, birthdate, phone) &&
    quantity > 0 &&
    !!additionalInfo &&
    validateEmail(additionalInfo);

  return (
    <>
      <PayHeader step={1} onBackClick={handleBack} onCloseClick={handleClose} />
      <main className={styles.mainContent}>
        <div>
          <div className={styles.page}>
            <BookingInfoSection seatInfo={seatInfo} />
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
                placeholder="이메일"
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
          <PaddedRectangle95 />

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
          <LargeButton onClick={handleSubmit} isActive={isFormValid}>
            다음
          </LargeButton>
        </div>
      </main>
    </>
  );
}
