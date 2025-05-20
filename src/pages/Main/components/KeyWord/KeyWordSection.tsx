import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import * as styles from './KeyWordSection.css';
import { sectionHeader } from '../../MainPage.css';
import CategoryTab from '../CategoryTab/CategoryTab';
import { getHomeData } from '../../api/api';
import type {
  BasicPerformance,
  CategoryBase,
  HomeResponse,
} from '../../api/types';
import InfoCard from '@/shared/components/main/Perform/InfoCard';
import { QUERY_KEY } from '@/shared/constants/queryKey';

function KeyWordSection() {
  const { data, isLoading, isError } = useQuery<HomeResponse>({
    queryKey: [QUERY_KEY.HOME],
    queryFn: getHomeData,
  });

  const AboutKewordCategory = data?.find(
    (category): category is CategoryBase<BasicPerformance> =>
      category.category === '이런 키워드는 어때요?'
  );

  const keywords = AboutKewordCategory?.keywordList ?? [];
  const performances = AboutKewordCategory?.getHomeResponseList ?? [];

  const [selected, setSelected] = useState<string>('');
  useEffect(() => {
    if (keywords.length > 0 && selected === '') {
      setSelected(keywords[0]);
    }
  }, [keywords, selected]);

  const handleSelect = (keyword: string) => {
    setSelected(keyword);
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>데이터를 불러오지 못했어요.</div>;

  return (
    <section className={styles.sectionWrapper}>
      <header className={sectionHeader}>{AboutKewordCategory?.category}</header>
      <div className={styles.keywordWrapper}>
        <CategoryTab
          keywords={keywords}
          selected={selected}
          onSelect={handleSelect}
          variant="wrap"
        />
      </div>
      <div className={styles.cardWrapper}>
        {performances.map((AboutKeyword) => (
          <div key={AboutKeyword.id}>
            <InfoCard
              isrank={false}
              image={AboutKeyword.imageUrl}
              title={AboutKeyword.title}
              location={AboutKeyword.location ?? ''}
              startDate={AboutKeyword.startDate ?? ''}
              endDate={AboutKeyword.endDate ?? ''}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default KeyWordSection;
