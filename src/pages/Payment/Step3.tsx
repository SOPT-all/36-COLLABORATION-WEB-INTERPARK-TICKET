import { useState } from 'react';
import { useNavigate } from 'react-router';
import * as styles from './Payment.css';
import InfoRowTitle from './components/InfoRowTitle/InfoRowTitle';
import VectorDivider from './components/VectorDivider/VectorDivider';
import InfoPrice from './components/InfoPrice/InfoPrice';
import ListCheck from './components/Dropdown/ListCheck/ListCheck';
import MethodContainer from './components/Container/MethodContainer';
import BankContainer from './components/Container/BankContainer';
import BankNotice from './components/BankNotice/BankNotice';
import TextField from './components/TextField/TextField';
import BankInfoCard from '@/pages/Payment/components/BankInfo/BankInfoCard';
import { vars } from '@/shared/styles/tokens.css';
import PayHeader from '@/shared/components/Header/PayHeader/PayHeader';
import {
  PaddedRectangle95,
  Rectangle94,
  Rectangle95,
  Rectangle97,
} from '@/shared/components/Rectangle/Rectangle';
import LargeButton from '@/shared/components/LargeButton/LargeButton';

export default function PaymentStep3() {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState<'noll' | 'other'>(
    'noll'
  );
  const [isOtherMethodOpen, setIsOtherMethodOpen] = useState(false);
  const [isBankOpen, setIsBankOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState<string>('');
  const [receiptNumber, setReceiptNumber] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [isReceiptChecked, setIsReceiptChecked] = useState(false);

  const handleBack = () => {
    navigate('/payment/step2');
  };

  const handleClose = () => {
    navigate('/');
  };

  const handlePaymentChange = (payment: 'noll' | 'other') => {
    setSelectedPayment(payment);
    if (payment === 'other') {
      setIsOtherMethodOpen(true);
    } else {
      setIsOtherMethodOpen(false);
      setIsBankOpen(false);
    }
  };

  const handleOtherMethodToggle = () => {
    setIsOtherMethodOpen((prev) => !prev);
    if (!selectedPayment || selectedPayment === 'noll') {
      setSelectedPayment('other');
    }
  };

  const handleBankSelect = () => {
    setIsBankOpen(true);
  };

  const handleBankChange = (bank: string) => {
    setSelectedBank(bank);
  };

  const handleReceiptNumberChange = (value: string) => {
    // 숫자만 입력 가능하도록 처리
    const numbersOnly = value.replace(/[^0-9]/g, '');
    setReceiptNumber(numbersOnly);
  };

  const handleSubmit = () => {
    if (!isAgreed) return;
    // TODO: 결제 처리 로직
    navigate('/payment/complete');
  };

  return (
    <>
      <PayHeader step={3} onBackClick={handleBack} onCloseClick={handleClose} />
      <main className={styles.mainContent}>
        <Rectangle97 />
        <div className={styles.sectionContainer}>
          <InfoRowTitle text="결제예정금액" />
          <VectorDivider />
          <Rectangle97 />
          <InfoPrice
            label="티켓 금액"
            value="66,000원"
            labelColor={vars.color.gray60}
            valueColor={vars.color.black}
          />
          <InfoPrice
            label="예매 수수료"
            value="2000원"
            labelColor={vars.color.gray60}
            valueColor={vars.color.black}
          />
          <InfoPrice
            label="배송료"
            value="0원"
            labelColor={vars.color.gray60}
            valueColor={vars.color.black}
          />
        </div>
        <PaddedRectangle95 />
        <div className={styles.sectionContainer}>
          <InfoPrice
            label="할인"
            value="-33,000원"
            labelColor={vars.color.gray60}
            valueColor={vars.color.blue100}
          />
          <InfoPrice
            label="포인트"
            value="0원"
            labelColor={vars.color.gray60}
            valueColor={vars.color.blue100}
          />
          <VectorDivider />
          <VectorDivider />
          <Rectangle97 />
          <InfoPrice
            label="총 결제 금액"
            value="35,000원"
            labelColor={vars.color.black}
            valueColor={vars.color.blue100}
          />
          <Rectangle97 />
          <Rectangle94 />
          <Rectangle97 />
        </div>
        <div className={styles.centerContainer}>
          <div className={styles.methodContainer}>
            <InfoRowTitle text="결제수단" />
          </div>
        </div>
        <VectorDivider />
        <ListCheck
          label="NOL 인터파크 페이"
          checked={selectedPayment === 'noll'}
          onChange={() => handlePaymentChange('noll')}
        />
        <Rectangle95 />
        <ListCheck
          label="다른 결제 수단"
          checked={selectedPayment === 'other'}
          onChange={() => handlePaymentChange('other')}
          onArrowClick={handleOtherMethodToggle}
        />
        {isOtherMethodOpen && (
          <>
            <div className={styles.centerContainer}>
              <MethodContainer onBankSelect={handleBankSelect} />
            </div>
            <Rectangle97 />
          </>
        )}
        {isBankOpen && (
          <>
            <div className={styles.centerContainer}>
              <BankContainer onSelect={handleBankChange} />
            </div>
            <Rectangle97 />
          </>
        )}
        {selectedBank === '농협(중앙)' && (
          <>
            <div className={styles.bankInfoContainer}>
              <div className={styles.centerContainer}>
                <BankInfoCard />
              </div>
              <BankNotice />
            </div>
            <Rectangle97 />
          </>
        )}
        <Rectangle94 />
        <Rectangle97 />
        <div className={styles.centerContainer}>
          <InfoRowTitle
            text="현금영수증"
            showCheckbox={true}
            checked={isReceiptChecked}
            onCheckboxChange={setIsReceiptChecked}
            checkboxLabel="신청"
          />
        </div>
        <Rectangle97 />
        {isReceiptChecked && (
          <>
            <div className={styles.receiptContainer}>
              <TextField
                value={receiptNumber}
                onChange={handleReceiptNumberChange}
                placeholder="휴대폰번호 또는 사업자등록번호"
                numbersOnly={true}
              />
            </div>
            <Rectangle97 />
          </>
        )}
        <div className={styles.emptyContainer}></div>
        <Rectangle94 />
        <Rectangle97 />
        <div className={styles.centerContainer}>
          <InfoRowTitle
            text="약관 동의"
            showCheckbox={true}
            checked={isAgreed}
            onCheckboxChange={setIsAgreed}
            checkboxLabel="동의"
          />
        </div>
        <ListCheck
          label="(필수) 제 3자 정보제공 동의"
          checked={isAgreed}
          onChange={() => setIsAgreed(!isAgreed)}
        />
        <ListCheck
          label="(필수) 취소 규정 동의"
          checked={isAgreed}
          onChange={() => setIsAgreed(!isAgreed)}
        />
        <div className={styles.submitButtonContainer}>
          <LargeButton onClick={handleSubmit} isActive={isAgreed}>
            결제
          </LargeButton>
        </div>
      </main>
    </>
  );
}
