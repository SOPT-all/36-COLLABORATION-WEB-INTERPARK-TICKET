// src/pages/PaymentPage.tsx
import { useState } from 'react';
import BookingInfoSection from './components/Booking/BookingInfoSection';
import ListInfo from './components/Dropdown/listInfo/ListInfo';
import ListPoint from './components/Dropdown/ListPoint/ListPoint';
import ListCheck from './components/Dropdown/ListCheck/ListCheck';
import ListCheckMiddle from './components/Dropdown/ListCheckMiddle/ListCheckMiddle';
import TextField from './components/TextField/TextField';
import PaymentMethodContainer from './components/Container/MethodContainer';
import BankContainer from './components/Container/BankContainer';
import { Rectangle94, Rectangle95 } from './components/Rectangle/Rectangle';
import TicketPriceInfo from './components/TicketPriceInfo/TicketPriceInfo';
import * as styles from './Payment.css';
import PriceQuantityInfo from './components/PriceQuantityInfo/PriceQuantityInfo';
import TicketReceiveSelect from './components/TicketReceiveSelect/TicketReceiverSelect';

export default function PaymentPage() {
  const [userName, setUserName] = useState('');

  return (
    <main>
      <div className={styles.page}>
        <BookingInfoSection />
      </div>
      <Rectangle94 />
      <ListInfo label="예매자 정보 입력" />
      <Rectangle94 />
      <TicketPriceInfo />
      <PriceQuantityInfo />
      <ListInfo label="일반 할인" />
      <Rectangle94 />
      <TicketReceiveSelect />

      {/* 포인트 정보 */}
      <ListPoint pointTitle="포인트 사용" pointValue="0p" />
      <Rectangle95 />

      {/* 체크 항목 */}
      <ListCheck label="예매자 정보 입력" />
      <ListCheckMiddle label="NOL 인터파크 페이" />
      <Rectangle95 />

      {/* 사용자 이름 입력 */}
      <TextField
        placeholder="예매자 이름"
        value={userName}
        onChange={setUserName}
      />
      <Rectangle94 />

      {/* 결제 수단 & 은행 선택 */}
      <PaymentMethodContainer />
      <Rectangle95 />
      <BankContainer />
    </main>
  );
}
