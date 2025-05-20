import * as styles from './BankNotice.css';

export default function BankNotice() {
  return (
    <div className={styles.noticeContainer}>
      <div className={styles.noticeItem}>
        은행에 따라 23시 30분 이후 온라인 입금이 제한될 수 있습니다.
      </div>
      <div className={styles.noticeItem}>
        ATM기기로는 가상계좌입금이 불가할 수 있습니다.
      </div>
    </div>
  );
} 