import { useState } from 'react';
import * as styles from './Popup.css';
import PopIcon from '@/shared/assets/icon/ic_ wait_blue70_36.svg';

const PopUp = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClosePopup = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className={styles.PopArea}>
        <div className={styles.PopContents}>
          <div>
            <img src={PopIcon} alt="팝업_아이콘" />
          </div>
          <p className={styles.PopTitle}>
            원하는 좌석이 없다면?
            <br />
            예매대기 서비스를 이용해봐요!
          </p>
          <p className={styles.PopTxt}>
            희망 좌석을 선택하면
            <br />
            해당 좌석 예매 취소 시,
            <br />
            예매 기회를 제공하는 서비스입니다.
          </p>
          <button className={styles.PopBtn} onClick={handleClosePopup}>
            확인
          </button>
        </div>
      </div>
    )
  );
};

export default PopUp;
