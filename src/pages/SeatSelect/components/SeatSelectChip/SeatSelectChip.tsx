import * as styles from './SeatSelectChip.css';
import type { SeatType } from '../../types/SeatData';
import SIcon from '@/shared/assets/icon/ic_S_seat.svg';
import RIcon from '@/shared/assets/icon/ic_R_seat.svg';

interface Props {
  seatType: SeatType;
  isSelected: boolean;
  onClick?: () => void;
}

const SeatSelectChip = ({ seatType, isSelected, onClick }: Props) => {
  const icon = seatType === 'S' ? SIcon : RIcon;

  return (
    <button
      type="button"
      className={styles.seatSelectChip({ isSelected })}
      onClick={onClick}
    >
      <img src={icon} alt={`${seatType}석 아이콘`} />
      <p className={styles.seatText}>{seatType}석</p>
    </button>
  );
};

export default SeatSelectChip;
