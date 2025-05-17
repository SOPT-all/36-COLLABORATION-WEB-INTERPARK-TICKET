import BtnQuantity from './BtnQuantity/BtnQuantity';
import * as styles from './PriceQuantityCard.css';

interface PriceQuantityCardProps {
  label: string;
  price: string;
  initial?: number;
}

export default function PriceQuantityCard({
  label,
  price,
  initial = 0,
}: PriceQuantityCardProps) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.textWrapper}>
        <p className={styles.label}>{label}</p>
        <p className={styles.price}>{price}</p>
      </div>
      <BtnQuantity initial={initial} />
    </div>
  );
}
