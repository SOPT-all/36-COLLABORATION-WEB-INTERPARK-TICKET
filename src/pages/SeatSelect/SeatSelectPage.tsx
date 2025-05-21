import { useState } from 'react';
import ic_wait_blue70_36 from '@assets/icon/ic_ wait_blue70_36.svg';
import { useNavigate } from 'react-router';
import SeatCard from './components/SeatCard/SeatCard';
import SeatSelectChip from './components/SeatSelectChip/SeatSelectChip';
import StageText from './components/StageText/StageText';
import * as styles from './SeatSelectPage.css';
import Popup from './components/Popup/Popup';
import SeatBottomSheet from './components/SeatBottomSheet/SeatBottomSheet';
import { useSeatData } from './api/hooks';
import type { SeatData, SeatGradeFilter, SeatPosition } from './types/SeatData';
import SeatHeader from '@/shared/components/Header/SeatHeader/SeatHeader';

const SeatSelectPage = () => {
  const navigate = useNavigate();

  const [selectedSeatType, setSelectedSeatType] =
    useState<SeatGradeFilter>(null);

  const [showPopup, setShowPopup] = useState(false);

  const [selectedSeatInfo, setSelectedSeatInfo] = useState<
    string | undefined
  >();

  const [selectedSeatPrice, setSelectedSeatPrice] = useState<
    number | undefined
  >();

  const [selectedSeat, setSelectedSeat] = useState<SeatPosition | null>(null);

  const { data: seatResponse, isLoading, isError } = useSeatData();
  if (isLoading) return <div>로딩중…</div>;
  if (isError) return <div>좌석 정보를 불러올 수 없습니다.</div>;

  const seatData: SeatData[] = seatResponse?.seats ?? [];

  const handleSelectSeat = (
    row: string,
    index: number,
    grade: SeatGradeFilter,
    price: number
  ) => {
    setSelectedSeat({ row, index });
    setSelectedSeatInfo(`${grade}석 ${row}열 ${index + 1}`);
    setSelectedSeatPrice(price);
  };

  const handleRetryClick = () => {
    setSelectedSeat(null);
    setSelectedSeatInfo(undefined);
    setSelectedSeatPrice(undefined);
    setSelectedSeatType(null);
  };

  const handleSeatTypeClick = (type: SeatGradeFilter) => {
    setSelectedSeatType((prev) => (prev === type ? null : type));
  };

  const handleWaitIconClick = () => {
    setShowPopup((prev) => !prev);
  };

  const handleBackClick = () => {
    navigate('/');
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
          selected={selectedSeat}
          onSelectSeat={handleSelectSeat}
        />

        <button className={styles.waitIcon} onClick={handleWaitIconClick}>
          <img src={ic_wait_blue70_36} alt="wait" />
        </button>

        <SeatBottomSheet
          placeInfo="예스24아트원 2관"
          dateTime="2025.07.10 (수) 19:30"
          seatInfo={selectedSeatInfo}
          price={selectedSeatPrice}
          onRetryClick={handleRetryClick}
        />

        {showPopup && <Popup onClose={handleWaitIconClick} />}
      </main>
    </div>
  );
};

export default SeatSelectPage;
