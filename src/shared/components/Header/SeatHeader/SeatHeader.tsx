import * as styles from './SeatHeader.css';
import BackIcon from '@/shared/assets/icon/ic_back_white_24.svg';
import CloseIcon from '@/shared/assets/icon/ic_close_white_24.svg';
interface Props {
  title: React.ReactNode;
  onBackClick?: () => void;
  onCloseClick?: () => void;
}

const SeatHeader = ({ title, onBackClick, onCloseClick }: Props) => {
  return (
    <header className={styles.HeaderWrapper}>
      <button onClick={onBackClick}>
        <img src={BackIcon} alt="뒤로가기" />
      </button>
      <div className={styles.HeaderTxt}>{title}</div>
      <button onClick={onCloseClick}>
        <img src={CloseIcon} alt="닫기" />
      </button>
    </header>
  );
};

export default SeatHeader;
