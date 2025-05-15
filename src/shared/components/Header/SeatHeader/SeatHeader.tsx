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
    <div className={styles.HeaderWrapper}>
      <div onClick={onBackClick}>
        <img src={BackIcon} alt="뒤로가기" />
      </div>
      <div className={styles.HeaderTxt}>{title}</div>
      <div onClick={onCloseClick}>
        <img src={CloseIcon} alt="닫기" />
      </div>
    </div>
  );
};

export default SeatHeader;
