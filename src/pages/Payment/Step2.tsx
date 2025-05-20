import { useState } from 'react';
import { useNavigate } from 'react-router';
import * as styles from './Payment.css';
import InfoRowTitle from './components/InfoRowTitle/InfoRowTitle';
import ListPoint from './components/Dropdown/ListPoint/ListPoint';
import VectorDivider from './components/VectorDivider/VectorDivider';
import CouponCard from './components/CouponCard/CouponCard';
import CustomCheckbox from './components/CustomCheckbox/CustomCheckbox';
import {
  Rectangle94,
  Rectangle95,
  Rectangle96,
  Rectangle97,
  PaddedRectangle95,
} from '@/shared/components/Rectangle/Rectangle';
import LargeButton from '@/shared/components/LargeButton/LargeButton';
import PayHeader from '@/shared/components/Header/PayHeader/PayHeader';

export default function PaymentStep2() {
  const navigate = useNavigate();
  const [isAgreed, setIsAgreed] = useState(false);

  const handleBack = () => {
    navigate('/payment/step1');
  };

  const handleClose = () => {
    navigate('/');
  };

  const handleSubmit = () => {
    window.scrollTo(0, 0);
    navigate('/payment/step3');
  };

  return (
    <>
      <PayHeader step={2} onBackClick={handleBack} onCloseClick={handleClose} />
      <main className={styles.mainContent}>
        <Rectangle96 />
        <Rectangle95 />
        <Rectangle97 />
        <div className={styles.sectionContainer}>
          <InfoRowTitle
            text="포인트"
            subText="한 종류의 포인트만 사용 가능합니다."
          />
          <VectorDivider />
          <ListPoint pointTitle="i포인트" pointValue="0" />
          <PaddedRectangle95 />
          <ListPoint pointTitle="NOL 포인트" pointValue="0" />
          <PaddedRectangle95 />
          <ListPoint pointTitle="청년문화예술패스 사용" pointValue="0" />
        </div>

        <Rectangle94 />
        <Rectangle97 />
        <div className={styles.sectionContainer}>
          <InfoRowTitle text="예매권" />
          <VectorDivider />
          <ListPoint pointTitle="예매권 사용" pointValue="0" />
        </div>
        <Rectangle97 />

        <Rectangle94 />
        <Rectangle97 />

        <CouponCard />
        <div className={styles.checkboxContainer}>
          <CustomCheckbox
            checked={isAgreed}
            onChange={(checked) => setIsAgreed(checked)}
            label="해당사항 없습니다"
          />
        </div>

        <div className={styles.buttonContainer}>
          <LargeButton onClick={handleSubmit} isActive={isAgreed}>
            다음
          </LargeButton>
        </div>
      </main>
    </>
  );
}
