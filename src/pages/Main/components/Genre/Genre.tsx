import { useEffect, useState } from 'react';
import * as styles from './Genre.css';
import { getHomeData } from '../../api/api';
import CategoryTab from '../CategoryTab/CategoryTab';
import InfoCard from '@/shared/components/main/Perform/InfoCard';
import HomeAddButton from '@/shared/components/HomeMoreButton/HomeMoreButton';
import { QUERY_KEY } from '@/shared/constants/queryKey';
import { useQuery } from '@tanstack/react-query';
import type { CategoryBase, BasicPerformance, HomeResponse } from '../../api/types';

const GenreSection = () => {
  const { data, isLoading, isError } = useQuery<HomeResponse>({
    queryKey: [QUERY_KEY.HOME],
    queryFn: getHomeData,
  });

  const DiscountCategory = data?.find(
    (category): category is CategoryBase<BasicPerformance> =>
      category.category === '장르별 랭킹'
  );

  const keywords = DiscountCategory?.keywordList ?? [];
  const performances = DiscountCategory?.getHomeResponseList ?? [];
  
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
    <div>
      <div className={styles.genreSection}>
        <h1 className={styles.genreSectionTitle}>{DiscountCategory?.category}</h1>
        <div className={styles.padd}>
          <CategoryTab
            keywords={keywords}
            selected={selected}
            onSelect={handleSelect}
          />
          <div className={styles.scrollArea}>
            {performances.map((genre, idx) => (
              <InfoCard
                key={genre.id}
                isrank={true}
                rank={idx+1}
                image={genre.imageUrl}
                title={genre.title}
                location={genre.location ?? ''}
                startDate={genre.startDate ?? ''}
                endDate={genre.endDate ?? ''}
              />
            ))}
          </div>
        </div>

        <HomeAddButton keyword="뮤지컬 랭킹" />
      </div>
    </div>
  );
};

export default GenreSection;
