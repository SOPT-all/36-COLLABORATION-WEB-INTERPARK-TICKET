import PriceQuantityCard from './PriceQuantityCard/PriceQuantityCard';
import VectorDivider from '../VectorDivider/VectorDivider';

export default function PriceQuantityInfo() {
  return (
    <section>
      <PriceQuantityCard label="일반" price="66,000원" initial={1} />
      <VectorDivider variant="gray20" />
    </section>
  );
}
