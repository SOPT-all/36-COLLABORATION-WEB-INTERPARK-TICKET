import * as styles from './BankInfoCard.css';

const BankInfoCard = () => {

  return (
    <div className={styles.bankCardWrapper}>
      <div className={styles.bankCardContainer}>
          <p className={styles.bankCardText.default}>예금주</p>
          <p className={styles.bankCardText.default}>(주)놀유니버스</p>
      </div>

      <div className={styles.hrWrapper}>
        <hr className={styles.line} />
      </div>

      <div className={styles.bankCardContainer}>
        <p className={styles.bankCardText.default}>입금기한</p>
        <p className={styles.bankCardText.withMargin}>2025-04-23 (수) 23시 59분</p>
      </div>
    </div>
  )
};

export default BankInfoCard;
