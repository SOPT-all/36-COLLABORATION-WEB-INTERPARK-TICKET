import { useState, useEffect } from 'react';
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
import { createPayment } from '@/pages/Payment/constants/payment';
import { usePaymentStore } from '@/pages/Payment/store/paymentStore';

export default function PaymentStep3() {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState<'noll' | 'other'>('noll');
  const [isOtherMethodOpen, setIsOtherMethodOpen] = useState(false);
  const [isBankOpen, setIsBankOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState<string>('');
  const [receiptNumber, setReceiptNumber] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [isReceiptChecked, setIsReceiptChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    ticketCount,
    totalPrice,
    deliveryMethod,
    userInfo,
    paymentMethod,
    discountAmount,
    pointAmount,
    setPaymentMethod,
  } = usePaymentStore();

  useEffect(() => {
    // 필수 데이터가 없는 경우 이전 단계로 이동
    if (!userInfo || !deliveryMethod || ticketCount === 0) {
      navigate('/payment/step2');
    }
  }, [userInfo, deliveryMethod, ticketCount, navigate]);

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
      setPaymentMethod(''); // 다른 결제 수단 선택 시 초기화
    } else {
      setIsOtherMethodOpen(false);
      setIsBankOpen(false);
      setPaymentMethod(''); // NOL 인터파크 페이 선택 시 결제 수단 초기화
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
    setPaymentMethod(bank); // 다른 결제 수단에서 은행 선택 시에만 결제 수단 설정
  };

  const handleReceiptNumberChange = (value: string) => {
    const numbersOnly = value.replace(/[^0-9]/g, '');
    setReceiptNumber(numbersOnly);
  };

  const handleSubmit = async () => {
    if (!isAgreed || !userInfo || !paymentMethod) return;
    
    try {
      setIsSubmitting(true);
      setError(null);

      const paymentData = {
        ticketCount,
        totalPrice: finalPrice,
        deliveryMethod,
        userInfo,
        paymentMethod
      };

      const response = await createPayment(paymentData);
      console.log('결제 응답:', response);
    } catch (err) {
      setError(err instanceof Error ? err.message : '결제 처리 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString() + '원';
  };

  // 최종 결제 금액 계산
  const finalPrice = totalPrice - discountAmount - pointAmount;

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
            value={formatPrice(totalPrice)}
            labelColor={vars.color.gray60}
            valueColor={vars.color.black}
          />
          <InfoPrice
            label="예매 수수료"
            value="2,000원"
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
            value={formatPrice(-discountAmount)}
            labelColor={vars.color.gray60}
            valueColor={vars.color.blue100}
          />
          <InfoPrice
            label="포인트"
            value={formatPrice(-pointAmount)}
            labelColor={vars.color.gray60}
            valueColor={vars.color.blue100}
          />
          <VectorDivider />
          <VectorDivider />
          <Rectangle97 />
          <InfoPrice
            label="총 결제 금액"
            value={formatPrice(finalPrice)}
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
          <InfoRowTitle text="현금영수증" />
        </div>
        <VectorDivider />
        <ListCheck
          label="현금영수증 신청"
          checked={isReceiptChecked}
          onChange={() => setIsReceiptChecked((prev) => !prev)}
        />
        {isReceiptChecked && (
          <>
            <Rectangle97 />
            <div className={styles.centerContainer}>
              <TextField
                value={receiptNumber}
                onChange={handleReceiptNumberChange}
                placeholder="현금영수증 번호를 입력해주세요"
              />
            </div>
          </>
        )}
        <Rectangle94 />
        <Rectangle97 />
        <div className={styles.centerContainer}>
          <InfoRowTitle text="약관동의" />
        </div>
        <VectorDivider />
        <ListCheck
          label="결제 진행에 동의합니다"
          checked={isAgreed}
          onChange={() => setIsAgreed((prev) => !prev)}
        />
        <ListCheck
          label="(필수) 취소 규정 동의"
          checked={isAgreed}
          onChange={() => setIsAgreed(!isAgreed)}
        />
        <div className={styles.submitButtonContainer}>
          {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
          <LargeButton 
            onClick={handleSubmit} 
            isActive={isAgreed && !isSubmitting}
            disabled={isSubmitting}
          >
            {isSubmitting ? '처리 중...' : '결제'}
          </LargeButton>
        </div>
        {error && (
          <div className={styles.errorMessage}>
            {error}
          </div>
        )}
      </main>
    </>
  );
}
