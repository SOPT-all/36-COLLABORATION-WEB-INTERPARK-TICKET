import Seat from './Seat';
import * as styles from './SeatRow.css';
import type { SeatGrade, SeatPosition } from '../../api/types';
type Props = {
  grade: SeatGrade;
  rowLabel: string;
  availability: boolean[];
  selected: SeatPosition | null;
  onSelect: (row: string, index: number) => void;
  selectedGrade: SeatGrade | null;
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
      {availability.map((unavailable, index) => {
        const isAvailable = !unavailable;
        const isSelected =
          selected?.row === rowLabel && selected?.index === index;

        const aisle = index === 2 || index === 9;

        const isInactive = hasSelected && !isSelected;
        const isFiltered = selectedGrade !== null && selectedGrade !== grade;
        const seatGrade = isAvailable && !isFiltered ? grade : undefined;

        return (
          <div key={index} className={aisle ? styles.spacer : undefined}>
            <Seat
              grade={seatGrade}
              isInactive={isInactive}
              isSelected={isSelected}
              label={isSelected ? `${rowLabel}${index + 1}` : undefined}
              onClick={() => isAvailable && onSelect(rowLabel, index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SeatRow;
