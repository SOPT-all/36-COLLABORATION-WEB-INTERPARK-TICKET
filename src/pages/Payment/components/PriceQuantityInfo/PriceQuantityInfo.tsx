import PriceQuantityCard from './PriceQuantityCard/PriceQuantityCard';
import VectorDivider from '../VectorDivider/VectorDivider';
import * as styles from './PriceQuantityInfo.css';

interface PriceQuantityInfoProps {
  quantity: number;
  onQuantityChange: (newCount: number) => void;
}

export default function PriceQuantityInfo({
  quantity,
  onQuantityChange,
}: PriceQuantityInfoProps) {
  return (
    <section className={styles.container}>
      <PriceQuantityCard
        label="일반"
        price="66,000원"
        initial={1}
        count={quantity}
        onCountChange={onQuantityChange}
      />
      <VectorDivider variant="gray20" />
    </section>
  );
}
