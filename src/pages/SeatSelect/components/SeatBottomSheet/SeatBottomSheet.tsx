import clsx from 'clsx';
import * as styles from './SeatBottomSheet.css';
import ChangeButton from '@/shared/components/ChangeButton/ChangeButton';
import SmallButton from '@/shared/components/SmallButton/SmallButton';

interface SeatBottomSheetProps {
  placeInfo: string;
  dateTime: string;
  seatInfo?: string;
  price?: number;
  onRetryClick: () => void;
  onNextClick: () => void;
}

const SeatBottomSheet = ({
  placeInfo,
  dateTime,
  seatInfo,
  price,
  onRetryClick,
  onNextClick,
}: SeatBottomSheetProps) => {
  const isSeatSelected = !!seatInfo;

  return (
    <div
      className={clsx(
        styles.sheetWrapper,
        isSeatSelected
          ? styles.sheetWrapperExpanded
          : styles.sheetWrapperCollapsed
      )}
    >
      <div className={styles.locationWrapper}>
        <p className={styles.locationText}>{placeInfo}</p>
      </div>
      <hr className={styles.line} />
      <div className={styles.infoWrapper}>
        <div className={styles.infoContainer}>
          <p className={styles.infoText({ state: 'default' })}>좌석</p>
          <p
            className={styles.infoText({
              state: isSeatSelected ? 'select' : 'placeholder',
            })}
          >
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

      <div className={styles.bottomArea({ open: isSeatSelected })}>
        <div className={styles.priceContainer}>
          <p className={styles.infoText({ state: 'default' })}>결제금액</p>
          {price !== undefined ? (
            <p className={styles.priceText.normal}>
              총
              <span className={styles.priceText.strong}>
                {price.toLocaleString()}
              </span>
              원
            </p>
          ) : (
            <p className={styles.priceText.normal}>가격 정보 없음</p>
          )}
        </div>
        <div className={styles.buttonGroup}>
          <SmallButton variant="retry" onClick={onRetryClick}>
            재선택
          </SmallButton>
          <SmallButton variant="next" onClick={onNextClick}>
            다음
          </SmallButton>
        </div>
      </div>
    </div>
  );
};

export default SeatBottomSheet;
