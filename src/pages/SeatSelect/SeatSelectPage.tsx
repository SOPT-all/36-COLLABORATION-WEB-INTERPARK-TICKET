import { useState } from 'react';
import SeatCard from './components/SeatCard/SeatCard';
import SeatSelectChip from './components/SeatSelectChip/SeatSelectChip';
import StageText from './components/StageText/StageText';
import * as styles from './SeatSelectPage.css';
import type { SeatData } from './types/SeatData';
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
    grade: 'S',
    price: 30000,
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
  const [selectedSeatType, setSelectedSeatType] = useState<'S' | 'R'>('S');
  return (
    <div className={styles.pageWrapper}>
      <SeatHeader title="연극 이름" />
      <main className={styles.mainContent}>
        <div className={styles.seatSelectWrapper}>
          <SeatSelectChip
            seatType="S"
            isSelected={selectedSeatType === 'S'}
            onClick={() => setSelectedSeatType('S')}
          />
          <SeatSelectChip
            seatType="R"
            isSelected={selectedSeatType === 'R'}
            onClick={() => setSelectedSeatType('R')}
          />
        </div>

        <StageText />

        <SeatCard seats={seatData} />
      </main>
    </div>
  );
};

export default SeatSelectPage;
