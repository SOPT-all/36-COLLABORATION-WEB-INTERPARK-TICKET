import BtnQuantity from './BtnQuantity/BtnQuantity';
import * as styles from './PriceQuantityCard.css';

interface PriceQuantityCardProps {
  label: string;
  price: string;
  initial?: number;
  count?: number;
  onCountChange?: (newCount: number) => void;
}

export default function PriceQuantityCard({
  label,
  price,
  initial = 0,
  count,
  onCountChange,
}: PriceQuantityCardProps) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.textWrapper}>
        <p className={styles.label}>{label}</p>
        <p className={styles.price}>{price}</p>
      </div>
      <div className={styles.buttonWrapper}>
        <BtnQuantity
          initial={initial}
          count={count}
          onCountChange={onCountChange}
        />
      </div>
    </div>
  );
}
