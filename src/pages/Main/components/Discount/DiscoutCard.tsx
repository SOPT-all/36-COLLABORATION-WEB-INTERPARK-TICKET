import * as styles from './DiscountCard.css';
import TimeDeal from '@/shared/components/TimeDeal/TimeDeal';
interface Props {
  id: number;
  title: string;
  discount: number;
  price: number;
  imageUrl: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

const DiscountCard = ({
  title,
  discount,
  price,
  imageUrl,
  location,
  startDate,
  endDate,
  description,
}: Props) => {
  return (
    <div className={styles.discountCard}>
      <img src={imageUrl} className={styles.cardImg} alt={title} />
      <div className={styles.cardContent}>
        <TimeDeal text="타임딜" time="17:26:38" />
        <h3 className={styles.discoutTitle}>{title}</h3>
        <p className={styles.locationtxt}>{location}</p>
        <p className={styles.dateTxt}>
          {startDate} ~ {endDate}
        </p>
        <p className={styles.descriptionTxt}>{description}</p>
        <div className={styles.priceDisplay}>
          <p className={styles.discoutNum}>{discount}%</p>

          <p className={styles.priceNum}>{price}원</p>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
