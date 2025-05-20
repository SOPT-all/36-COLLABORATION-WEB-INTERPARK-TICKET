import * as styles from './BookingInfoSection.css';
import ChangeButton from '@/shared/components/ChangeButton/ChangeButton';

export default function BookingInfoSection() {
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
          <span className={styles.value}>R석 D열 9</span>
        </div>
      </div>
    </section>
  );
}
