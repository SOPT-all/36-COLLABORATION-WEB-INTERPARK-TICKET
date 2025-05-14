import SeatSelectChip from '@/shared/components/SeatSelectChip/SeatSelectChip';
import { useState } from 'react';

const ComponentTest = () => {
  const [selectedSeat, setSelectedSeat] = useState<'S' | 'R' | null>(null);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          padding: '1rem',
          gap: '0.6rem',
          backgroundColor: '#3B3D44',
        }}
      >
        <SeatSelectChip
          seatType="S"
          isSelected={selectedSeat === 'S'}
          onClick={() => setSelectedSeat('S')}
        />

        <SeatSelectChip
          seatType="R"
          isSelected={selectedSeat === 'R'}
          onClick={() => setSelectedSeat('R')}
        />
      </div>
    </div>
  );
};

export default ComponentTest;
