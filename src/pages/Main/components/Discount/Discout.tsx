import * as styles from './DiscountCard.css';
import DiscountCard from './DiscoutCard';
import type { CategoryBase, DiscountPerformance } from '../../api/types';
import HomeAddButton from '@/shared/components/HomeMoreButton/HomeMoreButton';
interface DiscountSectionProp {
  category: CategoryBase<DiscountPerformance>;
}

const DiscountSection = ({ category }: DiscountSectionProp) => {
  const performances = category?.getHomeResponseList ?? [];

  return (
    <div className={styles.discountSection}>
      <h1 className={styles.sectionTitle}>{category.category}</h1>
      <div className={styles.scrollArea}>
        {performances.map((discountData) => (
          <DiscountCard
            key={discountData.id}
            id={discountData.id}
            title={discountData.title}
            discountRate={discountData.discountRate}
            price={discountData.price}
            imageUrl={discountData.imageUrl}
            location={discountData.location}
            openDate={discountData.openDate}
            endDate={discountData.endDate}
            description={discountData.description}
          />
        ))}
      </div>
      <HomeAddButton keyword="할인티켓" />
    </div>
  );
};

export default DiscountSection;
