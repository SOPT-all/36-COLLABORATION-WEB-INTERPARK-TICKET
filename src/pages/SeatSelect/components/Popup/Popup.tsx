import { useState } from 'react';
import PopIcon from '@assets/icon/ic_wait_blue70_56.svg';
import clsx from 'clsx';
import * as styles from './Popup.css';

const PopUp = ({ onClose }: { onClose: () => void }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className={styles.popArea}>
      <div
        className={clsx(
          styles.popContents,
          styles.popupAnimation[isOpen ? 'open' : 'close']
        )}
      >
        <div className={styles.popIcon}>
          <img src={PopIcon} alt="팝업_아이콘" />
        </div>

        <p className={styles.popTitle}>
          <span>원하는 좌석이 없다면?</span>
          <span>예매대기 서비스를 이용해봐요!</span>
        </p>

        <p className={styles.popTxt}>
          <span>희망 좌석을 선택하면</span>
          <span>해당 좌석 예매 취소 시,</span>
          <span>예매 기회를 제공하는 서비스입니다.</span>
        </p>

        <button className={styles.popBtn} onClick={handleClose}>
          확인
        </button>
      </div>
    </div>
  );
};

export default PopUp;
