import * as styles from './SeatHeader.css';
import BackIcon from '@/shared/assets/icon/ic_back_white_24.svg';
interface Props {
  title: React.ReactNode;
  onBackClick?: () => void;
}

const SeatHeader = ({ title, onBackClick }: Props) => {
  return (
    <header className={styles.HeaderWrapper}>
      <button className={styles.BackBtn} onClick={onBackClick}>
        <img src={BackIcon} alt="뒤로가기" />
      </button>
      <div className={styles.HeaderTxt}>{title}</div>
    </header>
  );
};

export default SeatHeader;
