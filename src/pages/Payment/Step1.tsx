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
import type { SeatInfo } from '@/pages/SeatSelect/api/types';
import { request, HTTPMethod } from '@/shared/network/request';
import type { FetchPaymentMethodsResponse } from './banks.types';

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

  // 임시 seatInfo (실제 좌석 선택 값으로 대체 가능)
  const seatInfo: SeatInfo = {
    position: { row: 'D', index: 8 },
    grade: 'R',
    price: 66000,
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleClose = () => {
    navigate('/');
  };

  const handleSubmit = () => {
    if (!isFormValid) return;

    setUserInfo({
      name,
      birth: birthdate,
      phoneNumber: phone,
      email: additionalInfo || 'example@example.com',
    });

    setTicketCount(quantity);

    const ticketPrice = 66000;
    const totalPrice = ticketPrice * quantity;
    setTotalPrice(totalPrice);

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

export const fetchPaymentMethods = async () => {
  return request<FetchPaymentMethodsResponse>({
    method: HTTPMethod.GET,
    url: '/api/v1/tickets/payment',
  });
};
