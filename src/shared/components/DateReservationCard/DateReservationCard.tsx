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
  seatTypes: SeatType[];
}

const DateReservationCard = ({
  performanceTime,
  authors,
  seatTypes,
}: DateReservationCardProps) => {
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
            <span className={styles.gradeText}>{grade}</span>
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
