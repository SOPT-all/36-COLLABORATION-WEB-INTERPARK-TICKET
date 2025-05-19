import Seat from './Seat';
import * as styles from './SeatRow.css';
import type { SeatGrade } from '../../types/SeatData';
type Props = {
  grade: SeatGrade;
  rowLabel: string;
  availability: boolean[];
  selected: { row: string; index: number } | null;
  onSelect: (row: string, index: number) => void;
};

const SeatRow = ({
  grade,
  rowLabel,
  availability,
  selected,
  onSelect,
}: Props) => {
  const hasSelected = selected !== null;

  return (
    <div className={styles.seatRow}>
      <span className={styles.rowLabel}>{rowLabel}</span>
      {availability.map((available, index) => {
        const isSelected =
          selected?.row === rowLabel && selected?.index === index;

        const aisle = index === 2 || index === 9;

        const isInactive = hasSelected && !isSelected;

        return (
          <div className={aisle ? styles.spacer : undefined}>
            <Seat
              key={index}
              grade={available ? grade : undefined}
              isInactive={isInactive}
              isSelected={isSelected}
              label={isSelected ? `${rowLabel}${index + 1}` : undefined}
              onClick={() => available && onSelect(rowLabel, index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SeatRow;
