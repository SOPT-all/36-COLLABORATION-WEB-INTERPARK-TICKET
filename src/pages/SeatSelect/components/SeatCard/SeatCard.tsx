import { useState } from 'react';
import * as styles from './SeatCard.css';
import SeatRow from './SeatRow';
import type { SeatData } from '../../types/SeatData';

type Props = {
  seats: SeatData[];
  selectedGrade: 'S' | 'R' | null;
};

const SeatCard = ({ seats, selectedGrade }: Props) => {
  const [selected, setSelected] = useState<{
    row: string;
    index: number;
  } | null>(null);

  const handleSelect = (row: string, index: number) => {
    if (selected?.row === row && selected.index === index) {
      setSelected(null);
    } else {
      setSelected({ row, index });
    }
  };

  const rRows = ['A', 'B', 'C', 'D'];
  const sRows = ['F', 'G', 'H', 'I'];

  const renderRows = (rows: string[]) =>
    rows.map((row) => {
      const seat = seats.find((s) => s.row === row);
      if (!seat) return null;

      return (
        <SeatRow
          key={row}
          grade={seat.grade}
          rowLabel={row}
          availability={seat.availability}
          selected={selected}
          onSelect={handleSelect}
          selectedGrade={selectedGrade}
        />
      );
    });

  return (
    <div className={styles.seatCard}>
      <div className={styles.seatGroup}>{renderRows(rRows)}</div>
      <div className={styles.spacer} />
      <div className={styles.seatGroup}>{renderRows(sRows)}</div>
    </div>
  );
};

export default SeatCard;
