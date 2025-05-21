import * as styles from './SeatCard.css';
import SeatRow from './SeatRow';
import type { SeatData } from '../../types/SeatData';

type Props = {
  seats: SeatData[];
  selectedGrade: 'S' | 'R' | null;
  selected: { row: string; index: number } | null;
  onSelectSeat: (
    row: string,
    index: number,
    grade: 'S' | 'R',
    price: number
  ) => void;
};

const SeatCard = ({ seats, selectedGrade, selected, onSelectSeat }: Props) => {
  const rRows = ['A', 'B', 'C', 'D'];
  const sRows = ['F', 'G', 'H', 'I'];

  const renderRows = (rows: string[]) =>
    rows.map((row) => {
      const seat = seats.find((s) => s.row === row);
      if (!seat) return null;

      const handleSelect = (r: string, idx: number) => {
        onSelectSeat(r, idx, seat.grade, seat.price);
      };

      return (
        <SeatRow
          key={`${row}-${seat.grade}`}
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
