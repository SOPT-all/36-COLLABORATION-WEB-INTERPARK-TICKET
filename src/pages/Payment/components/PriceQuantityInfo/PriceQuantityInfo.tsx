import PriceQuantityCard from './PriceQuantityCard/PriceQuantityCard';
import VectorDivider from '../VectorDivider/VectorDivider';
import * as styles from './PriceQuantityInfo.css';

export default function PriceQuantityInfo() {
  return (
    <section className={styles.container}>
      <PriceQuantityCard label="일반" price="66,000원" initial={1} />
      <VectorDivider variant="gray20" />
    </section>
  );
}
