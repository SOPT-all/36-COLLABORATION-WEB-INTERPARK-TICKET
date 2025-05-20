import { useState } from 'react';
import ic_wait_blue70_36 from '@assets/icon/ic_ wait_blue70_36.svg';
import SeatCard from './components/SeatCard/SeatCard';
import SeatSelectChip from './components/SeatSelectChip/SeatSelectChip';
import StageText from './components/StageText/StageText';
import * as styles from './SeatSelectPage.css';
import Popup from './components/Popup/Popup';
import SeatBottomSheet from './components/SeatBottomSheet/SeatBottomSheet';
import type { SeatData, SeatGradeFilter, SeatPosition } from './types/SeatData';
import SeatHeader from '@/shared/components/Header/SeatHeader/SeatHeader';

const seatData: SeatData[] = [
  {
    grade: 'R',
    price: 48000,
    row: 'A',
    availability: [
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      true,
    ],
  },
  {
    grade: 'R',
    price: 48000,
    row: 'B',
    availability: [
      true,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      true,
      true,
      false,
      false,
      true,
    ],
  },
  {
    grade: 'R',
    price: 48000,
    row: 'C',
    availability: [
      false,
      false,
      false,
      true,
      true,
      true,
      false,
      false,
      false,
      true,
      true,
      false,
      false,
    ],
  },
  {
    grade: 'R',
    price: 48000,
    row: 'D',
    availability: [
      true,
      false,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      false,
    ],
  },
  {
    grade: 'S',
    price: 30000,
    row: 'F',
    availability: [
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
    ],
  },
  {
    grade: 'S',
    price: 30000,
    row: 'G',
    availability: [
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
    ],
  },
  {
    grade: 'S',
    price: 30000,
    row: 'H',
    availability: [
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
    ],
  },
  {
    grade: 'S',
    price: 30000,
    row: 'I',
    availability: [
      true,
      true,
      false,
      false,
      true,
      true,
      false,
      false,
      true,
      true,
      false,
      false,
      true,
    ],
  },
];

const SeatSelectPage = () => {
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

  return (
    <div className={styles.pageWrapper}>
      <SeatHeader title="연극 이름" />
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
