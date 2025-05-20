import { useQuery } from '@tanstack/react-query';
import { getHomeData } from '../../api/api';
import * as styles from './DiscountCard.css';
import DiscountCard from './DiscoutCard';
import type {
  HomeResponse,
  CategoryBase,
  DiscountPerformance,
} from '../../api/types';
import { QUERY_KEY } from '@/shared/constants/queryKey';
import HomeAddButton from '@/shared/components/HomeMoreButton/HomeMoreButton';

const DiscountSection = () => {
  const { data, isLoading, isError } = useQuery<HomeResponse>({
    queryKey: [QUERY_KEY.HOME],
    queryFn: getHomeData,
  });

  const genreRankingCategory = data?.find(
    (category): category is CategoryBase<DiscountPerformance> =>
      category.category === '할인 중인 공연은 어때요?'
  );

  const performances = genreRankingCategory?.getHomeResponseList ?? [];

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>데이터를 불러오지 못했어요.</div>;

  return (
    <div className={styles.discountSection}>
      <h1 className={styles.sectionTitle}>{genreRankingCategory?.category}</h1>
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
