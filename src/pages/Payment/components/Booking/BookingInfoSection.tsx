import * as styles from './BookingInfoSection.css';
import type { SeatInfo } from '@/pages/SeatSelect/api/types';
import ChangeButton from '@/shared/components/ChangeButton/ChangeButton';

interface BookingInfoSectionProps {
  seatInfo: SeatInfo;
}

export default function BookingInfoSection({
  seatInfo,
}: BookingInfoSectionProps) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>예매 정보</h2>

      <div className={styles.infoGroup}>
        <div className={styles.row}>
          <span className={styles.label}>날짜</span>
          <span className={styles.valueWithButton}>
            <span className={styles.valueText}>
              2025년 4월 29일(화) 19시 30분
            </span>
            <ChangeButton>일시변경</ChangeButton>
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>좌석</span>
          <span className={styles.value}>
            {seatInfo.grade}석 {seatInfo.position.row}열{' '}
            {seatInfo.position.index + 1}
          </span>
        </div>
      </div>
    </section>
  );
}
