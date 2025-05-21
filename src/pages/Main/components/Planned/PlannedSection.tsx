import { useQuery } from '@tanstack/react-query';
import * as styles from './PlannedSection.css';
import { sectionHeader } from '../../MainPage.css';
import { getHomeData } from '../../api/api';
import type {
  HomeResponse,
  CategoryBase,
  PlannedPerformance,
} from '../../api/types';
import Badge from '@/shared/components/Badge/Badge';
import HomeAddButton from '@/shared/components/HomeMoreButton/HomeMoreButton';
import { QUERY_KEY } from '@/shared/constants/queryKey';

function PlannedSection() {
  const { data, isLoading, isError } = useQuery<HomeResponse>({
    queryKey: [QUERY_KEY.HOME],
    queryFn: getHomeData,
  });

  const PlannedCategory = data?.find(
    (category): category is CategoryBase<PlannedPerformance> =>
      category.category === '곧 오픈하는 공연'
  );

  const performances = PlannedCategory?.getHomeResponseList ?? [];

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>데이터를 불러오지 못했어요.</div>;

  return (
    <section className={styles.sectionWrapper}>
      <header className={sectionHeader}>{PlannedCategory?.category}</header>

      <div className={styles.cardWrapper}>
        {performances.map((planned) => (
          <div className={styles.cardContainer} key={planned.id}>
            <img src={planned.imageUrl} className={styles.img} />
            <div className={styles.textWrapper}>
              <p className={styles.dateText}>{planned.openDate}</p>
              <p className={styles.titleText}>{planned.title}</p>
              <p className={styles.descriptionText}>{planned.description}</p>
              <div className={styles.tagGroup}>
                {planned.tagList.map((tag) => (
                  <Badge key={tag} type={tag} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <HomeAddButton keyword={'오픈 예정 공연'} />
    </section>
  );
}

export default PlannedSection;
