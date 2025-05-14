import ChangeButton from '../ChangeButton/ChangeButton';
import SmallButton from '../SmallButton/SmallButton';
import * as styles from './SeatBottomSheet.css';

interface SeatBottomSheetProps {
  placeInfo: string;
  dateTime: string;
  seatInfo?: string;
  price?: number;
}

const SeatBottomSheet = ({
  placeInfo,
  dateTime,
  seatInfo,
  price,
}: SeatBottomSheetProps) => {
  const isSeatSelected = !!seatInfo;

  return (
    <div className={styles.sheetWrapper}>
      <div className={styles.locationtWrapper}>
        <p className={styles.locationText}>{placeInfo}</p>
      </div>

      <hr className={styles.line} />

      <div className={styles.infoWrapper}>
        <div className={styles.infoContainer}>
          <p className={styles.infoText({ state: 'default' })}>좌석</p>
          <p className={styles.infoText({ state: isSeatSelected ? 'select' : 'placeholder' })}>
            {seatInfo ? seatInfo : '좌석을 선택해주세요'}
          </p>
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.infoText({ state: 'default' })}>일시</p>
          <div className={styles.dateContainer}>
              <p className={styles.infoText({ state: 'select' })}>{dateTime}</p>
            <ChangeButton type="button">일시변경</ChangeButton>
          </div>
        </div>
      </div>
      
      {isSeatSelected && (
        <div className={styles.bottomArea}>
          <div className={styles.priceContainer}>
            <p className={styles.infoText({ state: 'default' })}>결제금액</p>
            <p className={styles.priceText}>
              총 <strong>{price?.toLocaleString()}</strong>원
            </p>
          </div>
          <div className={styles.buttonGroup}>
            <SmallButton variant="retry">재선택</SmallButton>
            <SmallButton variant="next">다음</SmallButton>
          </div>
        </div>
      )}
    </div>
  )
};

export default SeatBottomSheet;
