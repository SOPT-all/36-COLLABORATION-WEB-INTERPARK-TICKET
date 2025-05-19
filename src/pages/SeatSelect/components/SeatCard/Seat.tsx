import * as styles from './Seat.css';
import type { SeatGrade } from '../../types/SeatData';

type Props = {
  grade?: SeatGrade;
  isSelected?: boolean;
  isInactive?: boolean;
  label?: string;
  onClick?: () => void;
};

const Seat = ({
  grade,
  isSelected = false,
  isInactive = false,
  label,
  onClick,
}: Props) => {
  return (
    <div
      className={styles.seatVariant({ grade, isSelected, isInactive })}
      role="button"
      aria-disabled={isInactive}
      aria-label={isSelected && label ? `선택된 좌석 ${label}` : `좌석`}
      onClick={isInactive ? undefined : onClick}
    >
      {isSelected && label}
    </div>
  );
};

export default Seat;
