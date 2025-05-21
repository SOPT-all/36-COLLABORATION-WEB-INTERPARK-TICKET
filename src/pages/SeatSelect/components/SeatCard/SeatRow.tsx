import Seat from './Seat';
import * as styles from './SeatRow.css';
import type { SeatGrade } from '../../types/SeatData';
type Props = {
  grade: SeatGrade;
  rowLabel: string;
  availability: boolean[];
  selected: { row: string; index: number } | null;
  onSelect: (row: string, index: number) => void;
  selectedGrade: 'S' | 'R' | null;
};

const SeatRow = ({
  grade,
  rowLabel,
  availability,
  selected,
  onSelect,
  selectedGrade,
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
        const isFiltered = selectedGrade !== null && selectedGrade !== grade;
        const seatGrade = available && !isFiltered ? grade : undefined;

        return (
          <div key={index} className={aisle ? styles.spacer : undefined}>
            <Seat
              grade={seatGrade}
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
