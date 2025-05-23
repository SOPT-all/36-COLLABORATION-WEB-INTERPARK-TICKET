import BookingButton from '../BookingButton/BookingButton';
import * as styles from './DateReservationCard.css';

interface SeatType {
  grade: string;
  seatCount: number;
  price: number;
}

interface DateReservationCardProps {
  performanceTime: string;
  authors: string;
  seatTypes: SeatType[] | null;
}

const DateReservationCard = ({
  performanceTime,
  authors,
  seatTypes,
}: DateReservationCardProps) => {
  if (!seatTypes) {
    return <div>공연 정보가 없습니다.</div>;
  }
  return (
    <div className={styles.reservationCardWrapper}>
      <div className={styles.contentContainer}>
        <div className={styles.performInfoContainer}>
          <span className={styles.dateText}>{performanceTime}</span>
          <span className={styles.authorsText}>{authors}</span>
        </div>
        <BookingButton type="button">예매하기</BookingButton>
      </div>

      <hr className={styles.line} />

      <div className={styles.seatInfoWrapper}>
        <p className={styles.seatHeader}>좌석정보</p>

        {seatTypes.map(({ grade, seatCount, price }) => (
          <div key={grade} className={styles.seatInfoContainer}>
            <span className={styles.gradeText}>{grade}석</span>
            <div className={styles.seatContentContainer}>
              <span className={styles.seatCountText}>{seatCount}석</span>
              <span className={styles.priceText}>
                {price.toLocaleString()}원
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateReservationCard;
