import { Suspense, useState } from 'react';
import React from 'react';
import ic_wait_blue70_36 from '@assets/icon/ic_ wait_blue70_36.svg';
import { useNavigate } from 'react-router';
import SeatCard from './components/SeatCard/SeatCard';
import SeatSelectChip from './components/SeatSelectChip/SeatSelectChip';
import StageText from './components/StageText/StageText';
import * as styles from './SeatSelectPage.css';
import SeatBottomSheet from './components/SeatBottomSheet/SeatBottomSheet';
import { usePatchSeatData, useSeatData } from './api/hooks';
import type { SeatData, SeatGrade, SeatInfo } from './api/types';
import SeatHeader from '@/shared/components/Header/SeatHeader/SeatHeader';
import Spinner from '@/shared/components/Spinner/Spinner';
const LazyPopup = React.lazy(() => import('./components/Popup/Popup'));

const SeatSelectPage = () => {
  const navigate = useNavigate();

  const [selectedSeatInfo, setSelectedSeatInfo] = useState<SeatInfo | null>(
    null
  );

  const [selectedSeatType, setSelectedSeatType] = useState<SeatGrade | null>(
    null
  );
  const [showPopup, setShowPopup] = useState(false);

  const { data: seatResponse } = useSeatData();
  const { mutate: patchSeat } = usePatchSeatData();

  const seatData: SeatData[] = seatResponse?.seats ?? [];

  const seatInfo = selectedSeatInfo
    ? `${selectedSeatInfo.grade}석 ${selectedSeatInfo.position.row}열 ${selectedSeatInfo.position.index + 1}`
    : undefined;
  const seatPrice = selectedSeatInfo?.price;

  const handleSelectSeat = (
    row: string,
    index: number,
    grade: SeatGrade,
    price: number
  ) => {
    setSelectedSeatInfo({
      position: { row, index },
      grade,
      price,
    });
  };

  const handleRetryClick = () => {
    setSelectedSeatInfo(null);
    setSelectedSeatType(null);
  };

  const handleSeatTypeClick = (type: SeatGrade) => {
    setSelectedSeatType((prev) => (prev === type ? null : type));
  };

  const handleWaitIconClick = () => {
    setShowPopup((prev) => !prev);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  const handleNextClick = () => {
    if (!selectedSeatInfo) return;
    patchSeat(
      {
        seats: [
          {
            grade: selectedSeatInfo.grade,
            row: selectedSeatInfo.position.row,
            number: selectedSeatInfo.position.index + 1,
          },
        ],
      },
      {
        onSuccess: () =>
          navigate('/payment/step1', {
            state: { selectedSeatInfo },
          }),
        onError: () => alert('좌석 선택에 실패했습니다.'),
      }
    );
  };

  return (
    <div className={styles.pageWrapper}>
      <SeatHeader title="연극 이름" onBackClick={handleBackClick} />
      <main className={styles.mainContent}>
        <div className={styles.seatSelectWrapper}>
          <SeatSelectChip
            seatType="R"
            isSelected={selectedSeatType === 'R'}
            onClick={() => handleSeatTypeClick('R')}
          />
          <SeatSelectChip
            seatType="S"
            isSelected={selectedSeatType === 'S'}
            onClick={() => handleSeatTypeClick('S')}
          />
        </div>

        <StageText />

        <SeatCard
          seats={seatData}
          selectedGrade={selectedSeatType}
          selected={selectedSeatInfo?.position ?? null}
          onSelectSeat={handleSelectSeat}
        />

        <button className={styles.waitIcon} onClick={handleWaitIconClick}>
          <img src={ic_wait_blue70_36} alt="wait" />
        </button>

        <SeatBottomSheet
          placeInfo="예스24아트원 2관"
          dateTime="2025.07.10 (수) 19:30"
          seatInfo={seatInfo}
          price={seatPrice}
          onRetryClick={handleRetryClick}
          onNextClick={handleNextClick}
        />

        {showPopup && (
          <Suspense fallback={<Spinner />}>
            <LazyPopup onClose={handleWaitIconClick} />
          </Suspense>
        )}
      </main>
    </div>
  );
};

export default SeatSelectPage;
