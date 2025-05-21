import * as styles from './DiscountCard.css';
import type { DiscountPerformance } from '../../api/types';
import TimeDeal from '@/shared/components/TimeDeal/TimeDeal';

const DiscountCard = ({
  title,
  discountRate,
  price,
  imageUrl,
  location,
  openDate,
  endDate,
  description,
}: DiscountPerformance) => {
  return (
    <div className={styles.discountCard}>
      <img src={imageUrl} className={styles.cardImg} alt={title} />
      <div className={styles.cardContent}>
        <TimeDeal text="타임딜" time="17:26:38" />
        <h3 className={styles.discoutTitle}>{title}</h3>
        <p className={styles.locationtxt}>{location}</p>
        <p className={styles.dateTxt}>
          {openDate} ~ {endDate}
        </p>
        <p className={styles.descriptionTxt}>{description}</p>
        <div className={styles.priceDisplay}>
          <p className={styles.discoutNum}>{discountRate}%</p>

          <p className={styles.priceNum}>{price.toLocaleString()}원</p>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
